
// React
import * as React from 'react';

// MUI
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


// A helpful input field that helps us from repeating ourselves
export function InputField({ label, value, options, onChange, hideRadioGroup=false, hideTextField=false, hideUndefinedValue=false, rowRadioGroup=false, ...props }) {
    return (
        <>
            {!hideTextField &&
                <Autocomplete
                    freeSolo
                    disableClearable
                    options={options}
                    inputValue={String(value)}
                    onInputChange={onChange}
                    renderInput={(params) => (
                        <TextField {...params} label={label} InputProps={{ ...params.InputProps, type: 'search', }}/>
                    )}
                    {...props}
                />
            }

            { !hideRadioGroup && 
                <RadioGroup
                    value={value}
                    onChange={onChange}
                    row={rowRadioGroup}
                >
                    { !hideUndefinedValue && <FormControlLabel value="" control={<Radio />} label="Undefined" /> }
                    {options.map((option, index) =>
                        <FormControlLabel key={index.toString()} value={option} control={<Radio />} label={option.charAt(0).toUpperCase() + option.slice(1)} />
                    )}
                </RadioGroup>
            }
        </>
    );
}

export default function AccordianItem({ children, direction="column", ...props}) {
    return (
        <Box sx={{ width: '100%' }}>
            <FormControl fullWidth={true} margin="normal" component="fieldset">
                <Stack spacing={2} direction={direction} {...props}>
                    {children}
                </Stack>
            </FormControl>
        </Box>
    );
}


