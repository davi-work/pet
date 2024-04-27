export const navShadow = () => {
  const nav = document.querySelector('.header_nav'); // Выберите элемент навигации
  const navHeight = nav.offsetHeight; // Получите высоту элемента навигации

window.addEventListener('scroll', () => {
  if (window.pageYOffset > navHeight) {
    nav.classList.add('nav-scrolled'); // Добавить класс
  } else {
    nav.classList.remove('nav-scrolled'); // Удалить класс
  }
});
}

export default navShadow; 