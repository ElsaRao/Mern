import fs from 'fs'

const json_stringify = () => {

const jsonObj = {
    "name": "John Doe",
    "favorite-game": "Dragon Quest XI",
    "subscriber": true
  }
  var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);
 
fs.writeFile("output.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});
}
json_stringify()