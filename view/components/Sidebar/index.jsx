import React from 'react'
import { Link } from 'react-router'
import { asset } from '../../utils'
const list = ['home', 'archives', 'tags', 'about']

if (typeof window !== 'undefined') {
    require('./Sidebar.sass')
    require('../../assets/github.svg')
    require('../../assets/facebook.svg')
}

export default () =>
    <aside className='SideBar'>
        <section className='avatar'>
            <div className='av-pic'/>
        </section>
        <section className='menu'>
            <div>Nameoverflow</div>
            <div>What the f__k?</div>
            <ul>
        {
            list.map(item =>
                <Link
                    key={item}
                    to={`/${item == 'home' ? '' : item}`}
                    className="Btn"
                    activeClassName="active"
                    onlyActiveOnIndex={ item == 'home' ? true : false }>
                    <li>
                        { item }
                    </li>
                </Link>
            )
        }
            </ul>
        </section>
        <section className="media">
            <a href="https://github.com/nameoverflow">
                <img src="/static/github.svg" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100004252391322">
                <img src="/static/facebook.svg" />
            </a>
        </section>
    </aside>

