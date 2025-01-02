// function allValue(value) {
//   document.getElementById("inp").value += value;
// }

// function allCount() {
//   let a = document.getElementById("inp").value;
//   let b;

//   b = eval(a);
//   document.getElementById("inp").value = b;
// }

// function allClear() {
//   document.getElementById("inp").value = "";
// }

let angkas = document.querySelectorAll(".angka");
let inputt = document.getElementById("inp");

for (let i = 0; i < angkas.length; i++) {
  angkas[i].addEventListener("click", function () {
    inputt.value += this.innerHTML;
  });
}

let count = document.querySelector(".tambah");

count.addEventListener("click", function () {
  inputt.value += "+";
});

let min = document.querySelector(".kurang");

min.addEventListener("click", function () {
  inputt.value += "-";
});

let xkali = document.querySelector(".kali");

xkali.addEventListener("click", function () {
  inputt.value += "*";
});

let bagian = document.querySelector(".bagi");

bagian.addEventListener("click", function () {
  inputt.value += "/";
});

let result = document.querySelector(".hasil");

result.addEventListener("click", function () {
  let res;
  res = eval(inputt.value);
  console.log(res);
  inputt.value = res;
});

let clear = document.querySelector(".delete");

clear.addEventListener("click", function () {
  inputt.value = "";
});
