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
          <Greeting />
          {content.map((entry: UsersResponse) => (
            <p key={entry._id}>First name: {entry.firstName} Last name: {entry.lastName} Role: {entry.role}</p>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
