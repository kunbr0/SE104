# API Instruction #
All action syntaxes start with /v1 

## Query Actions ##
Query Actions: get number of students in a class, get list of students, etc.
## Authentication Actions ##
Url: /v1/auth/</br>
Method: POST
### Login ###
Url: /v1/auth/login</br>
JSON:</br>
```
{ 
  "username": "abc",
  "password": "11112000"
}
```

## Modify Actions ##
- Modify Actions: add new user, add student, etc. 
Use post method with url: `/v1/object-name/action`</br>
Ex url: `/v1/student/add`</br>
**Send the information in a JSON with specific structure for each action (add it in BODY-CONTENT) (see below)**

### Student Objects ###
#### Modify: Add new student ####
Url: /v1/student/add</br>
Method: POST
JSON: </br>
```
{ 
  "id":"sampleid", 
  "name":"samplename", 
  "gender":"samplegender", 
  "dob":"samplebirthday", 
  "addr":"sampleaddress", 
  "mail":"sampleemail@gmail.com", 
  "classid": "sampleclassid" 
}
```

#### Modify: Update a student ####
Url: /v1/student/update</br>
Method: POST
JSON: </br>
```
{ 
  "id":"sampleid", 
  "name":"samplename", 
  "gender":"samplegender", 
  "dob":"samplebirthday", 
  "addr":"sampleaddress", 
  "mail":"sampleemail@gmail.com", 
  "classid": "sampleclassid" 
}
```
**Note: This action will update information of student who has student_id = "sampleid"**
#### Query: Get student's information ####
Url: /v1/student/detail/${student_id}</br>
Method: GET
#### Modify: Remove a student ####
Url: /v1/student/remove/${student_id}</br>
Method: GET
### Teacher Objects ###
#### Modify: Add new teacher (user) ####
Url: /v1/teacher/add </br>
Method: POST
```
JSON: 
{ 
  "id": "sampleid", 
  "passwd": "samplepasswd", 
  "username": "abcd", 
  "fullname": "samplename", 
  "gender": "samplegender", 
  "dob": "2000-11-11", 
  "addr": "sampleaddress", 
  "mail": "sampleemail@gmail.com" 
}
```
