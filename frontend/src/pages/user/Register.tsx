import { IonContent, IonHeader, IonPage, IonButton, IonToolbar, IonInput, useIonRouter } from "@ionic/react";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import "./Register.css";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState<String>();

  const router = useIonRouter();

  const handleConfirmPassword = (e: any) => {
    setError(undefined);
    if (password !== e.target.value) {
      setError("Wachtwoorden komen niet overeen");
    }
    if (e.target.value.length === 0) {
      setError(undefined);
    }
    setconfirmPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (error) {
      return;
    }
    AuthService.register({ email, password, confirmPassword, firstName, lastName })
      .then((res) => {
        console.log(res);
        router.push('/login');
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
        <form className="register" onSubmit={handleSubmit}>
          <h1 className="formHeader">Registreren</h1>
          <div className="register-form">
            <IonInput
              placeholder="Emailadres"
              type="email"
              value={email}
              name="emailadress"
              onIonChange={(e: any) => setEmail(e.target.value)}
              required></IonInput>
          </div>
          <div className="register-form">
            <IonInput
              placeholder="Wachtwoord"
              type="password"
              value={password}
              name="password"
              onIonChange={(e: any) => setPassword(e.target.value)}
              required></IonInput>
          </div>
          <div className="register-form">
            <IonInput
              placeholder="Herhaal wachtwoord"
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onIonChange={(e: any) => handleConfirmPassword(e)}
              required></IonInput>
          </div>
          {error ? <p className="passMissmatchErr">{error}</p> : <></>}
          <div className="firstNameLast">
            <div className="register-form">
              <IonInput
                placeholder="Voornaam"
                type="text"
                value={firstName}
                name="firstName"
                autocapitalize="on"
                onIonChange={(e: any) => setFirstName(e.target.value)}
                required></IonInput>
            </div>
            <div className="register-form">
              <IonInput
                placeholder="Achternaam"
                type="text"
                value={lastName}
                name="lastName"
                autocapitalize="on"
                onIonChange={(e: any) => setLastName(e.target.value)}
                required></IonInput>
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
