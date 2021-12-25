#!/bin/bash

# DO NOT use this directly. Use the Makefile or run docker-compose to start project.
# This script is called from inside docker to start WonderNews. 

echo "[$1] Starting in $1 Mode:"

# Create data director if not already created
mkdir -p data

# If first time run, install and build NPM modules...
if [ ! -d ./build ] ; then
    echo "[$1] Detected first time run. Running NPM protocols..."

    # NPM: Install Dependencies
    echo "[$1]     - NPM: Installing Dependencies"
    npm install

    # NPM: Create production ready files
    echo "[$1]     - NPM: Running build (to generate html/static files)"
    npm run build

fi

# Django: Make Migrations
echo "[$1] Django: Making Migrations"
python3 manage.py makemigrations

# Django: Migrate Database
echo "[$1] Django: Migrating Database"
python3 manage.py migrate

# Developement Mode
if [ "$1" = "DEVELOPMENT" ]; then
    
    echo "[$1] Django: Starting DEVELOPMENT server"
    python3 manage.py runserver_plus 0.0.0.0:8000

fi

# Production Mode
if [ "$1" = "PRODUCTION" ]; then

    echo "[$1] Django: Collecting Static Files"
    python3 manage.py collectstatic --noinput

    echo "[$1] Django: Starting PRODUCTION server"
    python3 manage.py runserver_plus 0.0.0.0:8000

fi