import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

type MobileNavMenuProps = {
    mobileNavAnchorEl: any;
    isMobileNavMenuOpen?: boolean;
    mobileNavMenuId?: string;
    handleMobileNavMenuClose: any;
};
export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
    mobileNavAnchorEl,
    isMobileNavMenuOpen,
    mobileNavMenuId,
    handleMobileNavMenuClose,
}) => (
    <Menu
        anchorEl={mobileNavAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileNavMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!isMobileNavMenuOpen}
        onClose={handleMobileNavMenuClose}
    >
        <MenuItem>
            <IconButton aria-label="Show 4 new mails" color="inherit">
                <Icon>card_travel</Icon>
            </IconButton>
            <p>jobs</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="Show 11 new notifications" color="inherit">
                <Icon>account_box</Icon>
            </IconButton>
            <p>Freelancer</p>
        </MenuItem>
    </Menu>
);
