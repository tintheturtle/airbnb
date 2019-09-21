import React, { Component } from 'react'
import { getList, addToList, deleteItem } from './CheckoutFunctions'
import { updateItem} from './CheckoutFunctions'

import jwt_decode from 'jwt-decode'

class Checkout extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            term: '',
            is_rented: false,
            guest_email: jwt_decode(localStorage.usertoken).identity.email,
            editDisabled: false,
            house_name: '',
            items: []
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount () {
        this.setState({
            guest_email: jwt_decode(localStorage.usertoken).identity.email,
        })
        this.getAll()
    }

    onChange = event => {
        this.setState({
            term: event.target.value,
            editDisabled: 'disabled'
        })
    }

    getAll = () => {
        getList(this.state.guest_email).then(data => {
            this.setState(
                {
                    term: '',
                    items: [...data]
                },
                () => {
                    console.log(this.state.term)
                    console.log(this.state.guest_email)
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

    onUpdate = e => {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        updateItem(this.state.id, user).then(() => {
            this.getAll()
        })
    }

    onEdit = ( itemid, e) => {
        e.preventDefault()
        this.setState({
            id: itemid,
            guest_email: '',
            is_rented: false
        })
        console.log(itemid)
    }


    render () {
        return (
            <div className="col-md-12">
                <h1 className="listings-title">Properties Rented</h1> 
                <table className="table">
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
                                        Request to Checkout
                                    </button>
                                    <button
                                    className="btn btn-primary"
                                    onClick={this.onUpdate.bind(this)}>
                                    Finalize Checkout
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Checkout