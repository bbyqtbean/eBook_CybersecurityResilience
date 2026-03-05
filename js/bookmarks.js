/* ============================================
   Bookmarks Module
   Uses localStorage — no database
   ============================================ */

const BookmarkManager = {
    STORAGE_KEY: 'deepdive_bookmarks',

    getAll() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    },

    save(bookmarks) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookmarks));
    },

    add(bookmark) {
        const bookmarks = this.getAll();
        bookmark.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        bookmark.timestamp = new Date().toISOString();
        bookmarks.push(bookmark);
        this.save(bookmarks);
        this.updateUI();
        return bookmark;
    },

    remove(id) {
        const bookmarks = this.getAll().filter(b => b.id !== id);
        this.save(bookmarks);
        this.updateUI();
    },

    updateUI() {
        const bookmarks = this.getAll();
        const count = document.getElementById('bookmark-count');
        const list = document.getElementById('bookmark-list');
        const reflectionList = document.getElementById('reflection-bookmarks');

        // Update count
        if (count) count.textContent = bookmarks.length;

        // Update drawer
        if (list) {
            if (bookmarks.length === 0) {
                list.innerHTML = '<p class="empty-state">No bookmarks yet. Click or tap anywhere to add one.</p>';
            } else {
                list.innerHTML = bookmarks.map(b => `
          <div class="bookmark-item" data-bookmark-id="${b.id}" data-slide="${b.slideNum}">
            <div class="bookmark-item-header">
              <span class="bookmark-item-section">⭐ ${b.zoneLabel || 'Unknown'}</span>
              <button class="bookmark-item-delete" data-delete-id="${b.id}" title="Remove bookmark">&times;</button>
            </div>
            ${b.note ? `<p class="bookmark-item-note">${escapeHtml(b.note)}</p>` : '<p class="bookmark-item-note" style="color:var(--white-40);font-style:italic">No note</p>'}
            <div class="bookmark-item-slide">Slide ${b.slideNum} · ${formatTimestamp(b.timestamp)}</div>
          </div>
        `).join('');
            }
        }

        // Update reflection section
        if (reflectionList) {
            if (bookmarks.length === 0) {
                reflectionList.innerHTML = '<p class="empty-state">No bookmarks recorded. Scroll back up to revisit sections and add bookmarks.</p>';
            } else {
                reflectionList.innerHTML = bookmarks.map(b => `
          <div class="reflection-bookmark-item">
            <div class="section-label">⭐ ${b.zoneLabel || 'Unknown'} — Slide ${b.slideNum}</div>
            ${b.note ? `<div class="note-text">${escapeHtml(b.note)}</div>` : '<div class="note-text" style="color:var(--white-40);font-style:italic">No note</div>'}
          </div>
        `).join('');
            }
        }

        // Render stars on the page
        this.renderPageStars();
    },

    renderPageStars() {
        // Remove existing page stars
        document.querySelectorAll('.page-star').forEach(s => s.remove());

        const bookmarks = this.getAll();
        bookmarks.forEach(b => {
            const card = document.getElementById(`slide-${b.slideNum}`);
            if (!card) return;

            const star = document.createElement('span');
            star.className = 'page-star';
            star.textContent = '⭐';
            star.title = b.note || 'Bookmark';
            star.style.top = (b.relativeY || 10) + '%';
            star.style.left = (b.relativeX || 95) + '%';
            star.dataset.bookmarkId = b.id;
            card.style.position = 'relative';
            card.appendChild(star);
        });
    },

    init() {
        this.updateUI();
    }
};

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function formatTimestamp(iso) {
    try {
        const d = new Date(iso);
        return d.toLocaleDateString('en-SG', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    } catch {
        return '';
    }
}
