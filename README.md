[![Build & deploy](https://github.com/schurteb/weather-spa/actions/workflows/build-deploy.yml/badge.svg?branch=master)](https://github.com/schurteb/weather-spa/actions/workflows/build-deploy.yml)

# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## API Sequence Diagram

@startuml
WeatherSPA -> Google: 1. Send Address
Google --> WeatherSPA: 2. Coordinates

WeatherSPA -> OpenWeatherAPI: 3. Coordinates
WeatherSPA <-- OpenWeatherAPI: 4. Weather Data
@enduml