import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar, IonFooter } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, gift } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "../theme/variables.css";

const MainTabs: React.FC = () => (
  <IonFooter>
    <IonToolbar>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/"></Route>
          <Route exact path="/projects"></Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/">
            <IonIcon icon={home} />
            <IonLabel>home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="projects" href="/projects">
            <IonIcon icon={gift} />
            <IonLabel>projects</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonToolbar>
  </IonFooter>
);

export default MainTabs;
