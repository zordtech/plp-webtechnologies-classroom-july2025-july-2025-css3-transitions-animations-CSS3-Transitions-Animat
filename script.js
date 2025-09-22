// ================================
// Part 1: Variables & Scope
// ================================
let globalCounter = 0; // Global variable (accessible anywhere)

// ================================
// Part 2: Functions with Parameters
// ================================
function squareNumber(num) {
  // Demonstrates parameter & return value
  return num * num;
}

// ================================
// Part 3: DOM Interactions
// ================================

// Function to handle square button click
document.getElementById("squareBtn").addEventListener("click", function() {
  // Local scope variable
  let inputVal = document.getElementById("num").value;
  
  if (inputVal === "") {
    document.getElementById("result").textContent = "Please enter a number.";
    return;
  }

  // Call function with parameter & get return value
  let squared = squareNumber(Number(inputVal));
  document.getElementById("result").textContent = `Square: ${squared}`;
  
  globalCounter++;
  console.log("Square function has been used " + globalCounter + " times.");
});

// ================================
// Part 4: Animation Trigger
// ================================
document.getElementById("animateBtn").addEventListener("click", function() {
  let box = document.getElementById("box");

  // Remove old animation if already applied
  box.classList.remove("animate");
  
  // Force reflow (so animation can restart)
  void box.offsetWidth;
  
  // Add animation class
  box.classList.add("animate");
});