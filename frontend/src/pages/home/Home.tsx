import React, { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonIcon, IonButton, IonToolbar, IonButtons, useIonRouter } from "@ionic/react";
import { personCircleOutline } from "ionicons/icons";
import "./Home.css";
import MainTabs from "../../components/MainTabs";
import Greeting from "../../components/Greeting";

import AuthService from "../../services/AuthService";

const Home: React.FC = () => {
  const router = useIonRouter();
  const handleLogout = (e: any) => {
    AuthService.logout()
      .then((res) => {
        console.log(res);
        router.push("/login");
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/is-admin`, {
      headers: {
        "x-auth-token": localStorage.getItem("user") || "",
      },
    })
      .then((response) => {
        if ((response.status === 200)) {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => console.log(err));
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
              <IonIcon />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={personCircleOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="degasjes-white">
        <div>
          <Greeting />
        </div>
        <div className="center">
          <>{isAuthenticated && <IonButton href="/dashboard" color="degasjes-main" className="buttonText">Dashboard</IonButton>}</>
          <IonButton onClick={handleLogout} className="ion-margin-top buttonText" color="degasjes-main">
            Log uit
          </IonButton>
        </div>
      </IonContent>
      <MainTabs />
    </IonPage>
  );
};

export default Home;
