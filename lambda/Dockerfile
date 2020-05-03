FROM node:8-slim
MAINTAINER "Josaber" <younever4ever@gmail.com>

WORKDIR /lambda/

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
ENV PATH /root/.yarn/bin:$PATH

COPY lambda/package.json .
RUN yarn install --production

VOLUME /lambda/node_modules

COPY . /lambda/

CMD ["/lambda/auto/deploy-to-aws"]