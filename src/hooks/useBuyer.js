import { useEffect, useState } from "react"

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState(true);
    const [isBuyerLoading, setIsBuyerLoading] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.isBuyer);
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }

    }, [email])

    return [isBuyer, isBuyerLoading]
}

export default useBuyer;