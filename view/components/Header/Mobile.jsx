import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'


const Btn = ({ name }) =>
    <Link to={`/${name == 'Home' ? '' : name.toLowerCase()}`}>
        <div>
            {name}
        </div>
    </Link>

const dispToProp = dispatch => ({
    toggle() {
        dispatch(toggleMobile)
    }
})

const stateToProp = (state, { list }) => ({
    show: state.navDisplay,
    list
})

@connect(stateToProp, dispToProp)
export default class Mobile extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        const { list, show, toggle } = this.props
        return (
            <header style={{ left: show ? '0' : '-150px' }}>
                <div onClick={ () => toggle() } />
                <div className="banner">
                    <img src="/static/img/head.png"/>
                </div>
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
        )
    }
}