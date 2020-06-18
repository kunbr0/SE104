# API Instruction #
All action syntaxes start with /v1 

## Query Actions ##
Query Actions: get number of students in a class, get list of students, etc.
Method use: GET

## Modify Actions ##
- Modify Actions: add new user, add student, etc. 
- Method use: POST</br>
Use post method with url: '/v1/objectname/action'</br>
Ex url: `/v1/student/add`</br>
Send the information in a JSON with specific structure for each action (see below)

### Student Objects ###
#### Add new student ####
Url: /v1/student/add
```
JSON: 
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

### Teacher Objects ###
#### Add new teacher (user) ####
Url: /v1/teacher/add 
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
