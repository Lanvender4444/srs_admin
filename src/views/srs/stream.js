// material-ui
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: '流名称', width: 100 },
    { field: 'status', headerName: '状态', width: 100 },
    {
        field: 'clients',
        headerName: '在线人数',
        type: 'number',
        width: 130
    },
    {
        field: 'input-bandwidth',
        headerName: '入口带宽(Mbps)',
        type: 'number',
        width: 180
    },
    {
        field: 'out-bandwidth',
        headerName: '出口带宽(Mbps)',
        type: 'number',
        width: 180
    },
    {
        field: 'video-info',
        headerName: '视频信息',
        width: 120
    },
    {
        field: 'radio-info',
        headerName: '音频信息',
        width: 120
    }
];

const StreamPage = () => (
    <MainCard title="Stream">
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={[]} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    </MainCard>
);

export default StreamPage;
