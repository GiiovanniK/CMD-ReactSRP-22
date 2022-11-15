import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/home/Home';
import Register from './pages/user/Register';
import Login from './pages/user/Login';
import Profile from './pages/profile/Profile';
import Admin from './pages/dashboard/Admin';
import List from './pages/dashboard/List';

setupIonicReact();

const App: React.FC = () => ( 
    <IonApp>
      <IonReactRouter>
        <Route path="/" component={Home} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/admin" component={Admin} exact={true} />
        <Route path="/list" component={List} exact={true} />
      </IonReactRouter>
    </IonApp>
  );

export default App;
