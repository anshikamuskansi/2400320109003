import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/dashboard.css";

import { NotificationProvider }
  from "./state/NotificationContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <NotificationProvider>
    <App />
  </NotificationProvider>
);
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
/*table,tr,td{
    border:1px solid:black;
    border-collapse:collapse;
}
*/
input{
    height: 50px;
    padding: 20px;
    border: 1px;
    outline: 1px;
    background-color: rgb(245 22 34);
    color: white;
}
button
{
    height: 40px;
    width: 40px;
    background-color: silver;
    border: 0px;
    border-radius: 50%;
}
table tr td{
    text-align: center;
}

table{
    margin: 0px auto;
    background-color: white;
    box-shadow: 0px 0px 5px;
    padding: 2px;
    border-radius: 10px;
}
button:hover{
    background-color: rgb(red, green, blue);
    cursor: pointer;
    color: white;
}
</style>
<script>
function cleartext()
{
var a=document.getElementById("t1").value;
a = a.substr(0, a.length-1);
document.getElementById("t1").value=a;
}
</script>
</head>
<body>
    <form name="calculator">
    <table>
   <!-- <table border="1">-->
<tr>
<td colspan="4"><input type="text" name="box" id="t1"/></td>

</tr> 

<tr>
    <td><button type="button" onclick="cleartext()" >&larr;</button></td>
    <td><button type="button" onclick="calculator.box.value+=''">C</button></td>
    <td><button type="button" onclick="calculator.box.value+='%'">%</button></td>
    <td><button type="button" onclick="calculator.box.value+='00'">00</button></td>
    </tr>


<tr>
    <td><button type="button"onclick="calculator.box.value+='7'">7</button></td>
    <td><button type="button"onclick="calculator.box.value+='8'">8</button></td>
    <td><button type="button"onclick="calculator.box.value+='9'">9</button></td>
    <td><button type="button"onclick="calculator.box.value+='+'">+</button></td>
    </tr>
<tr>
    <td><button type="button"onclick="calculator.box.value+='4'">4</button></td>
    <td><button type="button"onclick="calculator.box.value+='5'">5</button></td>
    <td><button type="button"onclick="calculator.box.value+='6'">6</button></td>
    <td><button type="button"onclick="calculator.box.value+='-'">-</button></td>
    </tr>
    <tr>
        <td><button type="button"onclick="calculator.box.value+='1'">1</button></td>
        <td><button type="button"onclick="calculator.box.value+='2'">2</button></td>
        <td><button type="button"onclick="calculator.box.value+='3'">3</button></td>
        <td><button type="button"onclick="calculator.box.value+='*'">*</button></td>
        </tr>
		
		<tr>
        
        <td><button type="button"onclick="calculator.box.value=eval(calculator.box.value)" style="background-color:#ff0000;">=</button></td>
        </tr>
        
                   
    </table>
    </form>
</body>
</html>