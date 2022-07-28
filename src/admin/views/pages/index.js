
// React
import React from "react";

// MUI
import ArticleIcon from '@mui/icons-material/Article';

// Local
import PageEditor from './PageEditor';
import PageCreate from './PageCreate';
import PageList from './PageList';


// Export Page API
export default {
    list: PageList,
    create: PageCreate,
    edit: PageEditor,
    icon: ArticleIcon,
};