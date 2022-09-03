// assets
import { IconUserCircle, IconUsers, IconHistory } from '@tabler/icons';

// constant
const icons = {
    IconUserCircle,
    IconUsers,
    IconHistory
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const manageMenu = {
    id: 'manage',
    title: '后台管理',
    type: 'group',
    children: [
        {
            id: 'authority',
            title: '权限管理',
            type: 'item',
            url: '/manage/authority',
            icon: icons.IconUserCircle,
            breadcrumbs: false
        },
        {
            id: 'user',
            title: '用户管理',
            type: 'item',
            url: '/manage/user',
            icon: icons.IconUsers,
            breadcrumbs: false
        },
        {
            id: 'history',
            title: '操作日志',
            type: 'item',
            url: '/manage/history',
            icon: icons.IconHistory,
            breadcrumbs: false
        }
    ]
};

export default manageMenu;
