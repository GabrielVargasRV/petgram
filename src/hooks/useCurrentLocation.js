import {useState,useEffect} from 'react';
import { useLocation } from 'react-router';


export const useCurrentLocation = () => {
    const location = useLocation()
    const [path,setPath] = useState(location.pathname);

    useEffect(() => {
        setPath(location.pathname)
    },[location])

    return{path}
}
