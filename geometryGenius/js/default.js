function collectData(data){
    const data1 = document.getElementById(data);
    baseVal = parseFloat(data1.value); 
    data1.value = "";
    return baseVal;
}

function displayData(ans){
    const areaText = document.getElementById('result');
    console.log(areaText);
    if(isNaN(ans)){
        areaText.innerHTML = 'Please Enter a Valid Number';
    }
    else {
        areaText.innerHTML = ans;
    }
}