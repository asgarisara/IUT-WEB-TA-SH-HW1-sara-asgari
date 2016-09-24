/**
 * Created by sara on 9/22/2016.
 */
var http = require('http');
var qs = require('querystring');
function onRequest( request , response)
{
    console.log("request came to : " + request.url);
    response.writeHead ( 200 , {"content.type" : "text/plain" });
    var html = "<html><body> your name is : " +
    qs.parse(request.url.split("?")[1]).firstname_field  + "<br> your family is : " +  qs.parse(request.url).lastname_field +
            "<br> your age is : " + qs.parse(request.url).age_field + " <br> your student number is : " + qs.parse(request.url).student_number_field + " </body></html>"
    response.write(html);
    response.end();
}
http.createServer(onRequest).listen(8080);
console.log('server is on');
