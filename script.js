const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const button = document.querySelector(".button");
const replay = document.querySelector("#replay");
const backGround = document.querySelector(".no-background");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");

  nums.forEach((item) => {
    item.classList.value = "";
  });

  nums[0].classList.add("in");
  backGround.classList.remove("background");
}

function runAnimation() {
  button.classList.add("hidden");
  nums.forEach((item, idx) => {
    const nextToLast = nums.length - 1;

    item.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        item.classList.remove("in");
        item.classList.add("out");
      } else if (e.animationName === "goOut" && item.nextElementSibling) {
        item.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
        backGround.classList.remove("no-background");
        backGround.classList.add("background");
        finalMessage.innerHTML =
          '<iframe width="560" height="315" src="https://www.youtube.com/embed/yQEondeGvKo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        button.classList.add("button");
        button.classList.remove("hidden");
      }
    });
  });
}

replay.addEventListener("click", () => {
  resetDOM();
  runAnimation();
  button.classList.remove("button");
  button.classList.add("hidden");
});
