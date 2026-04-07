export default class SolutionsDropdown {
    constructor(config) {
        this.TRIGGER = config.TRIGGER;
        this.DROPDOWN = config.DROPDOWN;
        this.DROPDOWN_OPEN = config.DROPDOWN_OPEN;
        this.BREAKPOINT = config.BREAKPOINT || 768;

        this.trigger = document.querySelector(`.${this.TRIGGER}`);
        this.dropdown = document.getElementById(this.DROPDOWN);

        if (!this.trigger || !this.dropdown) return;

        this._bindEvents();
    }

    _isMobile() {
        return window.innerWidth <= this.BREAKPOINT;
    }

    _open() {
        this.dropdown.classList.add(this.DROPDOWN_OPEN);
        this.trigger.setAttribute('aria-expanded', 'true');
    }

    _close() {
        this.dropdown.classList.remove(this.DROPDOWN_OPEN);
        this.trigger.setAttribute('aria-expanded', 'false');
    }

    _toggle() {
        const isOpen = this.dropdown.classList.contains(this.DROPDOWN_OPEN);
        isOpen ? this._close() : this._open();
    }

    _bindEvents() {
        this.trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            this._toggle();
        });

        document.addEventListener('click', (e) => {
            if (
                !this.trigger.contains(e.target) &&
                !this.dropdown.contains(e.target)
            ) {
                this._close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this._close();
        });
    }
}