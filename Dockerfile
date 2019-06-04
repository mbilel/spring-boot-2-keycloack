# Start with a base image containing Java runtime
FROM openjdk:8-jdk-alpine

# Add Maintainer Info
LABEL maintainer="mohamedbilel@gmail.com"

# Add a volume pointing to /tmp
VOLUME /tmp/upload

# Make port 8080 available to the world outside this container
EXPOSE 8080

# The application's jar file
ARG JAR_FILE=target/micro-service.jar

RUN mkdir applis

WORKDIR /applis

# Add the application's jar to the container
ADD ${JAR_FILE} micro-service.jar

# Run the jar file 
ENTRYPOINT ["java","-jar","micro-service.jar"]
