import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonFabButton, IonFab } from "@ionic/react";
import { camera } from "ionicons/icons";
import "./Admin.css";

import UserService from "../../services/UserService";
import { Account } from "../user/Types";
import Greeting from "../../components/Greeting";

const Admin: React.FC = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getUser()
      .then((response) => {
        // axios creates a data object on its own. back-end also contains a data object so it becomes data.data
        setContent(response.data.data);
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="vrcafe-white">
        <div>
          <Greeting />
          {content.map((entry: Account) => (
            <p>{entry.email}</p>
          ))}
        </div>
        <IonButton className="ion-margin-top buttonText" color="vrcafe-secondary" href="/list">Gebruikers</IonButton>
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Admin;