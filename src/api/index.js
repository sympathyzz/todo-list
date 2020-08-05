import axios from 'axios'

const basicUrl = "https://5e9ec500fb467500166c4658.mockapi.io/todos";

const getAll = () => {
    return axios.get(basicUrl)
}

const update = (todo) => {
    return axios.put(basicUrl+"/"+todo.id, {...todo})
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
