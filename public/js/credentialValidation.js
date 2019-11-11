function credentialValidation() {
  var truecount = 0;
  var numArray = [0,1,2,3,4,5,6,7,8,9];
  var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var credentialToBeVerified = myInput.value;
  function checkContain(array, string)
  {
      for(var i = 0; (i < array.length); i++)
      {
          if (string.includes(array[i]))
          {
              truecount ++;
              i = array.length;
          }
      }
      return truecount;    
  }
  try 
  {       
      if(credentialToBeVerified == undefined)   throw "You must include a value";
      if(credentialToBeVerified.length < 8)     throw "Minimum of 8 characters";      
      if(credentialToBeVerified.length > 20)    throw "Too many characters, max length 20 characters";
      checkContain(numArray, credentialToBeVerified), checkContain(lowerCaseArray, credentialToBeVerified), checkContain(upperCaseArray, credentialToBeVerified)
      if(truecount < 3)  throw "Username and password must contain a number, lower case and upper case letter.";
  }
  catch(err) 
  {
      alert = "Input " + err;
      console.log ("Input " + err)    
  }
}
credentialValidation();