function getScrollPosition() {
  if(window.pageYOffset !== 0) {
    document.querySelector('.background-header').classList.add('background-true')
  }else{
    document.querySelector('.background-header').classList.remove('background-true')
  }
};
export default getScrollPosition