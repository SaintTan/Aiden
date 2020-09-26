# Aiden
## About
Aiden is a medical notification web application that aims to minimize spread of diseases through the use of machiene learning models. The current build of Aiden is design to tackle STD related diseases; however it can be used for other types of diseases as well.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features
This section is dedicated to discribe the core features of Aiden

### Users
Aiden manages 2 different types of users, each with different levels of access to Aiden's database:
* Admin
    - Certified and verified users
    - Allowed to search up condition of Aiden's users
    - QR scanner set up for easier connection
* User
    - Standard user with no admin previlledges 
    - Includes unique QR code

#### User Tags
- "OK" - current user does not have any disease 
- "Flagged" - current user is flagged and notified
- "Infected" - current user is inflected

**Note:**
- All users are able to make reports
- Different terms and conditions apply to different users!
- Users will be notified of checkups based on Aiden's ML model

### QR Code
Aiden allows its admin users to search up existing users about their current medical condition with the use of QR codes.

This allows processes between the customers and the service provider to be easier.

### User Report
Aiden also allows both types of user to report on their current medical condition. Once a medical report has been filed, it will notify individuals that have contact with the person in question. Suspected individuals will then be tagged as "Flagged" - no service will be provided until this tag is cleared.

Aiden will notify users based on a machine learning model that will be consistently improving as it collects more and more data. Additionally, Aiden is not limited to only STD - Aiden also allows different diseases along with their attributes (ie. probability of spread) to be modelled. Since the basis of Aiden has already been establish, there will just be different models of the different diseases.

# Instructions for running Aiden (frontend):

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
