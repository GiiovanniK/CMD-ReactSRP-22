import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import "./Home.css";
import MainTabs from "../../components/MainTabs";
import Greeting from "../../components/Greeting";

import UserService from "../../services/UserService";
import { UsersResponse } from "../user/Types";

const Home: React.FC = () => {
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
          <IonButtons slot="start">
            <IonButton>
              <IonIcon/>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton href="/profile">
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="degasjes-white">
        <div>
          <Greeting />
          {content.map((entry: UsersResponse) => (
            <p key={entry._id}>{entry.firstName}</p>
          ))}
        </div>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Home;