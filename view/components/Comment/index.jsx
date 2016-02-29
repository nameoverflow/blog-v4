import React, { Component, PropTypes } from 'react'

export default class Comment extends Component {
    getConfig() {
        this.page.url = window.location.toString()
        this.page.identifier = window.location.pathname
    }
    addScript() {
        window.disqus_config = this.getConfig
        const s = document.createElement('script')
        const p = document.head || document.body
        s.src = '//hcyue.disqus.com/embed.js'
        s.setAttribute('data-timestamp', +new Date())
        p.appendChild(s)
    }
    componentDidMount() {
        if (typeof DISQUS === 'undefined') {
            this.addScript()
        } else {
            DISQUS.reset({
                reload: true,
                config: this.getConfig
            })
        }
    }
    render() {
        return <div id="disqus_thread" />
    }
}

