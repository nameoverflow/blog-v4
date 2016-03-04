import React from 'react'
export default ({ list }) => list && list.length ? list.map(v => (
    <li key={ v._id }>
        <ListView>
            { v }
        </ListView>
    </li>
)) : <li> LOADING </li>