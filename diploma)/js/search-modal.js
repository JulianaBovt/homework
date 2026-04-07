export default class SearchModal {
    constructor(config) {
        this.MODAL_OPEN = config.MODAL_OPEN;

        this.modal = document.getElementById('search-modal');
        this.trigger = document.querySelector('.header__search-button');
        this.closeBtn = this.modal?.querySelector('.search-modal__close');
        this.overlay = this.modal?.querySelector('.search-modal__overlay');
        this.input = this.modal?.querySelector('.search-modal__input');
        this.body = document.querySelector('.page__body');

        if (!this.modal || !this.trigger) return;

        this._bindEvents();
    }

    _open() {
        this.modal.classList.add(this.MODAL_OPEN);
        this.modal.setAttribute('aria-hidden', 'false');
        this.body.classList.add('page__body--no-scroll');
        setTimeout(() => this.input?.focus(), 300);
    }

    _close() {
        this.modal.classList.remove(this.MODAL_OPEN);
        this.modal.setAttribute('aria-hidden', 'true');
        this.body.classList.remove('page__body--no-scroll');
        this.input.value = '';
    }
    _bindEvents() {
        this.trigger.addEventListener('click', () => this._open());
        this.closeBtn?.addEventListener('click', () => this._close());
        this.overlay?.addEventListener('click', () => this._close());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this._close();
        });

        this.input?.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this._close();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

    }
}