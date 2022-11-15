import { IonContent, IonHeader, IonPage, IonButtons, IonButton, IonToolbar, IonIcon, IonAvatar, IonImg } from "@ionic/react";
import { personCircleOutline, qrCodeOutline, peopleCircle, basket, pencilOutline, arrowForwardOutline } from "ionicons/icons";
import "./Profile.css";
import MainTabs from "../../components/MainTabs";

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
          <IonButtons slot="start">
            <IonButton href="/profile">
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton id="open-modal" expand="block">
              <IonIcon icon={qrCodeOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="center ion-margin-top">
          <IonAvatar class="modalImage">
            <IonImg src="https://i.pravatar.cc/1000" />
          </IonAvatar>
        </div>
        <div className="center lineHeight ion-margin-top">
          <p className="bold">Voornaam Achternaam</p>
          <p>dd/mm/jj</p>
          <div className="xpProgress">
            <p>Level XP - Rank </p>
          </div>
        </div>
        <div className="modalButtons ion-margin-top lineHeight">
          <div>
            <a href="/edit">
              <IonIcon icon={pencilOutline} />
              <p>Gegevens</p>
            </a>
          </div>
          <div>
            <a href="/orders">
              <IonIcon icon={basket} />
              <p>Bestellingen</p>
            </a>
          </div>
          <div>
            <a href="/friends">
              <IonIcon icon={peopleCircle} />
              <p>Vrienden</p>
            </a>
          </div>
        </div>
        <div className="ion-margin">
          <div className="flex openMore">
            <h2>Badges</h2>
            <IonIcon icon={arrowForwardOutline} />
          </div>
          <div className="badges">
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png  " alt="" />
            </div>
          </div>
        </div>
        <div className="ion-margin">
          <div className="flex openMore">
            <h2>Achievements</h2>
            <IonIcon icon={arrowForwardOutline} />
          </div>
          <div className="achievements">
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png" alt="" />
            </div>
            <div>
              <img src="./assets/images/logo.png  " alt="" />
            </div>
          </div>
        </div>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Profile;
