
// React
import React from 'react';
import { useNode } from '@craftjs/core';


// Local
import AccordionGroup from '../AccordionGroup';
import AccordionSection from '../AccordionSection';
import AccordionItem, { InputField } from '../AccordionItem';
import PluginSettings, { getRealValue } from '../PluginSettings';


// Settings
export default function Settings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            <AccordionGroup title="General">

                {/* items */}
                <AccordionSection divider title="Items" secondaryChip={String(props.items)} description="The number of slide items in the carousel.">
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Items"
                            value={props.items}
                            options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                            onChange={(event, value) => { setProp((props) => (props.items = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* height */}
                <AccordionSection divider title="Height" secondaryChip={String(props.height)} 
                    description="Defines the carousel's height in px. If this is not set, the carousel's height will be the height of its children. If it is not set, the carousel's height will be the same as the current active child."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Height"
                            value={props.height}
                            options={['100%', '200px', '300px', '400px', '500px', '600px', '700px', '800px', '900px', '1000px']}
                            onChange={(event, value) => { setProp((props) => (props.height = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* index */}
                <AccordionSection divider title="Index" secondaryChip={String(props.index)}
                    description="Defines which child (assuming there are more than 1 children) will be displayed. Next and Previous Buttons as well as Indicators will work normally after the first render. When this prop is updated the carousel will display the chosen child. Use this prop to programmatically set the active child. If (index > children.length) then if (strictIndexing) index = last element. index"
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Index"
                            value={props.index}
                            options={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                            onChange={(event, value) => { setProp((props) => (props.index = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* strictIndexing */}
                <AccordionSection divider title="Strict Indexing" secondaryChip={String(props.strictIndexing)}
                    description="Defines whether index can be bigger than children length"
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Strict Indexing"
                            value={props.strictIndexing}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.strictIndexing = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* autoPlay */}
                <AccordionSection divider title="Auto Play" secondaryChip={String(props.autoPlay)}
                    description="Defines whether the carousel will automatically play. If this is set to true, the carousel will automatically play after the first render. If this is set to false, the carousel will not automatically play."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Auto Play"
                            value={props.autoPlay}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.autoPlay = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* stopAutoPlayOnHover */}
                <AccordionSection divider title="Stop Auto Play On Hover" secondaryChip={String(props.stopAutoPlayOnHover)}
                    description="Defines whether the carousel will stop automatically playing when the user hovers over the carousel. If this is set to true, the carousel will stop automatically playing when the user hovers over the carousel. If this is set to false, the carousel will not stop automatically playing when the user hovers over the carousel."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Stop Auto Play On Hover"
                            value={props.stopAutoPlayOnHover}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.stopAutoPlayOnHover = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* interval */}
                <AccordionSection divider title="Interval" secondaryChip={String(props.interval)}
                    description="Defines the time in milliseconds between each slide. If this is set to 0, the carousel will not automatically play."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Interval"
                            value={props.interval}
                            options={['0', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000']}
                            onChange={(event, value) => { setProp((props) => (props.interval = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* animation */}
                <AccordionSection divider title="Animation" secondaryChip={String(props.animation)}
                    description="Defines the animation type. If this is set to 'slide', the carousel will slide. If this is set to 'fade', the carousel will fade."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Animation"
                            value={props.animation}
                            options={['slide', 'fade']}
                            onChange={(event, value) => { setProp((props) => (props.animation = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* duration */}
                <AccordionSection divider title="Duration" secondaryChip={String(props.duration)}
                    description="Defines the duration of the animation in milliseconds. If this is set to 0, the carousel will not animate."
                >
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Duration"
                            value={props.duration}
                            options={['0', '1000', '2000', '3000', '4000', '5000', '6000', '7000', '8000', '9000', '10000']}
                            onChange={(event, value) => { setProp((props) => (props.duration = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* swipe */}
                <AccordionSection divider title="Swipe" secondaryChip={String(props.swipe)}
                    description="Defines whether swiping left and right (in touch devices) triggers next and prev buttons. If this is set to true, the carousel will swipe. If this is set to false, the carousel will not swipe."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Swipe"
                            value={props.swipe}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.swipe = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* indicators */}
                <AccordionSection divider title="Indicators" secondaryChip={String(props.indicators)}
                    description="Defines whether the carousel will show indicators. If this is set to true, the carousel will show indicators. If this is set to false, the carousel will not show indicators."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Indicators"
                            value={props.indicators}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.indicators = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* navButtonsAlwaysVisible */}
                <AccordionSection divider title="Nav Buttons Always Visible" secondaryChip={String(props.navButtonsAlwaysVisible)}
                    description="Defines whether the carousel will always be visible or not. If this is set to true, the carousel will always show nav buttons. If this is set to false, the carousel will not show nav buttons."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Nav Buttons Always Visible"
                            value={props.navButtonsAlwaysVisible}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.navButtonsAlwaysVisible = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* navButtonsAlwaysInvisible */}
                <AccordionSection divider title="Nav Buttons Always Invisible" secondaryChip={String(props.navButtonsAlwaysInvisible)}
                    description="Defines whether the carousel will always be invisible or not. If this is set to true, the carousel will always hide nav buttons."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Nav Buttons Always Invisible"
                            value={props.navButtonsAlwaysInvisible}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.navButtonsAlwaysInvisible = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* cycleNavigation */}
                <AccordionSection divider title="Cycle Navigation" secondaryChip={String(props.cycleNavigation)}
                    description="Defines if the next button will be visible on the last slide, and the previous button on the first slide. Auto-play also stops on the last slide. Indicators continue to work normally."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Cycle Navigation"
                            value={props.cycleNavigation}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.cycleNavigation = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                
                {/* fullHeightHover */}
                <AccordionSection title="Full Height Hover" secondaryChip={String(props.fullHeightHover)}
                    description="Defines if the the next/previous button wrappers will cover the full height of the Item element and show buttons on full height hover."
                >
                    <AccordionItem>
                        <InputField hideTextField hideUndefinedValue
                            label="Full Height Hover"
                            value={props.fullHeightHover}
                            options={['true', 'false']}
                            onChange={(event, value) => { setProp((props) => (props.fullHeightHover = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>
                

            </AccordionGroup>
        </PluginSettings>
    );
};
