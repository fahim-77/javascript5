const button = document.querySelector(".calculation");
const date = document.querySelector("#date");
const result = document.querySelector("#result");
const clickHandler = () => {
  result.style.display = "block";
  result.classList.add("result");
  button.disabled = "disable";
  const dateOfBirth = date.value;
  const date1 = new Date(dateOfBirth);
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();

  const date2 = new Date();
  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  let result1;
  let result2;
  if (year2 > year1) {
    result1 = year2 - year1;
    if (month2 < month1) {
      result1--;
      result2 = month2 + 12 - month1;
    } else if (month2 >= month1) {
      result2 = month2 - month1;
    }
  } else {
    alert("The year entered is incorrect.");
  }
  if (result1 === 0) {
    result.innerHTML = `${result2} months`;
  } else {
    result.innerHTML = `${result1} years ${result2} months`;
  }
  setTimeout(() => {
    button.disabled = "";
  }, 2000);
};
button.addEventListener("click", clickHandler);
