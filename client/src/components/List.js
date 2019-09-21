import React, { Component } from 'react'
import { getList, addToList } from './ListFunctions'
import { updateItem} from './UserFunction'
import  jwt_decode from 'jwt-decode'

import {Jumbotron, Container} from 'react-bootstrap'

import './styles/List.css'


class List extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            term: '',
            is_rented: false,
            guest_email: '',
            editDisabled: false,
            house_name: '',
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount () {
        this.getAll()
        
    }

    onChange = event => {
        this.setState({
            term: event.target.value,
            editDisabled: 'disabled'
        })
    }

    getAll = () => {
        getList().then(data => {
            this.setState(
                {
                    term: '',
                    items: [...data]
                },
                () => {
                    console.log(this.state.term)
                }
            )
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.setState({ editDisabled: '' })
        addToList(this.state.term).then(() => {
            this.getAll()
        })
    }

    onUpdate = (e, itemid) => {
        e.preventDefault()

        this.setState({
            id: itemid,
            guest_email: jwt_decode(localStorage.usertoken).identity.email,
            is_rented: false
        })
        
        updateItem(this.state.id).then(() => {
            this.getAll()
        })
        this.props.history.push('/profile')

    }

    onEdit = ( itemid, e) => {
        e.preventDefault()
        this.setState({
            id: itemid,
            guest_email: jwt_decode(localStorage.usertoken).identity.email,
            is_rented: false
        })
    }



    render () {
        return (
            <div id="bootstrap" className="list-section col-md-12">
                <div id="container-two">
                    <Jumbotron fluid id="tron">
                        <Container>
                            <h1>Available Properties</h1>
                            <p>
                                Explore what properties are available for rent!
                            </p>
                        </Container>
                    </Jumbotron>
            </div>
            <div className="listing-section">
                <table className="table">
                    <h1>Rent these houses below!</h1>
                        <tbody>
                            {this.state.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="text-left">{item[0]}</td>
                                    <td className="text-left">{item[2]}</td>
                                    <td className="text-left">{item[3]}</td>
                                    <td className="text-right">
                                        <button
                                            className="btn btn-info mr-1"
                                            disabled={this.state.editDisabled}
                                            onClick={this.onEdit.bind(this, item[1])}
                                        >
                                            Add to Rent List
                                        </button>
                                        <button
                                        className="btn btn-primary"
                                        onClick={this.onUpdate.bind(this)}>
                                        Rent
                                    </button>
                                    
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
            </div>
        )
    }
}

export default List