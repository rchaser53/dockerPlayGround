FROM node:6.9.1

RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app

WORKDIR $HOME/

#RUN mkdir src && mkdir dein && mkdir .vim
RUN mkdir src && mkdir dein && mkdir .vim

COPY index.js index.html package.json server.js webpack.config.js .vimrc $HOME/
#COPY src/* $HOME/src/
#VOLUME /src

RUN chown -R app:app $HOME/ \ 
    && apt-get update -y \
    && apt-get install vim -y \
	#&& curl https://raw.githubusercontent.com/Shougo/dein.vim/master/bin/installer.sh > installer.sh \
	#&& sh ./installer.sh dein \
	&& npm i 
#CMD ["npm", "start"]
