import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3157'
})

instance.interceptors.request.use((config) => {

        config.headers = config.headers ?? {}; //!исправляет ошибку неопределенности Object is possibly 'undefined'.

        config.headers.Authorization = window.localStorage.getItem('token')

        return config
    }
)

export default instance