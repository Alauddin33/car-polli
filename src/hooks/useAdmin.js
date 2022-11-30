import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data.isAdmin);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }

    }, [email])

    return [isAdmin, isAdminLoading]
}

export default useAdmin;