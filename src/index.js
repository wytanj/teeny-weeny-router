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

    this.routes.forEach(route => {
      console.log(route)
      console.log(route.router.test(window.location.pathname))
      if (window.location.pathname.match(route.router)) {
        document.title = route.title
        document.querySelector(route.element).style.display = 'block'
      }
    })
  }
}
