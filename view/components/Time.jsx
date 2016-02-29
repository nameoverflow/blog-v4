import React from 'react'
import { formatTime } from '../utils'

export default ({ createDate }) =>
    <time>
        { formatTime(createDate) }
    </time>

