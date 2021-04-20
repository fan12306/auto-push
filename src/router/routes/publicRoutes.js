import PageLogin from "@pages/Login/Login.jsx";
import ErrorPage from "@pages/ErrorPage/ErrorPage.jsx";
import AuthPage from "@pages/AuthPage/AuthPage.jsx";

const publicRoutes = [
    {
        route: '/login',
        name: 'login',
        exact: true,
        component: PageLogin
    },
    {
        route: '/403',
        name: 'forbidden',
        exact: true,
        component: AuthPage
    },
    {
        route: '/404',
        name: '404',
        component: ErrorPage
    }
]

export default publicRoutes