import $ from 'jquery';
import './styles.css';



$(document).ready(function() {
  // $('#search-form').submit(function() {
  //   event.preventDefault();
  //   let symptom = $('#symptom-input').val();
  //   console.log(symptom);
  //   $.ajax({
  //     url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
  //     type: 'GET',
  //     data: {
  //       format: 'json'
  //     },
  //     success: function(response) {
  //       let phoneNumber = response.data[0].practices[0].phones[0].number;
  //       let newPatients = response.data[0].practices[0].accepts_new_patients;
  //       let picture = response.data[0].profile.image_url;
  //       let website = response.data[0].practices[0].website;
  //       let fullName = response.data[0].profile.first_name + " " + response.data[0].profile.last_name;
  //       $('.name-info').text(fullName);
  //       $('.phone-number').text(phoneNumber);
  //       $('.website').text(website);
  //       $('.newPatients').text("Accepting new patients: " + newPatients);
  //       $('.doc-image').html("<img src='" + picture + "'>");
  //     },
  //     error: function() {
  //       $('#errors').text("There was an error processing your request. Please try again.");
  //     }
  //   });
  // });

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
        console.log(response.data);
        response.data.map((doctor,index) => {
          if(index <= 9){
            let phoneNumber = doctor.practices[0].phones[0].number;
            let newPatients = doctor.practices[0].accepts_new_patients;
            let picture = doctor.profile.image_url;
            let website = doctor.practices[0].website;
            let fullName = doctor.profile.first_name + " " + doctor.profile.last_name;
            $('.doctor-list').append(
              "<br><img src='" + picture + "'></br>" +
              "<br><p>First Name: </p>" + fullName +
              "<br><p>Phone number: </p>" + phoneNumber +
              "<br><p>Accepting new patients: " + newPatients +
              "<br><p>Website: "+ website + "."
            );
            }
          });


        // let phoneNumber = response.data[0].practices[0].phones[0].number;
        // let newPatients = response.data[0].practices[0].accepts_new_patients;
        // let picture = response.data[0].profile.image_url;
        // let website = response.data[0].practices[0].website;
        // let fullName = response.data[0].profile.first_name + " " + response.data[0].profile.last_name;

      // }

        // $('.name-info').text(fullName);
        // $('.phone-number').text(phoneNumber);
        // $('.website').text(website);
        // $('.newPatients').text("Accepting new patients: " + newPatients);
        // $('.doc-image').html("<img src='" + picture + "'>");
      },
      error: function() {
        $('#errors').append("There was an error processing your request. Please try again.");
      }
    });
  });

});
