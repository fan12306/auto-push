import { Route } from 'react-router-dom';
import withUserPermission from './withUserPermission';
import withLoginPermission from "@router/HOC/withLoginPermission.jsx";
export const UserPermissionRouter = withUserPermission(withLoginPermission(Route)); // 从外向内提升权限