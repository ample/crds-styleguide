window['CRDS'] = window['CRDS'] || {};

CRDS.CardCarousel = function() {
  return this.addEvents();
}

CRDS.CardCarousel.prototype.constructor = CRDS.CardCarousel;

CRDS.CardCarousel.prototype.getCarousel = function() {
  return document.body.querySelector('.card-deck--carousel');
};

CRDS.CardCarousel.prototype.getCards = function() {
  return this.getCarousel().querySelectorAll('.card');
};

CRDS.CardCarousel.prototype.createCarousel = function() {
  this.getCarousel().classList.remove('card-deck');
  new Flickity(this.getCarousel(), {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false
  });
  this.updateCardClass('add');
};

CRDS.CardCarousel.prototype.updateCardClass = function(action) {
  for (var card = 0; card < this.getCards().length; card++) {
    this.getCards()[card].classList[action]('carousel-cell');
  };
};

CRDS.CardCarousel.prototype.destroyCarousel = function() {
  this.getCarousel().classList.add('card-deck');
  new Flickity(this.getCarousel()).destroy();
  this.updateCardClass('remove');
};

CRDS.CardCarousel.prototype.addStyles = function() {
  if (window.matchMedia('(max-width: 769px)').matches) {
    this.createCarousel();
  } else {
    this.destroyCarousel();
  };
};

CRDS.CardCarousel.prototype.addEvents = function() {
  var _this = this;
  ['load', 'resize'].forEach(function(eventName) {
    window.addEventListener(eventName, function() {
      _this.addStyles();
    }, false);
  });
};

new CRDS.CardCarousel();
