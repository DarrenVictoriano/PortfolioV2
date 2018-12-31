// function to test viewport size change via css
function checkSize() {
  // when view port is small sidebar is hidden by default
  if ($('#sidebar').css('margin-left') === "-245px") {
    // make profile pic small
    $('#profile-img').toggleClass('active');
    $('#profile-img-div').toggleClass('text-right pr-2');

    // hide profile text
    $('#profile-name').toggle();
    $('#profile-description').toggle();

  }
}

function hideSidebar() {
  // hide sidebar
  $('#sidebar').toggleClass('active');

  // make profile pic small
  $('#profile-img').addClass('active');
  $('#profile-img-div').addClass('text-right pr-2');

  // hide profile texts
  $('#profile-name').hide();
  $('#profile-description').hide();
}

function showSidebar() {
  // make profile pic big again
  $('#profile-img').removeClass('active');
  $('#profile-img-div').removeClass('text-right pr-2');

  // show profile texts
  $('#profile-name').show();
  $('#profile-description').show();
}

$(document).ready(function () {
  // run test on initial page load
  checkSize();

  // run test on window resize
  $(window).resize(checkSize);

  // Collapse Button
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');

    // make profile pic small
    $('#profile-img').toggleClass('active');
    $('#profile-img-div').toggleClass('text-right pr-2');

    // hide profile texts
    $('#profile-name').toggle();
    $('#profile-description').toggle();
  });

});

