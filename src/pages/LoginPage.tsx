import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginContainer from '../components/LoginContainer';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LoginContainer name="Login" />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
