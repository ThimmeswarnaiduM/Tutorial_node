const amount=9;
if(amount<10){
    console.log('small number');
}else{
    console.log('Large number')

}console.log("hey it's My first node application");
const names=require('./Module_1');
const sayHai=require('./Module_2');

sayHai(names.mahesh);
sayHai(names.peter);
sayHai("Narayana Sami");