import axios from 'axios'
import useAuth from './useAuth'
import { useEffect } from 'react'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_LINK
})
const useAxiosSecure=()=>{
    const {user, userSignOut }= useAuth()
    useEffect(()=>{
        const reqInterceptor = instance.interceptors.request.use(
            (config)=>{
                const token = localStorage.getItem('token')
                if(token){
                    config.headers.Authorization = `Bearer ${token}`
                }
                return config
            }
        )
        const resInterceptor = instance.interceptors.response.use(
            (res)=>{
                return res
            },
            (err)=>{
                console.log(err)
                const status = err.status
                if(status === 403 || status === 401){
                    userSignOut()
                    .then(()=>{
                        console.log('Malitias Activities')
                    })
                }
            }
        )

    return()=>{
        instance.interceptors.request.eject(reqInterceptor)
        instance.interceptors.response.eject(resInterceptor)
    }
    },[user, userSignOut])
    return instance
}

export default useAxiosSecure;