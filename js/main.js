const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click', navButton.children[0].style);
  // console.log('click');

  // if (navButton.children[0].style.display === 'block') {
  //   console.log('1');
  //   navButton.children[0].style.display = 'none';
  //   navButton.children[1].style.display = 'block';
  // }

  // if (navButton.children[0].style.display === 'none') {
  //   console.log('2');
  //   navButton.children[0].style.display = 'block';
  //   navButton.children[1].style.display = 'none';
  // }
  navButton.children[0].classList.toggle('hide');
  navButton.children[1].classList.toggle('show');

  document.querySelector('.nav-container').classList.toggle('show');
});
