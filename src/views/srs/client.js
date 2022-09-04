// material-ui
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

//react
import { useEffect, useState } from 'react';
import http from 'utils/ajax';
import config from 'configuration';
// ==============================|| SAMPLE PAGE ||============================== //

const baseURL = config.baseURL;

const columns = [
    { field: 'id', headerName: 'ID', width: 140 },
    { field: 'ip', headerName: 'IP', width: 140 },
    { field: 'vhost', headerName: 'Vhost', width: 140 },
    { field: 'type', headerName: '类型', width: 140 },
    {
        field: 'time',
        headerName: '时长(s)',
        type: 'number',
        width: 140
    },
    { field: 'tcurl', headerName: 'TcUrl', width: 300 }
];

const ClientPage = () => {
    const [rows, updateRows] = useState([]);

    useEffect(() => {
        http.get(baseURL + '/api/v1/clients').then((response) => {
            if (response !== null && response !== undefined) {
                updateRows(
                    response['clients'].map((item) => {
                        return {
                            id: item.id,
                            ip: item.ip,
                            vhost: item.vhost,
                            type: item.type,
                            clients: item.clients,
                            time: item.alive,
                            tcurl: item.tcUrl
                        };
                    })
                );
            }
        });
    });

    return (
        <MainCard title="Client">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </div>
        </MainCard>
    );
};

export default ClientPage;
