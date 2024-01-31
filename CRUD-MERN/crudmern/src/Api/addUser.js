import axios from 'axios'

const url ='http://localhost:8000';

export const addUser  = async (data) => {
    try {
        console.log(data)
        return await axios.post(`${url}/addPlayer` , data)
    } catch (error) {
        console.log("Error while calling api " + error);
    }
}