
import fs from 'fs'
fs.readdir("./Mern", (err, data) => {
	if(err) throw err
  	console.log(data)
})