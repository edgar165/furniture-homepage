const arrowLeft = document.querySelector('.icon-angle-left');
const arrowRight = document.querySelector ('.icon-angle-right');

hello(goodbye);

function hello(callback){
    console.log("Hello!");
    callback();
}

function goodbye(){
    console.log("Goodbye!");}
