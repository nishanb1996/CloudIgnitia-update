// Simple client-side router
export class Router {
  constructor() {
    this.routes = new Map()
    this.currentPage = 'home'
  }

  addRoute(path, handler) {
    this.routes.set(path, handler)
  }

  navigate(path) {
    const handler = this.routes.get(path)
    if (handler) {
      this.currentPage = path
      const app = document.querySelector('#app')
      handler(app)
      
      // Re-initialize animations and navigation after page change
      setTimeout(() => {
        if (window.initializeAnimations) {
          window.initializeAnimations()
        }
        if (window.initializeNavigation) {
          window.initializeNavigation()
        }
      }, 100)
      
      // Scroll to top
      window.scrollTo(0, 0)
    }
  }

  getCurrentPage() {
    return this.currentPage
  }
}

// Global router instance
export const router = new Router()

// Global navigation function
window.navigateTo = (page) => {
  router.navigate(page)
}