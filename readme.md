# Scaler Assignement - Hotel Room Management Admin App

<!-- Problem Statement -->
## Problem Statement
To create a complete admin-facing solution for the management of rooms in a Hotel.

## Technology Stack
<a href="https://reactjs.org/" title="ReactJS"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="ReactJS" width="21px" height="21px">&nbsp; ReactJS</a> <br>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="21px" height="21px">&nbsp;JavaScript</a> <br>
<a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="21px" height="21px">&nbsp;NodeJS</a> <br>
<a href="https://www.mongodb.org/" title="MongoDB"><img src="https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg" alt="MongoDB" width="21px" height="21px">&nbsp;MongoDB</a> <br>
<a href="https://expressjs.com/" title="Express"><img src="https://github.com/get-icon/geticon/raw/master/icons/express.svg" alt="Express" width="21px" height="21px">&nbsp;ExpressJS</a> <br>
<a href="https://tailwindcss.com/" title="Tailwind CSS"><img src="https://github.com/get-icon/geticon/raw/master/icons/tailwindcss-icon.svg" alt="Tailwind CSS" width="21px" height="21px">&nbsp;Tailwind CSS</a> <br>
<a href="https://git-scm.com/" title="Git"><img src="https://github.com/get-icon/geticon/raw/master/icons/git-icon.svg" alt="Git" width="21px" height="21px">&nbsp;Git</a> <br>

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/Aadi71/Scaler_Project_HotelRoomManagement.git
   ```
2. Navigate to client and install all dependencies using:
   ```sh
   npm i
   ```
3. Navigate to server and install all dependencies using:
   ```js
   npm i
   ```
4. Now run backend api in server directory:
    ```sh
   npm run server
   ```
5. Navigate back to client and run:
   ```sh
   npm run dev
   ```
   
   BINGO!!
  

### Requirements
#### Hotel can have multiple rooms of multiple types.
#### Each room type has a different type of pricing.
##### Example:
##### Room type A: 100 Rs per hour
##### Room type B: 80 Rs per hour
##### Room type C: 50 Rs per hour
#### A Hotel can have: 2 rooms of A type, 3 rooms of B type, 5 rooms of C type

### Create: A Page where the admin can book the room which takes the user’s email, room number, start time, and end time and books the room accordingly
#### The Price of the booking should update as soon as the user updates any one of the room number, start time or end time.
#### No two bookings should have overlapping start and end time for the same room.


### Edit: Allow admin to edit any variables like user email, room number, start time, end time and correspondingly take confirmation on updated price.

### Delete: Allow admin to cancel any future booking with the following conditions
#### If the booking start time is more than 48 hrs, Show a complete refund on UI
#### If booking start time is within 24 hrs to 48 hrs, 50% refund on UI
#### Else no refund (but admin can still cancel)

### View: Create a view page for the admin to view all the bookings both upcoming and passed with the following filters
#### Filter by room number and room type
#### Filter by start time and end time

