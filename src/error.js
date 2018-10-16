import $ from 'jquery';

export class DoctorSearch {
  getDoctorBySearch(search, formatFunction) {
    let errors = '';

    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${search}&location=or-portland&skip=0&limit=100&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        let doctorList = [];
        if (response.data.length == 0) {
          errors += 'Sorry, there are currently no doctors in Portland that match that search.';
        } else {
          response.data.map((doctor,index) => {
            if(index <= 30){
              doctorList.push(doctor)
            }
          });
        }
        formatFunction(doctorList, errors)
      },
      error: function() {
        errors += "There was an error processing your request. Please try again.";
        formatFunction([], errors)
      }
    });
  }
}
