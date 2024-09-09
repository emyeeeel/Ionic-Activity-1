import { IonContent, IonHeader, IonPage } from '@ionic/react';
import '../assets/styles.css';

import SilverContainerComponent from '../components/SilverCardContainer';
import GoldContainerComponent from '../components/GoldCardContainer';
import PlatinumContainerComponent from '../components/PlatinumCardContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1 id='title'>The Best Formula for You Right Now!</h1>
        <div id='MainContainer'>
          <SilverContainerComponent />
          <PlatinumContainerComponent />
          <GoldContainerComponent />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
