import axios from 'axios'

const url ='http://localhost:8000';

export const getUser  = async () => {
    try {
        return await axios.get(`${url}/allPlayer`)
    } catch (error) {
        console.log("Error while calling api get all player " + error);
    }
}