import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import AddIcon from '@material-ui/icons/Add';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ContainersCondition from './ContainersCondition';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    
    return (
        <div>
          <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
              setValue(newValue);
          }}
          showLabels
          className={'navbar'}
          >
          <BottomNavigationAction label="Log New Complain" icon={<AddIcon />}  />
          <BottomNavigationAction label="View All Complain" icon={<RestoreIcon />} />
          <BottomNavigationAction label="View Status" icon={<EqualizerIcon />} />
		  <BottomNavigationAction label="My Profile" icon={<AccountCircleIcon />} />
          </BottomNavigation>
		  <ContainersCondition value={value} ></ContainersCondition>    
        </div>        
    );
}