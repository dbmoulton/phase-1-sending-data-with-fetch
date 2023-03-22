function submitData(name, email){
    
    const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({name, email}),
  };
  
   return fetch("http://localhost:3000/users", configurationObject)
    .then((resp) => resp.json())
    .then(function (object) {
      console.log(object);
      document.body.innerHTML = object.id
    })
    .catch(function (message) {
        alert("Bad things!");
        document.body.innerHTML = message.message
    })
}