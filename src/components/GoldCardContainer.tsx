import '../assets/styles.css';
import HeaderComponent from './CardHeader';
import CartComponent from '../components/CartButton';
import threeBottles from '../assets/img/g-3bots-sales.png';
import cards from '../assets/img/cards.png'


function GoldContainerComponent(){
    return (
        <div id='GoldCardContainer'>
            <HeaderComponent numberOfBottles={3} premiumType="Gold"/>
            <div id='CardContent'>
              <p id='NumOfMonths'>3 Months Supply</p>
              <div id="circle">
                <div className="text-container">
                  <p>SAVE</p>
                  <p>$90</p>
                </div>
              </div>
              <img src={threeBottles} alt="3 Bottles" id='threeBottles'/>
              <p id='regularPrice'>
                <span id="regPriceText">Regular Price: </span><span id="regPrice">$210.00</span>
              </p>
              <p id='only'>ONLY</p>
              <p id='discountedPrice'>
                <span id="discountedAmount">$39</span><span id="discountedCents">.97</span>
              </p>
              <p id='perBottle'>PER BOTTLE</p>
              <p id='shipping'>+ SHIPPING</p>
              <CartComponent/>
              <img src={cards} alt="Cards" id='Cards'/>
            </div>

            <div id='CardFooter'>
              <p id='FooterText'>180-DAY MONEY BACK GUARANTEE</p>
            </div>
        </div>
    );
}

export default GoldContainerComponent;
