import React from 'react'
import { Link } from 'react-router'

export default ({ tags, title, _id, createDate }) =>
    <li>
        <Link to={`/article/${_id}`}>
            <h2> { title } </h2>
        </Link>
        <div className='ListMeta'>
            <Time {...{ createDate }} />
            { tags && tags[0] ? [' |', ...TagList(tags)] : [] }
        </div>
    </li>