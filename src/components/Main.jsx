import { useEffect } from "react"
import { getFeatures } from "../redux/features/actions"
import { useDispatch, useSelector } from "react-redux"

export function Main(){
    const features = useSelector(state => state.features.features) 
    const dispatch = useDispatch()
    useEffect(() =>
        {dispatch(getFeatures())}
    ,[])
    return(
        <h1>This page under development</h1>
    )
}