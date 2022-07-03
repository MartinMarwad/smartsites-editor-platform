
// React
import React from 'react';
import { useNode, useEditor } from '@craftjs/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { SketchPicker } from 'react-color'
import debounce from 'lodash.debounce';

// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';

// MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

// Local
import AccordionGroup from './AccordionGroup';
import AccordionSection from './AccordionSection';
import AccordionItem from './AccordionItem';
import { InputField } from './AccordionItem';
import CustomModal from './Modal';


// Helper function to determine the real value from an Autocomplete input, which only outputs strings.
export function getRealValue(value) {

    // If empty string
    if (!value || value.length === 0 ) return "";
    
    // If number
    if (Number(value)) return Number(value);

    // if boolean
    if ( value === 'true' || value === 'false' ) return (value === 'true');
    
    // Else return original value
    return value;
}

// Generic Plugin Stylesheet Settings
export default function PluginSettings(component_props) {
    const { actions, plugin, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let plugin;
        if (currentNodeId) {
            plugin = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }
        return { plugin, isEnabled: state.options.enabled, };
    });
    const { actions: { setProp, setCustom }, props, custom_displayName, displayName } = useNode((node) => ({
        props: node.data.props,
        custom_displayName: node.data.custom.displayName,
        displayName: node.data.displayName
    }));

    // Manage Modal
    const [openModal, setOpenModal] = React.useState(false);

    return (
        <Box>

            {/* Global Component Properties */}
            <Grid container spacing={1} wrap='nowrap' sx={{ p: 2 }} direction="row" alignItems="center">
                <Grid item xs>
                    <Chip
                        size="medium"
                        color="primary"
                        label={displayName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        id="plugin-text"
                        size="medium"
                        variant="outlined"
                        label="Display Name"
                        value={custom_displayName || displayName}
                        onChange={(event) => {
                            setCustom((values) => (values.displayName = event.target.value))
                        }}
                    />
                </Grid>

                { plugin.isDeletable && 
                <Grid item xs>
                    <Tooltip title="Delete Component">
                        <IconButton aria-label="delete" size="medium" onClick={() => {actions.delete(plugin.id);}}>
                            <DeleteIcon  fontSize="inherit" />
                        </IconButton>
                    </Tooltip>
                </Grid>}
                
            </Grid>

            {/* General Component Settings */}
            {component_props.children}

            {/* Dimensions */}
            <AccordionGroup title="Dimensions" notDefaultExpanded>

                {/* Size */}
                <AccordionSection title="Size" secondaryChip={`${props.sx.width}, ${props.sx.height}`} divider>
                     <AccordionItem sx={{width: '100%'}}>

                         {/* width, height */}
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Width"
                                value={props.sx.width}
                                options={['auto', 'initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.width = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Height"
                                value={props.sx.height}
                                options={['auto', 'initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.height = getRealValue(value))) }}
                            />
                        </Stack>

                        {/* maxWidth, maxHeight */}
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Max-Width"
                                value={props.sx.maxWidth}
                                options={['auto', 'initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.maxWidth = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Max-Height"
                                value={props.sx.maxHeight}
                                options={['auto', 'initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.maxHeight = getRealValue(value))) }}
                            />
                        </Stack>

                        {/* minWidth, minHeight */}
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Min-Width"
                                value={props.sx.minWidth}
                                options={['auto', 'initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.minWidth = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Min-Height"
                                value={props.sx.minHeight}
                                options={['auto', 'initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.minHeight = getRealValue(value))) }}
                            />
                        </Stack>

                    </AccordionItem>
                </AccordionSection>

                {/* Padding */}
                <AccordionSection title="Padding" secondaryChip={`${props.sx.pt}, ${props.sx.pr}, ${props.sx.pb}, ${props.sx.pl}`} divider>
                     <AccordionItem sx={{width: '100%'}}>

                         {/* top, right */}
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Top"
                                value={props.sx.pt}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.pt = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Right"
                                value={props.sx.pr}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.pr = getRealValue(value))) }}
                            />
                        </Stack>

                        {/* bottom, left */}
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Bottom"
                                value={props.sx.pb}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.pb = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Left"
                                value={props.sx.pl}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.pl = getRealValue(value))) }}
                            />
                        </Stack>

                    </AccordionItem>
                </AccordionSection>

                {/* margin */}
                <AccordionSection title="Margin" secondaryChip={`${props.sx.mt}, ${props.sx.mr}, ${props.sx.mb}, ${props.sx.ml}`} divider>
                     <AccordionItem sx={{width: '100%'}}>

                        {/* top, right */}
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{ width: '100%' }}
                                label="Top"
                                value={props.sx.mt}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.mt = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{ width: '100%' }}
                                label="Right"
                                value={props.sx.mr}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.mr = getRealValue(value))) }}
                            />
                        </Stack>

                        {/* bottom, left */}
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Bottom"
                                value={props.sx.mb}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.mb = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Left"
                                value={props.sx.ml}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.ml = getRealValue(value))) }}
                            />
                        </Stack>

                    </AccordionItem>
                </AccordionSection>

                {/* position */}
                <AccordionSection title="Position" secondaryChip={props.sx.position}>
                    <AccordionItem sx={{ width: '100%' }}>

                        {/* position */}
                        <Typography sx={{ pb: 2, color: 'gray', }}>
                            It is recommended not to change these settings unless you know what you are doing.
                        </Typography>
                        <RadioGroup
                            name="dimensions-position"
                            value={props.sx.position}
                            onChange={(e) => setProp((props) => (props.sx.position = e.target.value))}
                            row={false}
                        >
                            <FormControlLabel value="static" control={<Radio />} label="Static" />
                            <FormControlLabel value="relative" control={<Radio />} label="Relative" />
                            <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
                            <FormControlLabel value="absolute" control={<Radio />} label="Absolute" />
                            <FormControlLabel value="sticky" control={<Radio />} label="Sticky" />
                        </RadioGroup>

                        {/* position coordinates */}
                        <Typography>Position Coordinates:</Typography>
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{ width: '100%' }}
                                label="Top"
                                value={props.sx.top}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.top = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{ width: '100%' }}
                                label="Right"
                                value={props.sx.right}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.right = getRealValue(value))) }}
                            />
                        </Stack>                    
                        <Stack direction="row" spacing={2} >
                            <InputField
                                hideRadioGroup
                                sx={{ width: '100%' }}
                                label="Bottom"
                                value={props.sx.bottom}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.bottom = getRealValue(value))) }}
                            />
                            <InputField
                                hideRadioGroup
                                sx={{width: '100%'}}
                                label="Left"
                                value={props.sx.left}
                                options={['initial', 'inherit']}
                                onChange={(event, value) => { setProp((props) => (props.sx.left = getRealValue(value))) }}
                            />
                        </Stack>

                        {/* Z-Index */}
                        <Typography>Z-Index:</Typography>
                        <InputField
                            hideRadioGroup
                            sx={{width: '100%'}}
                            label="Left"
                            value={props.sx.zIndex}
                            options={['initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.zIndex = getRealValue(value))) }}
                        />

                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>

            {/* Styling */}
            <AccordionGroup title="Styling" notDefaultExpanded>

                {/* color */}
                <AccordionSection title="Color" secondaryChip={props.sx.color} divider>
                     <AccordionItem>
                        <InputField
                            hideRadioGroup
                            label="Color"
                            value={props.sx.color}
                            options={['primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled', 'background.default']}
                            onChange={(event, value) => { setProp((props) => (props.sx.color = getRealValue(value))) }}
                        />
                        <Box sx={{boxShadow: 0,}}>
                            <SketchPicker color={props.sx.color} onChangeComplete={(color) => { setProp((props) => (props.sx.color = color.hex), 10000) }} />
                        </Box>
                    </AccordionItem>
                </AccordionSection>

                {/* backgroundColor */}
                <AccordionSection title="Background Color" secondaryChip={props.sx.backgroundColor} divider>
                     <AccordionItem>
                        <InputField
                            hideRadioGroup
                            label="Background Color"
                            value={props.sx.backgroundColor}
                            options={['primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled', 'background.default']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundColor = getRealValue(value))) }}
                        />
                        <Box sx={{boxShadow: 0,}}>
                            <SketchPicker color={props.sx.backgroundColor} onChangeComplete={(color) => { setProp((props) => (props.sx.backgroundColor = color.hex), 10000) }} />
                        </Box>
                    </AccordionItem>
                </AccordionSection>

                {/* backgroundImage */}
                <AccordionSection title="Background Image" secondaryChip={props.sx.backgroundImage} divider>
                     <AccordionItem direction='row'>
                        <Box sx={{ boxShadow: 0, }}>
                            <Tooltip title="Upload Image">
                                <IconButton aria-label="edit" size="large" onClick={() => { setOpenModal(true); }}>
                                    <AddPhotoAlternateIcon fontSize="inherit" />
                                </IconButton>
                            </Tooltip>
                            <CustomModal
                                title="Upload Image"
                                open={openModal}
                                fullWidth={true}
                                maxWidth="md"
                                onClose={() => { setOpenModal(false); }}
                            >
                                Sorry, this is not completed yet, but this is where the custom image uploader goes.
                            </CustomModal>
                        </Box>
                        <InputField 
                            hideRadioGroup
                            sx={{width: '100%'}}
                            label="Background Image"
                            value={props.sx.backgroundImage}
                            options={['none', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundImage = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* backgroundPosition */}
                <AccordionSection title="Background Position" secondaryChip={props.sx.backgroundPosition} divider>
                     <AccordionItem>
                        <InputField
                            label="Background Position"
                            value={props.sx.backgroundPosition}
                            options={['left top', 'left center', 'left bottom', 'right top', 'right center', 'right bottom', 'center top', 'center center', 'center bottom', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundPosition = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* backgroundSize */}
                <AccordionSection title="Background Size" secondaryChip={props.sx.backgroundSize} divider>
                     <AccordionItem>
                        <InputField
                            label="Background Size"
                            value={props.sx.backgroundSize}
                            options={['auto', 'cover', 'contain', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundSize = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* backgroundRepeat */}
                <AccordionSection title="Background Repeat" secondaryChip={props.sx.backgroundRepeat} divider>
                     <AccordionItem>
                        <InputField
                            label="Background Repeat"
                            value={props.sx.backgroundRepeat}
                            options={['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'space', 'round', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundRepeat = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* backgroundOrigin */}
                <AccordionSection title="Background Origin" secondaryChip={props.sx.backgroundOrigin} divider>
                     <AccordionItem>
                        <InputField
                            label="Background Origin"
                            value={props.sx.backgroundOrigin}
                            options={['padding-box', 'border-box', 'content-box', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundOrigin = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* backgroundClip */}
                <AccordionSection title="Background Clip" secondaryChip={props.sx.backgroundClip} divider>
                     <AccordionItem>
                        <InputField
                            label="Background Clip"
                            value={props.sx.backgroundClip}
                            options={['border-box', 'padding-box', 'content-box', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundClip = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* backgroundAttachment */}
                <AccordionSection title="Background Attachment" secondaryChip={props.sx.backgroundAttachment} divider>
                     <AccordionItem>
                        <InputField
                            label="Background Attachment"
                            value={props.sx.backgroundAttachment}
                            options={['scroll', 'fixed', 'local', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.backgroundAttachment = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* boxShadow */}
                <AccordionSection title="Box Shadow" secondaryChip={props.sx.boxShadow} divider>
                     <AccordionItem>
                        <InputField
                            label="Box Shadow"
                            value={props.sx.boxShadow}
                            options={['initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.boxShadow = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* borderWidth */}
                <AccordionSection title="Border Width" secondaryChip={props.sx.borderWidth} divider>
                     <AccordionItem>
                        <InputField
                            label="Border Width"
                            value={props.sx.borderWidth}
                            options={['medium', 'thin', 'thick', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.borderWidth = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* borderColor */}
                <AccordionSection title="Border Color" secondaryChip={props.sx.borderColor} divider>
                    <AccordionItem>
                        <InputField
                            hideRadioGroup
                            label="Border Color"
                            value={props.sx.borderColor}
                            options={['primary.main', 'secondary.main', 'error.main', 'warning.main', 'info.main', 'success.main', 'text.primary', 'text.secondary', 'text.disabled', 'background.default']}
                            onChange={(event, value) => { setProp((props) => (props.sx.borderColor = getRealValue(value))) }}
                        />
                        <Box sx={{boxShadow: 0,}}>
                            <SketchPicker color={props.sx.borderColor} onChangeComplete={(color) => { setProp((props) => (props.sx.borderColor = color.hex), 10000) }} />
                        </Box>
                    </AccordionItem>
                </AccordionSection>
                
                {/* borderStyle */}
                <AccordionSection title="Border Style" secondaryChip={props.sx.borderStyle} divider>
                     <AccordionItem>
                        <InputField
                            label="Border Style"
                            value={props.sx.borderStyle}
                            options={['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.borderStyle = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* borderRadius */}
                <AccordionSection title="Border Radius" secondaryChip={props.sx.borderRadius} >
                     <AccordionItem>
                        <InputField
                            label="Border Radius"
                            value={props.sx.borderRadius}
                            options={['initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.borderRadius = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>

            {/* Typography */}
            <AccordionGroup title="Typography" notDefaultExpanded>

                {/* typography */}
                <AccordionSection title="Typography" secondaryChip={props.sx.typography} divider>
                    <AccordionItem>
                        <InputField
                            label="Typography"
                            value={props.sx.typography}
                            options={['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']}
                            onChange={(event, value) => { setProp((props) => (props.sx.typography = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* textAlign */}
                <AccordionSection title="Text Align" secondaryChip={props.sx.textAlign} divider>
                    <AccordionItem>
                        <InputField
                            label="Text Align"
                            value={props.sx.textAlign}
                            options={['left', 'center', 'right',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.textAlign = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* textTransform */}
                <AccordionSection title="Text Transform" secondaryChip={props.sx.textTransform} divider>
                    <AccordionItem>
                        <InputField
                            label="Text Transform"
                            value={props.sx.textTransform}
                            options={['none', 'capitalize', 'lowercase', 'uppercase',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.textTransform = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* fontFamily */}
                <AccordionSection title="Font Family" secondaryChip={props.sx.fontFamily} divider>
                    <AccordionItem>
                        <InputField
                            label="Font Family"
                            value={props.sx.fontFamily}
                            options={['default', "Roboto", "Helvetica", "Arial", "sans-serif", "Georgia", "Times New Roman", "Arial ", "Impact", "Lucida Sans Unicode", "Tahoma", "Verdana", "Courier New", "Lucida Console", "serif", "cursive", "fantasy", "monospace"]}
                            onChange={(event, value) => { setProp((props) => (props.sx.fontFamily = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* fontSize */}
                <AccordionSection title="Font Size" secondaryChip={props.sx.fontSize} divider>
                    <AccordionItem>
                        <InputField
                            label="Font Size"
                            value={props.sx.fontSize}
                            options={['initial', 'inherit',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.fontSize = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* fontStyle */}
                <AccordionSection title="Font Style" secondaryChip={props.sx.fontStyle} divider>
                    <AccordionItem>
                        <InputField
                            label="Font Style"
                            value={props.sx.fontStyle}
                            options={['normal', 'italic', 'oblique', 'initial', 'inherit',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.fontStyle = value)) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* fontWeight */}
                <AccordionSection title="Font Weight" secondaryChip={props.sx.fontWeight} divider>
                    <AccordionItem>
                        <InputField
                            label="Font Weight"
                            value={props.sx.fontWeight}
                            options={['normal', 'bold', 'bolder', 'lighter', 'initial', 'inherit',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.fontWeight = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* letterSpacing */}
                <AccordionSection title="Letter Spacing" secondaryChip={props.sx.letterSpacing} divider>
                    <AccordionItem>
                        <InputField
                            label="Letter Spacing"
                            value={props.sx.letterSpacing}
                            options={['normal', 'initial', 'inherit',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.letterSpacing = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* lineHeight */}
                <AccordionSection title="Line Height" secondaryChip={props.sx.lineHeight}>
                    <AccordionItem>
                        <InputField
                            label="Line Height"
                            value={props.sx.lineHeight}
                            options={['normal', 'initial', 'inherit',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.lineHeight = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>

            {/* Flexbox */}
            <AccordionGroup title="Flexbox" notDefaultExpanded>

                {/* display */}
                <AccordionSection title="Display" secondaryChip={props.sx.display} divider>
                    <AccordionItem>
                        <InputField
                            label="Display"
                            value={props.sx.display}
                            options={['inline', 'block', 'contents', 'flex', 'grid', 'inline-block', 'inline-flex', 'inline-grid', 'inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group', 'table-row-group', 'table-cell', 'table-column', 'table-row', 'none', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.display = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* flexDirection */}
                <AccordionSection title="Flex Direction" secondaryChip={props.sx.flexDirection} divider>
                    <AccordionItem>
                        <InputField
                            label="Flex Direction"
                            value={props.sx.flexDirection}
                            options={['row', 'row-reverse', 'column', 'column-reverse', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.flexDirection = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* flexWrap */}
                <AccordionSection title="Flex Wrap" secondaryChip={props.sx.flexWrap} divider>
                    <AccordionItem>
                        <InputField
                            label="Flex Wrap"
                            value={props.sx.flexWrap}
                            options={['nowrap', 'wrap', 'wrap-reverse', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.flexWrap = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* justifyContent */}
                <AccordionSection title="Justify Content" secondaryChip={props.sx.justifyContent} divider>
                    <AccordionItem>
                        <InputField
                            label="Justify Content"
                            value={props.sx.justifyContent}
                            options={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.justifyContent = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* alignItems */}
                <AccordionSection title="Align Items" secondaryChip={props.sx.alignItems} divider>
                    <AccordionItem>
                        <InputField
                            label="Align Items"
                            value={props.sx.alignItems}
                            options={['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.alignItems = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* alignContent */}
                <AccordionSection title="Align Content" secondaryChip={props.sx.alignContent} divider>
                    <AccordionItem>
                        <InputField
                            label="Align Content"
                            value={props.sx.alignContent}
                            options={['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.alignContent = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* order */}
                <AccordionSection title="Order" secondaryChip={props.sx.order} divider>
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Order"
                            value={props.sx.order}
                            options={['initial', 'inherit',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.order = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* flex */}
                <AccordionSection title="Flex" secondaryChip={props.sx.flex} divider>
                    <AccordionItem>
                        <InputField
                            label="Flex"
                            value={props.sx.flex}
                            options={['auto', 'initial', 'none', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.flex = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* flexGrow */}
                <AccordionSection title="Flex Grow" secondaryChip={props.sx.flexGrow} divider>
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Flex Grow"
                            value={props.sx.flexGrow}
                            options={['initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.flexGrow = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* flexShrink */}
                <AccordionSection title="Flex Shrink" secondaryChip={props.sx.flexShrink} divider>
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Flex Shrink"
                            value={props.sx.flexShrink}
                            options={['initial', 'inherit',]}
                            onChange={(event, value) => { setProp((props) => (props.sx.flexShrink = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* alignSelf */}
                <AccordionSection title="Align Self" secondaryChip={props.sx.alignSelf} divider>
                    <AccordionItem>
                        <InputField
                            label="Align Self"
                            value={props.sx.alignSelf}
                            options={['auto', 'stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'initial', 'inherit']}
                            onChange={(event, value) => { setProp((props) => (props.sx.alignSelf = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
            </AccordionGroup>

            {/* Grid */}
            {/* <AccordionGroup title="Grid" notDefaultExpanded>
            </AccordionGroup> */}

        </Box>
    );
};
