const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const start = document.querySelector(".start");
let points = 0;

const enterLoop = () => {
   const loop = setInterval(() => {
      const pipePosition = pipe.offsetLeft;
      const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
      const cloudsPosition = clouds.offsetLeft;

      if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
         pipe.style.animation = "none";
         pipe.style.left = `${pipePosition}px`;

         clouds.style.animation = "none";
         clouds.style.left = `${cloudsPosition}px`;

         mario.style.animation = "none";
         mario.style.bottom = `${marioPosition}px`;
         mario.setAttribute("src", "./imgs/game-over.png");
         mario.style.width = "75px";
         mario.style.marginLeft = "50px";
         setTimeout(() => {
            document.location.reload(true);
         }, 1500);
         clearInterval(loop);
      }
   }, 10);
};

document.addEventListener("keydown", (e) => {
   console.log(e.key);
   if (e.key === "Enter") {
      start.style.display = "none";
      pipe.style.animation = "pipe-animation 1.3s infinite linear";
      clouds.style.animation = "clouds-animation 20s infinite linear";
      mario.style.display = "block";
      enterLoop();
   }
});

document.addEventListener("keydown", (e) => {
   if (e.key === " ") {
      mario.classList.add("jump");
      setTimeout(() => {
         mario.classList.remove("jump");
      }, 500);
   }
});
