FROM node AS build
RUN mkdir -p /app
COPY . /app/ 
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx
COPY --from=build /app/public/ /usr/share/nginx/html/
