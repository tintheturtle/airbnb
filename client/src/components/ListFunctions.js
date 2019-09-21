import axios from 'axios'
import  jwt_decode from 'jwt-decode'


export const getList = () => {
    return axios
        .get('/tasks', {
            headers: { 'Content-type': 'application/json' },
        })
        .then(res => {
            var data = []
            Object.keys(res.data).forEach(function (key) {
                var val = res.data[key]
                data.push([val.house_name, val._id,val.email,val.house_type])
            })

            return data
        })
}

export const addToList = (term) => {
    return axios
        .put(`/task`, {
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
        .delete(`/task/${term}`, {
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
        .put(`/task/${id}`, {
            is_rented: true,
            guest_email: jwt_decode(localStorage.usertoken).identity.email
        }, {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            console.log(response)
        })
}