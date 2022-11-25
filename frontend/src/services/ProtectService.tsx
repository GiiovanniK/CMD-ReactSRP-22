import { ReactNode, useEffect, useState } from "react";
import { useIonRouter } from "@ionic/react";

const ProtectedRoute = (props: { children: ReactNode }) => {
  const router = useIonRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  const checkUserToken = () => {
    // get token from localstore and check if it's present
    const userToken = localStorage.getItem("user");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      router.push("/login");
    }
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? props.children : null}</>;
};

export default ProtectedRoute;