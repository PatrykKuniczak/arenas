import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    // Make the flash message disappear after 3 seconds
    setTimeout(() => {
      this.element.remove()
    }, 3000)
  }
}