import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="About" />
        <Aboutme />
      </IonContent>
    </IonPage>
  );
};

function Aboutme() {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src="./public/profile.jpg" />
      <IonCardHeader>
        <IonCardTitle>Lubna Zalsa Bella</IonCardTitle>
        <IonCardSubtitle>Pelajar SMKN 6 Malang</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Kelas: XI RPL 1</IonCardContent>
    </IonCard>
  );
}

export default Tab3;
