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

    this.routes.keys.forEach(key => {
      if (window.location.pathname === this.routes[key]) {
        const route = this.routes[key]
        document.title = route.title
        document.querySelector(route.element).style.display = 'block'
      }
    })
  }
}
