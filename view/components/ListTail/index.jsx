import React from 'react'

if (typeof window !== 'undefined') {
    require('./ListTail.sass')
}

export default ({ text }) =>
    <section className="ListTail">- { text } -</section>
