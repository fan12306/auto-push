import PageLogin from "@pages/Login/Login.jsx";
import ErrorPage from "@pages/ErrorPage/ErrorPage.jsx";
import AuthPage from "@pages/AuthPage/AuthPage.jsx";

const publicRoutes = [
    {
        path: '/login',
        name: 'login',
        exact: true,
        component: PageLogin
    },
    {
        path: '/403',
        name: 'forbidden',
        exact: true,
        component: AuthPage
    },
    {
        path: '/404',
        name: '404',
        exact: false,
        component: ErrorPage
    }
]

export default publicRoutes