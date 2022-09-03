// material-ui
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: '主机名称', width: 130 },
    { field: 'status', headerName: '状态', width: 130 },
    {
        field: 'streams',
        headerName: '在线流',
        type: 'number',
        width: 130
    },
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
        field: 'hls',
        headerName: 'HLS',
        width: 70
    }
];

const VhostsPage = () => (
    <MainCard title="VHosts">
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={[]} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    </MainCard>
);

export default VhostsPage;
