import {create} from 'zustand'
export const useLoadingStore = create<{
  isLoadingYet:boolean
  isLoadingCnt:number
  Loading:()=>void
  endLoading:()=>void
}>
(set => ({
  isLoadingYet:true,
  isLoadingCnt:0,
  Loading: ()=> set(state => ({isLoadingCnt: state.isLoadingCnt + 1 ,isLoadingYet:true})),
  endLoading: ()=> set(state => ({isLoadingCnt: state.isLoadingCnt - 1,isLoadingYet:false }))
}))