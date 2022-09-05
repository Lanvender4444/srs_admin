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
        field: 'recv_bytes',
        headerName: '入口带宽(kbps)',
        type: 'number',
        width: 180
    },
    {
        field: 'send_bytes',
        headerName: '出口带宽(kbps)',
        type: 'number',
        width: 180
    },
    {
        field: 'hls',
        headerName: 'HLS',
        width: 70
    }
];

const VhostsPage = () => {
    const [rows, updateRows] = useState([]);

    useEffect(() => {
        http.get(baseURL + '/api/v1/vhosts').then((response) => {
            if (response !== null && response !== undefined) {
                updateRows(
                    response['vhosts'].map((item) => {
                        return {
                            id: item.id,
                            name: item.name,
                            status: 'on',
                            streams: item.streams,
                            clients: item.clients,
                            recv_bytes: item.kbps.recv_30s,
                            send_bytes: item.kbps.send_30s,
                            hls: item.hls.enabled
                        };
                    })
                );
            }
        });
    });

    return (
        <MainCard title="VHosts">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
            </div>
        </MainCard>
    );
};

export default VhostsPage;
