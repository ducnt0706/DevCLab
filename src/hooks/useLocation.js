import Geolocation from '@react-native-community/geolocation';
import { useState, useEffect} from 'react';

const useLocation = () => {
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);

    const getLatLong = () => {
        Geolocation.getCurrentPosition(info => {
            let { latitude, longitude } = info.coords;
            setLat(latitude);
            setLong(longitude);
        });
    }

    useEffect(() => {
        getLatLong();
    },[])

    return [lat, long];
}

export default useLocation;