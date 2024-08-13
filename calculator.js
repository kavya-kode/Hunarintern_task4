function calculateBMI() {
    console.log("Calculate BMI function called"); // Debugging statement
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    console.log(`Weight: ${weight}, Height: ${height}`); // Debugging statement

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);

    console.log(`BMI: ${bmiRounded}`); // Debugging statement

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obesity";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your BMI is ${bmiRounded}. This is considered ${category}.`;
}
