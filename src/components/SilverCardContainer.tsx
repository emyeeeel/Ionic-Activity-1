import '../assets/styles.css';
import HeaderComponent from './CardHeader';
import CartComponent from '../components/CartButton';
import oneBottle from '../assets/img/1-bot.png';
import cards from '../assets/img/cards.png'


function SilverContainerComponent(){
    return (
        <div id='SilverCardContainer'>
            <HeaderComponent numberOfBottles={1} premiumType="Silver"/>
            <div id='CardContent'>
              <p id='NumOfMonths'>1 Month Supply</p>
              <div id="circle">
                <div className="text-container">
                  <p>SAVE</p>
                  <p>$10</p>
                </div>
              </div>
              <img src={oneBottle} alt="1 Bottle" id='oneBottle'/>
              <p id='regularPrice'>
                <span id="regPriceText">Regular Price: </span><span id="regPrice">$69.00</span>
              </p>
              <p id='discountedPrice'>
                <span id="discountedAmount">$59</span><span id="discountedCents">.00</span>
              </p>
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

export default SilverContainerComponent;