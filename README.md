## A Better Doctor API

#### application to practice API calls by Krystal Foster
#### Oct. 12, 2018

### Description

An API call that returns a list of Portland-based doctors based on the user's search parameters. The list currently returns the first 30 indexed doctors that fall under the searched categories.

## Specs

1. The program will return a list of Portland-based doctors based on user search.
  * Input: "pediatrician"
  * Output: [List of PDX doctors who match this query]

2. The program will return a list of Portland-based doctors who match any name specified in the user query.
  * Input: "Robert"
  * Output: "Robert Hanson, Robert Bly...", etc.

3. The program will return an error message in the event of a failed 200 status.
    * Input: "nutrition"
    * Output: "There was an error processing your request."

4. The program will return an error message in the event of an empty api return.
      * Input: "lovesick"
      * Output: "Sorry, there are currently no doctors in Portland that match that search."


### Technologies and Resources

* JavaScript
* HTML
* jQuery
* ESlint
* Babel
* Jasmine
* Karma
* Webpack


### Setup Instructions

First, make sure you have node package manager installed. Check out https://www.npmjs.com/get-npm for information on that.

#### Then:

`$ git clone https://github.com/Eucile/doctor-search`

`$ cd doctor-search`

`$ npm install`

#### Next, create a .env file

#### Grab an api key from https://developer.betterdoctor.com/.

#### Store the key as:

exports.apiKey=[APIKEYGOESHERE]

#### Finally:

`$ npm run start`

### License

Copyright (c) 2018 **_{ Krystal Foster}_**
