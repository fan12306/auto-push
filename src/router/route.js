import PageLogin from "@pages/Login/Login.jsx";
import indexRouter from "@router/stage";
import ErrorPage from "@pages/ErrorPage/ErrorPage.jsx";
const routes = [
    ...indexRouter,
    {
        path: '/login',
        name: 'login',
        component: PageLogin,
    },
    {
        path: '/404',
        name: '404',
        component: ErrorPage
    },
]

export default routes
