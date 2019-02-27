#!/bin/sh
docker run -p 8090:8000 -u $(id -u):$(id -g) -v ${PWD}:/work -it --rm vuesample/crud-server bash
