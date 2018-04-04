let auth = document.getElementById('btn');

auth.addEventListener('click', function() {

  document.getElementsByClassName('intro__container')[0].style= 'transform: rotateY(180deg)';
  document.getElementsByClassName('auth__btn')[0].style= 'display: none';

});

let main = document.getElementById('main-btn');

main.addEventListener('click', function() {

  document.getElementsByClassName('intro__container')[0].style= 'transform: rotateY(360deg)';
  document.getElementsByClassName('auth__btn')[0].style= 'display: block';
  
  

});
