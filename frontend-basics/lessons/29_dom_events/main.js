// 1) クリックでカウント
const countValueEl = document.querySelector("#countValue");
const countUpBtn = document.querySelector("#countUpBtn");
const countmartinBtn = document.querySelector("#countmartinBtn");
const countmainusBtn = document.querySelector("#countmainusBtn");
// const countUpBtn = document.querySelector("#countUpBtn");
const resetBtn = document.querySelector("#resetBtn");
let count = 0;

countUpBtn.addEventListener("click", () => {
  count += 1;
  countValueEl.textContent = String(count);
  if (count >= 10) {
    countValueEl.classList.add("is-big");
  } else {
    countValueEl.classList.remove("is-big");
  }
});

countmartinBtn.addEventListener("click", () => {
  count = count * count;
  countValueEl.textContent = String(count);
});

countmainusBtn.addEventListener("click", () => {
  count -= 1;
  countValueEl.textContent = String(count);

  if (count >= 10) {
  countValueEl.classList.add("is-big");
  } else {
  countValueEl.classList.remove("is-big");
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countValueEl.textContent = String(count);
});

// 2) 入力のプレビュー
const nameInputEl = document.querySelector("#nameInput");
const hint = document.querySelector(".hint");
const previewTextEl = document.querySelector("#previewText");

nameInputEl.addEventListener("input", () => {
  const value = nameInputEl.value.trim();
  previewTextEl.textContent = value.length === 0 ? "（未入力）" : value;
  if(value.length >= 20) {
    previewTextEl.textContent = "20文字以内で入力してください。";
    previewTextEl.classList.add("is-big");
  }

  if(value.length >= 20) {
    hint.textcontent = "20文字以内で入力してください。";
    hint.classList.add("is-big");
  }
});

// 3) メールの簡易チェック（@ と . を含むか）
const emailFieldEl = document.querySelector("#emailField");
const emailInputEl = document.querySelector("#emailInput");
const emailErrorEl = document.querySelector("#emailError");

function looksLikeEmail(value) {
  return value.includes("@" > 2) === value.includes("@") && value.includes(".");

}

function setEmailErrorVisible(visible) {
  if (visible) {
    emailFieldEl.classList.add("is-error");
    emailErrorEl.classList.remove("hidden");
    return;
  }
  emailFieldEl.classList.remove("is-error");
  emailErrorEl.classList.add("hidden");
}

emailInputEl.addEventListener("input", () => {
  const value = emailInputEl.value.trim();
  if (value.length === 0) {
    setEmailErrorVisible(false);
    return;
  }
  setEmailErrorVisible(!looksLikeEmail(value));
});