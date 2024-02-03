function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValueString = inputElement.value;

   
    if (isNaN(parseFloat(inputValueString))) {
        alert("Please provide a valid number");
        return;
    }
    inputElement.value = ''; // Clear the input field
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function getTextValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textValueString = textElement.innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

function setTextValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}


function addToCalculationEntry(areatype, area){
    
    const calculationEntry =document.getElementById('calculation-entry');
     
    const count =calculationEntry.childElementCount;

    // added 
    const p =document.createElement('p');
    p.classList.add("my-5");

    p.innerHTML=` ${count +1}. ${areatype}  ${area} cm <sub>2 </sub> <button class="btn btn-primary  ml-5" > Convert</button>`
    calculationEntry.appendChild(p)
    
}




function calculateTriangleArea() {
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const totalTriangleArea = 0.5 * base * height;
    setTextValueById('triangle-area', totalTriangleArea);
    setTextValueById('area-container',totalTriangleArea);
    addToCalculationEntry('triangle', totalTriangleArea)

}

function calculateRectangleArea() {
    const width = getInputValueById('Rectangle-width');
    const length = getInputValueById('rectangle-length');
    const totalRectangleArea = width * length;
    setTextValueById('rectangleArea', totalRectangleArea);
    setTextValueById('area-container',totalRectangleArea);
    addToCalculationEntry('rectangleArea', totalRectangleArea);
    
}

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const totalParallelogramArea = base * height;
    console.log(totalParallelogramArea);

    setTextValueById('parallelogram-area', totalParallelogramArea);
    setTextValueById('area-container',totalParallelogramArea);
    addToCalculationEntry('parallelogram-area', totalParallelogramArea);
   
}

function calculateRhombus(){
    const rhombusD1 = getInputValueById('rhombus-d1');
    const rhombusD2 = getInputValueById('rhombus-d2');
    const totalRhombusArea = 0.5 * rhombusD1 * rhombusD2;

    setTextValueById ('rhombus-area',totalRhombusArea);
    setTextValueById('area-container',totalRhombusArea);
    addToCalculationEntry('rhombus-area',totalRhombusArea)
}

function calculatePentagon(){
    const pentagonPase = getInputValueById('pentagon-pase');
    const pentagonBase = getInputValueById('pentagon-base');
    const totalPentagonArea = 0.5 * pentagonPase * pentagonBase;
    
    setTextValueById('pentagon-area',totalPentagonArea);
    setTextValueById('area-container',totalPentagonArea);
    addToCalculationEntry('pentagon-area',totalPentagonArea);
    
}

function calculateEllipse(){
    const ellipseMajor = getInputValueById('ellipse-major');
   

    const ellipseBase = getInputValueById('ellipse-base');
    console.log(ellipseBase)
    const totalEllipse = 3.1416 * ellipseMajor * ellipseBase;
  

    setTextValueById('ellipse-area',totalEllipse.toFixed(2));
    setTextValueById('area-container',totalEllipse);
    addToCalculationEntry('ellipse-area',totalEllipse.toFixed(2))
}


