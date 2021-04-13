// import About from "@pages/About/About.jsx";
// import Home from "@pages/Home/Home.jsx";
import About from "@components/layout/Content/About/About.jsx";
import Analysis from '@/components/layout/Content/Analysis/Analysis'
import Blog from "@components/layout/Content/Blog/BlogList/Blog.jsx";
import BlogEdit from "@components/layout/Content/Blog/BlogEdit/BlogEdit.jsx";
// import Center from "@components/layout/Content/Center/Center.jsx";

const privateRoutes = [
    {
        title: '林间有风',
        type: 'view',
        name: 'about', // 可以设计为Symbol类型
        route: '/about',
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
        route: '/dataAnalysis',
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
                route: '/blogManage/blogList',
                // filePath: 'pages/About/About.jsx',
                inNav: true,
                icon: 'iconfont icon-data',
                permissions: [],
                order: 2,
                breadcrumbName: 'blogList',
                component: Blog,
            },
            {
                title: '添加博客',
                type: 'view',
                name: 'blogEdit', // 可以设计为Symbol类型
                route: '/blogManage/blogEdit',
                // filePath: 'pages/About/About.jsx',
                inNav: true,
                icon: 'iconfont icon-data',
                permissions: [],
                order: 2,
                breadcrumbName: 'blogEdit',
                component: BlogEdit,
            }
        ]
    }
];

export default privateRoutes;