# Using the official OpenJDK 11 base image
FROM openjdk:11-jre-slim

ENV SERVER_PORT=8081
ENV SPRING_DATASOURCE_URL=jdbc:sqlserver://192.168.1.3:1433;encrypt=true;trustServerCertificate=true;databaseName=todotask
ENV SPRING_DATASOURCE_USERNAME=sa
ENV SPRING_DATASOURCE_PASSWORD=ztech@44
ENV SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT=org.hibernate.dialect.SQLServerDialect
ENV SPRING_JPA_HIBERNATE_DDL_AUTO=update

WORKDIR /app

COPY target/spring-boot-sql-server-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8081

# Command to run the Spring Boot application
CMD ["java", "-jar", "app.jar"]
