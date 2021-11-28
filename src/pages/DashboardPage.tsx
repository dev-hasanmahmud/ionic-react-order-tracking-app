import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import DashboardContainer from '../components/DashboardContainer';
import './DashboardPage.css';

const DashboardPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DashboardContainer name="Dashboard" />
      </IonContent>
    </IonPage>
  );
};

export default DashboardPage;
