import { useEffect } from "react";



const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Car Polli`;
    }, [title])

}

export default useTitle;