import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux';
import api, { apiPrivate } from '../http';
import {setAuth} from '../store/authSlice';
export function useAutoLogin() {

    // loading parameter
    const [isLoading , setIsLoading] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {

        async function loadData()
        {
            try {
                const {data} = await apiPrivate.post('/api/refresh');
                console.log("data",data);
                dispatch(setAuth(data));
                setTimeout(() => {
                    setIsLoading(false);
                },400)
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }

        loadData();
    } , [])

    return isLoading;
}