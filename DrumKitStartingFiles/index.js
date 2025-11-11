// 🎯 همه‌ی دکمه‌های با کلاس drum رو می‌گیریم
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let key = this.innerHTML; // حرف روی دکمه مثلاً w یا a
    makeSound(key);
  });
}

// 🎹 گوش می‌ده به فشردن کلیدها از روی کیبورد
document.addEventListener("keydown", function (event) {
  makeSound(event.key.toLowerCase());
});

// 🎧 تابع مخصوص پخش صدا بر اساس حرف
function makeSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      new Audio("sounds/snare.mp3").play();
      break;

    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      new Audio("sounds/crash.mp3").play();
      break;

    default:
      console.log("کلید ناشناخته: " + key);
  }
}
// 🎵 پخش صدا و افکت
document.querySelectorAll(".drum").forEach(btn => {
  btn.addEventListener("click", function() {
    const key = this.innerHTML;
    playSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", function(e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/crash.mp3").play();
      break;
  }
}

// 🌟 افکت لحظه‌ای روی دکمه
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}
