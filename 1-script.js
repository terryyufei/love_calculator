const calculateBtn = document.getElementById("calculateBtn");
const resultElement = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const bothNames = (name1 + name2).toLowerCase();

     // Check if both input fields are not empty
    if (name1.trim() === "" || name2.trim() === "") {
        resultElement.textContent = "Please enter both names before calculating.";
        return;
    }

    const t = (bothNames.match(/t/g) || []).length;
    const r = (bothNames.match(/r/g) || []).length;
    const u = (bothNames.match(/u/g) || []).length;
    const e = (bothNames.match(/e/g) || []).length;
    const trueCount = t + r + u + e;

    const l = (bothNames.match(/l/g) || []).length;
    const o = (bothNames.match(/o/g) || []).length;
    const v = (bothNames.match(/v/g) || []).length;
    const loveCount = l + o + v + e;

    const loveScore = parseInt(String(trueCount) + String(loveCount)) % 101;

    let resultText = "";

    if (loveScore <= 20) {
        resultText = `Your score is ${loveScore}, and you are wasting your time! 🤣`;
    } else if (loveScore > 20 && loveScore <= 50) {
        resultText = `Your score is ${loveScore}, and maybe start looking around.🧐`;
    } else if (loveScore > 50 && loveScore < 80) {
        resultText = `Your score is ${loveScore}, and it could work, who knows? 🤭`;
    } else {
        resultText = `Your score is ${loveScore},and you were meant to be unless, they don't like beyonce then you gotta dump them.🥰`;
    }

    resultElement.textContent = resultText;
});
