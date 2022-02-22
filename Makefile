## A set of helpful Makefile tools to aid development.

export MODE=UNDEFINED

# Force own all files created by docker
fix:
	@sudo chown ${USER} -R *

# Start
up: # Start up container in development mode
	@MODE=DEVELOPMENT docker-compose up -d
	@MODE=DEVELOPMENT make logs

up.prod: # Start up container in production mode
	@MODE=PRODUCTION docker-compose up -d django
	@make logs

# Stop
down:
	@docker-compose down

# Restart
restart:
	@make down
	@make up

restart.prod:
	@make down
	@make up.prod

restart.clean: # Shutdown all containers, delete data, restart containers
	@make down
	@make fix 
	@make clean
	@make up

# Show logs
logs:
	@docker-compose logs -f 

# Run container without executing startup 
exec: # Run an anonymous command like exe="my_cammnd -whatever"
	@docker-compose run django bash $(exe)

# Open terminal in container.
bash:
	@docker-compose exec django bash

# Open Django IPython Console Shell
shell:
	@docker-compose exec django python manage.py shell_plus

# Clean files
clean:
	@make clean.data
	@make clean.build

clean.build:
	@rm -R -f ./build

clean.node_modules:
	@rm -R -f ./node_modules

clean.data:
	@rm -R -f ./data

# Build project
build: FORCE
	@docker-compose build 

# Rebuild project
rebuild:
	@make down
	@make build
	@make up

## Django specific commands
django: # Alias for "make terminal"
	@make terminal

collectstatic: # Runs Django collectstatic command
	@docker-compose run django python manage.py collectstatic --noinput

migrations: # Runs Django collectstatic command
	@docker-compose exec django python manage.py makemigrations
	@docker-compose exec django python manage.py migrate

## React specific commands
react.install: # npm install
	@docker-compose run django npx npm install

react.build: # npm build
	@docker-compose run django npx npm run build


FORCE: # Hack to force target: Keep this at the bottom.