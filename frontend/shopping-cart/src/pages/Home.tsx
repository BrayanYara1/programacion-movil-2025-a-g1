import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import EjemploComp from '../components/EjemploComp';
import ProductComponent from '../components/ProductView';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">main</IonTitle>
            
          </IonToolbar>
          ...
        </IonHeader>
        <ExploreContainer />
        <EjemploComp />
        <ProductComponent/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
