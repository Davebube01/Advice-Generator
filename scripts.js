const changer = document.getElementById("changer");
const num = document.getElementById("num");
const advice = document.getElementById("advice");

const apiURL = "https://api.adviceslip.com/advice";

async function fetchData() {
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("Network response not ok");
        }
        const data = await response.json();
        console.log("dataa", data)
        return data.slip;

    } catch(error) {
        console.error("Error:", error);
    }
}

async function getAdvice() {
    const slipData = await fetchData();
    if (slipData) {
        num.textContent = slipData.id;
        advice.textContent = slipData.advice;
    }
}

changer.addEventListener('click', getAdvice);