
// React
import * as React from "react";
import { Title } from 'react-admin';

// MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

// Local
import Layout from './layout';


// Dashboard Page
export default function Dashboard() {
    return (
        <Layout title="Dashboard">
            <Card>
                <Title title="Welcome to the administration" />
                <CardContent>Coming to you live from the dashboard...</CardContent>
            </Card>
        </Layout>
    );
}
