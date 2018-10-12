## API

#### by Krystal Foster
#### Oct. 12, 2018

### Description



## Specs

1. The program will return a list of Portland-based doctors based on symptomatic search.
  * Input: "fever"
  * Output: [List of PDX doctors who match this query]

2. The program will return a list of Portland-based doctors who match any name specified in the user query.
  * Input: "Robert"
  * Output: "Robert Hanson, Robert Bly...", etc.

2. The program will return an error message in the event of a failed or unhelpful api call.
  * Input: "I'm 80"
  * Output: "Oopse! Something went wrong. Please try again...", or something.


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

First, make sure you have node package manager installed. Check out https://www.npmjs.com/get-npm for information on that. Also make sure you have karma installed globally:

`$ npm install -g karma-cli`

#### Then:

`$ git clone https://github.com/Eucile/galactic-calculator-test`

`$ cd galactic-calculator-test`

`$ npm install`

`$ npm init -y`

`$ npm run start`


#### To run Karma:

`$ npm test`

### License

Copyright (c) 2018 **_{ Krystal Foster}_**
