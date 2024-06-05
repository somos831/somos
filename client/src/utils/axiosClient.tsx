import axios from 'axios'

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
})

export const generateAciosHeaderConfig = (token:string) => {
    return {
        headers: {
            "Content-Type": "application/json",
            ...(token && {
                "Authorization": `Bearer ${token}`
            })
        }
    }
}

export default axiosClient;