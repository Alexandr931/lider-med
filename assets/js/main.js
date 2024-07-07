function setWidthScrollBar() {
    let div = document.createElement('div');

    div.style.position = 'absolute';
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
}

function menuOpen(menuSelector) {
    menuSelector.classList.add('active');
    document.querySelector('html').classList.add('lock');
}

function menuClose(menuSelector) {
    menuSelector.classList.remove('active');
    document.querySelector('html').classList.remove('lock');
}

function initPhoneMask() {
    const phoneFields = document.querySelectorAll('input[type="tel"]');
    const maskOptions = {
        mask: '+{7} (000) 000 00-00'
    };

    phoneFields.forEach((phoneField) => {
        IMask(phoneField, maskOptions);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const headerBottom = document.querySelector('.header_bottom');

    // bunner slider
    const bunnerSliderList = document.querySelectorAll('.banner__slider');

    if (bunnerSliderList.length > 0) {
        bunnerSliderList.forEach((elem) => {
            const bunnerSlider = new Swiper(elem, {
                pagination: {
                    el: elem.closest('.slider-container').querySelector('.slider-pagination'),
                    clickable: true,
                },

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },

                spaceBetween: 16,
            });
        });
    }
    // slider-2
    const slider2List = document.querySelectorAll('.slider-2');

    if (slider2List.length > 0) {
        slider2List.forEach((elem) => {
            const slider2 = new Swiper(elem, {
                scrollbar: {
                    el: elem.closest('.slider-container').querySelector('.slider-scrollbar'),
                    draggable: true,
                },

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 2,
                spaceBetween: 20,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    575: {
                        slidesPerView: 1.7,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }
            });
        });
    }

   // slider-3
   const slider3List = document.querySelectorAll('.slider-3');

   if (slider3List.length > 0) {
       slider3List.forEach((elem) => {
           const slider3 = new Swiper(elem, {
               scrollbar: {
                   el: elem.closest('.slider-container').querySelector('.slider-scrollbar'),
                   draggable: true,
               },

               navigation: {
                   prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                   nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
               },
               slidesPerView: 3,
               spaceBetween: 20,
               breakpoints: {
                   0: {
                       slidesPerView: 1.1,
                       spaceBetween: 10,
                   },
                   575: {
                       slidesPerView: 1.7,
                       spaceBetween: 10,
                   },
                   767: {
                       slidesPerView: 2,
                       spaceBetween: 10,
                   },
                   1025: {
                       slidesPerView: 3,
                       spaceBetween: 15,
                   },
                   1200: {
                       slidesPerView: 3,
                       spaceBetween: 20,
                   }
               }
           });
       });
   }

    // reviews slider
    const reviewsSliderList = document.querySelectorAll('.reviews__slider');

    if (reviewsSliderList.length > 0) {
        reviewsSliderList.forEach((elem) => {
            const reviewsSlider = new Swiper(elem, {
                scrollbar: {
                    el: elem.closest('.slider-container').querySelector('.slider-scrollbar'),
                    draggable: true,
                },

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    575: {
                        slidesPerView: 1.7,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }
            });
        });
    }

    // slider-4
    const slider4List = document.querySelectorAll('.slider-4');

    if (slider4List.length > 0) {
        slider4List.forEach((elem) => {
            const slider4 = new Swiper(elem, {
                scrollbar: {
                    el: elem.closest('.slider-container').querySelector('.slider-scrollbar'),
                    draggable: true,
                },

                navigation: {
                    prevEl: elem.closest('.slider-container').querySelector('.slider-btn_prev'),
                    nextEl: elem.closest('.slider-container').querySelector('.slider-btn_next'),
                },
                slidesPerView: 4,
                spaceBetween: 20,
                breakpoints: {
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                    },
                    575: {
                        slidesPerView: 1.7,
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1025: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                }
            });
        });
    }

    // Popups
    function popupClose(popupActive) {
        const formPopup = popupActive.querySelector('.form');
        if (formPopup) {
            const additional = formPopup.querySelector('.additional__field');
            if (additional) {
                additional.value = "Неизвестная форма"
            }
        }
        popupActive.classList.remove('open');
        document.querySelector('html').classList.remove('lock');
        document.querySelector('html').style.paddingRight = 0;
        document.querySelectorAll('.padding-lock').forEach(function (elem) {
            elem.style.paddingRight = 0;
        });
    }

    const popupOpenBtns = document.querySelectorAll('.popup-btn');
    const popups = document.querySelectorAll('.popup');
    const closePopupBtns = document.querySelectorAll('.close-popup');

    closePopupBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
            popupClose(e.target.closest('.popup'));
        });
    });

    popupOpenBtns.forEach(function (el) {
        el.addEventListener('click', function (e) {
            const path = e.currentTarget.dataset.path;
            const currentPopup = document.querySelector(`[data-target="${path}"]`);
            const currentForm = currentPopup.querySelector('.form');
            const title = el.dataset?.title || 'Получите консультацию специалиста бесплатно';
            const additional = el.dataset?.additional || '';

            popups.forEach(function (popup) {
                popupClose(popup);
                popup.addEventListener('click', function (e) {
                    if (!e.target.closest('.popup__content')) {
                        popupClose(e.target.closest('.popup'));
                    }
                });
            });

            menuClose(headerBottom);

            if (currentForm) {
                const formTitle = currentForm.querySelector('.form-popup__title')
                const addition = currentForm.querySelector('.additional__field');
                if (addition) {
                    addition.value = additional;
                }
                if (formTitle && !currentForm.classList.contains('form-review')) {
                    formTitle.textContent = title;
                }
            }
            currentPopup.classList.add('open');
            document.querySelector('html').classList.add('lock');
            document.querySelector('html').style.paddingRight = setWidthScrollBar() + 'px';
            document.querySelectorAll('.padding-lock').forEach(function (elem) {
                elem.style.paddingRight = setWidthScrollBar() + 'px';
            });
        });
    });

    // accordion
    const ACCORDION_LIST = 'data-accordion-list'
    const ACCORDION_BUTTON = 'data-accordion-button'
    const ACCORDION_ARROW = 'data-accordion-arrow'
    const ACCORDION_CONTENT = 'data-accordion-content'
    const SECTION_OPENED = 'active'
    const ICON_ROTATED = 'rotated'

    class Accordion {
        static apply(accordionNode) {
            if (!accordionNode) {
                return
            }

            const acc = new Accordion()
            acc.accordion = accordionNode
            accordionNode.onclick = acc.onClick.bind(acc)
        }

        handleClick(button) {
            const innerSection = button.closest('.accor').querySelector('.accor-full');
            const isOpened = innerSection.classList.contains(SECTION_OPENED)

            if (isOpened) {
                this.close(innerSection)
                return
            }
            this.open(innerSection)
        }

        open(section) {
            const accordion = section.querySelector(`[${ACCORDION_CONTENT}`).closest('.accor');
            const accordionContent = section.querySelector(`[${ACCORDION_CONTENT}`)
            const accordionList = accordionContent.querySelector(`[${ACCORDION_LIST}`)
            const innerSectionHeight = accordionContent.clientHeight
            let countOfScrollHeight = 0;
            const allElementContentData = section.querySelectorAll(`[${ACCORDION_CONTENT}`)
            accordion.classList.add(SECTION_OPENED)
            section.classList.add(SECTION_OPENED)
            this.rotateIconFor(section.previousElementSibling)

            for (const item of allElementContentData) {
                countOfScrollHeight = countOfScrollHeight + item.scrollHeight;
            }

            if (accordionContent.contains(accordionList)) {
                section.style.maxHeight = `${innerSectionHeight + countOfScrollHeight}px`
                return
            }
            section.style.maxHeight = `${innerSectionHeight}px`
        }

        close(section) {
            const accordion = section.querySelector(`[${ACCORDION_CONTENT}`).closest('.accor');
            section.style.maxHeight = 0
            accordion.classList.remove(SECTION_OPENED)
            section.classList.remove(SECTION_OPENED)
            this.rotateIconFor(section.previousElementSibling)
        }

        rotateIconFor(button) {
            const rotatedIconClass = ICON_ROTATED
            const arrowElement = button.dataset.hasOwnProperty('accordionArrow') ?
                button :
                button.querySelector(`[${ACCORDION_ARROW}]`)

            if (!arrowElement) {
                return
            }

            const isOpened = arrowElement.classList.contains(rotatedIconClass)
            if (!isOpened) {
                arrowElement.classList.add(rotatedIconClass)
                return
            }
            arrowElement.classList.remove(rotatedIconClass)
        }

        onClick(event) {
            let button = event.target.closest(`[${ACCORDION_BUTTON}]`)
            if (button && button.dataset.accordionButton !== undefined) {
                this.handleClick(button)
            }
            setTimeout(() => {
                AOS.refresh();
            }, 500);
        }
    }

    const accorWrapperList = document.querySelectorAll('.accor-wrapper');

    if (accorWrapperList.length > 0) {
        accorWrapperList.forEach(function (elem) {
            Accordion.apply(elem);
        });
    }

    // rating
    const ratings = document.querySelectorAll('.rating');
    const articleID = document.querySelector('[name="f_id_article"]');
    let articleIDValue = '';
    if (articleID) {
        articleIDValue = articleID.value;
    }

    if (ratings.length > 0) {
        initRatings();
    }

    function initRatings() {
        let ratingActive, ratingValue, ratingText;

        for (let i = 0; i < ratings.length; i += 1) {
            const rating = ratings[i];
            initRating(rating);
        }
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();

        if (rating.classList.contains('rating__set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active');
        ratingValue = rating.querySelector('.rating__value');
        ratingText = rating.querySelector('.rating__text');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML.replace(',', '.')) {
        const ratingActiveWidth = index / 0.05;
        ratingActive.style.width = `${ratingActiveWidth}%`;
        if (ratingText) {
            ratingText.innerHTML = `Рекомендуют ${Math.round(ratingActiveWidth)}%`
        }
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');

        for (let i = 0; i < ratingItems.length; i += 1) {
            const ratingItem = ratingItems[i];

            ratingItem.addEventListener('mouseenter', (e) => {
                initRatingVars(rating);

                setRatingActiveWidth(ratingItem.value);
            });

            ratingItem.addEventListener('mouseleave', (e) => {
                setRatingActiveWidth();
            });

            ratingItem.addEventListener('click', (e) => {
                ratingItems.forEach((elem) => {
                    elem.style.pointerEvents = 'none';
                });
                initRatingVars(rating);

                ratingValue.innerHTML = i + 1;
                setRatingActiveWidth();
            });
        }
    }

    // nav slider disable
    const paginateLockList = document.querySelectorAll('.swiper-pagination-lock');

    if (paginateLockList.length > 0) {
        paginateLockList.forEach((elem) => {
            elem.closest('.slider-navigation').remove();
        })
    }

    // review full
    const reviewMoreBtnList = document.querySelectorAll('.review__more-btn');
    const reviewFullPopupName = document.querySelector('.review-full-popup__name');
    const reviewFullPopupText = document.querySelector('.review-full-popup__text');

    if (reviewMoreBtnList.length > 0) {
        reviewMoreBtnList.forEach((elem) => {
            elem.addEventListener('click', () => {
                const name = elem.closest('.review').querySelector('.review__name');
                const text = elem.closest('.review').querySelector('.review__text');

                reviewFullPopupName.textContent = name.textContent;
                reviewFullPopupText.textContent = text.textContent;
            });
        })
    }

    // dropdown menu mobile
    const dropdownBtnsList = document.querySelectorAll('.dropdown-open');

    if (dropdownBtnsList.length > 0) {
        dropdownBtnsList.forEach((elem) => {
            elem.addEventListener('click', () => {
                if (elem.closest('.menu-item')) {
                    elem.closest('.menu-item').classList.toggle('active');
                }
                if (elem.closest('.dropdown-wrapper')) {
                    console.log('text');
                    elem.closest('.dropdown-wrapper').classList.toggle('active');
                }
            })
        })
    }

    // header menu
    const openMenuBtns = document.querySelectorAll('.open-menu');
    const closeMenuBtns = document.querySelectorAll('.close-menu');

    openMenuBtns.forEach(function (openMenuBtn) {
        openMenuBtn.addEventListener('click', function () {
            menuOpen(headerBottom);
        })
    });

    closeMenuBtns.forEach(function (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function () {
            menuClose(headerBottom);
        })
    });

    // gallery fancybox
    setTimeout(function () {
        Fancybox.bind('[data-fancybox="gallery"]', {
            placeFocusBack: false,
        });
    }, 2000);

    // documents fancybox
    setTimeout(function () {
        Fancybox.bind('[data-fancybox="documents"]', {
            placeFocusBack: false,
        });
    }, 2000);

    // Tabs
    class Tabs {
        container;
        tab_button_class;
        tab_content_class;
        tab_attribute_key;
        tab_attribute_target;
        tab_navigation_next;
        tab_navigation_prev;
        tab_active_name;

        constructor({ container = '.tabs-container', tabs_wrapper_class = '.tabs__wrapper', button_class = '.tab', content_class = '.tab-content', attribute_key = 'path', attribute_target = 'target', nav_next = '.tabs__arrow_next', nav_prev = '.tabs__arrow_prev', name_active = '.tabs__active' } = {}) {
            this.container = container;
            this.tabs_wrapper_class = tabs_wrapper_class;
            this.tab_button_class = button_class;
            this.tab_content_class = content_class;
            this.tab_attribute_key = attribute_key;
            this.tab_attribute_target = attribute_target;
            this.tab_navigation_next = nav_next;
            this.tab_navigation_prev = nav_prev;
            this.tab_active_name = name_active;
        }

        initTabs() {
            document.querySelectorAll(this.container).forEach((wrapper) => {
                this.initTabsWrapper(wrapper);
            });
        }

        initTabsWrapper(wrapper) {
            const tabsWrapper = wrapper.querySelector(this.tabs_wrapper_class);
            const tabsButtonList = wrapper.querySelectorAll(this.tab_button_class);
            const tabsContentList = wrapper.querySelectorAll(this.tab_content_class);
            const tabsNavigationNext = wrapper.querySelector(this.tab_navigation_next);
            const tabsNavigationPrev = wrapper.querySelector(this.tab_navigation_prev);
            const tabActiveName = wrapper.querySelector(this.tab_active_name);
            const tabsClose = document.querySelectorAll('.tabs__close');
            let currentTab = 0;
            if (tabActiveName) {
                tabActiveName.querySelector('.tabs__active-text').textContent = tabsButtonList[currentTab].textContent;
            }

            for (let index = 0; index < tabsButtonList.length; index++) {
                if (tabsButtonList[index].dataset.start === true) {
                    currentTab = index;
                }

                tabsButtonList[index].addEventListener('click', () => {
                    if (tabsContentList[index]) {
                        currentTab = index;
                        this.showTabsContent({
                            list_tabs: tabsContentList,
                            list_buttons: tabsButtonList,
                            index: currentTab,
                        });
                        if (tabActiveName) {
                            tabActiveName.querySelector('.tabs__active-text').textContent = tabsButtonList[index].textContent;
                            tabActiveName.closest('.tabs').classList.remove('active');
                            document.body.classList.remove('lock');
                        }
                        setTimeout(() => {
                            AOS.refresh();
                        }, 500);
                    }
                });
            }

            this.showTabsContent({
                list_tabs: tabsContentList,
                list_buttons: tabsButtonList,
                index: currentTab,
            });

            if (tabsNavigationNext) {
                tabsNavigationNext.addEventListener('click', () => {
                    if (currentTab + 1 < tabsButtonList.length) {
                        currentTab += 1;
                    } else {
                        currentTab = 0;
                    }

                    const tabsWrapperPositionX = tabsWrapper.getBoundingClientRect().left;
                    const currentTabPositionX = tabsButtonList[currentTab].getBoundingClientRect().left;
                    const currentTabPositionXRegardingParent = currentTabPositionX - tabsWrapperPositionX;

                    tabsWrapper.scrollBy({
                        left: currentTabPositionXRegardingParent,
                        behavior: 'smooth'
                    });

                    this.showTabsContent({
                        list_tabs: tabsContentList,
                        list_buttons: tabsButtonList,
                        index: currentTab,
                    });
                });
            }

            if (tabsNavigationPrev) {
                tabsNavigationPrev.addEventListener('click', () => {
                    if (currentTab - 1 >= 0) {
                        currentTab -= 1;
                    } else {
                        currentTab = tabsButtonList.length - 1;
                    }

                    const tabsWrapperPositionX = tabsWrapper.getBoundingClientRect().left;
                    const currentTabPositionX = tabsButtonList[currentTab].getBoundingClientRect().left;
                    const currentTabPositionXRegardingParent = currentTabPositionX - tabsWrapperPositionX;

                    tabsWrapper.scrollBy({
                        left: currentTabPositionXRegardingParent,
                        behavior: 'smooth'
                    });

                    this.showTabsContent({
                        list_tabs: tabsContentList,
                        list_buttons: tabsButtonList,
                        index: currentTab,
                    });
                });
            }

            if (tabActiveName) {
                tabActiveName.addEventListener('click', function () {
                    tabActiveName.closest('.tabs').classList.add('active');
                    document.body.classList.add('lock');
                });
            }

            if (tabsClose.length > 0) {
                for (let i = 0; i < tabsClose.length; i += 1) {
                    const tabClose = tabsClose[i]
                    tabClose.addEventListener('click', function () {
                        tabClose.closest('.tabs').classList.remove('active');
                        document.body.classList.remove('lock');
                    });
                }
            }


            tabsWrapper.closest('.tabs__container').addEventListener('click', function (e) {
                if (!e.target.closest('.tabs__wrapper')) {
                    tabsWrapper.closest('.tabs').classList.remove('active');
                    document.body.classList.remove('lock');
                }
            });
        }

        hideTabsContent({ list_tabs, list_buttons }) {
            list_buttons.forEach((el) => {
                el.classList.remove('active');
            });
            list_tabs.forEach((el) => {
                el.classList.remove('active');
            });
        }

        showTabsContent({ list_tabs, list_buttons, index }) {
            this.hideTabsContent({
                list_tabs,
                list_buttons
            });

            if (list_tabs[index]) {
                list_tabs[index].classList.add('active');
            }

            if (list_buttons[index]) {
                list_buttons[index].classList.add('active');
            }
        }
    }

    const btnSearchOpenList = document.querySelectorAll('.search-open');
    const btnSearchToggleList = document.querySelectorAll('.search-toggle');
    const searchJs = document.querySelector('.search-js');

    if (btnSearchOpenList.length > 0) {
        btnSearchOpenList.forEach(btn => {
            btn.addEventListener("click", () => {
                searchJs.classList.add('active');
            });
        })
    }

    if (btnSearchToggleList.length > 0) {
        btnSearchToggleList.forEach(btn => {
            btn.addEventListener("click", () => {
                searchJs.classList.toggle('active');
            });
        })
    }

    AOS.init({
        once: true,
    });

    new Tabs().initTabs();
    initPhoneMask();
});

