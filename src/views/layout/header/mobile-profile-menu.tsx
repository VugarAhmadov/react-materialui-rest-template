import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Icon from '@material-ui/core/Icon';

type MobileProfileMenuProps = {
    mobileMoreAnchorEl: any;
    isMobileProfileMenuOpen?: boolean;
    mobileProfileMenuId?: string;
    handleMobileProfileMenuClose?: any;
    handleProfileMenuOpen?: any;
};
export const MobileProfileMenu: React.FC<MobileProfileMenuProps> = ({
    mobileMoreAnchorEl,
    isMobileProfileMenuOpen,
    mobileProfileMenuId,
    handleMobileProfileMenuClose,
    handleProfileMenuOpen,
}) => (
    <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileProfileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={!!isMobileProfileMenuOpen}
        onClose={handleMobileProfileMenuClose}
    >
        <MenuItem>
            <IconButton aria-label="Show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <Icon>mail</Icon>
                </Badge>
            </IconButton>
            <p>Messages</p>
        </MenuItem>
        <MenuItem>
            <IconButton aria-label="Show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                    <Icon>notifications</Icon>
                </Badge>
            </IconButton>
            <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
                aria-label="Account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
            >
                <Icon>account_circle</Icon>
            </IconButton>
            <p>Profile</p>
        </MenuItem>
    </Menu>
);
