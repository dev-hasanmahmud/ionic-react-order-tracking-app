import './ResetPasswordContainer.css';
import { IonItemDivider, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const ResetPasswordContainer: React.FC<ContainerProps> = ({ name }) => {
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
            <IonCardSubtitle>Reset Password Page</IonCardSubtitle>
            <IonCardTitle>Reset Password</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItemDivider>Email:</IonItemDivider>
            <IonItem>
              <IonInput type="text" placeholder="Enter Email"></IonInput>
            </IonItem>
            <IonButton expand="block">Reset Password</IonButton>
            <br/>
            <p><strong>Already Created Account? <a href="/login">SignIn</a></strong></p>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <br/>
    </IonPage>
  );
};

export default ResetPasswordContainer;
