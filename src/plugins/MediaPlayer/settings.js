
// React
import React from 'react';
import { useNode } from '@craftjs/core';

// MUI
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddLinkIcon from '@mui/icons-material/AddLink';

// Local
import AccordionGroup from '../AccordionGroup';
import AccordionSection from '../AccordionSection';
import AccordionItem, { InputField } from '../AccordionItem';
import PluginSettings, { getRealValue } from '../PluginSettings';


// Settings
export default function GridSettings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <AccordionGroup title="General">
                
                {/* url */}
                <AccordionSection divider title="Source URL" secondaryChip={String(props.url)} 
                    description="The url of a video or song to play."
                >
                    <AccordionItem direction="row">
                        <Tooltip title="Select Link">
                            <IconButton aria-label="edit" size="large" >
                                <AddLinkIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                        <InputField hideRadioGroup
                            sx={{width: '100%'}}
                            label="Source URL"
                            value={props.url}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.url = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* playing */}
                <AccordionSection divider title="Playing" secondaryChip={String(props.playing)}
                    description="Set to true or false to pause or play the media."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Playing"
                            value={props.playing}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.playing = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* loop */}
                <AccordionSection divider title="Loop" secondaryChip={String(props.loop)}
                    description="Set to true or false to loop the media."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Loop"
                            value={props.loop}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.loop = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* controls */}
                <AccordionSection divider title="Controls" secondaryChip={String(props.controls)}
                    description="Set to true or false to display native player controls. For Vimeo videos, hiding controls must be enabled by the video owner."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Controls"
                            value={props.controls}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.controls = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* light */}
                <AccordionSection divider title="Light" secondaryChip={String(props.light)}
                    description="Set to true or false to show just the video thumbnail, which loads the full player on click. Pass in an image URL to override the preview image."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Light"
                            value={props.light}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.light = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* volume */}
                <AccordionSection divider title="Volume" secondaryChip={String(props.volume)}
                    description="Set the volume of the media player. Must be a number between 0 and 1."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Volume"
                            value={props.volume}
                            options={['0', '0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']}
                            onChange={(event, value) => { setProp((props) => (props.volume = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* muted */}
                <AccordionSection divider title="Muted" secondaryChip={String(props.muted)}
                    description="Set to true or false to mute the media."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Muted"
                            value={props.muted}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.muted = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* playbackRate */}
                <AccordionSection divider title="Playback Rate" secondaryChip={String(props.playbackRate)}
                    description="Set the playback rate of the media player. Must be a number between 0 and 10."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Playback Rate"
                            value={props.playbackRate}
                            options={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                            onChange={(event, value) => { setProp((props) => (props.playbackRate = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* width */}
                <AccordionSection divider title="Width" secondaryChip={String(props.width)}
                    description="Set the width of the media player. Must be a number between 0 and 100."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Width"
                            value={props.width}
                            options={['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']}
                            onChange={(event, value) => { setProp((props) => (props.width = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* height */}
                <AccordionSection divider title="Height" secondaryChip={String(props.height)}
                    description="Set the height of the media player. Must be a number between 0 and 100."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Height"
                            value={props.height}
                            options={['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']}
                            onChange={(event, value) => { setProp((props) => (props.height = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* progressInterval */}
                <AccordionSection divider title="Progress Interval" secondaryChip={String(props.progressInterval)}
                    description="Set the interval of the progress bar. Must be a number between 0 and 100."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Progress Interval"
                            value={props.progressInterval}
                            options={['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100']}
                            onChange={(event, value) => { setProp((props) => (props.progressInterval = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* playsinline */}
                <AccordionSection divider title="Plays Inline" secondaryChip={String(props.playsinline)}
                    description="Set to true or false to play the video inline."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Plays Inline"
                            value={props.playsinline}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.playsinline = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* pip */}
                <AccordionSection divider title="Picture In Picture" secondaryChip={String(props.pip)}
                    description="Set to true or false to enable picture in picture."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Picture In Picture"
                            value={props.pip}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.pip = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* stopOnUnmount */}
                <AccordionSection divider title="Stop On Unmount" secondaryChip={String(props.stopOnUnmount)}
                    description="Set to true or false to stop the video when the component is unmounted."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Stop On Unmount"
                            value={props.stopOnUnmount}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.stopOnUnmount = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* wrapper */}
                <AccordionSection divider title="Wrapper" secondaryChip={String(props.wrapper)}
                    description="Element or component to use as the container element."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Wrapper"
                            value={props.wrapper}
                            options={['div']}
                            onChange={(event, value) => { setProp((props) => (props.wrapper = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* previewTabIndex */}
                <AccordionSection title="Preview Tab Index" secondaryChip={String(props.previewTabIndex)}
                    description="Set the tab index to be used on light mode."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Preview Tab Index"
                            value={props.previewTabIndex}
                            options={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                            onChange={(event, value) => { setProp((props) => (props.previewTabIndex = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>
        </PluginSettings>
    );
};
