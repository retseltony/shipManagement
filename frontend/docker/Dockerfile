# base image

FROM node:14-buster AS build
WORKDIR /src 
COPY ["public/", "public/"]
COPY ["src/", "src/"]
COPY ["package.json", "package.json"]
COPY ["tsconfig.json", "tsconfig.json"]
RUN npm install && npm run build
COPY ./docker/env.sh ./build
COPY ./docker/.env ./build
COPY ./docker/nginx/nginx.conf conf/default.conf.tpl

FROM nginx:stable-alpine
RUN apk add --no-cache bash
WORKDIR /usr/share/nginx/html/
COPY --from=build /src/build .
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf.tpl
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
