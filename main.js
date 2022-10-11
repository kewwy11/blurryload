const loadContent = document.querySelector('.content');
const image = document.querySelector('.bg')

let loading = 0;
let blur = setInterval(blurImage, 50)

function blurImage(){
    loading++
    if(loading > 99){
        clearInterval(blur);
    }
    console.log(loading)
    loadContent.innerHTML = `${loading}%`;

    loadContent.style.opacity*scale(loading, 0, 100, 1, 0);
    image.style.filter = `blur(${scale(loading, 0, 100, 20, 0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

//loadContent.style.opacity.scale(number, minnum, maxnum, startingOpacity, endindOpacity)