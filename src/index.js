import 'babel-polyfill'

export default class TeenyWeenyRouter {
  constructor (routes) {
    this.routes = routes
  }

  start () {
    this._popStateHandler = () => {
      this.route()
    }
    window.addEventListener('popstate', this._popStateHandler)

    this._clickHandler = event => {
      if (event.target.tagName === 'A') {
        if (event.target.href.startsWith(window.location.origin)) {
          event.preventDefault()
          window.history.pushState(null, '', event.target.attributes.href.value)
          this.route()
        }
      }
      this.route()
    }
    document.addEventListener('click', this._clickHandler)

    this.route()
  }

  stop () {
    window.removeEventListener('popstate', this._popstateHandler)
    document.removeEventListener('click', this._clickHandler)
  }

  route () {
    const router = this.routes
      .sort((a, b) => b.route.source.length - a.route.source.length)
      .find(obj => obj.route.test(window.location.pathname))

    if (router) router.view()
  }
}
