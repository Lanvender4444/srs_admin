import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// SRS routing
const ClientPage = Loadable(lazy(() => import('views/srs/client')));
const ConfigPage = Loadable(lazy(() => import('views/srs/config')));
const ConnectPage = Loadable(lazy(() => import('views/srs/connect')));
const ConsolePage = Loadable(lazy(() => import('views/srs/console')));
const StreamPage = Loadable(lazy(() => import('views/srs/stream')));
const SummaryPage = Loadable(lazy(() => import('views/srs/summary')));
const VhostsPage = Loadable(lazy(() => import('views/srs/vhosts')));
const FlvPage = Loadable(lazy(() => import('views/srs/flv')));

// Manage routing

const UserPage = Loadable(lazy(() => import('views/manage/user')));
const AuthorityPage = Loadable(lazy(() => import('views/manage/authority')));
const HistoryPage = Loadable(lazy(() => import('views/manage/history')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'srs',
            children: [
                {
                    path: 'connect',
                    element: <ConnectPage />
                },
                {
                    path: 'client',
                    element: <ClientPage />
                },
                {
                    path: 'config',
                    element: <ConfigPage />
                },
                {
                    path: 'console',
                    element: <ConsolePage />
                },
                {
                    path: 'stream',
                    element: <StreamPage />
                },
                {
                    path: 'summary',
                    element: <SummaryPage />
                },
                {
                    path: 'vhosts',
                    element: <VhostsPage />
                },
                {
                    path: 'flv/:app/:name',
                    element: <FlvPage />
                }
            ]
        },
        {
            path: 'manage',
            children: [
                {
                    path: 'authority',
                    element: <AuthorityPage />
                },
                {
                    path: 'history',
                    element: <HistoryPage />
                },
                {
                    path: 'user',
                    element: <UserPage />
                }
            ]
        }
    ]
};

export default MainRoutes;
