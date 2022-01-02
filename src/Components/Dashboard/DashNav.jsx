import React from 'react'

import Gplay from '../Dashboard/dashboard_assets/gplay.png';
import Logo from '../Dashboard/dashboard_assets/logo.png' 



import Avatar from '@material-ui/core/Avatar'
import DropMenu from './DropMenu'
import GridBtn from './GridBtn'

const DashNav = () => {
    return (
        <div className='dash-nav'>
              <img src={Logo} alt="logo" height="40px" width="75px"/>
                <div className="right">
                <GridBtn></GridBtn>
                <DropMenu></DropMenu>
                </div>
        </div>
    )
}

export default DashNav
