# Feb11_FrameWork
Assignment Feb11

Resources:
- school

Server is running on port 3000

Methods:
POST  - Creates a new file in either school or company based on the url and input JSON data
PUT   - Rewrites the contents of file  based on the url and input JSON data
PATCH - Adds and/or Modifies data based on the input JSON data
GET   - Returns the contents of the file specified in url 
DELETE- Deletes the file with the id in the url 


Sample inputs  :
POST 
input: superagent localhost:3000/school POST { id:"student",name:"Mel"}

PUT 
input: superagent localhost:3000/school PUT { id:"student",fname:"JANE", lname:"DOE"}

PATCH
input: superagent localhost:3000/school PATCH { id:"student",fname:"JANE", lname:"DOE"}

GET
superagent localhost:3000/school/student GET

DELETE
superagent localhost:3000/school DELETE {id:"student" }
