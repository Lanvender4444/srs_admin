import { Box, Button, Autocomplete, TextField } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const ConnectPage = () => (
    <MainCard title="连接到SRS服务器">
        <div style={{ height: 100, width: '100%' }}>
            <Autocomplete
                disablePortal
                id="protocol"
                sx={{ width: 400 }}
                options={[{ label: 'http' }]}
                renderInput={(params) => <TextField {...params} label="协议" />}
            />
        </div>
        <div style={{ height: 100, width: '100%' }}>
            <Autocomplete
                disablePortal
                id="ip"
                sx={{ width: 400 }}
                options={[{ label: 'ossrs.net' }]}
                renderInput={(params) => <TextField {...params} label="服务器IP" />}
            />
        </div>
        <div style={{ height: 100, width: '100%' }}>
            <Autocomplete
                disablePortal
                id="port"
                sx={{ width: 400 }}
                options={[{ label: 80 }]}
                renderInput={(params) => <TextField {...params} label="API端口" />}
            />
        </div>
        <Box sx={{ mt: 2, width: 400 }}>
            <AnimateButton>
                <Button disabled={false} fullWidth size="large" type="submit" variant="contained" color="secondary">
                    连接到SRS服务器
                </Button>
            </AnimateButton>
        </Box>
    </MainCard>
);

export default ConnectPage;
