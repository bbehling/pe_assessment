# EhangerMarketplaceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Steps to install and run

1. CD into this project's directory
2. Run `npm install`
3. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Improvements

- Format the data as Geojson
  - I would have the server format a Geojson response
- Support dynamic data display instead of hard coded
  - Iterate over all keys and pretty format JSON in popups instead of specifying the keys
- Prettify the Attribute Data
- Data Enrichment
  - Determine with the product's client, which hourly data from the incident we want to join with the weather
    - event_closed, event_opened, first_unit_arrived, first_unit_dispatched, or first_unit_enroute
    - or show average weather conditions for that day
    - or show the weather over the entire range of time of the incident
  - Do this on the server
    - Write a process that will join incident data to weather
    - This speed up performance on client
      - Client will not need to perform another query
      - If large data sets, will be detrimental to client performance, not very scalable
- Time Spent: 4 hours
  - Most time spent trying to solve CORS/proxy problem
