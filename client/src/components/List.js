import React, { Component } from 'react'
import { getList, addToList, deleteItem } from './ListFunctions'
import { updateItem} from './UserFunction'
import  jwt_decode from 'jwt-decode'

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
        console.log(jwt_decode(localStorage.usertoken).identity.email)
        console.log(itemid)
    }



    render () {
        return (
            <div className="col-md-12">
                <h1 className="listings-title">Available Properties</h1> 
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
        )
    }
}

export default List