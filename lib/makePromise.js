export default db_cur =>
    new Promise((res, rej) => {
        db_cur.exec((err, doc) =>
            err ? rej(err) : res(doc))
    })