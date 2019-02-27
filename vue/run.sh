#!/bin/sh
docker run -p 8080:8080 -e HOME=/work -u $(id -u):$(id -g) -v ${PWD}:/work -it --rm vuesample/crud bash
