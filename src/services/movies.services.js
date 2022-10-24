import {axiosService} from "./axios.service";
import {urls} from "../configs";

const moviesService = {
    getAll:(page:number =1)=>axiosService.get(urls.movies, {params:{page}}),
}

export {
    moviesService
}