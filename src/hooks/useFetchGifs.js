import {useEffect, useState} from "react";
import getGifs from "../utils/getGifs";

const useFetchGifs = (category) => {
    const [state, setState] = useState(
        {
            data: [],
            loading: true,
        }
    )

    useEffect(() => {
        getGifs(category).then(images => {
            setState({
                data: images,
                loading: false,
            })
        })
    }, [category])
    return state
}


export default useFetchGifs