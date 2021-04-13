import React from 'react';
import {Switch} from "react-router";
import {UserPermissionRouter} from "@router/HOC";
import privateRoutes from "@router/routes/privateRoutes";
// import User from "@/model/user";

const LayoutContent = (props) => {
    return (
        <Switch>
            {renderRoute(privateRoutes, props)}
        </Switch>
    );
};

const renderRoute = (routes, props) => {
    return routes.map(route => {
        if (route.children) {
            return renderRoute(route.children, props);
        } else {
            return (
                <UserPermissionRouter
                    exact
                    key={route.name}
                    path={route.route}
                    routePermission={route.permissions}
                    component={route.component}
                    {...props}
                />
            )
        }
    })
}


export default LayoutContent;