import { addDays, getTime } from 'date-fns'

const EXPIRATION_ITEM = '_expiration'
const EXPIRATION_DAYS_DEFAULT = 182
const ITEM_METRIKA = 'metrika'
const ITEM_NEIROS_VISIT = 'nvisit'
const ITEM_SESSION = 'session'

export default {
  deleteAll() {
    localStorage.removeItem(ITEM_METRIKA)
    localStorage.removeItem(ITEM_NEIROS_VISIT)
    localStorage.removeItem(ITEM_SESSION)
    localStorage.removeItem(EXPIRATION_ITEM)
  },
  get(item) {
    const expiration = this.isExpired()
    if (expiration) {
      this.deleteAll()
      return
    }
    return localStorage.getItem(item)
  },
  getExpiration() {
    return localStorage.getItem(EXPIRATION_ITEM)
  },
  setExpiration(time = null) {
    if (!time) {
      time = getTime(addDays(new Date(), EXPIRATION_DAYS_DEFAULT))
    }
    localStorage.setItem(EXPIRATION_ITEM, time)
  },
  set(item, value) {
    localStorage.setItem(item, value)
  },
  isExpired() {
    const expiration = this.getExpiration()
    if (!expiration) return true
    const now = Date.now()
    return now >= expiration
  },
}
