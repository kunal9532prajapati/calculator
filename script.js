body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.calculator {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    width: 300px; /* Set a fixed width */
}

/* Calculator Display Styling */
#display {
    width: 100%;
    height: 60px;
    border: none;
    background-color: #444;
    color: white;
    font-size: 2em;
    text-align: right;
    padding: 10px 15px;
    box-sizing: border-box;
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Button Grid and Styling */
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 columns of equal width */
    gap: 10px;
}

button {
    height: 60px;
    border: none;
    border-radius: 5px;
    font-size: 1.5em;
    cursor: pointer;
    background-color: #555;
    color: white;
    transition: background-color 0.1s;
}

button:hover {
    background-color: #666;
}

/* Specific Button Styles */
.operator {
    background-color: #f7921a; /* Orange for operators */
}

.operator:hover {
    background-color: #e68616;
}

.equals {
    background-color: #4CAF50; /* Green for equals button */
    grid-column: span 2; /* Make the equals button span two columns */
}

.equals:hover {
    background-color: #45a049;
}

.zero {
    grid-column: span 1; /* Keep the zero button one column wide, or change to span 2 if desired */
}