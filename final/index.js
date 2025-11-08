let player1 = "";
let player2 = "";
let bet = "";

const rollBtn = document.getElementById("roll-btn");
const startBtn = document.getElementById("start-btn");
const title = document.querySelector("h1");

// 🎧 کنترل پخش صدا
const audio = new Audio("Morteza Ahmadi - Shater Ali Mamad (320).mp3");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const seek = document.getElementById("audioSeek");

// دکمه پخش
playBtn.addEventListener("click", () => {
  audio.play();
});

// دکمه توقف
pauseBtn.addEventListener("click", () => {
  audio.pause();
});

// کنترل زمان پخش با نوار
seek.addEventListener("input", () => {
  audio.currentTime = (seek.value / 100) * audio.duration;
});

// به‌روزرسانی نوار پخش
audio.addEventListener("timeupdate", () => {
  seek.value = (audio.currentTime / audio.duration) * 100;
});

// گرفتن اسم بازیکن‌ها و شرط
function getPlayers() {
  player1 = prompt("اسم بازیکن اول رو بنویس 🎯") || "بازیکن ۱";
  player2 = prompt("اسم بازیکن دوم رو بنویس 🎯") || "بازیکن ۲";
  bet = prompt("روی چی شرط می‌بندین؟ 🍕 (مثلاً پیتزا یا بستنی)") || "یه چیز خوشمزه";

  document.querySelectorAll(".player p")[0].textContent = player1;
  document.querySelectorAll(".player p")[1].textContent = player2;

  title.textContent = "بزن رو تاس قلقلی 🎲";
}

// تاس انداختن
function rollDice() {
  if (!player1 || !player2) {
    Swal.fire({
      title: "😅 هنوز بازیکن‌ها مشخص نشدن!",
      text: "اول دکمه‌ی شروع بازی رو بزن.",
      icon: "warning",
      confirmButtonText: "باشه"
    });
    return;
  }

  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

  let result = "";

  if (randomNumber1 > randomNumber2) {
    result = `${player1} برنده‌ست و ${player2} باید ${bet} بخره 🎉`;
  } else if (randomNumber2 > randomNumber1) {
    result = `${player2} برنده‌ست و ${player1} باید ${bet} بخره 🎉`;
  } else {
    result = `مساوی شد 😅 هر دو ${bet} بخرین!`;
  }

  // نمایش نتیجه بعد از دیدن تاس‌ها
  setTimeout(() => {
    Swal.fire({
      title: "🎲 نتیجه بازی",
      text: result,
      icon: "success",
      confirmButtonText: "ادامه بده 🎯",
      background: "rgba(255,255,255,0.9)",
      width: "320px",
      color: "#4a148c",
      confirmButtonColor: "#ffcc00"
    });
  }, 1000);
}

startBtn.addEventListener("click", getPlayers);
rollBtn.addEventListener("click", rollDice);
