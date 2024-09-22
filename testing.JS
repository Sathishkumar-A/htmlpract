
console.log("hii")
day=9

switch (day)
{
case 1:
    console.log('monday' )
break;

case 2:
    console.log('tuesday')
    break;

    case 3:
        console.log('wednesday')
        break;
    case 4:
            console.log('thursday')
            break;
      case 5:
                console.log('friday')
                break;
      case 6:
                    console.log('saturday')
                    break;
      case 7:
                        console.log('sundayday')
                        break;
        default:
            console.log('enough week')
                         
}
//if else..

let name='a';
let age=10;
let group="mech"
 if(name === "a" && (age === 10 || group === "mech")){
    console.log("contion: true");
 }
 else if(name==="b"&& age==22 || group==="mech"){
    console.log("condition2:true")

 }
else{
    console.log("its wrong")
}



function myFunction() {
  let x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function myFunction() {
    let x = document.getElementById("mySelect").value;
    document.getElementById("demo3").innerHTML = "You selected: " + x;
  }

  function myFunction() {
    alert("You right-clicked inside the div!");
  }

  function myFunction() {
    let x = document.getElementById("myinput").value;
    document.getElementById("demo4").innerHTML = " your wrote" + x;
  }


let studentList1 = [
  {name:"kalai", dept:"IT", age:30, mark:81},
  {name:"sathish", dept:"CSE", age:25, mark:65},
  {name:"anbu", dept:"MECH", age:55, mark:26},
  {name:"abcd", dept:"MECH", age:30, mark:30},
  {name:"xyz", dept:"IT", age:27, mark:34}
]
function toFindMark(){
  for(let i=0; i <studentList1.length;i++){
    if(studentList1[i].mark > 50){
      console.log("50 greater Mark", studentList1[i].mark, studentList1[i].name)
    }
    else if(studentList1[i].mark>30){
      console.log("30 greater Mark", studentList1[i].mark, studentList1[i].name)
    }
    else{
      console.log("Remaining mark",studentList1[i].mark, studentList1[i].name, studentList1[i])
    }
  }
}
toFindMark();

function printstars(){
for( let i=1; i<=5; i++){
  console.log("*")
}
}
printstars();

function oddoreven(){
  for( let i=1; i<=20; i++){
    if(i%2 == 0)
      console.log(i," even")
    else
      console.log(i," Odd")
  }
}
oddoreven();
 
function oddorevens(){
  for ( let i=1; i<=20; i++){
    if(i%2 ==0)
      console.log(i,"tow number diveded")
    else if (i%3 == 0)
      console.log(i,"three Number diveded")
    else if(i%5 == 0)
    console.log(i,"five number diveded")

  else
    console.log(i, "remaninng")
    
  }
}
oddorevens();


let studentList = [
  {name:"kalai", dept:"IT", age:30, mark:81},
  {name:"sathish", dept:"CSE", age:25, mark:65},
  {name:"anbu", dept:"MECH", age:55, mark:26},
  {name:"abcd", dept:"MECH", age:30, mark:30},
  {name:"xyz", dept:"IT", age:27, mark:34},
  {name:"eee", dept:"MECH", age:55, mark:76},
  {name:"fff", dept:"MECH", age:30, mark:90},
  {name:"ggg", dept:"IT", age:27, mark:55},
  {name:"hhhh", dept:"MECH", age:55, mark:16},
  {name:"iiii", dept:"MECH", age:30, mark:80},
  {name:"jjjj", dept:"IT", age:27, mark:44}
]

function toFindgrade(){
  for(let i=0; i <studentList.length;i++){
    if(studentList[i].mark >80){
      console.log("A grade", studentList[i].mark, studentList[i].name)
    }
    else if(studentList[i].mark>60){
      console.log("B grade", studentList[i].mark, studentList[i].name)
    }
    else if(studentList[i].mark>50){
      console.log("c grade", studentList[i].mark, studentList[i].name)
    }
    else if(studentList[i].mark>35){
      console.log("D grade", studentList[i].mark, studentList[i].name)
    }
    else{
      console.log(" O grade",studentList[i].mark, studentList[i].name, studentList[i].dept )
    }
  }
}
toFindgrade();


let threemultiples=0
let fivemultiples=0
function multiples(){
  for ( let i=1; i<=1000; i++){
    if (i%3==0 && i%5==0){
      threemultiples=i+threemultiples;
      console.log(i, threemultiples)
    }
/*else if 
 (i%5==0){
  fivemultiples=i+fivemultiples;
  console.log(i, "fivemultiples")
}*/

  }

}
multiples();

let threemultiple=0
let fivemultiple=0
let eightmuliple=0
function multiple(){
  for( let i=1; i>=1000; i++){
    if (i%3==0 && i%5==0 && i%8==0){
      threemultiple=i+threemultiple;
      fivemultiple=i+fivemultiple;
      eightmuliple=i+eightmuliple;

      console.log(i)

    }
  }
}
multiple();

// this condition
var obj = {
  name:  "SAITZ",
  age: '15',
  getName: function(){
  console.log(this.name);
}
} 
obj.getName();

 let fivenumbers1=0
 function multiplites1(){
  for( let i=1; i<=100; i++){
    if(i%5==0){
      fivenumbers1=i+fivenumbers1;
      console.log(i) 
    }
  }
 }
 multiplites1();

 for(let i=1; i<=5; i++){
 console.log("numbers #" + i)
 }
 
 for(let i=1; i<=5; i++){
  console.log("hello world" +i)
 }

const fruits =[ "apple","banana", "cherry", "mango"]
for(i=1; i<=3; i++){
  console.log(fruits[i])
}

//triangal method

for( let i=1; i<=7; i++){
  for(let j=1; j<=i; j++){
    console.log("*");
  }
  console.log("<br>");
}

    add = 0;
    nums=[30,40,50]
for (let i = 1; i <=100; i++) {
    console.log(add = add + i)
}

let val= [20,50]
let val2 =[30,10]
if(val[0]>val[1]){
console.log(val[0] + "is lessthan")
}
else {
  console.log(val[1] + "is greaterthan")
}

if(val2[0]>val2[1]){
  console.log(val2[0]+ "is greaterthan")
}
else{
  console.log(val2[1]+"is lessthan")
}
// using 3rd variable 
let a=10
let b=20
let c=a// a=10, b=20, c=10
// let d=b
a=b; // a=20, b=20, c=10
b=c;
console.log("a=", a,b)

// without 3rd vaiable
let x=50;
let y=15;
 y = x+y; //65, x=50
 x= y-x //65 - 50, 15 // x=15, y=65
 y = y-x // 65 - 15 =50, x=15, y =50

  
 let cars=[
{name:'audi' ,
  model: 2010,
  rate:250000,
  color:'black',
  location:'chennai'},
  {name:'BMW' ,
    model: 2015,
    rate:350000,
    color:'blue',
    location:'coimbatore'},
    {name:'BENZ' ,
      model: 2018,
      rate:450000,
      color:'red',
      location:'madurai'},
      {name:'suzuki' ,
        model: 2013,
        rate:150000,
        color:'green',
        location:'theni'},
        {name:'toyata' ,
          model: 2020,
          rate:650000,
          color:'black',
          location:'tirchi'},
          {name:'tata' ,
            model: 2022,
            rate:550000,
             color:'gray',
            location:'poonthamali'}

 ]
 function newcars(){
 for(let i=0; i<cars.length; i++){
  if(cars[i].rate<300000){
    console.log("lowbudget cars" +cars[i].rate, cars[i].name)
  }
else if(cars[i].rate<600000){
  console.log("mediumbudget cars"+ cars[i].rate,cars[i].name)
}
else{
  console.log("highbudget cars" + cars[i].rate,cars[i].name)
  }
 }
}
 newcars()

 function carsmodel(){
for(let i=0; i<cars.length; i++){
  if(cars[i].model>2013){
console.log(cars[i].model, cars[i].name, cars[i].color, cars[i].rate, cars[i].location)
  }
 }
}
 carsmodel()

 //object arry
 let fruitie=[
  {name:'apple',color:'red',rate:100},
  {name:'banana',color:'yellow',rate:300},
  {name:'grapges',color:'gray',rate:250},
  {name:'orange',color:'orange',rate:50}];

  fruitie.forEach(newfruit => console.log(fruitie));
  

  let num = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16];
  console.log(num)
  console.log(num.slice(6,12));



let veg=['apple','banana','mango','orange','dates'];
veg.splice(1, 0, 'Blueberry', 'Blackberry');
console.log(veg)

//ROUND -> its nearest intiger value round
console.log(Math.round(3.7));

//ceil-> its increse valueat finally round
console.log(Math.ceil(5.2));

//floor -> its down value at finally round
const number = 9.7;
console.log(Math.floor(number));

const fruits3 = ["Banana", "Orange", "Apple", "Mango",'Blueberry', 'Blackberry'];
console.log(fruits3.copyWithin(3));

// arry of fill()
const fruits5 = ["Banana", "Orange", "Apple", "Blueberry","Mango"];
console.log(fruits5.fill("Kiwi"));

const fruit4 = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits4.shift());

//flat() function
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(2);
console.log(newArr)

//settime out()
 
setTimeout(function(name,){
  console.log('test',name)

},1000,'saitz')

setTimeout(()=>{
  console.log('new',)

},1000,'time')
  
  
//setinterval  with clear interval
let count=0;
const intervalid=setInterval(function(name){
  count++;
  if(count>3){
    clearInterval(intervalid)
  }
  console.log(count)
},2000,'sathish') 

function nnn(){
for(let i=0; i<=20; i++){
  if(i%2 == 0) 
    console.log(i,"even")

else console.log(i,"odd")
  }
}nnn();


 



 

   