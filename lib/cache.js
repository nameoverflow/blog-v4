const cached = Symbol('data')
const cache = {
    [cached]: {},
    get(url) {
        return this[cached][url]
    },
    set(url, str) {
        this[cached][url] = str
    },
    clear() {
        this[cached] = {}
    }
}

export default conn => conn.cache = cache
