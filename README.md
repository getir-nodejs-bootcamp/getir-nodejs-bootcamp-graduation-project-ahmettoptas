# RESTful API WITH EXPRESS
That developed application is a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format. It written in Node.js using Express framework. Also, used Mongoose and JOI libraries. There is only one endpoint just handle HTTP POST requests. The application is deployed on Heroku. 

Heroku url is "https://nodejs-restfulapi-ahmet.herokuapp.com/". 

> You can use npm start to run source code in your own machine.<br>
> You need to post request to "https://nodejs-restfulapi-ahmet.herokuapp.com/records" . 

You have to provide request body in JSON. It has to be 4 fields. The 4 fields are "startDate",  "endDate", "minCount", "maxCount".   "startDate" and "endDate" are in string format which is “YYYY-MM-DD” format. Also, "minCount" and "maxCount" are in number format.  App filters data accoring to that fields. "endDate" must be greater or equal than "startDate". "maxCount" must be greater than "minCount". If you don't provide 4 fields according that, you will get error response. I used JOI module and it provides that functions. It validates data.

Json Field | Data Type | Format
----------|---------- |------------
startDate | String |	Date(YYYY-MM-DD)
endDate   | String |	Date(YYYY-MM-DD)
minCount  |	Number |	Minimum count
maxCount  |	Number |	Maximum count

There are 4 codes for the response payloads.
> 0 is success. <br> 
> 1 is unsuccess with invalid request type for "/records". <br>
> 2 is invalid endpoint. <br>
> 3 is that request payload fields is not filled properly. <br>
> 4 is that there is no available record for the given request payload.

When response payload is success, it returns records with "key","createdAt" and "totalCount" properties. Total count is calculated from the documents counts array with sum operation. Sum of the “count” array in the database documents are between “minCount” and “maxCount”. "createdAt" result is between  "startDate" and "endDate".

If I need to explain the file structure simply;
> Route > Controller-Middewares > Service > Model

You can use app.test.js with npm test command from the terminal.

