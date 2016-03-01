import React from 'react'
import { Link } from 'react-router'

const list = ['home', 'archives', 'lab', 'about']

if (typeof window !== 'undefined') {
    require('./Sidebar.sass')
}

export default () =>
    <aside className='SideBar'>
        <section className='avatar'>
            <div className='av-pic'/>
        </section>
        <section className='menu'>
            <div>Hcyue</div>
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
    </aside>

