import $ from 'jquery';
import './styles.css';


$(document).ready(function() {

  $('#name-form').submit(function() {
    event.preventDefault();
    let name = $('#name-input').val();
    $('#name-input').val('');
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        if (response.data.length == 0) {
          $('.errors').text('Sorry, there are currently no doctors in Portland that match that search.');
        } else {
        response.data.map((doctor,index) => {
          if(index <= 9){
            let phoneNumber = doctor.practices[0].phones[0].number;
            let newPatients = doctor.practices[0].accepts_new_patients;
            let picture = doctor.profile.image_url;
            let website = doctor.practices[0].website;
            let fullName = doctor.profile.first_name + " " + doctor.profile.last_name;
            let address = response.data[0].practices[0].visit_address.street  +  ", " +  response.data[0].practices[0].visit_address.city + ", " + response.data[0].practices[0].visit_address.state + " " +  response.data[0].practices[0].visit_address.zip;
            $('.doctor-list').append(
              "<div><img src='" + picture + "'></div>" +
              "<div><p>First Name: " + fullName + "</p>" +
              "<p>Phone number: " + phoneNumber + "</p>" +
              "<p>Accepting new patients: " + newPatients + "</p>" +
              "<p>Website: " + website + "</p>" +
              "<p>Address: " + address + "</p></div>"
            );
          }
        });
      }
    },
      error: function() {
        $('#errors').append("There was an error processing your request. Please try again.");
      }
    });
  });

});
