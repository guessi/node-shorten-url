# node-shorten-url

[![Docker Stars](https://img.shields.io/docker/stars/guessi/node-shorten-url.svg)](https://hub.docker.com/r/guessi/node-shorten-url/)
[![Docker Pulls](https://img.shields.io/docker/pulls/guessi/node-shorten-url.svg)](https://hub.docker.com/r/guessi/node-shorten-url/)
[![Docker Automated](https://img.shields.io/docker/automated/guessi/node-shorten-url.svg)](https://hub.docker.com/r/guessi/node-shorten-url/)

a simple shorten url redirection solution with nodejs


# Prerequisites

- Docker-CE 17.06+
- Docker Compose 1.16.0+


# Usage

    $ docker-compose pull # make sure your image is up-to-date

    $ docker-compose up

    $ curl http://127.0.0.1:8080/example


# For Developers

    $ docker-compose -f docker-compose-dev.yaml up --build

    $ curl http://127.0.0.1:8080/example


# FAQ

How do I add/remove keywords for url redirection?

    $ vim config/redirections.js

Why is the redirection rules are static?

    it's originally aim to create a simple app with url redirection,
    and it is true that it could be better to integrate with database.
    Pull-Requests are always welcome :-)


# Reference

- [Docker CE](https://www.docker.com/community-edition)
- [Docker Compose](https://docs.docker.com/compose/overview/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)


# License

[Apache-2.0](LICENSE)
