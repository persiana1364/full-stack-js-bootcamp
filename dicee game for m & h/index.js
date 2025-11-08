let input = prompt("سر چی داری شرط می‌بندی؟") || "چیزی 😄";
function rollDicc(){
    const randomNumber1 = Math.floor(Math.random()*6)+1;
    const randomNumber2 = Math.floor(Math.random()*6)+1;

    const imgSrc1 = "images/dice"+randomNumber1+".png";
    const imgSrc2 = "images/dice"+randomNumber2+".png";

    document.querySelector(".img1").setAttribute("src" , imgSrc1);
    document.querySelector(".img2").setAttribute("src",imgSrc2);

     const title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title.textContent = " مهدی برنده س و پول "+ input + "رو حدیث بده ";
    }else if (randomNumber2 > randomNumber1) {
        title.textContent = " حدیثه برندس و پول " +input+ " رو مهدی بده";
    }else {
        title.textContent = " مساویه بابا! پول "+input +" نص کنین ";
    }
}




document.querySelector(".roll").addEventListener("click",rollDicc);

