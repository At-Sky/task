import React, { useEffect } from "react";
import styles from "@/styles/CardList.module.scss"
import useData from "@/pages/hooks/useData";
import Card from "@/pages/components/Card";
import IProd from "@/pages/components/Card"
function CardList(): JSX.Element {
    const { data:prods } = useData('https://fakestoreapi.com/products')

    return (
        <div className={styles.cardList}>
            {prods.map((prod, index) =>
                <Card prodObj={prod} key={index}/>
            )}
        </div>
    )
}

export default CardList;