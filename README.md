# node-shorten-url

[![Docker Stars](https://img.shields.io/docker/stars/guessi/node-shorten-url.svg)](https://hub.docker.com/r/guessi/node-shorten-url/)
[![Docker Pulls](https://img.shields.io/docker/pulls/guessi/node-shorten-url.svg)](https://hub.docker.com/r/guessi/node-shorten-url/)
[![Docker Automated](https://img.shields.io/docker/automated/guessi/node-shorten-url.svg)](https://hub.docker.com/r/guessi/node-shorten-url/)

a simple shorten url redirection solution with nodejs


# Prerequisites

- Docker-CE 18.03+
- Docker Compose 1.21.0+


# Usage

    $ docker-compose pull # make sure your image is up-to-date

    $ docker-compose up

    $ curl http://127.0.0.1:8080/example


# For Developers

    $ docker pull node:12-alpine

    $ docker-compose -f docker-compose-dev.yaml up --build

    $ curl http://127.0.0.1:8080/example


# FAQ

How do I add/remove keywords for url redirection?

    $ vim config/redirections.js

What kind of mobile devices detection are currently supported?

    currently, it only support iOS, AndroidOS

What if there is no "default" action defined?

    it will return "fallback_url" defined in config/redirections.js

What if there is no device specific action defined?

    it will return url defined in "default" section in config/redirections.js
    or return "fallback_url" defined in config/redirections.js if no device specific url defined

Why is the redirection rules are static?

    it's originally aim to create a simple app with url redirection,
    and it is true that it could be better to integrate with database.
    Pull-Requests are always welcome :-)


# Reference

- [Docker CE](https://www.docker.com/community-edition)
- [Docker Compose](https://docs.docker.com/compose/overview/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [Mobile-Detect for node](https://www.npmjs.com/package/mobile-detect)


# Alternative

- [go-shorten-url](https://github.com/guessi/go-shorten-url)


# License

[Apache-2.0](LICENSE)
