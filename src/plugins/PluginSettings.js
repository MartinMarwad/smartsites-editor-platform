
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

// Local
import AccordionGroup from './AccordionGroup';
import AccordionSection from './AccordionSection';
import AccordionItem, { ToolbarRadio } from './AccordionItem';


// Generic Plugin Stylesheet Settings
export default function PluginSettings(component_props) {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    // console.log(props);

    return (
        <Box>

            {/* General Component Settings */}
            {component_props.children}

            {/* Dimensions */}
            <AccordionGroup title="Dimensions" notDefaultExpanded>

                {/* size */}
                <AccordionSection title="Size" 
                    // secondary={<Chip label={`${props.sx?.width}, ${props.sx?.height}`} />}
                >
                    <Grid container spacing={2}>

                        {/* width */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-width"
                                label="Width"
                                variant="outlined"
                                value={props.sx?.width}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.width = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* height */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-height"
                                label="Height"
                                variant="outlined"
                                value={props.sx?.height}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.height = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* maxWidth */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-maxWidth"
                                label="Max-Width"
                                variant="outlined"
                                value={props.sx?.maxWidth}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.maxWidth = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* maxHeight */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-maxHeight"
                                label="Max-Height"
                                variant="outlined"
                                value={props.sx?.maxHeight}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.maxHeight = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* minWidth */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-minWidth"
                                label="Min-Width"
                                variant="outlined"
                                value={props.sx?.minWidth}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.minWidth = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* minHeight */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-minHeight"
                                label="Min-Height"
                                variant="outlined"
                                value={props.sx?.minHeight}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.minHeight = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>
                    </Grid>
                </AccordionSection>
                <Divider/>

                {/* position */}
                <AccordionSection title="Position" 
                    // secondary={
                    //     // <Chip label={`${props.sx?.top}, ${props.sx?.right}, ${props.sx?.left}, ${props.sx?.right}`} />
                    //     <Chip label="warning" color="warning" variant="outlined" />}
                >
                    <Grid container direction="column" spacing={3}>

                        {/* position values */}
                        <Grid item>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    name="dimensions-position"
                                    value={props.sx?.position}
                                    onChange={(e) => setProp((props) => (props.sx.position = e.target.value))}
                                    row={false}
                                >
                                    <FormControlLabel value="unset" control={<Radio />} label="Unset" />
                                    <FormControlLabel value="static" control={<Radio />} label="Static" />
                                    <FormControlLabel value="relative" control={<Radio />} label="Relative" />
                                    <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
                                    <FormControlLabel value="absolute" control={<Radio />} label="Absolute" />
                                    <FormControlLabel value="sticky" control={<Radio />} label="Sticky" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>

                        {/* position coordinates */}
                        <Grid container spacing={2} sx={{ p: 2 }}>
                            <Grid item xs={12}><Typography>Position Coordinates</Typography></Grid>

                            {/* top */}
                            <Grid item xs={6}>
                                <TextField
                                    id="dimensions-top"
                                    label="Top"
                                    variant="outlined"
                                    value={props.sx?.top}
                                    onChange={(event) => {
                                        setProp((props) => (props.sx.top = Number(event.target.value)))
                                    }}
                                    inputProps={{
                                        step: 1,
                                        min: -500,
                                        max: 500,
                                        type: 'number',
                                    }}
                                />
                            </Grid>

                            {/* right */}
                            <Grid item xs={6}>
                                <TextField
                                    id="dimensions-right"
                                    label="Right"
                                    variant="outlined"
                                    value={props.sx?.right}
                                    onChange={(event) => {
                                        setProp((props) => (props.sx.right = Number(event.target.value)))
                                    }}
                                    inputProps={{
                                        step: 1,
                                        min: -500,
                                        max: 500,
                                        type: 'number',
                                    }}
                                />
                            </Grid>

                            {/* bottom */}
                            <Grid item xs={6}>
                                <TextField
                                    id="dimensions-bottom"
                                    label="Bottom"
                                    variant="outlined"
                                    value={props.sx?.bottom}
                                    onChange={(event) => {
                                        setProp((props) => (props.sx.bottom = Number(event.target.value)))
                                    }}
                                    inputProps={{
                                        step: 1,
                                        min: -500,
                                        max: 500,
                                        type: 'number',
                                    }}
                                />
                            </Grid>

                            {/* left */}
                            <Grid item xs={6}>
                                <TextField
                                    id="dimensions-left"
                                    label="Left"
                                    variant="outlined"
                                    value={props.sx?.left}
                                    onChange={(event) => {
                                        setProp((props) => (props.sx.left = Number(event.target.value)))
                                    }}
                                    inputProps={{
                                        step: 1,
                                        min: -500,
                                        max: 500,
                                        type: 'number',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </AccordionSection>
                <Divider/>

                {/* padding */}
                <AccordionSection title="Padding" 
                    // secondary={<Chip label={`${props.sx?.p}, ${props.sx?.pt}, ${props.sx?.pr}, ${props.sx?.pb}, ${props.sx?.pl}`} />}
                >
                    <Grid container spacing={2}>

                        {/* all */}
                        <Grid item xs={12}>
                            <TextField
                                id="dimensions-padding-all"
                                label="All Padding"
                                variant="outlined"
                                value={props.sx?.p}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.p = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                                sx={{width: '100%'}}
                            />
                        </Grid>

                        {/* top */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-padding-top"
                                label="Top"
                                variant="outlined"
                                value={props.sx?.pt}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.pt = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* right */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-padding-right"
                                label="Right"
                                variant="outlined"
                                value={props.sx?.pr}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.pr = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* bottom */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-padding-bottom"
                                label="Bottom"
                                variant="outlined"
                                value={props.sx?.pb}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.pb = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* left */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-padding-left"
                                label="Left"
                                variant="outlined"
                                value={props.sx?.pl}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.pl = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>
                    </Grid>
                </AccordionSection>
                <Divider/>

                {/* margin */}
                <AccordionSection title="Margin" 
                    // secondary={<Chip label={`${props.sx?.m}, ${props.sx?.mt}, ${props.sx?.mr}, ${props.sx?.mb}, ${props.sx?.ml}`} />}
                >
                    <Grid container spacing={2}>

                        {/* all */}
                        <Grid item xs={12}>
                            <TextField
                                id="dimensions-margin-all"
                                label="All Margins"
                                variant="outlined"
                                value={props.sx?.m}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.m = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                                sx={{width: '100%'}}
                            />
                        </Grid>

                        {/* top */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-margin-top"
                                label="Top"
                                variant="outlined"
                                value={props.sx?.mt}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.mt = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* right */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-margin-right"
                                label="Right"
                                variant="outlined"
                                value={props.sx?.mr}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.mr = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* bottom */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-margin-bottom"
                                label="Bottom"
                                variant="outlined"
                                value={props.sx?.mb}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.mb = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>

                        {/* left */}
                        <Grid item xs={6}>
                            <TextField
                                id="dimensions-margin-left"
                                label="Left"
                                variant="outlined"
                                value={props.sx?.ml}
                                onChange={(event) => {
                                    setProp((props) => (props.sx.ml = Number(event.target.value)))
                                }}
                                inputProps={{
                                    step: 1,
                                    min: -500,
                                    max: 500,
                                    type: 'number',
                                }}
                            />
                        </Grid>
                    </Grid>
                </AccordionSection>
                <Divider/>

            </AccordionGroup>

            {/* Styling */}
            <AccordionGroup title="Styling" notDefaultExpanded>
            </AccordionGroup>

            {/* Typography */}
            <AccordionGroup title="Typography" notDefaultExpanded>
            </AccordionGroup>

            {/* Borders */}
            <AccordionGroup title="Borders" notDefaultExpanded>
            </AccordionGroup>

            {/* Display */}
            <AccordionGroup title="Display" notDefaultExpanded>
            </AccordionGroup>

            {/* Flexbox */}
            <AccordionGroup title="Flexbox" notDefaultExpanded>
            </AccordionGroup>

            {/* Grid */}
            <AccordionGroup title="Grid" notDefaultExpanded>
            </AccordionGroup>

        </Box>
    );
};
