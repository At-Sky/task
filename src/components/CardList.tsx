import React from "react";
import styles from "@/styles/CardList.module.scss"
import useData from "@/hooks/useData";
import Card from "@/components/Card";

function CardList(): JSX.Element {
    const { data:prods } = useData('https://fakestoreapi.com/products')

    return (
        <div className={styles.cardList}>
            {prods && prods.map((prod: any) =>
                <Card prodObj={prod} key={prod.id}/>
            )}
        </div>
    )
}

export default CardList;