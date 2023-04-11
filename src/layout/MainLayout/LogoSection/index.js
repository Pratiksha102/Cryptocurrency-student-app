import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Box } from '@mui/material';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';




// assets
import { IconMenu2 } from '@tabler/icons';
// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const defaultId = useSelector((state) => state.customization.defaultId);
    const dispatch = useDispatch();
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId,walletAddress:"humaan" })} component={Link} to={config.defaultPath}>
            {/* <Logo /> */}
            <AccountBoxIcon sx={{fontSize:"30px",color:'#CBC3E3',marginLeft:'15px'}}/>          
           <Typography
                                                        color={theme.palette.secondary.main}
                                                        sx={{marginTop:'10px'}}
                                                        gutterBottom
                                                        variant={matchDownSM ? 'h3' : 'h2'}
                                                    >
                                                          Dashboard
                                                    </Typography>
        </ButtonBase>
    );
};

export default LogoSection;
