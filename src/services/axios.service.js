import axios from "axios"
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config)=> {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmFjMDY2YzUzNzNhMjUyMWYyNzhkNTkwZmNkNWM2OSIsInN1YiI6IjYzNGQyNTc3ODlmNzQ5MDA4MmUxYzY4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j0VohOeklftoWAC5ZW2HRZAy26AdIktLWzhICiN89z8`
return config
})

export {
    axiosService
}

