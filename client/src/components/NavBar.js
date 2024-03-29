  
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './styles/NavBar.css'

import atom from './styles/background-images/logo192.png'


class Navbar extends Component {
    logOut (e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render () {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Registration
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile Information
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register_host" className="nav-link">
                        Host Registration
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/tasks" className="nav-link">
                        Property Listings
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1">
                    <img id="atom" src={atom}/>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>

                    {(localStorage.usertoken !== undefined) ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)