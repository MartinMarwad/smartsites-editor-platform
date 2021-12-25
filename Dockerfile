
# Base Image
FROM nikolaik/python-nodejs

# Enviromental Variables
ENV PYTHONUNBUFFERED 1

# Base Directory (in Container)
RUN mkdir /Website
WORKDIR /Website 

# Configure Python as Alias for Python3
RUN ln -sf /usr/bin/python3 /usr/bin/python && ln -sf /usr/bin/pip3 /usr/bin/pip

# Install Python Dependencies
ADD ./requirements.txt /Website/requirements.txt
RUN pip3 install --upgrade pip && pip3 install -r requirements.txt

COPY . /Website/