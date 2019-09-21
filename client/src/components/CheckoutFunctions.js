import axios from 'axios'
import jwt_decode from 'jwt-decode'


export const getList = () => {
    return axios
        .get('/checkout', {
            params:{   
                guest_email: jwt_decode(localStorage.usertoken).identity.email
            }
        })
        .then(res => {
            var data = []
            Object.keys(res.data).forEach(function (key) {
                var val = res.data[key]
                data.push([val.house_name, val._id, val.house_type, val.email])
            })

            return data
        })
}

export const addToList = (term) => {
    return axios
        .put(`/checkout`, {
                guest_email: term
            }, {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            console.log(response)
        })
}

export const deleteItem = term => {
    axios
        .delete(`/checkout/${term}`, {
            headers: { 'Content-type': 'application/json' }
        })
        .then((response) => {
            console.log(response)
        })
        .catch((response) => {
            console.log(response)
        })
}

export const updateItem = (id) => {
    return axios
        .put(`/checkout/${id}`, {
            is_rented: true,
            guest_email: ''
        }, {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            console.log(response)
        })
}