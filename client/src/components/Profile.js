import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { checkoutItem } from './UserFunction'
import Checkout from './Checkout'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            rented: ''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.identity.first_name,
            last_name: decoded.identity.last_name,
            email: decoded.identity.email,
            guest_email: jwt_decode(localStorage.usertoken).identity.email,
        })
    }

    onUpdate = e => {
        e.preventDefault()
        checkoutItem(this.state.id).then(() => {
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
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>                       
                        </tbody> 
                    </table>
                </div>
                <Checkout/>

            </div>
        )
    }
}

export default Profile