# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

#add bash
ADD apk add --no-cache bash

# Add a volume pointing to /tmp
VOLUME /tmp

# Make port 8000 available to the world outside this container
EXPOSE 8000
ADD target/microservice.jar microservice.jar
ENTRYPOINT ["java","-jar","/microservice.jar"]