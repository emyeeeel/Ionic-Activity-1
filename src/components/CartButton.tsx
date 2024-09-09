import { IonButton } from '@ionic/react';
import cartImage from '../assets/img/cart.png';
import '../assets/styles.css';

function CartButton() {
    return (
        <IonButton>
          <div className="cartButtonContent">
            <img src={cartImage} alt="Cart" className='cart'/>
            <p id='componentText'>Add to Cart</p>
          </div>
        </IonButton>
    );
}

export default CartButton;
