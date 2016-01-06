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
    const router = this.routes
      .sort((a, b) => b.route.source.length - a.route.source.length)
      .find(obj => obj.route.test(window.location.pathname))

    if (router) router.view()
  }
}
