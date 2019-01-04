var cardMiddle = $('#cardMiddle');

animationRight = () => {
    cardMiddle.addClass('animated bounceOutLeft');
    setTimeout(function () {
        cardMiddle.removeClass('animated bounceOutLeft');
        cardMiddle.addClass('animated bounceInRight');
        setTimeout(function () {
            cardMiddle.removeClass('animated bounceInRight');
        }, 500);
    }, 400);
}

animationLeft = () => {
    cardMiddle.addClass('animated bounceOutRight');
    setTimeout(function () {
        cardMiddle.removeClass('animated bounceOutRight');
        cardMiddle.addClass('animated bounceInLeft');
        setTimeout(function () {
            cardMiddle.removeClass('animated bounceInLeft');
        }, 500);
    }, 400);
}


    // $('#cardRight').addClass('animated tada');
    // $('#cardLeft').addClass('animated tada');