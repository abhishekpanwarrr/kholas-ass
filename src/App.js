import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const UserProfile = lazy(() => import("./components/UserProfile"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <UserProfile />
    </Suspense>
  );
};

export default App;
