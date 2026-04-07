import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import { actualSlider } from "./slider-actual.js";
import SolutionsDropdown from "./solutions.js";
import SearchModal from "./search-modal.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "header__burger",
      BURGER_OPEN: "header__burger--active",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 768,
      MAIN: "main",
    },
    headerFixed
  );

  actualSlider();

  new SolutionsDropdown({
    TRIGGER: "menu__dropdown-trigger",
    DROPDOWN: "solutions-dropdown",
    DROPDOWN_OPEN: "menu__dropdown--open",
  });

  new SearchModal({
    MODAL_OPEN: "modal--open",
  });

} catch (error) {
  console.error(error);
}

const searchInput = document.querySelector('.other-products__search-input');

document.querySelectorAll('.other-products__tag').forEach(tag => {
  tag.addEventListener('click', () => {
    searchInput.value = tag.textContent.trim();
    searchInput.focus();
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchInput.value = '';
      searchInput.blur();
    }
  });
});