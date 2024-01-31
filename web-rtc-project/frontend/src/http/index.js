import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:5500",
    withCredentials: true,
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
})
export const apiPrivate = axios.create({
    baseURL : "http://localhost:5500",
    withCredentials: true,
    headers : {
        'Content-Type' : 'application/json',
        Accept : 'application/json'
    }
})


//  creating request for sending otp
export const sendOtp = (data) => {
    console.log(data);
    return api.post('/api/sendOtp' , data);
}

// check the otp is correct or not
export const verifyOtp = (data) => {
    return api.post('/api/verifyOtp' , data);
}

// save the profile and activate the user
export const activateUser = (data) => {
    return api.post('/api/activateUser' , data);
}

//  handling logout
export const logoutUser = () => {
    return api.post('/api/logout');
}

// creating a room
export const addRoom = (data) => {
    return api.post('/api/createRoom' , data)
}

// fetching all room
export const getAllRooms = () => {
    return api.get('/api/getRooms')
}

//  now we make an interceptor
api.interceptors.response.use(
    (response) => {
      // Modify the response data here (e.g., parse, transform)
      return response;
    },
    async (error) => {
        // Handle response errors here
        //  first we store the original request they we have to emit again
        const originalRequest = error.config
        if(error.response.status === 401 && originalRequest && !originalRequest._isRetry)
        {
            originalRequest._isRetry = true;

            try {
                const response = await api.post('/api/refresh');

                return api.request(originalRequest);
            } catch (error) {
                console.log(error.message);
            }
        }
    }
  );


export default api;