const btn = document.getElementById("translateBtn");
const input = document.getElementById("inputText");
const result = document.getElementById("result");

btn.addEventListener("click", function () {
  const text = input.value.trim();

  if (text === "") {
    result.textContent = "من فضلك اكتب نصاً أولاً.";
    return;
  }

  // مؤقتاً: سنربط هذا الجزء بالذكاء الاصطناعي لاحقاً
  result.textContent = "جاري الترجمة... (تجريبي): " + text;
});
