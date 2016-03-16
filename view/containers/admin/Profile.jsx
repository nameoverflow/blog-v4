import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'
import { Link } from 'react-router'
import Time from '../../components/Time'
import TagList from '../../components/TagList'

import iconBin from '../../assets/bin.svg'
import { scrollLoaderBundle } from '../../utils'
const Entry = ({ tags, title, _id, createDate, handleRemove }) =>
    <li className='Entry'>
        <p>
            <Link to={`/admin/edit/${_id}`}>
                { title }
            </Link>
            <span onClick={ handleRemove } className='icon-bin'>
                <img src={ iconBin } />
            </span>
        </p>
        <div className='ListMeta'>
            <Time {...{ createDate }} />
            {tags.map(tag =>
                <span className="meta-text" key={tag}>
                    {` { ${tag} } `}
                </span>)}
        </div>
    </li>

export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
        this.type = this.props.route.name === 'page' ? 'page' : 'article'
    }
    componentWillMount() {
        this.load()
            .then(() => scrollLoaderBundle.bind(() => this.load()))
    }
    componentWillUnmount() {
        scrollLoaderBundle.remove()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.route.name !== this.props.route.name) {
            this.type = nextProps.route.name === 'page' ? 'page' : 'article'
            this.setState({
                list: []
            }, () => this.load())
        }
    }
    load() {
        const url = `${window.location.origin}/api/${this.type}?limit=15&start=${this.state.list.length}`
        return fetch(url, { method: 'get' })
            .then(res =>
                res.json())
            .then(res => {
                if (!res.length) {
                    return scrollLoaderBundle.remove()
                }
                this.setState({ list: [...this.state.list, ...res] })
            })
    }
    handleRemove(item) {
        if (!confirm("Delete?")) {
            return
        }
        const url = `${window.location.origin}/api/edit/${item._id}`
        fetch(url, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res => {
            if (res.ok) {
                const items = this.state.list
                const length = items.length
                this.setState({
                    list: items.reduce((result, entry) => {
                        return item._id === entry._id ? result : [...result, entry]
                    }, [])
                })
            }
        })
    }
    render() {
        const viewList = this.state.list.map(
            v => <Entry
                    key={ v._id }
                    handleRemove={ this.handleRemove.bind(this, v) }
                    { ...v }
                    />)
        return (
            <div className="Profile">
                <div className="newBtn">
                <Link to={`/admin/new/${this.type}`}>
                    New
                </Link>
                </div>
                <ul>
                    { viewList }
                </ul>
            </div>
        )
    }
}
