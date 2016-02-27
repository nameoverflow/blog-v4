import React from 'react';
import { Link } from 'react-router';

const list = ['home', 'archives', 'lab', 'about']

if (typeof window !== 'undefined') {
    require('./Sidebar.sass')
    list.map(v => require(`../../assert/${v}.svg`))
}

const Btn = ({ name }) =>
    <Link to={`/${name == 'home' ? '' : name}`} className="Btn">
       {
       // <img src={`/static/${name}.svg`} type="image/svg+xml"/>
       }
       { name }
    </Link>

export default () =>
    <aside className='Header'>
        <section className='avatar'>
            <div className='av-pic'/>
        </section>
        <section className='menu'>
            <div>Hcyue</div>
            <div>What the f__k?</div>
            <ul>
        {
            list.map(item =>
                <li key={item}>
                    <Btn name={item}/>
                </li>
            )
        }
            </ul>
        </section>
    </aside>

