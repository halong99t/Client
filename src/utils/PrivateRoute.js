import { Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getItem } from "./localStorage";

export default ({ component, path, ...rest }) => {
  const [token, setToken] = useState(null);

  async function getToken() {
    const result = (await getItem("token")) || null;
    if (result) {
      setToken(result);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  const renderComponent = ({ location }) => {
    return (
      <React.Fragment>
        {token ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )}
      </React.Fragment>
    );
  };

  return <Route {...rest} path={path} render={renderComponent} />;
};
