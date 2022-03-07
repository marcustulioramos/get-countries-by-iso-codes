# Get Countries by Iso Codes

This repository contains two projects:
  - CountryFronEnd: Front end project designed in Vue.js (Javascript) to consume World Bank API and the internal API (CountryAPI)
  - CountryAPI: Internal API developed in .NET Core, Entity Framework and Sql Server

## Clone the repository:

```sh
git clone https://github.com/marcustulioramos/get-countries-by-iso-codes
```

## Front End set up:

On VS Code terminal:

```sh
cd get-countries-by-iso-codes/CountryFronEnd
```
```sh
npm install
```
```sh
npm run dev
```
Open the file **cypress.json** and update the parameter: **"baseUrl"**. (Use the local url shown on npm run dev)

  - Run cypress interface

    ```sh
    npx cypress open 
    ```
  - Run cypress headless

    ```sh
    npx cypress run 
    ```

## Internal API set up:

This section is only necessary if the internal api is toggled.
There are no tests for the internal API.

  ## On the CountryAPI project:
  
  - open the file **appsettings.json** and update the connection string with the correct serve and database.
  - open the file **/properties/launchSettings.json** and copy the **applicationUrl**
  - run the migrations
  - run the project

  ## On the CountryFrontEnd project:
  
  - open the file **/store/index.js** and update the **internalApiUrl** with the **applicationUrl** from the Country API project.
  
   ```sh
    npm run dev

