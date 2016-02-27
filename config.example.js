module.exports = {
    site: {
        admin: {
            name: "fucker",
            passwd: "123"
        },
        view: './view/templates',
        db: {
            url: "mongodb://localhost/blog"
        }
    },
    view: {
        path: './server/templates/'
    },
    tpl_globals: {
        static_path: '/static/'
    }
}
