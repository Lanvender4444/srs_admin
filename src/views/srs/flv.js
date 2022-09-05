// material-ui
import { Card } from '@mui/material';

// React
import { useParams } from 'react-router-dom';

//flv component
import ReactjsPlayer from 'reactjs-player';

import config from 'configuration';
// ==============================|| SAMPLE PAGE ||============================== //

const flvURL = config.flvURL;

const FlvPage = () => {
    let { app, name } = useParams();
    app = app.replace('$', '/');
    console.log(flvURL + '/' + app + '/' + name + '.flv');
    return (
        <Card>
            <div
                style={{
                    height: 540,
                    width: '100%',
                    position: 'relative'
                }}
            >
                <ReactjsPlayer kernel="flvjs" src={flvURL + '/' + app + '/' + name + '.flv'} />
            </div>
        </Card>
    );
};

export default FlvPage;
