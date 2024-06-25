//Assignment 1: Function and Array
function max(numbers) {
  let maxNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
}

console.log(max([1, 2, 4, 5]));
console.log(max([5, 2, 7, 1, 6]));

// Assignment 2: Function and Object
function calculate(args) {
  let n1 = Number(args.n1);
  let n2 = Number(args.n2);
  let result;
  switch (args.op) {
    case "+":
      result = n1 + n2;
      break;
    case "-":
      result = n1 - n2;
      break;

    default:
      return "Not supported";
  }

  return result;
}

console.log(calculate({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'

//Assignment 3: Function, Array, and Object
function calculate3(data) {
  const prices = data.products.map((product) => product.price);
  const totalPrice = prices.reduce((acc, price) => acc + price, 0);
  console.log("totalPrice", totalPrice);
  const discountPrice = totalPrice * (1 - data.discount);
  return discountPrice;
}
const discountedPrice = calculate3({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});
console.log(discountedPrice);
//Assignment4
//Request 1: Click to Change Text.
let isText1 = true;
function changeText() {
  const displayText = document.getElementById("mainTopText");
  if (isText1) {
    displayText.textContent = "Have a Good Time!";
    isText1 = false;
  } else {
    displayText.textContent = "Welcome Message";
    isText1 = true;
  }
}

//Request 2: Click to Show/Close Menu.
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const menuIcon = document.querySelector(".menuIcon");
  const sidebarClose = document.querySelector(".sidebarClose");
  menuIcon.addEventListener("click", () => {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("visible");
  });
  sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
  });
});

//Request 3: Click to Show More Content Boxes.

document.addEventListener("DOMContentLoaded", () => {
  const bottomBox = document.querySelector(".bottomBox");
  const mainBottom2 = document.querySelector(".mainBottom2");
  bottomBox.addEventListener("click", () => {
    mainBottom2.classList.remove("hidden");
    mainBottom2.style.display = "grid";
  });
});

//Assignment 5: Algorithm
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  throw new Error("No two sum solution");
}

console.log(twoSum([2, 7, 11, 15], 9));
