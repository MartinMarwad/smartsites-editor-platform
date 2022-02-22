# Smartsites Editor Platform

## Introduction
The Smartsites Editor Platform (SEP) is an open-source full-stack platform for creating, publishing, and managing dynamic websites with zero code. 

## Features
*Under construction...*
- [ ] Live WYSIWYG content editing: 
- [ ] Media management
    - [ ] Seamless media file management
    - [ ] handle upload and downloads
- [ ] Website Administration:
    - [ ] Website Traffic Analysis

## Getting Started
*Under construction...*

## Technologies Used
- General:
    - [Docker](https://github.com/docker): Provides core the development/deployment environment.
- [React](https://github.com/reactjs) Frontend: 
    - [MUI](https://github.com/mui-org/material-ui): Frontend Material Design themed UI framework.
    - [React Admin](https://github.com/marmelab/react-admin): Provides the frontend admin.
    - [React Router](https://github.com/remix-run/react-router): Provides client side URL routing. 
    - [Craft.js](https://github.com/prevwong/craft.js/): Provides the core drag-and-drop functionality of Smartsites.
- [Django](https://github.com/django) Backend:
    - [Whitenoise](https://github.com/evansd/whitenoise): Provides static/media file serving within Python.
    - [Django CRA Helper](https://github.com/MasterKale/django-cra-helper): Provides useful integration between Django and React. 
    - [Django Rest Framework](https://github.com/encode/django-rest-framework): Provides a RESTful API for the React frontend to consume. 
        - [SimpleJWT](https://github.com/jazzband/djangorestframework-simplejwt): Provides JSON Web Token authentication for the Django Rest Framework.
    - [Django DB Logger](https://github.com/CiCiUi/django-db-logger): Allows saving logging messages into the database.
    - [Django Dynamic Preferences](https://github.com/agateblue/django-dynamic-preferences): Allows us to save and store global site settings.