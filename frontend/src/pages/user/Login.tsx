import { useState } from "react";
import { IonContent, IonHeader, IonPage, IonButton, IonToolbar, IonInput, useIonRouter } from "@ionic/react";
import "./Login.css";
import AuthService from "../../services/AuthService";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useIonRouter();

  const handleEmailChange = (e: any) => {
    if (!e.target.value) {
      return
    }
    setEmail(e.target.value);
  };

  const handlePswdChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    AuthService.login({ email, password })
      .then((res) => {
        console.log(res);
        router.push('/');
      })
      .catch((err) => {
        console.log(err.toJSON());
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="degasjes-main">
          <div className="logo">
            <img src="assets/images/logo.png" alt="degasjes logo" />
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="degasjes-white">
        <form className="login" onSubmit={handleSubmit}>
          <h1 className="formHeader">Inloggen</h1>
          <div className="login-form">
            <IonInput placeholder="Emailadres" type="email" name="email" value={email} onIonChange={(e) => handleEmailChange(e)} required></IonInput>
          </div>
          <div className="login-form">
            <IonInput placeholder="Wachtwoord" type="password" name="password" value={password} onIonChange={(e) => handlePswdChange(e)} required></IonInput>
          </div>
          <IonButton fill="clear" className="login-form-submit" onClick={handleSubmit}>
            Login
          </IonButton>
          <div className="center makeAccount">
            <p>Nog geen account?</p>
            <a href="/register">account aanmaken</a>
          </div>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
