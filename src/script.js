var time = new Date();
let MiIcono1 = document.querySelector("#laugh");
let MiIcono2 = document.querySelector("#smile");
let MiIcono3 = document.querySelector("#sad");
let MiSelect = document.querySelector("#feels");
let MiPara= document.querySelector(".paragraph-message")
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
MiSelect.onchange = SelectionO;
function SelectionO(){
    let choice = MiSelect.value;
    switch(choice){
    case "very-happy":
        uptade(MiIcono1, "red");
        uptade(MiIcono2, "gray");
        uptade(MiIcono3, "gray");
        MiPara.textContent="If you are happy we are happy";
        break;
    case "happy":
        uptade(MiIcono2, "yellow");
        uptade(MiIcono1, "gray");
        uptade(MiIcono3, "gray");
        MiPara.textContent="Are you happy, but if you need help, you will call us";
        break;
    case "sad":
        uptade(MiIcono3, "green");
        uptade(MiIcono2, "gray");
        uptade(MiIcono1, "gray");
        MiPara.textContent="it's fine that do not feeling good sometimes, we are her for you";
        break;
    default:
        uptade(MiIcono1, "aliceblue");
        uptade(MiIcono2, "aliceblue");
        uptade(MiIcono3, "aliceblue");
        MiPara.textContent ="";
        break;
    }

}

 function uptade(MiIcono, iconColor){
   MiIcono.style.color = iconColor;
}
