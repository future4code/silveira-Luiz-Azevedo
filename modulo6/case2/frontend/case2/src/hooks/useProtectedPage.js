import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useProtectedPage = () => {

    let navigate = useNavigate()
    useEffect(() => {

    }, [localStorage])
    const token = localStorage.getItem('token')

    if (token === null) {
        navigate("/login")
    }

}

export default useProtectedPage; 