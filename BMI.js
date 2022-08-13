function getdata(){
var name=document.getElementById('name').value;
var age=document.getElementById('age').value;
var height=parseFloat(document.getElementById('h').value);
var weight=parseFloat(document.getElementById('w').value);
var h_measurement=document.getElementById('h_measurement').value;
var gender=document.querySelector('input[name="gender"]:checked').value;
var activity=parseFloat(document.getElementById('act').value);

if(name && age && height && weight && h_measurement && activity){
    var heightOnMeter=H_convertToMeter(height,h_measurement);
    var bmiRes=parseFloat(calculateBMI(weight,heightOnMeter));
	var bmrcal=parseFloat(calculateCAL(weight, age, heightOnMeter, activity, gender));
    display(bmiRes, bmrcal);
	
console.log(bmiRes, bmrcal);
}

else{
    alert("Please Enter a Value");
}

}

function calculateCAL(weight, age, heightOnMeter, activity, gender){

	var bmrcal=null;
	if (gender == "Male"){
		bmrcal = (((10*weight) + (6.25*(heightOnMeter*100)) - (5*age) + 5)*activity);
	}
	else if (gender == "Female"){
		bmrcal = (((10*weight) + (6.25*(heightOnMeter*100)) - (5*age) - 161)*activity);
	}
	return bmrcal;
}

function H_convertToMeter(height,h_measurement){

    var converValue=null;
    if(h_measurement==="m"){
        converValue=height;
    }
    else if(h_measurement==="cm"){
        converValue=height/100;
    }
    else if(h_measurement==="f"){
        converValue=height*0.3048;
    }
    return converValue;
}

function calculateBMI(weight,heightOnMeter){

    var bmiRes=weight/((heightOnMeter)*(heightOnMeter));
	bmiRes = bmiRes.toFixed(3);
	    return bmiRes;
}
function display(bmiRes, bmrcal){

    var display=null;
    if(bmiRes<16){
        display='Your BMI is ' +bmiRes+' and you are in Underweight with Severe Thinness';
    }
    else if(bmiRes>=16 && bmiRes<=16.9){
        display='Your BMI is ' +bmiRes+' and you are in Underweight with Moderate Thinness';
    }
    else if(bmiRes>=17 && bmiRes<=18.4){
        display='Your BMI is ' +bmiRes+' and you are in Underweight with Mild Thinness';
    }
    else if(bmiRes>=18.5 && bmiRes<=24.9){
        display='Your BMI is ' +bmiRes+' and you are in Normal';
    }
    else if(bmiRes>=25 && bmiRes<=29.9){
        display='Your BMI is ' +bmiRes+' and you are in Overweight (Pre-obese)';
    }
    else if (bmiRes>=30 && bmiRes<=34.9){
        display='Your BMI is ' +bmiRes+' and you are in Obese Class I';
    }
    
    var displayelement=document.getElementById("display");
	var display2 = "Your approximate calorie intake per day to maintain your weight is "+bmrcal;
	displayelement.querySelector('h2').textContent=display;
	displayelement.querySelector('h3').textContent=display2;
}

