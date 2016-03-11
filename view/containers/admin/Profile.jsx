import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router'
import Time from '../../components/Time'
import TagList from '../../components/TagList'

const Entity = ({ tags, title, _id, createDate }) =>
    <li>
        <Link to={`/admin/edit/${_id}`}>
            <h2> { title } </h2>
        </Link>
        <div className='ListMeta'>
            <Time {...{ createDate }} />
            { tags && tags[0] ? [' |', ...TagList(tags)] : [] }
        </div>
    </li>

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentWillMount() {
        const type = this.props.route.name === 'page' ? 'page' : 'article'
        const url = `${window.location.origin}/api/${type}?limit=0`
        fetch(url, { method: 'get' })
            .then(res => res.json())
            .then(res => this.setState({ list: res }))
    }
    render() {
        const viewList = this.state.list.map(v => <Entity key={ v._id } { ...v } />)
        return (
            <div className="Profile">
                <ul>
                    { viewList }
                </ul>
            </div>
        )
    }
}
