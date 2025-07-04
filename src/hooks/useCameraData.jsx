import { useState, useEffect } from "react";
import { fetchCameras } from "../utils/api";

const useCameraData = () => {
    const [cameras, setCameras] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async() =>{
            const data = await fetchCameras();
            setCameras(data);
            setLoading(false);
        };
        load();
    },[]);
    return{cameras, setCameras, loading};
}

export default useCameraData;