// انداختن تاس‌ها و تعیین برنده
function rollDice() {
  // عددهای تصادفی بین 1 تا 6
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // ساخت مسیر تصویر بر اساس عدد
  const imgSrc1 = "images/dice" + randomNumber1 + ".png";
  const imgSrc2 = "images/dice" + randomNumber2 + ".png";

  // به‌روزرسانی تصاویر
  document.querySelector(".img1").setAttribute("src", imgSrc1);
  document.querySelector(".img2").setAttribute("src", imgSrc2);

  // اعلام نتیجه
  const title = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    title.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    title.textContent = "Player 2 Wins! 🚩";
  } else {
    title.textContent = "Draw!";
  }
}

// اجرای اولیه هنگام لود صفحه
rollDice();

// اجرای دوباره با کلیک روی دکمه
document.querySelector(".roll").addEventListener("click", rollDice);
