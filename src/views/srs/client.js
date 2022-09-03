// material-ui
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const columns = [
    { field: 'id', headerName: 'ID', width: 140 },
    { field: 'ip', headerName: 'IP', width: 140 },
    { field: 'vhost', headerName: 'Vhost', width: 140 },
    { field: 'type', headerName: '类型', width: 140 },
    {
        field: 'time',
        headerName: '时长',
        type: 'number',
        width: 140
    },
    { field: 'tcurl', headerName: 'TcUrl', width: 140 }
];

const ClientPage = () => (
    <MainCard title="Client">
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={[]} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    </MainCard>
);

export default ClientPage;
