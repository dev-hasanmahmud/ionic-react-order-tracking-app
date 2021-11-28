import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RegisterContainer from '../components/RegisterContainer';
import './RegisterPage.css';

const RegisterPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>
        <RegisterContainer name="Register" />
      </IonContent>
    </IonPage>
  );
};

export default RegisterPage;
