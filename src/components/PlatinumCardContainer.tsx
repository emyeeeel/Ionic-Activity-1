import '../assets/styles.css';
import bestValue from '../assets/img/bes.png';
import CartComponent from '../components/CartButton';
import sixBottles from '../assets/img/six-bot.png';
import cards from '../assets/img/cards.png'

function PlatinumContainerComponent(){
    return (
        <div id='PlatinumCardContainer'>
            <div id='CardHeader'>
              <img src={bestValue} alt="Best Value" id='bestValue'/>
              <p id='Platinum'><strong>PLATINUM</strong></p>
            </div>

            <div id='CardContent'>
              <p id='BuyBottles'>BUY 6 BOTTLES</p>
              <p id='NumOfMonths'>6-Month Supply +</p>
              <p id='FreeShipping'>Free Shipping in the US</p>
              <div id="circle">
                <div className="text-container">
                  <p>SAVE</p>
                  <p>$270</p>
                </div>
              </div>
              <div id='imageContainer'>
                <img src={sixBottles} alt="6 Bottles" id='sixBottles'/>
              </div>
              <p id='regularPrice'>
                <span id="regPriceText">Regular Price: </span><span id="regPrice">$420.00</span>
              </p>
              <p id='only'>ONLY</p>
              <p id='discountedPrice'>
                <span id="discountedAmount">$29</span><span id="discountedCents">.97</span>
              </p>
              <p id='perBottle'>PER BOTTLE</p>
              <CartComponent/>
              <img src={cards} alt="Cards" id='Cards'/>
            </div>

            <div id='CardFooter'>
              <p id='FooterText'>180-DAY MONEY BACK GUARANTEE</p>
            </div>
        </div>
    );
}

export default PlatinumContainerComponent;