import { SideNavItems, SideNavSection } from '@modules/navigation/models';
export const sideNavSections: SideNavSection[] = [
    {
        text: 'CORE',
        items: ['dashboard'],
    },
    {
        text: 'INTERFACE',
        items: ['layouts', 'pages'],
    },
    
    {
        text: 'user',
        items: [ 'pages'],
    
    },
    
];

export const sideNavItems: SideNavItems = {
    dashboard: {
        icon: 'tachometer-alt',
        text: 'Dashboard',
        link: '/dashboard',
       
    },
    layouts: {
        icon: 'columns',
        text: 'Layouts',
        submenu: [
            {
                text: 'Dark Navigation',
                link: '/dashboard/static',
            },
            {
                text: 'Light Navigation',
                link: '/dashboard/light',
            },
        ],
    },
    pages: {
        icon: 'book-open',
        text: 'Pages',
        submenu: [
            {
                text: 'Authentication',
                submenu: [
                    // {
                    //     text: 'Login',
                    //     link: '/auth/login',
                    // },
                    {
                        text: 'Register',
                        link: '/auth/register',
                    },
                    // {
                    //     text: 'Forgot Password',
                    //     link: '/auth/forgot-password',
                    // },
                    {
                        text: 'Add News',
                        link: '/auth/addNews',
                    },
                    // {
                    //     text: 'All News',
                    //     link: '/auth/AllNews',
                    // },
                    {
                        text: 'All Users',
                        link: '/auth/showUsers',
                    }
                ],
            },
           
        ],
    },
    charts: {
        icon: 'chart-area',
        text: 'Charts',
        link: '/charts',
    },
    
    tables: {
        icon: 'table',
        text: 'Tables',
        link: '/tables',
    },
};
