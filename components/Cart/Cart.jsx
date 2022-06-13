import styles from './Cart.module.scss';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';
import { IoCloseOutline, IoCartOutline } from 'react-icons/io5';
import {useStateContext } from '../../context/StateContext';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from '../Button/Button';
import { urlFor } from '../../lib/client';


const Cart = () => {

    const { showCart, setShowCart, totalQuantities, cartItems, totalPrice, toggleCartItemQuantity, onAdd, onRemove } = useStateContext();


    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, [])


    return (
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <IoCloseOutline onClick={() => setShowCart(false)} className={styles.closeIcon} />
                <p> {totalQuantities === 1 ? `${totalQuantities} Item` : `${totalQuantities} Items`} </p>
            </div>
           { totalQuantities === 0 
            ? <div className={styles.emptyContent}>
                    <p>Your cart is currently empty</p>
                    <IoCartOutline className={styles.cartIcon} />
                    <Link href='/shop'> 
                        <a onClick={() => setShowCart(false)}>
                            Go to shop
                        </a>
                    </Link>
                </div>
            :   <div className={styles.cart}>
                    <div className={styles.products}>
                        {cartItems.length >= 1 && cartItems.map((item, i) => {
                            return (
                                <div key={i} className={styles.product}>
                                <div className={styles.product__imageContainer}>
                                    <img className={styles.product__image} src={urlFor(item.image[0])}/>
                                </div>
                                <div className={styles.product__content}>
                                    <div>
                                        <p className={styles.product__name}>{item.name}</p>
                                        <IoCloseOutline onClick={() => onRemove(item)} className={styles.product__icon} />
                                    </div>
                                    <div>
                                        <div className={styles.quantityDesc}>
                                            <span className={styles.quantityDesc__minus} onClick={() => toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></span>
                                            <span className={styles.quantityDesc__number}>{item.quantity}</span>
                                            <span className={styles.quantityDesc__plus} onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></span>
                                        </div>
                                        <p className={styles.product__price}>${item.price}</p>
                                    </div>
                                </div>    
                            </div>
                            )
                        })}
                    </div>
                    <div className={styles.cart__summary}>
                        <div>
                            <p>Subtotal:</p>
                            <p>${totalPrice}</p>
                        </div>
                        <Button textButton={'checkout'}></Button>
                    </div>
                </div> }
           
        </div>
        {showCart &&  <div onClick={() => setShowCart(false)} className={styles.overlay}></div>}
       </>
    )
}

export default Cart;