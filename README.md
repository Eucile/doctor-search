## A Better Doctor API

#### application to practice API calls by Krystal Foster
#### Oct. 12, 2018

### Description

An API call that returns a list of Portland-based doctors based on the user's search parameters. The list currently returns the first 10 indexed doctors that fall under the searched categories.

## Specs

1. The program will return a list of Portland-based doctors based on specialty search.
  * Input: "pediatrician"
  * Output: [List of PDX doctors who match this query]

2. The program will return a list of Portland-based doctors who match any name specified in the user query.
  * Input: "Robert"
  * Output: "Robert Hanson, Robert Bly...", etc.

2. The program will return an error message in the event of a failed or unhelpful api call.
  * Input: "I'm 80"
  * Output: "Oh no! Something went wrong. Please try again...", etc.


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

`$ npm init -y`

#### Next, create a .env file

#### Grab an api key from https://developer.betterdoctor.com/.

#### Store the key as:

exports.apiKey=[APIKEYGOESHERE]

#### Finally:

`$ npm run start`

### License

Copyright (c) 2018 **_{ Krystal Foster}_**
