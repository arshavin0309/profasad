document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 30
            }
        }
    });
})
document.addEventListener('DOMContentLoaded', () => {
    const swiperTeam = new Swiper('.swiper-team', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            425: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    $('#nav_links a').each(function () {
        $(this).click(function () {
            const is_first = $(this).hasClass('first');

            if (is_first) {
                window.location.href = window.location.origin + window.location.pathname;
                return false;
            }

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }

            const get_tag_array = [];
            $('#nav_links a.active[data-tag]').each(function () {
                const value = $(this).data('tag').toString();
                get_tag_array.push(value);
            });
            const get_tag = '?tags=' + get_tag_array.join('||');
            window.location.href = window.location.origin + window.location.pathname + get_tag;

            return false;
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    let headerNav = document.querySelector('.header__nav')
    document.querySelector('.burger-btn').addEventListener('click', () => {
        headerNav.classList.toggle('header__nav--active')
    })
})


document.addEventListener('DOMContentLoaded', () => {
    const swiperTeam = new Swiper('.swiper-choice', {
        loop: true,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            1300: {
                slidesPerView: 6,
                spaceBetween: 20
            }
        }
    });
});