$(document).ready(function(){
  ////// SYNC VS ASYNC //////
  //
  // Some code can be executed synchronously like so
  // function frodo() {
  //   console.log("You're late");
  // }

  // function gandalf() {
  //   console.log('A wizard is never late');
  // }

  // frodo();
  // gandalf();

  // But sometimes we want code to execute out of order, or asynchronously
  // Here, the "gandalf" function will execute after 3000 milliseconds
  // setTimeout(gandalf, 3000);

  // Notice how if we switch the order of these function calls,
  // frodo() still executes first
  // setTimeout(gandalf, 3000);
  // frodo();

  ////// AJAX //////
  //
  // Asynchronous programming is useful for when we make AJAX calls
  // We want to send a request, and then do something only when it completes
  // console.log('Sending AJAX request...');
  // $.ajax({
  //   url: 'https://bb-election-api.herokuapp.com', // let's use bb-election as an example
  //   method: 'GET', // We're gonna make a GET request
  //   data: {}, // Because its a GET request, our body will be empty
  //   dataType: 'json' // We want a JSON respons
  // }).done(function(data){ // This code executes when we get a success response
  //   console.log('Request complete!');
  //   console.log(data); // Let's just log out list of candidates we got from the API
  // });
});

