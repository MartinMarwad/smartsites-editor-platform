## A set of helpful Makefile tools to aid development.

# Force own all files created by docker
fix:
	@sudo chown ${USER} -R *

# Start
up:
	@MODE=DEVELOPMENT docker-compose up -d
	@MODE=DEVELOPMENT make logs

up.prod:
	@MODE=PRODUCTION docker-compose up -d django
	@make logs

# Stop
down:
	@MODE=UNDEFINED docker-compose down

# Restart
restart:
	@make down
	@make up

restart.prod:
	@make down
	@make up.prod

# Show logs
logs:
	@MODE=UNDEFINED docker-compose logs -f 

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

## Django Container
django:
	@docker-compose exec django bash

django.start:
	@docker-compose start django

django.stop:
	@docker-compose stop django

django.restart:
	@make django.stop
	@make django.start 

django.logs:
	@docker-compose logs -f django

django.run: # Run an anonymous command like exe="my_cammnd -whatever"
	@docker-compose run django $(exe)

django.terminal:
	@docker-compose exec django $(exe)

django.shell:
	@docker-compose exec django python manage.py shell_plus

django.createadmin:
	@docker-compose exec django echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'admin@myproject.com', 'password')" | python manage.py shell

django.collectstatic:
	@docker-compose run django python manage.py collectstatic --noinput

## React Container
react:
	@docker-compose exec reactjs bash

react.logs:
	@docker-compose logs -f reactjs

react.run:
	@docker-compose run reactjs $(exe)

react.terminal:
	@docker-compose exec reactjs $(exe)

react.install:
	@docker-compose run reactjs npm install

react.build:
	@docker-compose run reactjs npm run build

FORCE: # Hack to force target: Keep this at the bottom.