import React from 'react';
import { Link } from 'react-router';

if (typeof window !== 'undefined') {
    require('./header.sass')
}

const Btn = ({ name }) =>
    <Link to={`/${name == 'home' ? '' : name}`} className="NavBtn">
        <div>
            <img src={`/static/img/${name}.svg`} type="image/svg+xml"/>
        </div>
    </Link>

export default ({ list }) =>
    <header className='Header'>
        <section className='avatar'>
            <div className='av-pic'/>
        </section>
        <ul>
    {
        list.map(item =>
            <li key={item}>
                <Btn name={item}/>
            </li>
        )
    }
        </ul>
    </header>

