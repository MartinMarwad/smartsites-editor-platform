#!/bin/bash

# DO NOT use this directly. Use the Makefile or run docker-compose to start project.
# This script is called from inside docker as an entrypoint to start the project.

echo "[$1] Starting in $1 Mode:"

# Fix any potential user-permission errors
# sudo chown ubuntu -R *

# Load NPM executables
source $NVM_DIR/nvm.sh

# NODE: Install NPM modules if not installed
if [ ! -d ./node_modules ] ; then
    echo "[$1] Node: Detected NPM modules not installed. Installing Dependencies..."
    npx npm install
fi

# NODE: Create production build of NPM modules if not built
if [ ! -d ./build ] ; then
    echo "[$1] Node: Running NPM production build (to generate html/static files)..."
    npx npm run build
fi

# If running in Developement Mode:
if [ "$1" = "DEVELOPMENT" ]; then

    # Start the react dev server. Edit: Handled by docker-compose
    npx npm start --stats-error-details &

    # Delay the container from starting for 30 seconds, to let the react dev server to start
    sleep 30

    # Django: Create database if it doesn't exist.
    if [ ! -d ./data ] ; then

        # Create data director if not already created
        echo "[$1] Django: Database not detected. Creating new database now..."
        mkdir -p data

        # Django: Make Migrations
        echo "[$1] Django: Making Migrations"
        python3 manage.py makemigrations

        # Django: Migrate Database
        echo "[$1] Django: Migrating Database"
        python3 manage.py migrate

        # Load fixures
        echo "[$1] Django: Populating Database with fixtures"
        python3 manage.py loaddata data.json

    fi

    # Finally run development server    
    echo "[$1] Django: Starting DEVELOPMENT server"
    python3 manage.py runserver 0.0.0.0:8000 # runserver_plus has issues right now 

fi

# If running in Production Mode:
if [ "$1" = "PRODUCTION" ]; then

    # NODE: Create production build of NPM modules 
    echo "[$1] Node: Running NPM production build (to generate html/static files)..."
    npx npm run build

    # Django: Create database if it doesn't exist.
    if [ ! -d ./data ] ; then

        # Create data director if not already created
        echo "[$1] Django: Database not detected. Creating new database now..."
        mkdir -p data

        # Django: Make Migrations
        echo "[$1] Django: Making Migrations"
        python3 manage.py makemigrations

        # Django: Migrate Database
        echo "[$1] Django: Migrating Database"
        python3 manage.py migrate

        # Create superuser
        echo "[$1] Django: Creating superuser with username 'admin' and password 'password'..."
        echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@example.com', 'password')" | python manage.py shell

    fi

    # Collect Static files
    echo "[$1] Django: Collecting Static Files"
    python3 manage.py collectstatic --noinput

    # Start Gunicorn production server
    echo "[$1] Django: Starting PRODUCTION server"
    gunicorn Website.wsgi -b 0.0.0.0:8000 --reload --log-level debug --worker-class gevent # --keep-meta-shutdown because https://github.com/django-extensions/django-extensions/issues/1715


fi