/* ============================================
   Audio Module — Web Speech API
   ============================================ */

const AudioManager = {
    audioModeOn: false,
    currentUtterance: null,
    isSpeaking: false,
    currentSlide: null,

    init() {
        // Check if speech synthesis is available
        if (!('speechSynthesis' in window)) {
            console.warn('Speech synthesis not supported');
            const toggle = document.getElementById('audio-mode-toggle');
            if (toggle) toggle.style.display = 'none';
            document.querySelectorAll('.play-btn').forEach(b => b.style.display = 'none');
            return;
        }

        // Fix: load voices (some browsers need a nudge)
        speechSynthesis.getVoices();
        speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
    },

    getPreferredVoice() {
        const voices = speechSynthesis.getVoices();
        // Prefer high-quality English voices
        const preferred = [
            'Samantha', 'Karen', 'Daniel', 'Google UK English Female',
            'Google UK English Male', 'Microsoft Aria', 'Microsoft Guy'
        ];
        for (const name of preferred) {
            const v = voices.find(v => v.name.includes(name));
            if (v) return v;
        }
        // Fallback: any English voice
        return voices.find(v => v.lang.startsWith('en')) || voices[0];
    },

    speak(slideNum) {
        const text = CONTENT_DATA[slideNum];
        if (!text) return;

        // Stop any current speech
        this.stop();

        const utterance = new SpeechSynthesisUtterance(text);
        const voice = this.getPreferredVoice();
        if (voice) utterance.voice = voice;
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        this.currentSlide = slideNum;
        this.isSpeaking = true;
        this.currentUtterance = utterance;

        // Update play button state
        this.updatePlayButtons(slideNum, true);
        this.showAudioIndicator(true);

        utterance.onend = () => {
            this.isSpeaking = false;
            this.currentSlide = null;
            this.updatePlayButtons(slideNum, false);
            this.showAudioIndicator(false);

            // If audio mode is on, play next visible section
            if (this.audioModeOn) {
                this.playNextSection(slideNum);
            }
        };

        utterance.onerror = (e) => {
            if (e.error !== 'interrupted') {
                console.error('Speech error:', e);
            }
            this.isSpeaking = false;
            this.updatePlayButtons(slideNum, false);
            this.showAudioIndicator(false);
        };

        speechSynthesis.speak(utterance);
    },

    stop() {
        speechSynthesis.cancel();
        this.isSpeaking = false;
        if (this.currentSlide) {
            this.updatePlayButtons(this.currentSlide, false);
        }
        this.currentSlide = null;
        this.showAudioIndicator(false);
    },

    toggle(slideNum) {
        if (this.isSpeaking && this.currentSlide === slideNum) {
            this.stop();
        } else {
            this.speak(slideNum);
        }
    },

    toggleAudioMode() {
        this.audioModeOn = !this.audioModeOn;
        const toggle = document.getElementById('audio-mode-toggle');
        if (toggle) {
            toggle.classList.toggle('active', this.audioModeOn);
            const icon = toggle.querySelector('.audio-icon');
            const label = toggle.querySelector('.audio-label');
            if (icon) icon.textContent = this.audioModeOn ? '🔊' : '🔇';
            if (label) label.textContent = this.audioModeOn ? 'Audio Mode is On' : 'Audio Mode Off';
        }

        if (!this.audioModeOn) {
            this.stop();
        }
    },

    onSectionVisible(slideNum) {
        if (this.audioModeOn && !this.isSpeaking) {
            this.speak(slideNum);
        }
    },

    playNextSection(currentSlide) {
        const nextSlide = currentSlide + 1;
        const nextCard = document.getElementById(`slide-${nextSlide}`);
        if (nextCard && CONTENT_DATA[nextSlide]) {
            // Scroll to the next card smoothly
            nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => this.speak(nextSlide), 500);
        }
    },

    updatePlayButtons(slideNum, playing) {
        document.querySelectorAll('.play-btn').forEach(btn => {
            btn.classList.remove('playing');
        });
        if (playing) {
            const btn = document.querySelector(`.play-btn[data-slide="${slideNum}"]`);
            if (btn) btn.classList.add('playing');
        }
    },

    showAudioIndicator(show) {
        const indicator = document.getElementById('audio-indicator');
        if (indicator) indicator.style.display = show ? 'flex' : 'none';
    },

    isAudioModeOn() {
        return this.audioModeOn;
    }
};
