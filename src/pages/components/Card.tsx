import React, {useEffect, useState} from "react";
import styles from "@/styles/Card.module.scss"
import Image from "next/image"
import Star from "@/pages/components/Star";
import Favorite from "@/pages/components/Favorite";

interface ICard {
    prodObj: IProd;

}

interface IProd {
    category?: string
    description?: string
    id?: number
    image?: string
    price?: number
    rating?: {
        count: number,
        rate: number
    }
    title?: string
}

export default function Card({prodObj}: ICard): JSX.Element {
    let [buttonState, setButtonState] = useState(false);
    let [likeState, setLikeState] = useState(false);
    let [counter, setCounter] = useState(1);
    let rating: React.ReactNode[] = [];

    for (let i = 0; i < 5; i++) {
        if(i <= Math.trunc(prodObj.rating!.rate)) {
            rating.push(<Star active={true} key={i}/>)
        } else {
            rating.push(<Star active={false} key={i}/>)
        }
    }

    function toggleState(state: Boolean, setState: Function) {
        setState(!state)
    }

    return (
        <div className={styles.card}>
            <Image className={styles.image} src={prodObj.image!} width={220} height={220} alt='img' priority={true}/>
            <div className={styles.rates}>
                <span className={styles.rates__dealer}>electronic</span>
                <div className={styles.rates__grade}>
                    {rating.map(item => item)}
                </div>
            </div>
            <p className={styles.description}>
                {prodObj.description?.substring(0,150) + '...'}
            </p>
            <div className={styles.price}>515 ₽ <span className={styles.price_highlighted}>/шт.</span></div>
            <div className={styles.card__buttonContainer}>
                <div className={styles.card__container}>
                    <button
                        className={buttonState ? styles.buttonAdd_active + ' ' + styles.buttonAdd : styles.buttonAdd}
                        onClick={() => toggleState(buttonState, setButtonState)}
                    >
                        {buttonState ? 'В корзине' : 'В корзину'}
                    </button>
                    <div className={styles.counter}>
                        <button className={styles.counter__minus} onClick={() => setCounter(counter === 1 ? counter : counter-=1)}></button>
                        <span className={styles.counter__number}>{counter}</span>
                        <button className={styles.counter__plus} onClick={() => setCounter(counter+=1)}></button>
                    </div>
                </div>
                <Favorite active={likeState} clickHandler={() => toggleState(likeState, setLikeState)}/>
            </div>
        </div>
    )
}