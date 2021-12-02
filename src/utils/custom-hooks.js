import {useEffect} from "react";

const useMount = (fn) => {
    useEffect(() => {
        fn()
    }, [])
}

const useDebounce = (fn, wait) => {
    useEffect( () => {
        const time = setTimeout(() => {
            fn()
        }, wait)
        return () => clearTimeout(time)
    }, [])
}

export {useMount, useDebounce}