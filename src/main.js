import { DoctorSearch } from './error.js';
import $ from 'jquery';
import './styles.css';

function formatDoctors(doctorList, errors) {
  if (errors == '') {
    doctorList.map((doctor,index) => {
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
    })
  } else {
    $('.errors').text(errors)
  }
}

$(document).ready(function() {
  $('#search-form').submit(function() {
    event.preventDefault();
    let doctorQuery = new DoctorSearch();
    doctorQuery.getDoctorBySearch($('#search-input').val(), formatDoctors);
    $('.doctor-list').empty();
    $('.errors').empty();
  });
});
