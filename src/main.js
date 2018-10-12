import $ from 'jquery';
import './styles.css';



$(document).ready(function() {

  // $('#search-form').submit(function() {
  //   event.preventDefault();
  //   let symptom = $('#symptom-input').val();
  //   console.log(symptom);
  //   $.ajax({
  //     url: `https://api.betterdoctor.com/2016-03-01/doctors?skip=2&limit=10&user_key=${process.env.exports.apiKey}&location=or-portland&query=${symptom}`,
  //     type: 'GET',
  //     data: {
  //       format: 'json'
  //     },
  //     success: function(response) {
  //       $('.doctor-info').text(response.data[0].profile.first_name);
  //     },
  //     error: function() {
  //       $('#errors').text("There was an error processing your request. Please try again.");
  //     }
  //   });
  // });

  $('#search-form').submit(function() {
    event.preventDefault();
    let symptom = $('#symptom-input').val();
    console.log(symptom);
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.doctor-info').text(response.data[0].profile.first_name + " " + response.data[0].profile.last_name);
        $('.phone-number').text(response.data[0].practices[0].phones[0].number);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });

  $('#name-form').submit(function() {
    event.preventDefault();
    let name = $('#name-input').val();
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $('.doctor-info').text(response.data[0].profile.first_name + " " + response.data[0].profile.last_name);
        $('.phone-number').text(response.data[0].practices[0].phones[0].number);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });

});
