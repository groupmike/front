# pull official base image
FROM node:lts-alpine AS build

# set working directory
WORKDIR /app

RUN mkdir -p node_modules/.cache

# install app dependencies
COPY package.json ./

RUN npm install --silent
RUN npm install react-scripts -g --silent

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY ./ ./

RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
