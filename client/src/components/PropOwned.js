import React, { Component } from 'react'
import { getList, deleteItem } from './ListFunctions'


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

    onDelete = (val, e) => {
        e.preventDefault()
        deleteItem(val)

        var data = [...this.state.items]
        data.filter((item, index) => {
            if (item[1] === val) {
                data.splice(index, 1)
            }
            return true
        })
        this.setState({ items: [...data] })
    }


    render () {
        return (
            <div className="col-md-12">
                <div className="owned">
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
                                        <button
                                        className="btn btn-danger"
                                        disabled={this.state.editDisabled}
                                        onClick={this.onDelete.bind(this, item[1])}
                                    >
                                        Delete
                                    </button>
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