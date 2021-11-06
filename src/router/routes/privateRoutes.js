// import About from "@pages/About/About.jsx";
// import Home from "@pages/Home/Home.jsx";
import About from "@components/layout/Content/About/About.jsx";
import Analysis from '@/components/layout/Content/Analysis/Analysis'
import BlogList from "@components/layout/Content/Blog/BlogList/BlogList.jsx";
import BlogEdit from "@components/layout/Content/Blog/BlogEdit/BlogEdit.jsx";
import BlogDetail from "@components/layout/Content/Blog/BlogDetail/BlogDetail.jsx";
// import Center from "@components/layout/Content/Center/Center.jsx";

const privateRoutes = [
    {
        title: '林间有风',
        type: 'view',
        name: 'about', // 可以设计为Symbol类型
        path: '/about',
        filePath: 'pages/About/About.jsx',
        inNav: true,
        icon: 'iconfont icon-information',
        order: 1,
        breadcrumbName: 'about',
        permissions: ['超级管理员独有权限'],
        component: About
    },
    {
        title: '数据分析',
        type: 'view',
        name: 'dataAnalysis', // 可以设计为Symbol类型
        path: '/dataAnalysis',
        filePath: 'pages/About/About.jsx',
        inNav: true,
        icon: 'iconfont icon-data',
        permissions: [],
        order: 2,
        breadcrumbName: 'dataAnalysis',
        component: Analysis
    },
    {
        title: '博客管理',
        type: 'view',
        name: 'blogManage', // 可以设计为Symbol类型
        // filePath: 'pages/About/About.jsx',
        inNav: true,
        icon: 'iconfont icon-data',
        permissions: [],
        order: 2,
        breadcrumbName: 'blogManage',
        children: [
            {
                title: '博客列表',
                type: 'view',
                name: 'blogList', // 可以设计为Symbol类型
                path: '/blogManage/blogList',
                // filePath: 'pages/About/About.jsx',
                inNav: true,
                icon: 'iconfont icon-data',
                permissions: [],
                order: 2,
                breadcrumbName: 'blogList',
                component: BlogList,
            },
            {
                title: '添加博客',
                type: 'view',
                name: 'blogEdit', // 可以设计为Symbol类型
                path: '/blogManage/blogEdit',
                // filePath: 'pages/About/About.jsx',
                inNav: true,
                icon: 'iconfont icon-data',
                permissions: [],
                order: 2,
                breadcrumbName: 'blogEdit',
                component: BlogEdit,
            },
            {
                title: '博客详情',
                type: 'view',
                name: 'blogDetail', // 可以设计为Symbol类型
                path: '/blogManage/blogDetail',
                // filePath: 'pages/About/About.jsx',
                inNav: false,
                icon: 'iconfont icon-data',
                permissions: [],
                order: 2,
                breadcrumbName: 'blogDetail',
                component: BlogDetail,
            }
        ]
    }
];

export default privateRoutes;