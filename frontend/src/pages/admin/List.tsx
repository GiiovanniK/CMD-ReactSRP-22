import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons} from "@ionic/react";
import { arrowBackOutline, cameraOutline } from "ionicons/icons";
import "./List.css";

import UserService from "../../services/UserService";
import { UsersResponse } from "../user/Types";

const List: React.FC = () => {
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
            <IonButton href="/dashboard">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon/>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="degasjes-white">
      <h1>Gebruikers</h1>
        <div>
          {content.map((entry: UsersResponse) => (
            <div key={entry._id}>
              <p>{entry.firstName} {entry.lastName}</p>
              <p>{entry.role}</p>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default List;
