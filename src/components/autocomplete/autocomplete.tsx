import TextField from '@material-ui/core/TextField';
import React, { ReactNode } from 'react';
import { Autocomplete, AutocompleteRenderInputParams } from '@material-ui/lab';
import { useStyles } from './autocomplete.style';

type AutoCompleteInputProps = {
    loading: boolean;
    options: any[];
    onChange: any;
    onInputChange?: any;
    touched: any;
    error: any;
    value: any;
    getOptionSelected: any;
    getOptionLabel: any;
};

export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
    loading,
    options,
    onChange,
    onInputChange,
    touched,
    error,
    value,
    getOptionSelected,
    getOptionLabel,
}) => {
    const classes = useStyles();

    return (
        <Autocomplete
            classes={{
                inputRoot: classes.inputRoot,
                input: classes.inputInput,
            }}
            size="small"
            options={options}
            loading={loading}
            getOptionSelected={getOptionSelected}
            getOptionLabel={getOptionLabel}
            onChange={onChange}
            onInputChange={onInputChange}
            value={value}
            renderInput={(params: AutocompleteRenderInputParams): ReactNode => (
                <TextField {...params} error={touched && !!error} helperText={error} variant="outlined" />
            )}
        />
    );
};
