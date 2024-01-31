import axios from 'axios'

const url ='http://localhost:8000';

export const updateUser  = async (data , id) => {
    try {
        console.log(data)
        return await axios.post(`${url}/updatePlayer/${id}` , data)
    } catch (error) {
        console.log("Error while calling api " + error);
    }
}