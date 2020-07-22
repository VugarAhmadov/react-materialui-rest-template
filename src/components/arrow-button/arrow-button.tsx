import React from 'react';
import { ButtonBase } from '@material-ui/core/';
import Icon from '@material-ui/core/Icon';
import { useStyles } from './arrowButton.style';

type ArrowButtonProps = {
    text: string;
    href?: string;
    onClick?: (event: any) => void;
    icon?: string;
    hasIcon?: boolean;
    style?: React.CSSProperties;
};

export const ArrowButton: React.FC<ArrowButtonProps> = ({
    style,
    text,
    onClick,
    href,
    hasIcon,
    icon = 'remove_red_eye',
}) => {
    const classes = useStyles();

    return (
        <ButtonBase
            color="primary"
            style={{ ...style }}
            className={`${classes.link} ${hasIcon ? classes.slidingIcon : classes.color}`}
            href={href || ''}
            onClick={onClick}
        >
            {text}
            {hasIcon && <Icon className={classes.icon}> {icon} </Icon>}
        </ButtonBase>
    );
};
