import './ProfileContainer.css';
import { IonItemDivider, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const ProfileContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Login Page</IonCardSubtitle>
            <IonCardTitle>Login</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItemDivider>Username/ Email:</IonItemDivider>
            <IonItem>
              <IonInput type="text" placeholder="Enter Username or Email"></IonInput>
            </IonItem>
            <IonItemDivider>Password:</IonItemDivider>
            <IonItem>
              <IonInput type="password" placeholder="Enter Password"></IonInput>
            </IonItem>
            <IonButton expand="block">Login</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ProfileContainer;
