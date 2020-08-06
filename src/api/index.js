import axios from 'axios'

//const basicUrl = "https://5e9ec500fb467500166c4658.mockapi.io/todos";
const basicUrl="http://localhost:8083/todos"

const getAll = () => {
    return axios.get(basicUrl)
}

const update = (id) => {
    return axios.put(basicUrl+"/"+id)
}

const insert = (todo) => {
    return axios.post(basicUrl,{...todo})
}

const deleteOne = (id) => {
    return axios.delete(basicUrl+"/"+id)
}

export default {
    getAll,
    update,
    insert,
    deleteOne
}
