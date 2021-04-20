import React from 'react';
import {HashRouter} from 'react-router-dom'
import { Route, Switch} from 'react-router'
import publicRoutes from "@router/routes/publicRoutes";
import Layout from '@/pages/Home/Home'
import {connect} from "react-redux";

const Router = (props) => {
    return (
        <HashRouter>
            <Switch>
                {renderRoute(publicRoutes, props)}
                <Layout isLogin={props.isLogin} permissions={props.permissions}/>
            </Switch>
        </HashRouter>
    );
};

const renderRoute = (routes) => {
    return routes.map(route => {
        if (route.children) {
            return renderRoute(route.children);
        } else {
            return (
                <Route exact key={route.name} path={route.route} component={route.component}/>
            )
        }
    })
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.user?.isLogin,
        permissions: state.user?.permissions
    }
}

export default connect(mapStateToProps)(Router);