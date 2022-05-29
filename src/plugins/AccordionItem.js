
// React
import React, { useState, useEffect } from 'react';
import { useNode } from '@craftjs/core';
import { ChromePicker } from 'react-color';
import classnames from 'classnames';

// MUI
import { Grid, Slider, RadioGroup } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import { TextField, makeStyles, InputAdornment } from '@material-ui/core';
import { FormControlLabel, Radio } from '@material-ui/core';


// ToolbarRadio ----------------------------------------------------------------------------


// Inspired by blueprintjs
function StyledRadio(props) {
    const useStyles = makeStyles({
        icon: {
            borderRadius: '100%',
            width: 15,
            height: 15,
            background: 'transparent',
            position: 'relative',
            padding: '3px',
            border: '2px solid rgb(142, 142, 142)',
            transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)',
        },
        checkedIcon: {
            background: 'rgb(19, 115, 230)',
            borderColor: 'transparent',
            '&:before': {
                content: '""',
                display: 'block',
                width: '100%',
                height: '100%',
                borderRadius: '100%',
                background: '#fff',
            },
        },
    });
    
    const classes = useStyles({});

    return (
        <Radio
            disableRipple
            color="default"
            checkedIcon={
                <span className={classnames(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}

const useLabelStyles = makeStyles({
    label: {
        fontSize: '15px',
    },
});

export const ToolbarRadio = ({ value, label }: any) => {
    const classes = useLabelStyles({});
    return (
        <FormControlLabel
            classes={classes}
            value={value}
            control={<StyledRadio />}
            label={label}
        />
    );
};


// ToolbarDropdown -------------------------------------------------------------------------

export const ToolbarDropdown = ({ title, value, onChange, children }) => {
    return (
        <FormControl>
            <InputLabel>{title}</InputLabel>
            <Select native value={value} onChange={(e) => onChange(e.target.value)}>
                {children}
            </Select>
        </FormControl>
    );
};


// ToolbarDropdown -------------------------------------------------------------------------



export type ToolbarTextInputProps = {
    prefix?: string;
    label?: string;
    type: string;
    onChange?: (value: any) => void;
    value?: any;
};
export const ToolbarTextInput = ({
    onChange,
    value,
    prefix,
    label,
    type,
    ...props
}: ToolbarTextInputProps) => {

    const useStyles = makeStyles({
        root: {
            padding: 0,
            width: '100%',
            // background:"#efeff1",
            borderRadius: '100px',
            border: 'none',
            margin: 0,
            marginTop: 7,
            position: 'relative',
        },
        input: {
            background: '#efeff1',
            borderRadius: '100px',
            fontSize: '12px',
            paddingLeft: '28px',
            paddingBottom: '8px',
            paddingTop: '8px',
            margin: 0,
        }, // a style rule
        // notchedOutline: {
        //   borderColor:'transparent',
        //   borderRadius: "100px"
        // }
    });
    
    const useLabelStyles = makeStyles({
        root: {
            color: 'rgb(128,128,128)',
        },
        formControl: {
            fontSize: '18px',
            borderRadius: '100px',
            paddingLeft: '0px',
            paddingTop: '3px',
            marginBottom: '3px',
            position: 'relative',
            left: '-12px',
        }, // a style rule
    });

    const [internalValue, setInternalValue] = useState(value);
    const [active, setActive] = useState(false);
    const classes = useStyles({});
    const labelClasses = useLabelStyles({});
    useEffect(() => {
        let val = value;
        if (type === 'color' || type === 'bg')
            val = `rgba(${Object.values(value)})`;
        setInternalValue(val);
    }, [value, type]);

    return (
        <div
            style={{ width: '100%', position: 'relative' }}
            onClick={() => {
                setActive(true);
            }}
        >
            {(type === 'color' || type === 'bg') && active ? (
                <div
                    className="absolute"
                    style={{
                        zIndex: 99999,
                        top: 'calc(100% + 10px)',
                        left: '-5%',
                    }}
                >
                    <div
                        className="fixed top-0 left-0 w-full h-full cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setActive(false);
                        }}
                    ></div>
                    <ChromePicker
                        color={value}
                        onChange={(color: any) => {
                            onChange(color.rgb);
                        }}
                    />
                </div>
            ) : null}
            <TextField
                label={label}
                style={{ margin: 0, width: '100%' }}
                value={internalValue || ''}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onChange((e.target).value);
                    }
                }}
                onChange={(e) => {
                    setInternalValue(e.target.value);
                }}
                margin="dense"
                variant="filled"
                InputProps={{
                    classes,
                    disableUnderline: true,
                    startAdornment: ['color', 'bg'].includes(type) ? (
                        <InputAdornment
                            position="start"
                            style={{
                                position: 'absolute',
                                marginTop: '2px',
                                marginRight: '8px',
                            }}
                        >
                            <div
                                className="w-2 h-2 inline-block rounded-full relative"
                                style={{
                                    left: '15px',
                                    background: internalValue,
                                }}
                            />
                        </InputAdornment>
                    ) : null,
                }}
                InputLabelProps={{
                    classes: {
                        ...labelClasses,
                    },
                    shrink: true,
                }}
                {...props}
            />
        </div>
    );
};


// ToolbarItem -------------------------------------------------------------------------

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const SliderStyled = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '5px 0',
        width: '100%',
    },
    thumb: {
        height: 14,
        width: 14,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        marginTop: -7,
        marginLeft: -7,
        '&:focus,&:hover,&$active': {
            boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 11px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);

export type ToolbarItemProps = {
    prefix?: string;
    label?: string;
    full?: boolean;
    propKey?: string;
    index?: number;
    children?: React.ReactNode;
    type: string;
    onChange?: (value: any) => any;
};
const ToolbarItem = ({
    full = false,
    propKey,
    type,
    onChange,
    index,
    ...props
}: ToolbarItemProps) => {
    const {
        actions: { setProp },
        propValue,
    } = useNode((node) => ({
        propValue: node.data.props[propKey],
    }));
    const value = Array.isArray(propValue) ? propValue[index] : propValue;

    return (
        <Grid item xs={full ? 12 : 6}>
            <div className="mb-2">
                {['text', 'color', 'bg', 'number'].includes(type) ? (
                    <ToolbarTextInput
                        {...props}
                        type={type}
                        value={value}
                        onChange={(value) => {
                            setProp((props: any) => {
                                if (Array.isArray(propValue)) {
                                    props[propKey][index] = onChange ? onChange(value) : value;
                                } else {
                                    props[propKey] = onChange ? onChange(value) : value;
                                }
                            }, 500);
                        }}
                    />
                ) : type === 'slider' ? (
                    <>
                        {props.label ? (
                            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
                        ) : null}
                        <SliderStyled
                            value={parseInt(value) || 0}
                            onChange={
                                ((_, value: number) => {
                                    setProp((props: any) => {
                                        if (Array.isArray(propValue)) {
                                            props[propKey][index] = onChange
                                                ? onChange(value)
                                                : value;
                                        } else {
                                            props[propKey] = onChange ? onChange(value) : value;
                                        }
                                    }, 1000);
                                })
                            }
                        />
                    </>
                ) : type === 'radio' ? (
                    <>
                        {props.label ? (
                            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
                        ) : null}
                        <RadioGroup
                            value={value || 0}
                            onChange={(e) => {
                                const value = e.target.value;
                                setProp((props: any) => {
                                    props[propKey] = onChange ? onChange(value) : value;
                                });
                            }}
                        >
                            {props.children}
                        </RadioGroup>
                    </>
                ) : type === 'select' ? (
                    <ToolbarDropdown
                        value={value || ''}
                        onChange={(value) =>
                            setProp(
                                (props: any) =>
                                    (props[propKey] = onChange ? onChange(value) : value)
                            )
                        }
                        {...props}
                    />
                ) : null}
            </div>
        </Grid>
    );
};

export default ToolbarItem;