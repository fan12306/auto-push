import publicRoutes from "@router/routes/publicRoutes";
import privateRoutes from "@router/routes/privateRoutes";

const routes = [
    ...privateRoutes,
    ...publicRoutes
]

export default routes