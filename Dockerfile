# Dockerfile to build base system

# Base Image
FROM ubuntu:22.04
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Update & Upgrade System
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get upgrade -y && apt-get install -y curl sudo

# Create User with Sudo Permissions
RUN adduser --disabled-password --gecos '' ubuntu
RUN adduser ubuntu sudo
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
USER ubuntu
WORKDIR /home/ubuntu/Website
ENV WORKDIR=/home/ubuntu/Website

# Install: Python
ENV PYTHONUNBUFFERED 1
RUN sudo apt-get install -y python3 python3-pip python3-dev
RUN sudo ln -sf /usr/bin/python3 /usr/bin/python && sudo ln -sf /usr/bin/pip3 /usr/bin/pip

# Install: Node
ENV NODE_VERSION=v16.14.0
ENV NVM_DIR="/home/ubuntu/.nvm"
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION} && nvm alias default ${NODE_VERSION}
ENV PATH="/home/ubuntu/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Install Python Dependencies
ADD ./requirements.txt $WORKDIR/requirements.txt
RUN pip3 install --upgrade pip && pip3 install -r requirements.txt

# Copy files into container
COPY . $WORKDIR
