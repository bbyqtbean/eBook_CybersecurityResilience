/* ============================================
   Main App — Deep Dive
   ============================================ */

(function () {
    'use strict';

    // --- Google Form Config ---
    const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScYeD-ogN23Bv2nMqwuGHftnPEfFtYsI6yAAGanAkwwxoSDjw/formResponse';
    // Learner Questions field — update this ID once you get the pre-filled link
    const QUESTIONS_FIELD_ID = 'entry.664812276';

    // --- Init ---
    document.addEventListener('DOMContentLoaded', () => {
        BookmarkManager.init();
        HighlightManager.init();
        initBubbles();
        initScrollObservers();
        initBookmarkInteractions();
        initDrawer();
        initSurfaceButton();
        initCompletionButton();
        initTextSelection();
        initQuestionPopup();
        initQuestionButton();
        initSectionMenu();
        updateQuestionCount();
        initDiveChooser();

        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js').catch(() => { });
        }
    });

    // --- Dive Style Chooser ---
    function initDiveChooser() {
        const listenBtn = document.getElementById('dive-option-listen');
        const readBtn = document.getElementById('dive-option-read');
        const chooserCard = document.querySelector('.dive-chooser-card');
        if (!listenBtn || !readBtn || !chooserCard) return;

        listenBtn.addEventListener('click', () => {
            listenBtn.classList.add('selected');
            // Scroll to content (podcast integration to be added later)
            const firstSlide = document.getElementById('slide-1');
            if (firstSlide) {
                firstSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Fade out the chooser after a beat
            setTimeout(() => {
                chooserCard.style.transition = 'opacity 0.5s, transform 0.5s';
                chooserCard.style.opacity = '0';
                chooserCard.style.transform = 'translateY(-10px)';
                setTimeout(() => { chooserCard.style.display = 'none'; }, 500);
            }, 400);
        });

        readBtn.addEventListener('click', () => {
            readBtn.classList.add('selected');
            // Scroll past to the onboarding card
            const onboarding = document.querySelector('.onboarding-card');
            if (onboarding) {
                onboarding.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // --- Depth-Aware Particles ---
    function initBubbles() {
        const container = document.getElementById('bubbles-container');
        if (!container) return;

        // Depth zone config for particles
        const PARTICLE_ZONES = {
            surface: { type: 'bubble', sizeMin: 6, sizeMax: 14, speed: [4, 8], direction: 'up', brightness: 0.4 },
            shallows: { type: 'bubble', sizeMin: 5, sizeMax: 12, speed: [6, 10], direction: 'up', brightness: 0.3 },
            reef: { type: 'bubble', sizeMin: 3, sizeMax: 8, speed: [8, 14], direction: 'drift', brightness: 0.15 },
            twilight: { type: 'snow', sizeMin: 2, sizeMax: 5, speed: [12, 20], direction: 'down', brightness: 0.1 },
            abyss: { type: 'snow', sizeMin: 2, sizeMax: 5, speed: [15, 25], direction: 'down', brightness: 0.08 },
            seabed: { type: 'snow', sizeMin: 2, sizeMax: 4, speed: [18, 30], direction: 'down', brightness: 0.06 }
        };

        function getCurrentZone() {
            const scrollY = window.scrollY + window.innerHeight / 2;
            const zones = document.querySelectorAll('.depth-zone');
            let current = 'surface';
            zones.forEach(z => {
                if (scrollY >= z.offsetTop) current = z.dataset.zone;
            });
            return current;
        }

        const MAX_PARTICLES = 8;

        function createParticle() {
            // Cap particle count across all zones
            if (container.children.length >= MAX_PARTICLES) return;

            const zone = getCurrentZone();
            const config = PARTICLE_ZONES[zone] || PARTICLE_ZONES.surface;
            const particle = document.createElement('div');
            const size = Math.random() * (config.sizeMax - config.sizeMin) + config.sizeMin;

            if (config.type === 'snow') {
                particle.className = 'marine-snow';
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = '-5px';
                const duration = Math.random() * (config.speed[1] - config.speed[0]) + config.speed[0];
                particle.style.animationDuration = duration + 's';
                particle.style.animationDelay = (Math.random() * 3) + 's';
            } else {
                particle.className = 'bubble';
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                const duration = Math.random() * (config.speed[1] - config.speed[0]) + config.speed[0];
                particle.style.animationDuration = duration + 's';
                particle.style.animationDelay = (Math.random() * 3) + 's';
            }

            container.appendChild(particle);
            particle.addEventListener('animationend', () => particle.remove());
        }

        // Initial burst (up to cap)
        for (let i = 0; i < MAX_PARTICLES; i++) {
            setTimeout(createParticle, i * 300);
        }
        setInterval(createParticle, 800);
    }

    // --- Scroll Observers ---
    function initScrollObservers() {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    const slideNum = parseInt(entry.target.dataset.slide);
                }
            });
        }, { threshold: [0.2, 0.5] });

        document.querySelectorAll('.content-card').forEach(card => {
            cardObserver.observe(card);
        });

        const zoneObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateDepthGauge(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.depth-zone').forEach(zone => {
            zoneObserver.observe(zone);
        });

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    updateSurfaceButton();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // --- Hierarchy Role Scroll-Reveal ---
        const roleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('.ocean-role').forEach(role => {
            roleObserver.observe(role);
        });
    }

    // --- Depth Gauge ---
    const DEPTH_MAP = {
        surface: { depth: 0, label: '0m', title: 'Introduction', progress: 0 },
        shallows: { depth: 10, label: '10m', title: 'Preventable Threats', progress: 0.17 },
        reef: { depth: 30, label: '30m', title: 'Largely Preventable', progress: 0.33 },
        twilight: { depth: 60, label: '60m', title: 'Difficult to Prevent', progress: 0.5 },
        abyss: { depth: 100, label: '100m', title: 'Mindset Shifts', progress: 0.75 },
        seabed: { depth: 999, label: '🏆', title: 'Complete', progress: 1 }
    };

    function updateDepthGauge(zoneEl) {
        const zone = zoneEl.dataset.zone;
        const info = DEPTH_MAP[zone];
        if (!info) return;
        const depthDisplay = document.getElementById('depth-display');
        const gaugeFill = document.getElementById('gauge-fill');
        const gaugeDiver = document.getElementById('gauge-diver');
        if (depthDisplay) {
            const titleSuffix = info.title ? ` (${info.title})` : '';
            depthDisplay.textContent = info.label + titleSuffix;
        }
        if (gaugeFill) gaugeFill.style.height = (info.progress * 100) + '%';
        if (gaugeDiver) gaugeDiver.style.top = (info.progress * 100) + '%';

        // Highlight active section in menu
        const menu = document.getElementById('section-menu');
        if (menu) {
            menu.querySelectorAll('a').forEach(a => {
                a.classList.toggle('active', a.dataset.zone === zone);
            });
        }
    }

    // --- Bookmark Interactions ---
    function initBookmarkInteractions() {
        const popup = document.getElementById('bookmark-popup');
        const noteInput = document.getElementById('bookmark-note');
        const saveBtn = document.getElementById('bookmark-save');
        const cancelBtn = document.getElementById('bookmark-cancel');
        let pendingBookmark = null;

        document.getElementById('main-content').addEventListener('click', (e) => {
            if (e.target.closest('button, a, input, textarea, .sharepoint-card, .bookmark-popup, .play-btn, .page-star, .highlight-indicator, .highlight-delete, .selection-toolbar')) return;

            // Don't trigger bookmark if there's a text selection (that's for questions)
            const sel = window.getSelection();
            if (sel && sel.toString().trim().length > 0) return;

            const card = e.target.closest('.content-card');
            if (!card) return;

            const slideNum = parseInt(card.dataset.slide);
            if (!slideNum) return;

            const rect = card.getBoundingClientRect();
            const relativeX = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
            const relativeY = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
            const cardTitle = card.querySelector('h2')?.textContent || `Slide ${slideNum}`;

            pendingBookmark = {
                slideNum,
                relativeX: parseFloat(relativeX),
                relativeY: parseFloat(relativeY),
                zoneLabel: getZoneLabelForSlide(slideNum),
                cardTitle
            };

            popup.classList.add('visible');
            noteInput.value = '';
            noteInput.focus();
        });

        saveBtn.addEventListener('click', () => {
            if (!pendingBookmark) return;
            pendingBookmark.note = noteInput.value.trim();
            BookmarkManager.add(pendingBookmark);
            popup.classList.remove('visible');
            pendingBookmark = null;
            showBubbleBurst();
        });

        cancelBtn.addEventListener('click', () => {
            popup.classList.remove('visible');
            pendingBookmark = null;
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('visible')) {
                popup.classList.remove('visible');
                pendingBookmark = null;
            }
        });

        document.getElementById('bookmark-list').addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.bookmark-item-delete');
            if (deleteBtn) {
                BookmarkManager.remove(deleteBtn.dataset.deleteId);
                return;
            }
            const item = e.target.closest('.bookmark-item');
            if (item) {
                const slideNum = item.dataset.slide;
                const target = document.getElementById(`slide-${slideNum}`);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    closeDrawer();
                }
            }
        });
    }

    // --- Text Selection → Question Toolbar ---
    function initTextSelection() {
        const toolbar = document.getElementById('selection-toolbar');
        let selectedText = '';
        let selectedSlideNum = null;

        // Show toolbar near selected text
        function handleTextSelection() {
            setTimeout(() => {
                const sel = window.getSelection();
                const text = sel?.toString().trim();

                if (!text || text.length < 3) {
                    toolbar.classList.remove('visible');
                    return;
                }

                // Check selection is inside content area
                const anchor = sel.anchorNode?.parentElement;
                const card = anchor?.closest('.content-card');
                if (!card) {
                    toolbar.classList.remove('visible');
                    return;
                }

                selectedText = text;
                selectedSlideNum = parseInt(card.dataset.slide);

                // Position toolbar near selection
                const range = sel.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                toolbar.style.top = Math.max(10, rect.top - 50) + 'px';
                toolbar.style.left = Math.min(
                    window.innerWidth - 200,
                    Math.max(10, rect.left + rect.width / 2 - 80)
                ) + 'px';
                toolbar.classList.add('visible');
            }, 10);
        }

        document.addEventListener('mouseup', (e) => {
            if (e.target.closest('.bookmark-popup, .question-popup, .selection-toolbar')) return;
            handleTextSelection();
        });

        // Mobile touch support — selectionchange fires when text is selected via long-press
        let selectionTimer = null;
        document.addEventListener('selectionchange', () => {
            clearTimeout(selectionTimer);
            selectionTimer = setTimeout(handleTextSelection, 300);
        });

        // Hide toolbar on scroll or click/tap elsewhere
        document.addEventListener('mousedown', (e) => {
            if (!e.target.closest('.selection-toolbar')) {
                toolbar.classList.remove('visible');
            }
        });
        document.addEventListener('touchstart', (e) => {
            if (!e.target.closest('.selection-toolbar')) {
                toolbar.classList.remove('visible');
            }
        }, { passive: true });

        // "Ask a Question" button click
        document.getElementById('selection-add-question').addEventListener('click', () => {
            toolbar.classList.remove('visible');
            openQuestionPopup(selectedText, selectedSlideNum);
            window.getSelection().removeAllRanges();
        });
    }

    // --- Question Popup ---
    function initQuestionPopup() {
        const popup = document.getElementById('question-popup');
        const input = document.getElementById('question-input');
        const charCount = document.getElementById('question-char-count');
        const saveBtn = document.getElementById('question-save');
        const cancelBtn = document.getElementById('question-cancel');

        input.addEventListener('input', () => {
            const len = input.value.length;
            charCount.textContent = `${len} / 1000`;
            charCount.classList.toggle('warning', len > 900);
        });

        saveBtn.addEventListener('click', () => {
            const question = input.value.trim();
            if (!question) return;

            HighlightManager.add({
                selectedText: popup.dataset.selectedText,
                slideNum: parseInt(popup.dataset.slideNum),
                question,
                zoneLabel: getZoneLabelForSlide(parseInt(popup.dataset.slideNum))
            });

            popup.classList.remove('visible');
            input.value = '';
            charCount.textContent = '0 / 1000';
            updateQuestionsUI();
        });

        cancelBtn.addEventListener('click', () => {
            popup.classList.remove('visible');
            input.value = '';
            charCount.textContent = '0 / 1000';
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('visible')) {
                popup.classList.remove('visible');
                input.value = '';
            }
        });

        // Delete highlight inline
        document.addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.highlight-delete');
            if (deleteBtn) {
                HighlightManager.remove(deleteBtn.dataset.deleteHighlight);
                updateQuestionsUI();
            }
        });
    }

    function openQuestionPopup(text, slideNum) {
        const popup = document.getElementById('question-popup');
        const preview = document.getElementById('question-selected-text');
        const input = document.getElementById('question-input');
        const charCount = document.getElementById('question-char-count');

        // Truncate preview text if too long
        const truncated = text.length > 150 ? text.substring(0, 150) + '...' : text;
        preview.textContent = `"${truncated}"`;

        popup.dataset.selectedText = text.substring(0, 300); // Store max 300 chars of selected text
        popup.dataset.slideNum = slideNum;

        input.value = '';
        charCount.textContent = '0 / 1000';

        popup.classList.add('visible');
        input.focus();
    }

    function updateQuestionsUI() {
        const highlights = HighlightManager.getAll();
        const list = document.getElementById('questions-list');

        if (!list) return;

        if (highlights.length === 0) {
            list.innerHTML = '<p class="empty-state">No questions recorded. Select any text while reading to ask a question.</p>';
        } else {
            list.innerHTML = highlights.map(h => `
        <div class="question-summary-item">
          <div class="section-label">💬 ${h.zoneLabel || 'Unknown'} — Slide ${h.slideNum}</div>
          <div class="selected-text">"${escapeHtmlSafe(h.selectedText.substring(0, 100))}${h.selectedText.length > 100 ? '...' : ''}"</div>
          <div class="question-text">${escapeHtml(h.question)}</div>
        </div>
      `).join('');
        }
        updateQuestionCount();
    }

    function escapeHtmlSafe(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // --- Bubble Burst Effect ---
    function showBubbleBurst() {
        const container = document.getElementById('bubbles-container');
        if (!container) return;
        for (let i = 0; i < 8; i++) {
            const bubble = document.createElement('div');
            bubble.className = 'bubble';
            const size = Math.random() * 10 + 5;
            bubble.style.width = size + 'px';
            bubble.style.height = size + 'px';
            bubble.style.left = (40 + Math.random() * 20) + '%';
            bubble.style.bottom = '40%';
            bubble.style.animationDuration = (Math.random() * 2 + 1) + 's';
            container.appendChild(bubble);
            bubble.addEventListener('animationend', () => bubble.remove());
        }
    }

    // --- Drawer ---
    function initDrawer() {
        const toggle = document.getElementById('bookmark-drawer-toggle');
        const close = document.getElementById('drawer-close');
        const overlay = document.getElementById('drawer-overlay');

        toggle.addEventListener('click', () => {
            const drawer = document.getElementById('bookmark-drawer');
            if (drawer.classList.contains('open')) closeDrawer();
            else openDrawer();
        });
        close.addEventListener('click', closeDrawer);
        overlay.addEventListener('click', closeDrawer);
    }

    // --- Question Counter Button ---
    function initQuestionButton() {
        const btn = document.getElementById('question-drawer-toggle');
        const closeBtn = document.getElementById('question-drawer-close');

        if (btn) {
            btn.addEventListener('click', () => {
                const drawer = document.getElementById('question-drawer');
                if (drawer.classList.contains('open')) {
                    closeAllDrawers();
                } else {
                    closeAllDrawers();
                    populateQuestionDrawer();
                    drawer.classList.add('open');
                    document.getElementById('drawer-overlay').classList.add('open');
                }
            });
        }
        if (closeBtn) {
            closeBtn.addEventListener('click', closeAllDrawers);
        }
    }

    function populateQuestionDrawer() {
        const list = document.getElementById('question-drawer-list');
        if (!list) return;
        const highlights = HighlightManager.getAll();
        if (highlights.length === 0) {
            list.innerHTML = '<p class="empty-state">No questions yet. Select text while reading to ask a question.</p>';
        } else {
            list.innerHTML = highlights.map(h => {
                const zone = getZoneLabelForSlide(h.slideNum);
                return `
          <div class="bookmark-item">
            <div class="bookmark-item-header">
              <span class="bookmark-item-section">💬 ${zone} — Slide ${h.slideNum}</span>
              <button class="bookmark-item-delete question-drawer-delete" data-delete-id="${h.id}" title="Remove question">&times;</button>
            </div>
            <p class="bookmark-item-note" style="font-style:italic;color:var(--white-40);">"${escapeHtml(h.selectedText.substring(0, 80))}${h.selectedText.length > 80 ? '...' : ''}"</p>
            <p class="bookmark-item-note">${escapeHtml(h.question)}</p>
          </div>`;
            }).join('');

            // Wire up delete buttons
            list.querySelectorAll('.question-drawer-delete').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    HighlightManager.remove(btn.dataset.deleteId);
                    updateQuestionCount();
                    populateQuestionDrawer();
                });
            });
        }
    }

    function initSectionMenu() {
        const btn = document.getElementById('depth-label-btn');
        const menu = document.getElementById('section-menu');
        const caret = btn ? btn.querySelector('.depth-caret') : null;
        if (!btn || !menu) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = menu.classList.toggle('open');
            menu.setAttribute('aria-hidden', !isOpen);
            if (caret) caret.classList.toggle('open', isOpen);
        });

        // Close on outside click
        document.addEventListener('click', () => {
            menu.classList.remove('open');
            menu.setAttribute('aria-hidden', 'true');
            if (caret) caret.classList.remove('open');
        });

        // Section link clicks — smooth scroll & close menu
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
                menu.classList.remove('open');
                menu.setAttribute('aria-hidden', 'true');
                if (caret) caret.classList.remove('open');
            });
        });
    }

    function updateQuestionCount() {
        const count = HighlightManager.getCount();
        const badge = document.getElementById('question-count');
        if (badge) badge.textContent = count;
    }

    function openDrawer() {
        closeAllDrawers();
        document.getElementById('bookmark-drawer').classList.add('open');
        document.getElementById('drawer-overlay').classList.add('open');
    }

    function closeDrawer() {
        closeAllDrawers();
    }

    function closeAllDrawers() {
        document.querySelectorAll('.bookmark-drawer').forEach(d => d.classList.remove('open'));
        document.getElementById('drawer-overlay').classList.remove('open');
    }



    // --- Surface Button ---
    function initSurfaceButton() {
        document.getElementById('surface-btn').addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function updateSurfaceButton() {
        const btn = document.getElementById('surface-btn');
        if (!btn) return;
        const scrolled = window.scrollY > window.innerHeight;
        btn.hidden = !scrolled;
        btn.classList.toggle('visible', scrolled);
    }

    // --- Completion ---
    function initCompletionButton() {
        const btn = document.getElementById('complete-btn');
        const confirmation = document.getElementById('complete-confirmation');

        btn.addEventListener('click', () => {
            const questions = HighlightManager.formatForSubmission();

            // Submit to Google Form
            submitToGoogleForm(questions);

            btn.hidden = true;
            confirmation.hidden = false;
        });
    }

    function submitToGoogleForm(questions) {
        // Build form data
        const formData = new FormData();
        if (questions) {
            formData.append(QUESTIONS_FIELD_ID, questions);
        }

        // Use fetch with no-cors mode — we don't need to read the response
        fetch(GOOGLE_FORM_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        }).catch(() => {
            // Fallback: iframe approach
            const url = `${GOOGLE_FORM_URL}?${questions ? QUESTIONS_FIELD_ID + '=' + encodeURIComponent(questions.substring(0, 1500)) : ''}`;
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.name = 'form-submit-' + Date.now();
            document.body.appendChild(iframe);
            iframe.src = url;
            setTimeout(() => iframe.remove(), 5000);
        });
    }

})();
