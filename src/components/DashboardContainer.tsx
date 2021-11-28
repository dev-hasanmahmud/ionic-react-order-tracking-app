import './DashboardContainer.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const DashboardContainer: React.FC<ContainerProps> = ({ name }) => {
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
            <IonCardSubtitle>Card Subtitle 1</IonCardSubtitle>
            <IonCardTitle>Card Title 1</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            1 Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle 2</IonCardSubtitle>
            <IonCardTitle>Card Title 2</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            2 Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle 3</IonCardSubtitle>
            <IonCardTitle>Card Title 3</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            3 Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle 4</IonCardSubtitle>
            <IonCardTitle>Card Title 4</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            4 Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle 5</IonCardSubtitle>
            <IonCardTitle>Card Title 5</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            5 Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle 6</IonCardSubtitle>
            <IonCardTitle>Card Title 6</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            6 Keep close to Nature's heart... and break clear away, once in awhile,
            and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default DashboardContainer;
