import { Router } from "./router.js"

const clickHome = document.querySelector('.clickHome')
const clickTheUniverse = document.querySelector('.clickTheUniverse')
const clickExploration = document.querySelector('.clickExploration')
const imgHome = document.querySelector('.imgHome')
const imgTheUniverse = document.querySelector('.imgTheUniverse')
const imgExploration = document.querySelector('.imgExploration')


clickHome.addEventListener('click', clickButtonHome )
clickTheUniverse.addEventListener('click', clickButtonTheUniverse)
clickExploration.addEventListener('click', clickButtonExploration)

function clickButtonHome() {
    clickHome.classList.add('colorClick')
    clickTheUniverse.classList.remove('colorClick')
    clickExploration.classList.remove('colorClick')
    imgHome.classList.remove('hide')
    imgExploration.classList.add('hide')
    imgTheUniverse.classList.add('hide')
}

function clickButtonTheUniverse() {
    clickHome.classList.remove('colorClick')
    clickTheUniverse.classList.add('colorClick')
    clickExploration.classList.remove('colorClick')
    imgHome.classList.add('hide')
    imgExploration.classList.add('hide')
    imgTheUniverse.classList.remove('hide')
}

function clickButtonExploration() {
    clickHome.classList.remove('colorClick')
    clickTheUniverse.classList.remove('colorClick')
    clickExploration.classList.add('colorClick')
    imgHome.classList.add('hide')
    imgExploration.classList.remove('hide')
    imgTheUniverse.classList.add('hide')
}

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/theUniverse", "/pages/theUniverse.html")
router.add("/exploration", "/pages/exploration.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()