#Specify a base image --> alpine means (in the docker world) small and comapact
FROM node:alpine

#Specify the working directory for running the commands
# It is actually a must for the npm install to work properly
# If not used --> will be set to / (root) by default
WORKDIR /usr/app

# Copy the files in the workdir so they can be seen

COPY ./package.json .

#Install some dependencies 
RUN npm install

# Copy the second phase ( we use separation in the copy to not repeat `npm install` --> it might cost several minutes and resources in bigger projects)
COPY . .

# Default command
CMD [ "npm","start" ]