import styles from './Cart.module.scss';
import { IoCloseOutline, IoCartOutline } from 'react-icons/io5';
import {useStateContext } from '../../context/StateContext';
import Link from 'next/link';

const Cart = () => {

    const { showCart, setShowCart, totalQuantities } = useStateContext()

    return (
        <>
        <div className={styles.container}>
            <div className={styles.header}>
                <IoCloseOutline onClick={() => setShowCart(false)} className={styles.closeIcon} />
                <p> {totalQuantities} Items </p>
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
            : <div className={styles.cart}>
                
            </div> }
           
        </div>
        {showCart &&  <div onClick={() => setShowCart(false)} className={styles.overlay}></div>}
       </>
    )
}

export default Cart;