let gamb = document.getElementById('gamb');


gamb.addEventListener('click', function() {
  if (navigation.classList.contains('header__navigation--active')) {
    	document.body.style.overflowY ='auto';
    	navigation.classList.remove('header__navigation--active');
    gamb.classList.remove('gamb__btn--active');
  }
  else {
    document.body.style.overflowY ='hidden';
    navigation.classList.add('header__navigation--active');
    gamb.classList.add('gamb__btn--active');
  }
});