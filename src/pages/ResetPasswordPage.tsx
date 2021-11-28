import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ResetPasswordContainer from '../components/ResetPasswordContainer';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reset Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Reset Password</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ResetPasswordContainer name="Reset Password" />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
