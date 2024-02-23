//------------------------------------Initialize Carousel-------------------------------

const sliderItems = document.querySelectorAll('.sliderItem');

var currentSlider = 0;

// var sliderDataArray = [];

for(let i = 0 ; i < sliderItems.length ; i++){
    sliderItems[i].style.cssText =`transform: translateX(${i*100}%);`
}



//------------------------------------Control Carousel-------------------------------

// validate button actions
const validateActionPrev =()=>{
    return currentSlider >0
}
const validateActionNext =()=>{
    return currentSlider+1 <= sliderItems.length-1;
}
//


// selectors
const nextBtn = document.getElementById('controlNext');
const prevBtn = document.getElementById('controlPrev');
const sliderBody = document.querySelector('.sliderBody');
//

//click event
nextBtn.onclick = ()=>{

    if(validateActionNext()){
        currentSlider++;
        sliderBody.style.cssText = `transform: translateX(-${currentSlider*100}%);`
    }

}

prevBtn.onclick = ()=>{

    if(validateActionPrev()){
        currentSlider--;
        sliderBody.style.cssText = `transform: translateX(-${currentSlider*100}%);`
    }

}
//







