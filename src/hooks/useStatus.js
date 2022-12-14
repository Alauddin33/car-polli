import { useEffect, useState } from "react"

const useStatus = email => {
    const [isStatus, setIsStatus] = useState(true);
    const [isStatusLoading, setIsStatusLoading] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://car-polli-server.vercel.app/products/status/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.isStatus);
                    setIsStatus(data.isStatus);
                    setIsStatusLoading(false);
                })
        }

    }, [email])
    console.log(isStatus);
    return [isStatus, isStatusLoading]
}

export default useStatus;