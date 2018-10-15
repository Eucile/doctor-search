import { DoctorSearch } from './error.js';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  let doctorQuery = new DoctorSearch();
  let promise = doctorQuery.getDoctorBySearch(name);
  promise.then(function(response) {
    let body = JSON.parse(response);

    $('#search-form').submit(function() {
      event.preventDefault();
      let search = $('#search-input').val();
      $('#search-input').val('');
      $.ajax({
        url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${search}&location=or-portland&skip=0&limit=100&user_key=${process.env.exports.apiKey}`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          if (response.data.length == 0) {
            $('.errors').text('Sorry, there are currently no doctors in Portland that match that search.');
          } else {
            response.data.map((doctor,index) => {
              if(index <= 30){
                let phoneNumber = doctor.practices[0].phones[0].number;
                let newPatients = doctor.practices[0].accepts_new_patients;
                let picture = doctor.profile.image_url;
                let website = doctor.practices[0].website;
                let fullName = doctor.profile.first_name + " " + doctor.profile.last_name;
                let address = doctor.practices[0].visit_address.street  +  ",<br> " +  doctor.practices[0].visit_address.city + ", " + doctor.practices[0].visit_address.state + ", " +  doctor.practices[0].visit_address.zip;
                $('.doctor-list').append(
                  "<div><img src='" + picture + "'>" +
                  "<p><strong>Name:</strong> " + fullName + "</p>" +
                  "<p><strong>Phone number: </strong>" + phoneNumber + "</p>" +
                  "<p><strong>Accepting new patients: </strong>" + newPatients + "</p>" +
                  "<p class='web'><strong>Website: </strong>" + website + "</p>" +
                  "<p><strong>Address: </strong>" + address + "</p></div>"
                );
              }
            });
          }
        },
        error: function() {
          $('.errors').text("There was an error processing your request. Please try again.");
        }
      });
      $('.doctor-list').empty();
      $('.errors').empty();
    });
  });
});
