import {useState, useEffect} from "react"

const useData = (url: string): {data: Array<{}>} => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (await fetch(url)).json();

            setState(data);
        };

        dataFetch();
    }, [url]);

    return { data: state };
};

export default useData;