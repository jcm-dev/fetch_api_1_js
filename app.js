document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

// GET LOCAL TXT DATA
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

// GET LOCAL JSON DATA
function getJson(){
  // fetch returen promises
  // to get a response from a promise we are
  // using .then()

  // grabbing the json file with fetch
  // and then returning it with .then
  // passing it in as 'res'
  fetch('posts.json')
    .then(function(res){

      return res.json();
    })
    // returning the data from res
    .then(function(data){
      console.log(data);
      // log results in dom
      let output = '';
      data.forEach(function(posts) {
        output += `<li>${posts.title} - ${posts.body}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    // catching the error
    .catch(function(err){
      console.log(err);
    });
}