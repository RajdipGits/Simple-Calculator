let btn = document.querySelectorAll(".btn");
let input = document.getElementsByTagName("input");

let expression = "";

btn.forEach((e) => {
  e.addEventListener("click", () => {
    const value = e.textContent;
    if (value === "=") {
      try {
        input[0].value = eval(expression);
        expression = input[0].value;
      } catch {
        input[0].value = "Error";
        expression = "";
      }
    } else if (value === "C") {
      expression = "";
      input[0].value = "";
    } else if (value === "del") {
      expression = expression.slice(0, -1);
      input[0].value = expression;
    } else {
      expression += value;
      input[0].value = expression;
    }
  });
});

console.log("hello");
