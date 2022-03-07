import React from "react";
// import User from "@/model/user";
import { Switch, useLocation } from "react-router";
import { UserPermissionRouter } from "@router/HOC";
import privateRoutes from "@router/routes/privateRoutes";
import { Redirect, Route } from "react-router-dom";

const LayoutContent = (props) => {
  const location = useLocation();
  return (
    <Switch>
      {renderRoute(privateRoutes, props)}
      {redirectRouter(location.pathname)}
    </Switch>
  );
};

const renderRoute = (routes, props) => {
  return routes.map((route) => {
    if (route.children) {
      return renderRoute(route.children, props);
    } else {
      return props.isLogin ? (
        <UserPermissionRouter
          exact={route.exact}
          key={route.name}
          path={route.path}
          routePermission={route.permissions}
          component={route.component}
          {...props}
        />
      ) : (
        <Route
          exact={route.exact}
          key={route.name}
          path={route.path}
          routePermission={route.permissions}
          component={route.component}
          {...props}
        />
      );
    }
  });
};

const redirectRouter = (pathname) => {
  return pathname === "/" ? (
    <Redirect to={"/login"} />
  ) : (
    <Redirect to={"/404"} from={"/*"} />
  );
};

export default LayoutContent;
