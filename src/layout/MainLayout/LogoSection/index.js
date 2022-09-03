import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';

import 'assets/scss/index.scss';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <div className="title">SRS Admin</div>
    </ButtonBase>
);

export default LogoSection;
