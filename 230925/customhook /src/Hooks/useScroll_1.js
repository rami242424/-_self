import { useEffect, useState } from "react";

function useScroll (){
    const [isBottom, setIsBottom] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {

        });
    }, []);
}