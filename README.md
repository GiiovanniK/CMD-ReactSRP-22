# Table of Contents
- [Table of Contents](#table-of-contents)
- [What is this app?](#what-is-this-app)
- [Prerequisites required for the app installation through terminal](#prerequisites-required-for-the-app-installation-through-terminal)
- [App installation](#app-installation)
- [Framworks used](#framworks-used)
- [Dependencies: packages used](#dependencies-packages-used)
- [Contributors](#contributors)

# What is this app?
Collabr is a matching application for musicians and artists so they're able to find other producers/vocalists/pianists/gitarists and connect! Collaborate on songs and other projects such as starting a band. 

# Prerequisites required for the app installation through terminal
Download [NodeJS](https://nodejs.org/en/download/)

Download [Git](https://git-scm.com/downloads)

# App installation
Clone repository to your computer by using the following command in your terminal

> `git clone https://github.com/GiiovanniK/CMD-ReactSRP-22.git`

Check if npm has been installed succesfully by running the following command in your terminal.

> `npm -v`

Install all of the dependencies (packages) which are used for this project to function properly, by typing the following command in your terminal

> `npm install`

You should get something back in your terminal like `8.15.0`.

Set up your .env variables, so a database connection and session can be established.

Create a .env file in the root of the frontend folder, define the following variable inside of the file.

> `REACT_APP_API=` "http://localhost:3001"

Also create a .env file in the root of the backend folder, define the following variables inside of the file.

> `API_URL=` "https://data.mongodb-api.com/app/data-jiorh/endpoint/data/v1"
> `API_KEY=` "fHcHHxPGty42GPuWtRH4Zn937FcwL0M4wMQfy1Mh6u0Dm1ZW2Pl9Nk75JkFBZRtk"
> `PORT=` "3001"
> `DATABASE=` "CMDSRP"
> `DATASOURCE=` "Cluster0"

Open a terminal in the backend folder. Start the server by typing the following command in the terminal

>`npm start`

Open a terminal in the frontend folder. Run the application by typing the following command in the terminal

>`ionic serve`

![Bash - App installation](https://github.com/GiiovanniK/CMD-ReactSRP-22/blob/163898abc453e70a6f31651df60702158d6b2de0/carbon.png)

Test user login credentials:

>Username: `user@user.nl`

>Password: `user`

Test admin login credentials:

>Username: `admin@admin.nl`

>Password: `admin`

# Framworks used
* [react](https://reactjs.org/)
* [ionic](https://ionicframework.com/)
* [capacitor](https://capacitorjs.com/)

# Dependencies: packages used
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [express](https://www.npmjs.com/package/express)
* [axios](https://www.npmjs.com/package/axios)
* [cors](https://www.npmjs.com/package/cors)
* [ionicons](https://www.npmjs.com/package/ionicons)
* [swiper](https://www.npmjs.com/package/swiper)
* [typescript](https://www.npmjs.com/package/typescript)

# Contributors
Giovanni Kornet