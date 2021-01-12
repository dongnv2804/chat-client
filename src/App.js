import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CustomSpin from "./components/customspin";
import store from "./store";
const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home")),
    exact: true,
  },
  {
    path: "/room",
    component: lazy(() => import("./pages/Room")),
    exact: true,
  },
];

const RouteWithSubRoute = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} />}
    />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<CustomSpin />}>
        <Router>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoute key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
