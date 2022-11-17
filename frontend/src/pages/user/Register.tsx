import { IonContent, IonHeader, IonPage, IonLabel, IonButton, IonToolbar, IonInput, IonCheckbox, IonItem } from "@ionic/react";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import "./Register.css";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const handleSubmit = () => {
    AuthService.register({email, password, firstName, lastName})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.toJSON());
      });
  };

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
        <form className="register">
          <h1 className="formHeader">Registreren</h1>
          <div className="register-form">
            <IonInput placeholder="Emailadres" type="email" value={email} name="emailadress" onIonChange={(e: any) => setEmail(e.target.value)} required></IonInput>
          </div>
          <div className="register-form">
            <IonInput placeholder="Wachtwoord" type="password" value={password} name="password" onIonChange={(e: any) => setPassword(e.target.value)} required></IonInput>
          </div>
          <div className="firstNameLast">
            <div className="register-form">
              <IonInput placeholder="Voornaam" type="text" value={firstName} name="firstName" autocapitalize="on" onIonChange={(e: any) => setFirstName(e.target.value)} required></IonInput>
            </div>
            <div className="register-form">
              <IonInput placeholder="Achternaam" type="text" value={lastName} name="lastName" autocapitalize="on" onIonChange={(e: any) => setLastName(e.target.value)} required></IonInput>
            </div>
          </div>
          <div className="ion-margin-top">
            <div>
              <IonItem color="degasjes-white" lines="none">
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>Algemene voorwaarden</IonLabel>
              </IonItem>
              <IonItem color="degasjes-white" lines="none">
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>Privacy voorwaarden</IonLabel>
              </IonItem>
            </div>
          </div>
          <IonButton fill="clear" className="register-form-submit" onClick={ handleSubmit }>
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
