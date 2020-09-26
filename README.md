# Aiden
## About
Aiden is a medical notification web application that aims to minimize spread of diseases through the use of machiene learning models. The current build of Aiden is design to tackle STD related diseases; however it can be used for other types of diseases as well.

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