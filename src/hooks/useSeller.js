import { useEffect, useState } from "react"

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(true);
    const [isSellerLoading, setIsSellerLoading] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://car-polli-server.vercel.app/user/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.isSeller);
                    setIsSeller(data.isSeller);
                    setIsSellerLoading(false);
                })
        }

    }, [email])

    return [isSeller, isSellerLoading]
}

export default useSeller;