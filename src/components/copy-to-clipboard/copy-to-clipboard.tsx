import React, { useRef, useState } from 'react';
import { IconButton, Icon, InputAdornment, TextField } from '@material-ui/core';
import { useStyles } from './copy-to-clipboard.style';

type CopyToClipboard = {
    value: string;
    onCopied?: () => void;
    style?: React.CSSProperties;
};

export const CopyToClipboard: React.FC<CopyToClipboard> = ({ value = '', onCopied, style }) => {
    const classes = useStyles();

    const [newValue, setNewValue] = useState(value);
    const textAreaRef = useRef<any>(null);

    const copyToClipboard = (e: any): void => {
        textAreaRef.current?.lastChild?.children[0].select();
        document.execCommand('copy');
        e.target.focus();
        if (onCopied) {
            onCopied();
        }
    };

    const handleChange = () => (event: any): void => {
        setNewValue(event.target.value);
    };

    return (
        <div className={classes.container} style={{ ...style }}>
            <TextField
                id="outlined-adornment"
                className={`${classes.margin}, ${classes.textField}`}
                variant="outlined"
                onChange={handleChange()}
                ref={textAreaRef}
                type="text"
                value={newValue}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton className={classes.icon} edge="end" onClick={copyToClipboard}>
                                <Icon>file_copy</Icon>
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};
