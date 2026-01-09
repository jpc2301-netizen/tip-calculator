<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Calculator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            padding: 30px;
            max-width: 400px;
            width: 100%;
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 28px;
        }

        .input-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: 600;
        }

        input {
            width: 100%;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input:focus {
            outline: none;
            border-color: #667eea;
        }

        .results {
            background: #f8f9fa;
            border-radius: 5px;
            padding: 20px;
            margin-top: 30px;
        }

        .result-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            font-size: 16px;
        }

        .result-row:last-child {
            margin-bottom: 0;
            border-top: 2px solid #ddd;
            padding-top: 15px;
            font-weight: 700;
            font-size: 18px;
            color: #667eea;
        }

        .result-label {
            color: #666;
        }

        .result-value {
            font-weight: 600;
            color: #333;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>💰 Tip Calculator</h1>
        
        <div class="input-group">
            <label for="billAmount">Bill Amount ($)</label>
            <input type="number" id="billAmount" placeholder="Enter bill amount" min="0" step="0.01">
        </div>

        <div class="input-group">
            <label for="tipPercentage">Tip Percentage (%)</label>
            <input type="number" id="tipPercentage" placeholder="Enter tip percentage" min="0" value="15" step="1">
        </div>

        <div class="results">
            <div class="result-row">
                <span class="result-label">Tip Amount:</span>
                <span class="result-value" id="tipAmount">$0.00</span>
            </div>
            <div class="result-row">
                <span class="result-label">Total:</span>
                <span class="result-value" id="totalAmount">$0.00</span>
            </div>
        </div>
    </div>

    <script>
        const billInput = document.getElementById('billAmount');
        const tipInput = document.getElementById('tipPercentage');
        const tipAmountDisplay = document.getElementById('tipAmount');
        const totalAmountDisplay = document.getElementById('totalAmount');

        function calculateTip() {
            const bill = parseFloat(billInput.value) || 0;
            const tipPercent = parseFloat(tipInput.value) || 0;

            const tipAmount = bill * (tipPercent / 100);
            const totalAmount = bill + tipAmount;

            tipAmountDisplay.textContent = '$' + tipAmount.toFixed(2);
            totalAmountDisplay.textContent = '$' + totalAmount.toFixed(2);
        }

        billInput.addEventListener('input', calculateTip);
        tipInput.addEventListener('input', calculateTip);
    </script>
</body>
</html>