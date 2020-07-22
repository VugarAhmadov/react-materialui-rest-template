import React from 'react';
import { Icon, Tooltip } from '@material-ui/core';

export const EditorButton = ({ style, onToggle, active, label, tooltip, iconName }) => {
    const onToggleHandle = (e) => {
        e.preventDefault();
        onToggle(style);
    };
    let className = 'RichEditor-styleButton';
    if (active) {
        className += ' RichEditor-activeButton';
    }
    return (
        <span className={className} onMouseDown={onToggleHandle}>
            {iconName && (
                <Tooltip title={tooltip}>
                    <Icon style={{ fontSize: '20px' }}>{iconName}</Icon>
                </Tooltip>
            )}
            {label && <span style={{ fontFamily: 'Montserrat', fontWeight: 600 }}>{label}</span>}
        </span>
    );
};
