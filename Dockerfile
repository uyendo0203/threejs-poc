FROM node:14.20.1 as dockerimage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

RUN npm install

RUN npm run build
RUN ls dist
# COPY --from=dockerimage /usr/src/app/public/ /usr/share/nginx/html/
# RUN ls /usr/share/nginx/html/