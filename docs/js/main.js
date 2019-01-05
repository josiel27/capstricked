var cardMiddle = $('#cardMiddle');
var numberCP = document.getElementById('numberCP');
numberRandom = Math.floor(Math.random() * 99999) + 900000;
numberCP.textContent = numberRandom;

animationRight = () => {
    cardMiddle.addClass('animated bounceOutLeft');
    setTimeout(function () {
        cardMiddle.removeClass('animated bounceOutLeft');
        cardMiddle.addClass('animated bounceInRight');
        setTimeout(function () {
            cardMiddle.removeClass('animated bounceInRight');
        }, 500);
    }, 400);

    numberRandom = Math.floor(Math.random() * 99999) + 900000;
    numberCP.textContent = numberRandom;
  console.log()
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