

// warningMarquee //

warningMarquee();
window.addEventListener('resize', warningMarquee);

function warningMarquee() {
    const pageWidth = document.documentElement.scrollWidth;
    const warningWrapper = document.querySelector('.hero__warning');
    const warning = document.querySelector('.hero__warning-text');
    const warnings = document.getElementsByClassName('hero__warning-text');
    const warningWidth = parseInt(getComputedStyle(warning).width);
    const warningsAmount = Math.ceil((pageWidth / warningWidth));
    let addAmount = warningsAmount - warnings.length + 1;
    let removeAmount = warnings.length - 1 - warningsAmount;
    if (warnings.length * warningWidth < pageWidth) {
        for (let i = 0; i < addAmount; i++) {
            warningWrapper.append(warning.cloneNode(true));
        }
    } else {
        for (let i = 0; i < removeAmount; i++) {
            warnings[warnings.length - 1].remove();
        }
    }
}


// teamSwiper //

let teamSwiper = new Swiper('.team__inner', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 50,
    loop: true,
});
