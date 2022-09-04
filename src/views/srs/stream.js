// material-ui
import { DataGrid } from '@mui/x-data-grid';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import { useEffect, useState } from 'react';
import http from 'utils/ajax';
import config from 'configuration';
// ==============================|| SAMPLE PAGE ||============================== //
const baseURL = config.baseURL;

const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'name', headerName: '流名称', width: 100 },
    { field: 'status', headerName: '状态', width: 100 },
    {
        field: 'clients',
        headerName: '在线人数',
        type: 'number',
        width: 100
    },
    {
        field: 'recv_bytes',
        headerName: '入口带宽(kbps)',
        type: 'number',
        width: 130
    },
    {
        field: 'send_bytes',
        headerName: '出口带宽(kbps)',
        type: 'number',
        width: 130
    },
    {
        field: 'video_info',
        headerName: '视频信息',
        width: 160
    },
    {
        field: 'audio_info',
        headerName: '音频信息',
        width: 160
    }
];

const StreamPage = () => {
    const [rows, updateRows] = useState([]);

    useEffect(() => {
        http.get(baseURL + '/api/v1/streams').then((response) => {
            if (response !== null && response !== undefined) {
                updateRows(
                    response['streams'].map((item) => {
                        return {
                            id: item.id,
                            name: item.name,
                            status: 'on',
                            clients: item.clients,
                            recv_bytes: item.kbps.recv_30s,
                            send_bytes: item.kbps.send_30s,
                            video_info:
                                item.video.codec +
                                '/' +
                                item.video.profile +
                                '/' +
                                item.video.level +
                                '/' +
                                item.video.width +
                                'x' +
                                item.video.height,
                            audio_info:
                                item.audio.codec + '/' + item.audio.sample_rate + '/' + item.audio.channel + '/' + item.audio.profile
                        };
                    })
                );
            }
        });
    });

    return (
        <MainCard title="Stream">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </div>
        </MainCard>
    );
};

export default StreamPage;
