// import test from './modules/test.js'
import navAndBurger from './modules/navAndBurger.js'
import navShadow from './modules/navShadow.js'

window.addEventListener('DOMContentLoaded', () => {
// test()
// navAndBurger()
window.addEventListener('load', navAndBurger);
window.addEventListener('resize', navAndBurger);
navShadow()

})