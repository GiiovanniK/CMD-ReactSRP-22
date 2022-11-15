import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons} from "@ionic/react";
import { arrowBackOutline, cameraOutline } from "ionicons/icons";
import "./List.css";

import UserService from "../../services/UserService";
import { Account } from "../user/Types";

const List: React.FC = () => {
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
          <IonButtons slot="start">
            <IonButton href="/admin">
              <IonIcon icon={arrowBackOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={cameraOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="vrcafe-white">
        <div>
          {content.map((entry: Account) => (
            <p>{entry.email}</p>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default List;
