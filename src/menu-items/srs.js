// assets
import { IconWifi2, IconMenu2, IconTerminal2, IconAccessPoint, IconBrandYoutube, IconSettings } from '@tabler/icons';

// constant
const icons = {
    IconWifi2,
    IconMenu2,
    IconTerminal2,
    IconAccessPoint,
    IconBrandYoutube,
    IconSettings
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const srsMenu = {
    id: 'srs-menu',
    title: 'SRS 云端管理',
    type: 'group',
    children: [
        {
            id: 'connect',
            title: '连接SRS',
            type: 'item',
            url: '/srs/connect',
            icon: icons.IconWifi2,
            breadcrumbs: false
        },
        {
            id: 'summary',
            title: '概览',
            type: 'item',
            url: '/srs/summary',
            icon: icons.IconMenu2,
            breadcrumbs: false
        },
        {
            id: 'client',
            title: '客户端',
            type: 'item',
            url: '/srs/client',
            icon: icons.IconTerminal2,
            breadcrumbs: false
        },
        {
            id: 'vhosts',
            title: '虚拟主机',
            type: 'item',
            url: '/srs/vhosts',
            icon: icons.IconAccessPoint,
            breadcrumbs: false
        },
        {
            id: 'stream',
            title: '视频流',
            type: 'item',
            url: '/srs/stream',
            icon: icons.IconBrandYoutube,
            breadcrumbs: false
        },
        {
            id: 'config',
            title: '配置项',
            type: 'item',
            url: '/srs/config',
            icon: icons.IconSettings,
            breadcrumbs: false
        }
    ]
};

export default srsMenu;
