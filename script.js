const heightInput = document.querySelector(".height-value")
const weightInput = document.querySelector(".weight-value")
const calculateBtn = document.querySelector(".calculate")
const form = document.querySelector(".form")
const reset = document.querySelector(".reset")
const resultShow = document.querySelector(".result")
const spinner = document.querySelector(".loader-div img")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  let height = heightInput.value,
      weight = weightInput.value
  if (height > 0 && weight > 0) {
    spinner.style.display = "block"
    if ((resultShow.classList.contains = "show")) {
      resultShow.classList.remove("show")
    }
    setTimeout(() => {
      spinner.style.display = "none"
      calculateBMI(height, weight)
    }, 1000)
  } else {
    resultShow.textContent = "Please Enter Valid Numbers.... :)"
  }
})

function calculateBMI(height, weight) {
  height = height / 100
  let bmi = (weight / Math.pow(height, 2)).toFixed(1)
  let text = `BMI Value = ${bmi}`
  if (bmi < 18.5) {
    showResultInfo("yellow", `UnderWeight | ${text}`)
  }
  if (bmi > 18.5 && bmi < 24.9) {
    showResultInfo("lightgreen", `Normal | ${text}`)
  }
  if (bmi > 24.9 && bmi <= 29.9) {
    showResultInfo("orange", `OverWeight | ${text}`)
  }
  if (bmi > 29.9) {
    showResultInfo("red", `Obese | ${text}`)
  }
}
  
function showResultInfo(color, value) {
  resultShow.textContent = value
  resultShow.style.background = color
  resultShow.classList.add("show")
  reset.style.display = "block"
}

reset.addEventListener("click", (e) => {
  form.reset()  // Reset the values in the form
  resultShow.classList.remove("show")
  reset.style.display = "none"
})
