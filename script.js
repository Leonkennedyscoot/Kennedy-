const WORKER_URL = "https://translator-api.sedorserdar.workers.dev/";

const btn = document.getElementById("translateBtn");
const input = document.getElementById("inputText");
const result = document.getElementById("result");
const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");

btn.addEventListener("click", async function () {
  const text = input.value.trim();

  if (text === "") {
    result.textContent = "من فضلك اكتب نصاً أولاً.";
    return;
  }

  if (fromLang.value === toLang.value) {
    result.textContent = "اختر لغتين مختلفتين.";
    return;
  }

  result.textContent = "جاري الترجمة...";
  btn.disabled = true;

  try {
    const response = await fetch(WORKER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        from: fromLang.value,
        to: toLang.value,
      }),
    });

    const data = await response.json();

    if (data.translation) {
      result.textContent = data.translation;
    } else {
      result.textContent = "خطأ: " + (data.error || "غير معروف");
    }
  } catch (err) {
    result.textContent = "تعذر الاتصال بالخادم.";
  }

  btn.disabled = false;
});
