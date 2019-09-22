import React, { Component } from 'react'
import { getList, addToList } from './ListFunctions'
import { updateItem} from './UserFunction'
import  jwt_decode from 'jwt-decode'

import {Jumbotron, Container} from 'react-bootstrap'

class PropOwned extends Component {
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


    render () {
        return (
            <div id="bootstrap" className="col-md-12">
                <div className="listing-section">
                    <table className="table">
                        <h1>Properties Owned</h1>
                            <tbody>
                                <tr>
                                    <td>Property Name</td>
                                    <td>Host Email</td>
                                    <td>Property Type</td>
                                </tr>
                                {this.state.items.map((item, index) => (
                                    
                                    <tr key={index}>
                                        <td className="text-left">{item[0]}</td>
                                        <td className="text-left">{item[2]}</td>
                                        <td className="text-left">{item[3]}</td>
                                        <td className="text-right">
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

export default PropOwned