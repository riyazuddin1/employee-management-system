FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY backend/employee-management-system/target/employee-management-system-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8085

ENTRYPOINT ["java", "-jar", "app.jar"]