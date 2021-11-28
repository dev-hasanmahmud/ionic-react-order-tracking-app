import './RegisterContainer.css';
import { IonItemDivider, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const RegisterContainer: React.FC<ContainerProps> = ({ name }) => {
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
            <IonCardSubtitle>Register Page</IonCardSubtitle>
            <IonCardTitle>Register</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItemDivider>Username:</IonItemDivider>
            <IonItem>
              <IonInput type="text" placeholder="Enter Username"></IonInput>
            </IonItem>
            <IonItemDivider>Email:</IonItemDivider>
            <IonItem>
              <IonInput type="email" placeholder="Enter Email"></IonInput>
            </IonItem>
            <IonItemDivider>Password:</IonItemDivider>
            <IonItem>
              <IonInput type="password" placeholder="Enter Password"></IonInput>
            </IonItem>
            <IonItemDivider>Confirm Password:</IonItemDivider>
            <IonItem>
              <IonInput type="password" placeholder="Enter Confirm Password"></IonInput>
            </IonItem>
            <IonButton expand="block">Register</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default RegisterContainer;
