import './ProfileContainer.css';
import { IonChip, IonAvatar, IonLabel, IonItemDivider, IonItem, IonInput, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
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
            <IonChip>
              <IonAvatar>
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
              </IonAvatar>
              <IonLabel>Chip Avatar</IonLabel>
            </IonChip>
            <IonCardTitle>Welcome to TrackApp</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          Welcome to TrackApp. Your <a href="/login">Profile</a> Keep close to Nature's heart Wash your spirit.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Update your Profile</IonCardSubtitle>
            <IonCardTitle>Your Profile</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItemDivider>Username:</IonItemDivider>
            <IonItem>
              <IonInput type="text" value="Rohim"></IonInput>
            </IonItem>
            <IonItemDivider>Email:</IonItemDivider>
            <IonItem>
              <IonInput type="email" value="rohim@gmail.com"></IonInput>
            </IonItem>
            <IonItemDivider>Password:</IonItemDivider>
            <IonItem>
              <IonInput type="password" placeholder="Enter Password"></IonInput>
            </IonItem>
            <IonItemDivider>Confirm Password:</IonItemDivider>
            <IonItem>
              <IonInput type="password" placeholder="Enter Confirm Password"></IonInput>
            </IonItem>
            <IonButton expand="block">Update</IonButton>
            <br/>
          </IonCardContent>
        </IonCard>
      </IonContent>
      <br/>
    </IonPage>
  );
};

export default ProfileContainer;
