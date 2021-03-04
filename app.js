document.getElementById('button1').addEventListener('click', getText);

function getText(){
  // fetch returen promises
  // to get a response from a promise we are
  // using .then()

  // grabbing the txt file with fetch
  // and then returning it with .then
  // passing it in as 'res'
  fetch('test.txt')
    .then(function(res){

      return res.text();
    })
    // returning the data from res
    .then(function(data){
      console.log(data);
      // log results in dom
      document.getElementById('ouput').innerHTML = data;
    })
    // catching the error
    .catch(function(err){
      console.log(err);
    });
}