'use strict';

var ajaxPromise = function() {
  var hotelsObj = $.ajax({
    method: 'GET',
    url: '/api/hotels'
  })

  var activitiesObj = $.ajax({
    method: 'GET',
    url: '/api/activities'

  })
  var restaurantsObj = $.ajax({
    method: 'GET',
    url: '/api/restaurants'
  })

  return Promise.all([hotelsObj, activitiesObj, restaurantsObj]);
}();
