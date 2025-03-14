// accessing height
const height=document.getElementById("height");
// accessing weight
const weight=document.getElementById("weight");

// accessing calulator button
const cal=document.getElementById("calculate");
// accessing clear button
const clear=document.getElementById("clear");

// accessing result
const result=document.getElementById("result");


cal.addEventListener("click",()=>{
    let h=Number(height.value);
    let w=Number(weight.value);

    if(isNaN(h) || isNaN(w) || h=="" || w==""){ // if it is Nan or empty do not accept the input
        alert("enter correct input")
    }else{ // calculate BMI
        h=h*0.01;
        let bmi=(w)/Math.pow(h,2);
        let res=bmi.toPrecision(3);
        result.innerHTML=displayOuput(res);
    }
})

// adding details in result
function displayOuput(value)
{
    let str="Result = "+value+" ";
    if(value<16){
        str=str+"(Severe Thinness)";
    }else if(value>=16 && value<17){
        str=str+"(Moderate Thinness)";
    }else if(value>=17 && value<18.5){
        str=str+"(Mild Thinness)";
    }else if(value>=18.5 && value<25){
        str=str+"(Normal)";
    }else if(value>=25 && value<30){
        str=str+"(Overweight)";
    }else if(value>=30 && value<35){
        str=str+"(Obese Class I)";
    }else if(value>=35 && value<40){
        str=str+"(Obese Class II)";
    }else{
        str=str+"(Obese Class III)";
    }
    
    return str;
}

// reset
clear.addEventListener("click",()=>{
    height.value="";
    weight.value="";
    result.innerHTML="Result";
})