<p align="center">
    <img src="https://github.com/MartinMarwad/smartsites-editor-platform/raw/master/docs/favicon.jpeg" alt="Smartsites Editor Platform" width="20%" />
</p>
<h1 align="center">Smartsites Editor Platform</h1>
<p align="center">
    <a href="https://discord.gg/tR4vuHb7wj">
        <img src="https://img.shields.io/discord/1003360547766546462?color=7489d5&logo=discord&logoColor=ffffff&style=for-the-badge" />
    </a>
    <a href="https://github.com/MartinMarwad/smartsites-editor-platform">
        <img src="https://img.shields.io/static/v1?label=Status&message=Development&color=blue&style=for-the-badge">
    </a>
     <a href="https://github.com/MartinMarwad/smartsites-editor-platform/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-green?&style=for-the-badge" />
    </a>
    <a href="https://calver.org/">
        <img src="https://img.shields.io/badge/Versioning-CalVer-green?&style=for-the-badge" />
    </a>
</p>

***Warning: This project is currently under active development. Certain features may not be functional or may be added/removed without warning. Documentation is ongoing.***

## Table of Contents
<details>
<summary>Click to expand!</summary>
  
- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Features](#features)
    - [Self-Hosted and Open-Source](#self-hosted-and-open-source)
    - [Content Management System (CMS)](#content-management-system-cms)
    - [Drag-and-Drop Page Editor (WYSIWYG)](#drag-and-drop-page-editor-wysiwyg)
    - [Powerful Dashboard Analytics](#powerful-dashboard-analytics)
- [Getting Started](#getting-started)
    - [Install Docker](#install-docker)
    - [Running the project](#running-the-project)
- [Community](#community)
- [Technologies Used](#technologies-used)

</details>

## Introduction
The Smartsites Editor Platform (SEP) is an open-source full-stack platform for creating, publishing, and managing dynamic website content with zero code. 
![Demo](docs/demo1.png)

## Features

### Self-Hosted and Open-Source
The project is fully open-source and self-hostable. 

### Content Management System (CMS)
Provides a complete Content Management System solution that allows you to easily create, edit, and publish pages to your site.
- Easily upload static media and files to be served on your site.

### Drag-and-Drop Page Editor (WYSIWYG)
The page editor allows you to easily edit and add content to your site with live preview. Just drag-and-drop components onto the page. What you see is what you get (WYSIWYG).

### Powerful Dashboard Analytics
The dashboard provides powerful analytics for your website. 
- Track the number of visitors to your site. 

## Getting Started
<details>
<summary>Click to expand!</summary>

### Install Docker
To get started, you will need to have [Docker](https://docs.docker.com/get-docker/) installed.

If you are running Windows, you can install with [WinGet](https://github.com/microsoft/winget-cli):
```
winget install Docker.DockerDesktop
```

### Running the project
1. Clone the project:
```
git clone https://github.com/MartinMarwad/smartsites-editor-platform
```

2. Build the docker image:
```
make build
```

3. Run the docker image:
- To run the image in development mode:
```
make up
```
- To run the image in production mode:
```
make up.prod
```

4. Open the browser and navigate to http://localhost:8000/admin/. The default username is `admin` and the default password is `password`.

To stop the container:
```
make down
```
</details>

## Community
Join the community:
- For live chat/support: [Discord Server](https://discord.gg/tR4vuHb7wj)
- For general discussions: [GitHub Discussions](https://github.com/MartinMarwad/smartsites-editor-platform/discussions)
- For bug reports or issues: [GitHub Issue Tracker](https://github.com/MartinMarwad/smartsites-editor-platform/issues)

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
