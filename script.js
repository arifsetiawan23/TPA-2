let button = document.getElementById('btn');

button.addEventListener('click', () => {
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let hasil = document.getElementById('hasil');
    let height_status = false;
    let weight_status = false;

    if (height === ''|| isNaN(height)||(height<=0)){
        document.getElementById('height-error').innerHTML= "Please enter your height correctly"
    }else{
        document.getElementById('height-error').innerHTML = '';
        height_status = true;
    }

    if (weight ===''|| isNaN(weight)|| (weight<=0) ){
        document.getElementById('weight-error').innerHTML = "Please enter your weight correctly"
    }else{
        document.getElementById('weight-error').innerHTML = '';
        weight_status = true;
    }


    if (weight_status && height_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

    if (bmi < 18.5){
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Underweight'
    }else if (bmi >= 18.5 && bmi <= 24.9){
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Normal weight'
    }else if (bmi >= 25 && bmi <= 29.9){
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Overweight'
    }else{
        hasil.innerHTML = 'Your BMI is '+ bmi + ' which means You are Obesity'
    }
    }
    
})