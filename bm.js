const sub = document.getElementsByClassName("bttn")


/*
    function calculateBmi() {
        var weight = document.bmiForm.weight.value
        var height = document.bmiForm.height.value
        if(weight > 0 && height > 0){
            var finalBmi = weight/(height/100*height/100)
            document.bmiForm.bmi.value = finalBmi
            if(finalBmi < 18.5){
                document.bmiForm.meaning.value = "That you are too thin."
            }
            if(finalBmi > 18.5 && finalBmi < 25){
                document.bmiForm.meaning.value = "That you are healthy."
            }
            if(finalBmi > 25){
                document.bmiForm.meaning.value = "That you have overweight."
            }
        }
        else{
            alert("Please Fill in everything correctly")
        }
    }
*/
function inference(res){
    let resultt = document.getElementsByClassName('result')
    if(res > 40){
      resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Obese Class III";
    } else if (res >= 35){
        resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Obese Class II";
    } else if(res >=30){
        resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Obese Class I";
    } else if(res >= 25){
        resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Overweight";
    } else if(res >= 18.5){
        resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Normal";
    } else if (res >= 17){
        resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Mild Thinness";
    } else if (res >= 16){
      resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Moderate Thinness";
    } else if (res <= 16) {
        resultt.innerHTML="Your Body Mass Index is"+ res +"and your Index Value is in Severe Thinness";
    }
  }