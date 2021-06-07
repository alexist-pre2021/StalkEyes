// let balls va prendre en charge les div ".ball"
let balls = document.getElementsByClassName('ball');
// fonction permettant de faire suivre le curseur
document.onmousemove = function() {

    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerWidth + "%";
    //effectuer une action de réitération de la souris 
    for(let i = 0; i < 2; i++ ){
        balls[i].style.left = x;// l'axe x suit les mouvements de la souris 
        balls[i].style.top = y;// l'axe y suit les mouvements de la souris
        balls[i].style.transform = "translate(-" + x + ",-" + y +")";
    }

    console.log("x =" + x);
    console.log("y =" + y);
}