import { useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {
    const [user, setuser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), user => {
            setuser(user);
            setIsLoading(false);
        });
    
        return unsubscribe;
    }, []);

    return { user, isLoading };
}

export default useUser;