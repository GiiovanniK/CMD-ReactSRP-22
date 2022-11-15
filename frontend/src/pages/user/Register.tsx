import { IonContent, IonHeader, IonPage, IonLabel, IonButton, IonToolbar, IonInput, IonCheckbox, IonItem, IonItemSliding } from "@ionic/react";
import {} from "ionicons/icons";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="vrcafe-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="VRcafe logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="vrcafe-white">
        <form className="register">
          <h1 className="formHeader">Registreren</h1>
          <div className="register-form">
            <IonLabel>Emailadres</IonLabel>
            <IonInput placeholder="Emailadres" type="email" name="emailadress" required></IonInput>
          </div>
          <div className="register-form">
            <IonLabel>Wachtwoord</IonLabel>
            <IonInput placeholder="Wachtwoord" type="password" name="pass" required></IonInput>
          </div>
          <div className="register-form">
            <IonLabel>Herhaal wachtwoord</IonLabel>
            <IonInput placeholder="Herhaal wachtwoord" type="password" name="passRepeat" required></IonInput>
          </div>
          <div className="firstNameLast">
            <div className="register-form">
              <IonLabel>Voornaam</IonLabel>
              <IonInput placeholder="Voornaam" type="text" name="firstName" autocapitalize="on" required></IonInput>
            </div>
            <div className="register-form">
              <IonLabel>Achternaam</IonLabel>
              <IonInput placeholder="Achternaam" type="text" name="lastName" autocapitalize="on" required></IonInput>
            </div>
          </div>
          <div>
            <IonLabel>Geboortedatum</IonLabel>
            <IonInput type="date" name="birthDate" required></IonInput>
          </div>
          <div className="ion-margin-top">
            <div>
              <IonItem color="vrcafe-white" lines="none">
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>Algemene voorwaarden</IonLabel>
              </IonItem>
            </div>
            <div>
              <IonItem color="vrcafe-white" lines="none">
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>Privacy voorwaarden</IonLabel>
              </IonItem>
            </div>
          </div>
          <IonButton type="submit" fill="clear" className="register-form-submit">
            Registreren
          </IonButton>
          <div className="center makeAccount ion-margin-bottom">
            <p>Al een account?</p>
            <a href="/login">login</a>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Register;
