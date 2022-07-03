
// React
import React from 'react';
import { useNode } from '@craftjs/core';
import debounce from 'lodash.debounce';

// Local
import AccordionGroup from '../../AccordionGroup';
import AccordionSection from '../../AccordionSection';
import AccordionItem, { InputField } from '../../AccordionItem';
import PluginSettings, { getRealValue } from '../../PluginSettings';


// Settings
export default function Settings() {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
    }));

    return (
        <PluginSettings>
            
            <AccordionGroup title="General">
                
                {/* title */}
                <AccordionSection title="Title" secondaryChip={props.title} divider description="Change the title.">
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Title"
                            value={props.title}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.title = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

                {/* subheader */}
                <AccordionSection title="Subheader" secondaryChip={props.subheader} description="Change the subheader.">
                    <AccordionItem>
                        <InputField hideRadioGroup
                            label="Subheader"
                            value={props.subheader}
                            options={['']}
                            onChange={(event, value) => { setProp((props) => (props.subheader = getRealValue(value))) }}
                        />
                    </AccordionItem>
                </AccordionSection>

            </AccordionGroup>
        </PluginSettings>
    );
};
