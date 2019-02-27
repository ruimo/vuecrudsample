#!/bin/sh
export UID=$(id -u)
export GID=$(id -g)
export PWD=$(pwd)
docker-compose $*
