FROM node:9.7.1-alpine
MAINTAINER rchaser53 "takayuki.yoshizawa@zuuonline.com"

ENV HOME=/home/app

WORKDIR $HOME/

RUN apk update && \
    rm -rf /var/cache/apk/*