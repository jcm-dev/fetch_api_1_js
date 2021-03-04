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
      console.log(res);
    });
}