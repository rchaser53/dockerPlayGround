FROM node:8.9.4-alpine
ENV HOME=/home/app

WORKDIR $HOME/

RUN apk update && rm -rf /var/cache/apk/*