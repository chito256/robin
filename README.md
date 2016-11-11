# Robin

A minimal and simple social network that works

## Build Instructions

The authors use ReactJS to create the front-end of this social network. In order to bundle React code and components to pure JavaScript files, we need a bundler (In this case, Webpack) and BabelJS. The authors also use Gradle to build the server-side Java code.

### Front-End

**Prerequisites**

- NodeJS
- NPM

1. Using the Terminal, navigate to `src/main/resources/`.
2. Type `npm install` to install dependencies and packages.
3. Type `npm run build` to run Gulp. This will build/bundle JavaScript and CSS files from ReactJS components and SCSS files.

### Back-End

**Prerequisites**

- Gradle
- Java v1.8 and up

1. Using the Terminal, navigate to the root directory of this project (repository).
2. Type `gradle build` to install dependencies and build Java files.
3. Type `java -jar ./build/libs/robin-0.1.0.jar` to run the Java application.
4. A small Tomcat server will be running at `http://localhost:8080`.

## Notes & Credits

This project is still under development and is made possible by the following frameworks and libraries:

- [NodeJS & NPM](https://nodejs.org/en/)
- [ReactJS](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io)
- [GulpJS](http://gulpjs.com)
- [Gradle](https://gradle.org)
- [Spring MVC](https://spring.io)

... And many other modules from the NodeJS community (check out `src/main/resources/package.json`).

## Copyright

The code for this website is hosted mainly on GitHub.

MIT License
