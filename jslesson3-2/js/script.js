const deletelist = document.getElementById("deletelist");
const container1 = document.getElementById("top");
const container2 = document.getElementById("contflex");
const newlistBtn = document.getElementById("newlist");
const newstylelist = document.getElementById("newstyle");

function opennewlist() {
  document.location.href = "https://www.onliner.by";
}

newstylelist.addEventListener("click", function () {
  //скрываем контейнер1
  container1.style.display = "none";
  //открываем окнтейнер2
  container2.style.display = "block";
});
container2.addEventListener("click", function () {
  //скрываем контейнер2
  container2.style.display = "none";
  //открываем окнтейнер1
  container1.style.display = "block";
});

newlistBtn.onclick = function () {
  opennewlist();
};

// function changeContauners(elem1, elem2) {
//   elem1.style.display = "none";
//   elem2.style.display = "blcock";
// }

// newlistBtn.addEventListener("click", function () {
//   changeContauners(container1, container2);
// });
// container2.addEventListener("click", function () {
//   changeContauners(container2, container1);
// });
