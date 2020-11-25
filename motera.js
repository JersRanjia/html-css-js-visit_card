
function tourner() {

    var face = document.getElementById("face") ;
    var back = document.getElementById("back") ;

    var bt_tourner = document.getElementById("tourner") ;
    bt_tourner.disabled = true ;

    if (face.classList.contains("disparait")) {

        face.classList.remove("disparait")
        face.classList.add("apparait")
        face.style.zIndex = 3 ;
        face.onanimationend = function (e) {
            face.style.zIndex = 3 ;
        }

    } else {

        face.classList.remove("apparait")
        face.classList.add("disparait")
        face.onanimationend = function (e) {
            face.style.zIndex = 1 ;
        }
    }

    var f_setZIndex = face.onanimationend ;

    face.onanimationend = function (e) {
        f_setZIndex(e);
        bt_tourner.disabled = false ;
    }
    //back.classList.add("apparait")

}


