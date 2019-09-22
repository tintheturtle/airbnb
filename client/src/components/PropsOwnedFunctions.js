import axios from 'axios'
import  jwt_decode from 'jwt-decode'


export const getList = () => {
    return axios
        .get('/profile', {
            params:{   
                host_email: jwt_decode(localStorage.usertoken).identity.email
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