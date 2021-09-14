export const baseSlider1 = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-nav .swiper-next",
        prevEl: ".swiper-nav .swiper-prev"
    }
}

export const baseSlider2 = {
    slidesPerView: 4,
    spaceBetween: 8,
    nav: true,
    navigation: {
        nextEl: ".swiper-nav .swiper-next",
        prevEl: ".swiper-nav .swiper-prev"
    },
    navIcon: {
        next: "fas fa-chevron-right",
        prev: "fas fa-chevron-left"
    }
}

export const baseSlider3 = {
    spaceBetween: 20,
    autoplay: false,
    slidesPerView: 4,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    },
    pagination: {
        el: '.swiper-dots',
        clickable: true
    },
}

export const baseSlider4 = {
    loop: false,
    spaceBetween: 20,
    autoplay: false,
    slidesPerView: 2,
    breakpoints: {
        992: {
            slidesPerView: 1
        }
    }
}

export const baseSlider5 = {
    loop: false,
    spaceBetween: 30,
    autoplay: false,
    slidesPerView: 3,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        1200: {
            slidesPerView: 2
        }
    },
    pagination: {
        el: '.swiper-dots',
        clickable: true
    }
}

export const baseSlider6 = {
    slidesPerView: 1,
    spaceBetween: 0
}

export const baseSlider7 = {
    center: true,
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    breakpoints: {
        768: {
            slidesPerView: 1
        }
    }
}

export const baseSlider8 = {
    slidesPerView: 3,
    spaceBetween: 8,
    direction: 'vertical',
    navigation: {
        nextEl: ".vertical-thumbs .thumb-up",
        prevEl: ".vertical-thumbs .thumb-down"
    },
    isCustomNav: true
}

export const baseSlider9 = {
    spaceBetween: 20,
    autoplay: false,
    slidesPerView: 5,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3
        }
    }
}

// home
export const popularSlider = {
    spaceBetween: 0,
    slidesPerView: 5,
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        992: {
            slidesPerView: 3,
        },
        1263: {
            slidesPerView: 4
        }
    }
}

export const brandSlider = {
    spaceBetween: 2,
    slidesPerView: 5,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 4
        }
    }
}

export const infoSlider = {
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        768: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        }
    }
}

export const instaSlider = {
    slidesPerView: 6,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1500: {
            slidesPerView: 5
        }
    }
}

export const introSlider = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-nav .swiper-next",
        prevEl: ".swiper-nav .swiper-prev"
    },
    navIcon: {
        next: "icon-right-open-big",
        prev: "icon-left-open-big"
    }
}

export const bannerSlider = {
    spaceBetween: 0,
    slidesPerView: 3,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    }
}