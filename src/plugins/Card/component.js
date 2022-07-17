
// React
import * as React from 'react';
import { Element, useEditor, useNode } from '@craftjs/core';

// MUI
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

// Plugins
import { Toolbar, getNodeStyle } from '../RenderNode';
import { getRealValue } from '../PluginSettings';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardMedia from './CardMedia';
// import CardFooter from './CardFooter';
import Box from '../Box';
import Image from '../Image';
import TextBox from '../TextBox';
import TextArea from '../TextArea';


// Card Component
export default function CardPlugin(props) {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { actions, query, enabled, } = useEditor((state, query) => ({
        enabled: state.options.enabled,
    }));
    const { connectors: { connect, drag }, actions: { setProp }, selected, hovered, name } = useNode((node) => ({
        selected: node.events.selected,
        hovered: node.events.hovered,
    }));

    const showHeader = getRealValue(props.showheader);
    const showMedia = getRealValue(props.showmedia);
    const showContent = getRealValue(props.showcontent);

    return (
        <Card {...props}
            ref={(ref) => connect(drag(ref))}
            sx={{...props.sx, ...getNodeStyle(selected, hovered)}} 
            onClick={(event) => {setOpen(true); setAnchorEl(event.currentTarget); }} 
        >
            { showHeader && <Element id="card_header" is={CardHeader} />}
            { showMedia && <Element id="card_media" is={CardMedia} />}
            { showContent && 
            <Element canvas id="card_content" is={CardContent} >
                <TextBox text="Lizard" gutterBottom variant="h5" component="div" />
                <TextArea
                    sx={{}}
                    text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                />
            </Element>}
            {/* TODO */}
            {/* <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions> */}

            {selected && <Toolbar open={open} anchorEl={anchorEl} /> }
        </Card>
    );
}
