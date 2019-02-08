var div1 = document.getElementById("div1");

var div2 =document.createElement("div");
div2.setAttribute("id","mydiv");
div1.appendChild(div2);


var head1 = document.createElement("h1")
head1.setAttribute("id","h1");
var text1 = document.createTextNode("TODO APP");
head1.appendChild(text1);
div2.appendChild(head1);


var input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("placeholder","ENTER THE TEXT");
input1.setAttribute("id","text1");
div2.appendChild(input1)

// var br1 = document.createElement("br");
// div2.appendChild(br1)
//button
var button1 = document.createElement("input");
button1.setAttribute("type","button");
button1.setAttribute("value","ENTER");
button1.setAttribute("id","button1");
button1.setAttribute("class","btn btn-outline-secondary")
button1.setAttribute("onClick","buttonFun()");
div2.appendChild(button1)



function buttonFun() {
var value1= document.getElementById("text1").value;


if (value1 === ""){
    alert("please enter text")
}
else{
var div3 = document.createElement("div")
div3.setAttribute("id","div3")
var ol1 = document.createElement("ul");
var li1 = document.createElement("li");
li1.setAttribute("id",value1);
li1.setAttribute("class","liclass");

var text2 = document.createTextNode(value1);
li1.appendChild(text2)
ol1.appendChild(li1);
div3.appendChild(ol1);
div1.appendChild(div3)

var edit1 = document.createElement("input");
edit1.setAttribute("type","button");
edit1.setAttribute("value","Edit")
edit1.setAttribute("class","edit1")


var delet1 = document.createElement("input");
delet1.setAttribute("type","button");
delet1.setAttribute("value","Delet")
delet1.change33
delet1.setAttribute("class","edit1")
li1.appendChild(delet1)
li1.appendChild(edit1);


delet1.addEventListener("click", function () {
    delet1.parentNode.remove()
    })
    //edit function
    edit1.addEventListener('click', function () {
    var li = this.parentNode;
    console.log("li",li);
    var text = prompt("enter value",li.id);
    console.log("text",text);
    li.innerText = text
    li.appendChild(delet1)
    li.appendChild(edit1)
           
    })

    document.getElementById('text1').value = ""

}


}