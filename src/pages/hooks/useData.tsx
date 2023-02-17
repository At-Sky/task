import {useState, useEffect} from "react"

const useData = (url: string): {data: Array<{}>} => {
    const [state, setState] = useState([]);

    const dataFetch = async () => {
        const data = await (await fetch(url)).json();

        setState(data);
    };

    useEffect(() => {
        dataFetch()
    }, [url]);

    return { data: state };
};

export default useData;