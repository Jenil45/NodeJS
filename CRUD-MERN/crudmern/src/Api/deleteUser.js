import axios from 'axios'

const url ='http://localhost:8000';

export const deleteUser  = async (id) => {
    try {
        console.log(id)
        return await axios.delete(`${url}/deletePlayer/${id}`)
        
    } catch (error) {
        console.log("Error while calling api " + error);
    }
} 