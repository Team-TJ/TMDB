import axios from 'axios'
import { useLoadingStore } from '@/states/loading';
export const useAxios = () => {
  const Loading = useLoadingStore(state => state.Loading)
  const endLoading = useLoadingStore(state => state.endLoading)
  const instance = axios.create({
    baseURL:"https://api.themoviedb.org/",
    timeout:3000,
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
    },
  });
  instance.interceptors.request.use((config)=>{
    Loading()
    return config
  })
  instance.interceptors.response.use((config)=>{
    endLoading()
    return config
  })
  return [instance]
}

