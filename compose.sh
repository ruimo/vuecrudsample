#!/bin/sh
export _UID=$(id -u)
export _GID=$(id -g)
export _PWD=$(pwd)
docker-compose $*
