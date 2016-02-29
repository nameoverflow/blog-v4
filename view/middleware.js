export const CALL_API = Symbol('CALL_API')

export const apiFactory = makeRequest => store => next => action => {
    if (!action[CALL_API]) {
        return next(action)
    }
    const req = action[CALL_API]
    const { method, url, success, fail, extra } = req
    return makeRequest(url, { method })
        .then(data => next({
            type: success,
            data: data,
            extra
        }))
        .catch(err => {
            console.log(err.stack)
            return next({
                type: fail,
                err: err
            })
        })
}