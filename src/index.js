import 'babel-polyfill'

export default class TeenyWeenyRouter {
  constructor (routes, nav) {
    this.routes = routes

    window.addEventListener('popstate', event => {
      console.log(event)
      this.route()
    })

    document.querySelector(nav).addEventListener('change', event => {
      window.history.pushState(null, '', event.target.value)
      this.route()
    })

    this.route()
  }

  route () {
    Array.from(document.querySelectorAll('section'))
      .forEach(section => section.style.display = 'none')

    const router = this.routes.sort((a, b) => {
      return b.router.source.length - a.router.source.length
    }).find(obj => {
      return obj.router.test(window.location.pathname)
    })

    document.title = router.title
    document.querySelector(router.element).style.display = 'block'
  }
}
