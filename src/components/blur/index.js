var blur = (function() {
  var wrapper = document.querySelector('.blur__form-wrapper'),
    form = document.querySelector('.blur__form');

  return {
    set: function() {
      var imgWith = document.querySelector('.reviews__bg').offsetWidth,
        imgHeight = document.querySelector('.reviews__bg').offsetHeight,
        posLeft = -wrapper.offsetLeft,
        posTop = -wrapper.offsetTop,
        blurCSS = form.style;

      blurCSS.backgroundSize = imgWith + 'px' + ' ' + imgHeight + 'px';
      blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';

    },
  };



}());

blur.set();

window.onresize = function () {
  blur.set();
};