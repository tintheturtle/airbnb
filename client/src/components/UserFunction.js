import axios from 'axios'
import  jwt_decode from 'jwt-decode'


export const register = newUser => {
    return axios
        .post("/register", {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log("Registered ")
        })
}

// For registering a host and their property
export const register_host = newHost => {
    return axios
        .post("/register_host", {
            email: newHost.email,
            password: newHost.password,
            //House information
            house_name: newHost.house_name,
            house_type: newHost.house_type,
            rent_status: ''
        })
        .then(response => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post("http://localhost:3000/login", {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}

export const login_host = host => {
    return axios
        .post("http://localhost:3000/login_host", {
            email: host.email,
            password: host.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}

export const updateItem = (id, user) => {
    return axios
        .put(`/task/${id}`, {
            guest_email: jwt_decode(localStorage.usertoken).identity.email,
            is_rented: true
        }, {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            console.log(response)
        })
}

export const checkoutItem = (id,user) => {
    return axios
        .put(`/task/${id}`, {
            guest_email: user.email,
            is_rented: false
        }, {
                headers: { 'Content-type': 'application/json' }
            }
        )
        .then((response) => {
            console.log(response)
        })
}

export const checkIn = user => {
    return axios
        .put("http://localhost:3000/login", {
            email: user.email,
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        })
        .catch(err => {
            console.log(err)
        })
}




