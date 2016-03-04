import React from 'react'
import { formatTime } from '../../utils'

if (typeof window !== 'undefined') {
    require('./Time.sass')
}

export default ({ createDate }) =>
    <time>
        { formatTime(createDate) }
    </time>

