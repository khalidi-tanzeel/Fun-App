function handleHTML(){
    document.getElementById("img1").src = "happy.jpg";
    document.getElementById("textinfo").style.backgroundColor = "pink";
    document.getElementById("textinfo").style.color = "blue";
}

function handleCreate(c){
    var parent = document.getElementById("div1");
    var child = document.createElement("h1");
    var text = document.createTextNode("About yourself");
    child.appendChild(text);
    parent.appendChild(child);

    var btnChild = document.createElement("button");
    // btnChild.attributes("onclick", "javascript:alert('I am clicked');");
    var text1 = document.createTextNode("Click me for a secret");
    btnChild.appendChild(text1);
    parent.appendChild(btnChild);
}

function check (a) {
    var x = document.valid.name.value;
    var z = document.valid.result;
    
    if(a.value === "Characters")
    {
        if(x === ""){
            alert("Please enter the name first");
            document.valid.name.focus();
        }
        else{
            z.value= x.length;
        }
    }
    else if(a.value==="lowercase"){
        if(x === "") {
            alert("Please enter the name");
            document.valid.name.focus();
        }
        else{
            z.value = x.toLowerCase();
        }
    }
    else if(a.value==="uppercase"){
        if(x==="") {
            alert("Please enter the name");
            document.valid.name.focus();
        }
        else {
            z.value=x.toUpperCase()
        };
    }
    else if(a.value === "replace")
    {
    if(x===""){
            alert("Please enter the name that you wished to replaced");
            document.valid.name.focus();
        }
        else{
    var y= prompt("Enter the name","A-Z please dont use any numbers");
    
    z.value=y;}
            
    }
    else if (a.value==="Number of Letter"){
    if(x===""){
            alert("Please enter the name");
            document.valid.name.focus();
        }
        else {
    var d=parseInt(prompt("Enter the number that you"));
        z.value=x.charAt(d);
        if(x.charAt(d))
        {
            alert("Ready to see the desired letter of your name");
        }
        else if(!x.charAt(d)){
            alert("Sorry your name has not that much characters. Please choose the right data to see the result")
        }
        }
        
    }
    else if(a.value==="Reverse your name"){
    function reverseString(str) {
    if (str === "")  
        return "";
        else 
    return reverseString(str.substr(1)) + str.charAt(0);
    
    }
z.value= reverseString(x);
    }
    else if(a.value==="Submit"){
    if(x===""){
            alert("Please enter the name");
            document.valid.name.focus();
        }
        else{
document.getElementById("info").style.color="red";
        var b=parseInt((prompt("whats your age")));
        if(b<=10){
            alert("you are too small JIMBOOO");
        }
        else if(b>=11)
        {
            alert("oldie HAHAAH");
        }
    }}
 }

 