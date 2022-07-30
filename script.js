var FName = newlabel("lable","for","FirstName","FirstName");
var b1 = linebreak("br");
var inputeName =inpute("input","type","FirstName","id","FirstName");
var b2 = linebreak("br");

var LName = newlabel("lable","for","LastName","LastName");
var b3 = linebreak("br");
var inputeLname =inpute("input","type","LastName","id","LastName");
var b4 = linebreak("br");

var PhoneNo = newlabel("lable","for","PhoneNo","PhoneNo");
var b5 = linebreak("br");
var inputePno =inpute("input","type","PhoneNo","id","PhoneNo");
var b6 = linebreak("br");


var email = newlabel("lable","for","email","Email");
var b7 = linebreak("br");
var inputemail =inpute("input","type","email","id","email");
var b8 = linebreak("br");


var button = newlabel("button","type","button","clickme");
document.body.append(FName,b1,inputeName,b2,LName,b3,inputeLname,b4,PhoneNo,b5,inputePno,b6,email,b7,inputemail,b8,button);


function newlabel(tagname,attname,attvalue,content){
    var element = document.createElement(tagname);
    element.setAttribute(attname,attvalue);
    element.innerHTML=content;
    return element;
}

function inpute(tagname,attname,attvalue,attname1,attvalue1){
    var input=document.createElement(tagname);
     input.setAttribute(attname,attvalue);
      input.setAttribute(attname1,attvalue1);
      return input;


}
function linebreak(breaker){
    var b1 = document.createElement(breaker);
    return b1;

}