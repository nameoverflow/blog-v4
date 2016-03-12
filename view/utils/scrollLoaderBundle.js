export const scrollLoaderBundle = {
    bind(handler, dis_to_bottom = 300) {
        if (this.__scHandler) {
            this.remove()
        }
        const d = document
        const dd = d.documentElement
        const db = d.body
        const getScrollTop = () => dd && dd.scrollTop ? dd.scrollTop : db.scrollTop
        const getClientHeight = () => {
            if (db.clientHeight && dd.clientHeight) {
                return Math.min(db.clientHeight, dd.clientHeight)
            } else {
                return db.clientHeight || dd.clientHeight
            }
        }
        this.__scHandler = function (e) {
            const scrollTop = getScrollTop()
            const clientHeight = getClientHeight()
            const scrollHeight = Math.max(db.scrollHeight, dd.scrollHeight)
            if (scrollTop + clientHeight + dis_to_bottom > scrollHeight
                && !this.isActive) {
                this.isActive = true
                handler().then(() => this.isActive = false)
            }
        }
        window.addEventListener('scroll', this.__scHandler)
    },
    remove() {
        window.removeEventListener('scroll', this.__scHandler)
    }
}
