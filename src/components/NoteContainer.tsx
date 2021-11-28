import './NoteContainer.css';
import { IonItemGroup, IonLabel, IonItemDivider, IonContent, IonTextarea, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonButton } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const NoteContainer: React.FC<ContainerProps> = ({ name }) => {
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
            <IonCardSubtitle>Note Page</IonCardSubtitle>
            <IonCardTitle>Note</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItemDivider>Notes:</IonItemDivider>
            <IonItem>
            <IonTextarea rows={6} cols={20} placeholder="Enter Notes"></IonTextarea>
            </IonItem>
            <IonButton expand="block">Save</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItemGroup>
            <IonItemDivider>
              <IonLabel>Notes List</IonLabel>
            </IonItemDivider>
            <IonItem>
              <IonLabel>Note item 1</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Note item 2</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Note item 3</IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonCard>
        <br/><br/><br/>
      </IonContent>
    </IonPage>
  );
};

export default NoteContainer;
