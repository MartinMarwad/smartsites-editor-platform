
// Main Components
import Button from './Button';
import { Card, CardBottom, CardTop } from './Card';
import { Text } from './Text';

import Grid from './Grid';
import Appbar from './Appbar';

// Internal Layout Components
import Page from './Page';
import Header from './Page/Header';
import Footer from './Page/Footer';
import Container from './Page/Container';

const Plugins = {

    // Page: Main component of any webpage.
    Page,
    Header,
    Container,
    Footer,

    // Temp
    Grid,
    Appbar,

    // Button: Simple button component.
    Button,

    // Card Components
    Card,
    CardTop,
    CardBottom,

    // Text: Simple text edit component.
    Text,

};

export default Plugins;
