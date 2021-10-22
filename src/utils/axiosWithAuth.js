import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://bw-fitness-4.herokuapp.com'
    })
}