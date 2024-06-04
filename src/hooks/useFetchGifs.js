import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [ isLoading, setLoading ] = useState(false);
    useEffect(() => {
        setLoading( true );
        getGifs(category)
            .then( setImages )
            .finally( () => setLoading( false ) );
    }, []);
    
    getGifs(category);
    return {
        images,
        isLoading,
    };
};