import React, { useContext } from 'react';
import { Switch } from '@mui/material';
import SettingsContext from './SettingsContext';
function AutomationButton({onClick}) {
    const settingsInfo = useContext(SettingsContext)

  return (
    <div>
        <div style={{textAlign:'center',marginTop:'40px',fontSize:'20px'}}>Automatic Session Start</div>
        <div style={{textAlign:'center'}} > <Switch onClick={onClick} checked={settingsInfo.automatic} /> </div>
    </div>
  )
}

export default AutomationButton;