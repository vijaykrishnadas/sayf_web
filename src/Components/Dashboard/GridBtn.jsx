import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

import GridViewIcon from '@mui/icons-material/GridView';
import { Grid } from '@material-ui/core';
import GetAppIcon from '@mui/icons-material/GetApp';
import ExtensionIcon from '@mui/icons-material/Extension';

import Tooltip from '@mui/material/Tooltip';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <GridViewIcon style={{ color: "white" }}></GridViewIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       
        <Grid style={{backgroundColor: "white", borderRadius: "10px"}} className='grid' container spacing={2}>
            <Grid  item>
                <button>
                    <GetAppIcon style={{color: "#4445C1"}}  fontSize='large'></GetAppIcon>
                    
                    <p>Get<br/> App</p>
                </button>
            </Grid>
            <Grid item>
                <button>
                    <ExtensionIcon style={{color: "#4445C1"}} fontSize='large'></ExtensionIcon>
                    <p>Get<br/>Plugin</p>
                </button>
            </Grid>
        </Grid>
      </Menu>
    </React.Fragment>
  );
}