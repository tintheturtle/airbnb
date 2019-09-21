import React, { Component } from 'react'
import { register_host } from './UserFunction'

class RegisterHost extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            house_name: '',
            house_type: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const newHost = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            house_name: this.state.house_name,
            house_type: this.state.house_type,
        }

        register_host(newHost).then(res => {
            this.props.history.push(`/profile`)
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate={true} onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Host Register</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="house_name">House Name </label>
                                <input type="house_name"
                                    className="form-control"
                                    name="house_name"
                                    placeholder="Enter House Name"
                                    value={this.state.house_name}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="house_type"> House Type </label>
                                <input type="house_type"
                                    className="form-control"
                                    name="house_type"
                                    placeholder="Enter house type"
                                    value={this.state.house_type}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block">
                                Finish Host Registration
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegisterHost