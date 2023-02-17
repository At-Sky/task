import React, { useEffect, useState } from "react";
import styles from "@/styles/CardList.module.scss"
import useData from "@/pages/hooks/useData";
import Card from "@/pages/components/Card";

function CardList(): JSX.Element {
    const [prods, setProds] = useState<any>(null);
    //const { data:prods } = useData('https://fakestoreapi.com/products')

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProds(data);
        };

        fetchData()
    }, []);
    

    return (
        <div className={styles.cardList}>
            {prods && prods.map((prod: any) =>
                <Card prodObj={prod} key={prod.id}/>
            )}
        </div>
    )
}

export default CardList;