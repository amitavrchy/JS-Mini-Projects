const triangleBtn = document.getElementById('triangleCalculate');
triangleBtn.addEventListener('click', function(){
    const height = collectData('input1');
    const width  = collectData('input2');
    const ans    = 0.5*height*width;
    displayData(ans);
    
});
const rectangleCalcBtn = document.getElementById("rectangleCalculate");
rectangleCalcBtn.addEventListener('click', () => {
    let length = collectData('input3') ;
    let breadth= collectData('input4');
    if (length == "" || breadth == ""){
        alert("Please enter both the Length and Breadth.");
    } else {
        let area   = length * breadth;
        displayData(area)
    }
})
const parallelogramBtn = document.getElementById('parallelogramCalculate');
parallelogramBtn.addEventListener('click', () => {
    const base = collectData('input5');
    const side = collectData('input6');
    const ans = base * side;
    displayData(ans);
});
const rhombusBtn = document.getElementById('rhombusCalculate');
rhombusBtn.addEventListener('click', function(){
    const height = collectData('input7');
    const width  = collectData('input8');
    const ans    = 0.5*height*width;
    displayData(ans);
    
});
const pentagonBtn = document.getElementById('pentagonCalculate');
pentagonBtn.addEventListener('click', function(){
    const height = collectData('input9');
    const width  = collectData('input10');
    const ans    = 0.5*height*width;
    displayData(ans);
    
});
const ellipseBtn = document.getElementById('ellipseCalculate');
ellipseBtn.addEventListener('click', () => {
    const base = collectData('input11');
    const side = collectData('input12');
    const ans = Math.PI * base * side;
    displayData(ans);
});