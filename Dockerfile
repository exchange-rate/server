FROM node:boron
RUN mkdir /data
WORKDIR /data
ADD package.json /data
RUN npm install
RUN npm install nodemon -g
ADD . /data

# Create app directory
# WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

# Bundle app source
# COPY . .

# EXPOSE 8080
# CMD ["npm", "start"]