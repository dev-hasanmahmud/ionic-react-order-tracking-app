import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NoteContainer from '../components/NoteContainer';
import './NotePage.css';

const NotePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Note</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Note</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NoteContainer name="Note" />
      </IonContent>
    </IonPage>
  );
};

export default NotePage;
