let input = "";

const betBox = document.getElementById("bet-box");
const betInput = document.getElementById("bet-input");
const confirmBtn = document.getElementById("confirm-bet");
const rollBtn = document.querySelector(".roll");
const title = document.querySelector("h1");

// تا وقتی که شرط وارد نشده، دکمه‌ی تاس قفل باشه
rollBtn.disabled = true;
rollBtn.style.opacity = "0.5";

// وقتی روی "ثبت" کلیک می‌کنن
confirmBtn.addEventListener("click", () => {
  input = betInput.value.trim();

  if (input === "") {
    alert("یه چیزی بنویس اول 😄");
    return;
  }

  betBox.classList.add("hidden");
  rollBtn.disabled = false;
  rollBtn.style.opacity = "1";
  title.textContent = "بزن رو تاس قلقلی 🎲";
});

// تابع تاس انداختن
function rollDicc() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const imgSrc1 = "images/dice" + randomNumber1 + ".png";
  const imgSrc2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", imgSrc1);
  document.querySelector(".img2").setAttribute("src", imgSrc2);

  if (randomNumber1 > randomNumber2) {
    title.textContent = " 🎉 مهدی برنده‌ست و پول " + input + " رو حدیث بده!";
  } else if (randomNumber2 > randomNumber1) {
    title.textContent = " 🎉 حدیثه برنده‌ست و پول " + input + " رو مهدی بده!";
  } else {
    title.textContent = " 😅 مساویه بابا! پول " + input + " رو نصف کنین!";
  }
}

// رویداد کلیک برای تاس
rollBtn.addEventListener("click", rollDicc);
