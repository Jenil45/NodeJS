import axios from 'axios'

const url ='http://localhost:8000';

export const getUserDetail  = async (id) => {
    try {
        return await axios.get(`${url}/getPlayerDetail/${id}`)
    } catch (error) {
        console.log("Error while calling api " + error);
    }
}