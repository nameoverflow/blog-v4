import React from 'react'

import LoadingAnimation from '../LoadingAnimation'
if (typeof window !== 'undefined') {
    require('./ListTail.sass')
}

export default ({ isEnd }) =>
    <section className="ListTail">
        { isEnd ? "- End -" : <LoadingAnimation/>}
    </section>
