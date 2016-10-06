 'use strict';
 var enhanced = {};
 /* global $ attractionModule hotels restaurants activities */

 /**
  * This module holds collection of enhanced attraction objects which can be
  * easily looked up by type and id. It is primarily used when someone clicks
  * to add an attraction in the `options` module.
  */

 var attractionsModule = (function() {

   // application state
   //
   var enhanced = {};

   var promiseTwo = ajaxPromise
     .then(([hotels, activities, restaurants]) => {
       enhanced.hotels = hotels;
       enhanced.restaurants = restaurants;
       enhanced.activities = activities;
     });

   // private helper methods (only available inside the module)

   function findById(array, id) {
     return array.find(function(el) {
       return +el.id === +id;
     });
   }

   // globally accessible module methods (available to other modules)

   var publicAPI = {

     getByTypeAndId: function(type, id) {
       return promiseTwo.then(() => {
         let newProm = new Promise((resolve, reject) => {
           if (type === 'hotel') resolve(findById(enhanced.hotels, id));
           else if (type === 'restaurant') resolve(findById(enhanced.restaurants, id));
           else if (type === 'activity') resolve(findById(enhanced.activities, id));
           else throw Error('Unknown attraction type');
         });
         return newProm;
       });
     },

     getEnhanced: function(databaseAttraction) {
       promiseTwo.then(() => {
         var type = databaseAttraction.type;
         var id = databaseAttraction.id;
         var found = publicAPI.getByTypeAndId(type, id);
         if (found) return found;
         throw Error('enhanced version not found', databaseAttraction);
       });
     }

   };

   return publicAPI;

 }());
