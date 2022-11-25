import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonButton, IonToolbar } from "@ionic/react";
import "./Dashboard.css";

import UserService from "../../services/UserService";
import { UsersResponse } from "../user/Types";
import Greeting from "../../components/Greeting";

const Dashboard: React.FC = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    UserService.getUser()
      .then((response) => {
        setContent(response.data.documents);
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
      <IonContent className="ion-padding" color="degasjes-white">
        <div>
          <h1 className="ion-margin-bottom">Gebruikerslijst</h1>
          {content.map((entry: UsersResponse) => (
            <section className="userData" key={entry._id}>
              <div>
                <span>First name:</span> {entry.firstName}
              </div> 
              <div>
                <span>Last name:</span> {entry.lastName}
              </div> 
              <div>
                <span>Role:</span> {entry.role}
              </div>
            </section>
          ))}
        </div>
        <div className="center">
          <IonButton href="/home" className="ion-margin-top buttonText" color="degasjes-main">
            Terug naar home
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
