
const classe_disparaitFace = "disparait-face" ;
const classe_apparaitFace = "apparait-face" ;
const classe_disparaitBack = "disparait-back" ;

function tourner() {

    var face = document.getElementById("face") ;
    var back = document.getElementById("back") ;

    var bt_tourner = document.getElementById("tourner") ;
    bt_tourner.disabled = true ;

    if (face.classList.contains(classe_disparaitFace)) {

        face.classList.remove(classe_disparaitFace)
        face.classList.add(classe_apparaitFace)
        back.classList.add(classe_disparaitBack)
        face.onanimationend = function (e) {
            face.style.zIndex = 3 ;
            face.style.filter = "blur(0px)"
            bt_tourner.innerText = "<"
        }

    } else {

        face.classList.remove(classe_apparaitFace)
        face.classList.add(classe_disparaitFace)
        back.classList.remove(classe_disparaitBack)
        face.onanimationend = function (e) {
            face.style.zIndex = 1 ;        
            face.style.filter = "blur(10px)"
            bt_tourner.innerText = ">"
        }
    }

    var f_setZIndex = face.onanimationend ;

    face.onanimationend = function (e) {
        f_setZIndex(e);
        bt_tourner.disabled = false ;
    }
    //back.classList.add("apparait")

}


