/* ============================================
   Highlights & Questions Module
   Learners select text → add a question
   Questions are sent to trainers on completion
   ============================================ */

const HighlightManager = {
    STORAGE_KEY: 'deepdive_highlights',

    getAll() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    },

    save(highlights) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(highlights));
    },

    add(highlight) {
        const highlights = this.getAll();
        highlight.id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        highlight.timestamp = new Date().toISOString();
        highlights.push(highlight);
        this.save(highlights);
        this.renderHighlights();
        return highlight;
    },

    remove(id) {
        const highlights = this.getAll().filter(h => h.id !== id);
        this.save(highlights);
        this.renderHighlights();
    },

    renderHighlights() {
        // Remove existing highlight indicators
        document.querySelectorAll('.highlight-indicator').forEach(el => el.remove());

        const highlights = this.getAll();
        highlights.forEach(h => {
            const card = document.getElementById(`slide-${h.slideNum}`);
            if (!card) return;

            const indicator = document.createElement('div');
            indicator.className = 'highlight-indicator';
            indicator.dataset.highlightId = h.id;
            indicator.innerHTML = `
        <div class="highlight-badge">💬</div>
        <div class="highlight-preview">
          <span class="highlight-text">"${escapeHtml(h.selectedText.substring(0, 60))}${h.selectedText.length > 60 ? '...' : ''}"</span>
          <span class="highlight-question">${escapeHtml(h.question)}</span>
        </div>
        <button class="highlight-delete" data-delete-highlight="${h.id}" title="Remove question">🗑️</button>
      `;
            card.style.position = 'relative';
            card.querySelector('.card-inner').appendChild(indicator);
        });
    },

    // Format all questions for submission to Google Form
    formatForSubmission() {
        const highlights = this.getAll();
        if (highlights.length === 0) return '';

        return highlights.map(h => {
            const zone = getZoneLabelForSlide(h.slideNum);
            return `[${zone} — Slide ${h.slideNum}]\nHighlighted: "${h.selectedText}"\nQuestion: ${h.question}`;
        }).join('\n\n---\n\n');
    },

    getCount() {
        return this.getAll().length;
    },

    init() {
        this.renderHighlights();
    }
};

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}
