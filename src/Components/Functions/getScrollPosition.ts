export default function getScrollPosition(): void {
  const header = document.querySelector('.background-header');
  if (!header) return;
  if (window.pageYOffset !== 0) {
    header.classList.add('background-true');
  } else {
    header.classList.remove('background-true');
  }
}
