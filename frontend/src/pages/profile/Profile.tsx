import { IonContent, IonHeader, IonPage, IonToolbar, IonAvatar, IonImg } from "@ionic/react";
import "./Profile.css";
import MainTabs from "../../components/MainTabs";
import { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import { UsersResponse } from "../user/Types";

const Profile: React.FC = () => {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    UserService.getUser()
      .then((response) => {
        setContent(response.data.documents)
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  }, []);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="degasjes-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="De Gasjes logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="degasjes-white">
        <div className="center ion-margin-top">
          <IonAvatar class="modalImage">
            <IonImg src="https://i.pravatar.cc/1000" />
          </IonAvatar>
        </div>
        <div className="center">
          {content.map((entry: UsersResponse) => (
            <h2 key={entry._id}>{entry.firstName}</h2>
          ))}
        </div>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Profile;
