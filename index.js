document.getElementById("predict-btn").addEventListener("click", () => {
    // Collect input data
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const income = document.getElementById("income").value;
    const spendingScore = document.getElementById("spending-score").value;
  
    // Validate input
    if (!gender || !age || !income || !spendingScore) {
      document.getElementById("result").innerText = "Please fill in all fields.";
      return;
    }
  
    // AJAX Request to Backend
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/localhost:5000/predict", true); // Replace '/predict' with your actual backend endpoint
    xhr.setRequestHeader("Content-Type", "application/json");
  
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        document.getElementById("result").innerText = `Predicted Segment: ${response.segment}`;
      } else {
        document.getElementById("result").innerText = "Error predicting segment.";
      }
    };
  
    xhr.send(
      JSON.stringify({
        gender: Number(gender),
        age: Number(age),
        income: Number(income),
        spending_score: Number(spendingScore),
      })
    );
  });
  








