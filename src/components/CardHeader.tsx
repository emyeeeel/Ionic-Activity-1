import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import '../assets/styles.css';

interface HeaderComponentProps {
    numberOfBottles: number;
    premiumType: string;
}

function HeaderComponent({ numberOfBottles, premiumType }: HeaderComponentProps) {
    return (
        <div id='CardHeader'>
            <p id={premiumType} className='type'>{premiumType.toUpperCase()}</p>
            <strong id='NumOfBottles'>BUY {numberOfBottles} BOTTLE{numberOfBottles > 1 ? 'S' : ''}</strong>
        </div>
    );
}

export default HeaderComponent;
