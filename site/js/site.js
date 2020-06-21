(() => {
  let categorySelector = document.querySelector("#categorySelector");
  let categorySelectorStickyWatcher = document.querySelector("#categorySelectorStickyWatcher");
  if (categorySelector && categorySelectorStickyWatcher) {
    let categorySelectorObserver = new IntersectionObserver(function(entries) {
      let firstEntry = entries[0];
      if (entries[0].intersectionRatio === 0) {
        categorySelector.classList.add("mod__sticky");
      } else if (entries[0].intersectionRatio === 1) {
        categorySelector.classList.remove("mod__sticky");
      }
    }, {
      threshold: [0, 1],
      rootMargin: "-55px 0px 0px 0px"
    });
    categorySelectorObserver.observe(categorySelectorStickyWatcher);
  }
})();

(() => {
  let mainTitle = document.querySelector("#MainTitle");
  let mainHeader = document.querySelector("#MainHeader");
  if (mainTitle && mainHeader) {
    let mainTitleObserver = new IntersectionObserver(function(entries) {
      let firstEntry = entries[0];
      if (entries[0].intersectionRatio === 0) {
        mainHeader.classList.add("mod__scrolled-down");
      } else if (entries[0].intersectionRatio === 1) {
        mainHeader.classList.remove("mod__scrolled-down");
      }
    }, {
      threshold: [0, 1]
    });

    mainTitleObserver.observe(mainTitle);
  }
})();

(() => {
  let el = document.querySelector('#MainNavigationOpener');
  if (el) {
    el.addEventListener('click', function () {
      let mainNavigation = document.querySelector('#MainNavigation');
      if (mainNavigation.classList.contains('mod__opened')) {
        el.innerText = 'Menu';
      } else {
        el.innerText = 'Close menu';
      }
      mainNavigation.classList.toggle('mod__opened');
      event.preventDefault();
    });
  }
})();
