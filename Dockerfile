FROM node:18.12.0

ARG WORKDIR=/frontend
ENV PATH ${WORKDIR}/node_modules/.bin:$PATH

RUN mkdir ${WORKDIR}
WORKDIR ${WORKDIR}

COPY package.json ${WORKDIR}
COPY package-lock.json ${WORKDIR}

RUN npm install @angular/cli
RUN npm install

COPY . ${WORKDIR}

EXPOSE 4200

CMD ng serve --host 0.0.0.0
