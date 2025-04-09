function isNumber(n){
  return n != ""
}

function isBool(n){
  return typeof n === 'boolean'
}

function getRadioButtonStatus(name){
  if (document.getElementById(name + "-yes").checked)
    return true
  else if (document.getElementById(name + "-no").checked)
    return false
  else
    return NaN
}

function dipss(age, cs, hb, wbc, blasts){
  var score = 0
  var missing_values = (age == "" || isNaN(cs) || hb == "" || isNaN(wbc) || blasts == "")

  if (isNumber(age) && age > 65)
    score += 1
  if (isBool(cs) && cs)
    score += 1
  if (isNumber(hb) && hb < 10)
    score += 2
  if (isBool(wbc) && wbc)
    score += 1
  if (isNumber(blasts) && blasts >= 1)
    score += 1

  console.log(score)
  if (score == 0 && !missing_values)
    return "Low(0), median survival NR"
  else if ((score == 1 || score == 2) && !missing_values)
    return "Intermediate-1 (1-2), median survival 14.2 years"
  else if ((score == 3 || score == 4) && !missing_values)
    return "Intermediate-2 (3-4), median survival 4 years"
  else if (score > 4 && !missing_values)
    return "High (5-6), median survival 1.5 years"
  else if (score > 4 && missing_values)
    return "Warning: can't be calculated for missing values but with available data risk category is: High (5-6), median survival 1.5 years"
  else
    return "Can't be calculated (MISSING VALUES)"
}

function dipss_plus(age, cs, rbc, hb, wbc, plt, blasts, dip){
  var score = 0
  var missing_values = (age == "" || isNaN(cs) || isNaN(rbc) || hb == "" || isNaN(wbc) || isNaN(plt) || blasts == "" || isNaN(dip))

  if (isNumber(age) && age > 65)
    score += 1
  if (isBool(cs) && cs)
    score += 1
  if (isBool(rbc) && rbc)
    score += 1
  if (isNumber(hb) && hb < 10)
    score += 1
  if (isBool(wbc) && wbc)
    score += 1
  if (isNumber(plt) && plt < 100)
    score += 1
  if (isNumber(blasts) && blasts >= 1)
    score += 1
  if (isBool(dip) && dip)
    score += 1

  if (score == 0 && !missing_values)
    return "Low(0), median survival 15.4 years"
  else if (score == 1 && !missing_values)
    return "Intermediate-1 (1), median survival 6.5 years"
  else if ((score == 2 || score == 3) && !missing_values)
    return "Intermediate-2 (2-3), median survival 2.9 years"
  else if (score > 3 && !missing_values)
    return "High (>=4), median survival 1.3 years" 
  else if (score > 3 && missing_values)
    return "Warning: can't be calculated for missing values but with available data risk category is: High (>=4), median survival 1.3 years"
  else
    return "Can't be calculated (MISSING VALUES)"
}

function mipss70(cs, hb, wbc, plt, blasts, type1, hmr, hmr2, bmf){
  var score = 0
  var missing_values = (isNaN(cs) || hb == "" || isNaN(wbc) || isNaN(plt) || blasts == "" || isNaN(type1) || isNaN(hmr) || isNaN(hmr2) || isNaN(bmf) || (hmr == true && hmr2 == true))
  
  if (isBool(cs) && cs)
    score += 1
  if (isNumber(hb) && hb < 10)
    score += 2
  if (isBool(wbc) && wbc)
    score += 2
  if (isNumber(plt) && plt < 100)
    score += 2
  if (isNumber(blasts) && blasts >= 2)
    score += 1
  if (isBool(type1) && type1)
    score += 1
  if (isBool(hmr) && hmr)
    score += 1
  if (isBool(hmr2) && hmr2)
    score += 2
  if (isBool(bmf) && bmf)
    score += 1
  
  if ((score == 0 || score == 1) && !missing_values)
    return "Low (0-1), median survival NR"
  else if ((score >= 2 && score <= 4) && !missing_values)
    return "Intermediate (2-4), median survival 6.3 years"
  else if (score > 4 && !missing_values)
    return "High (≥5), median survival 3.1 years"
  else if (score > 4 && missing_values)
    return "Warning: can't be calculated for missing values but with available data risk category is: High (≥5), median survival 3.1 years"
  else
    return "Can't be calculated (MISSING VALUES)"
}

function mipss70_plus(cs, hb, female, male, blasts, type1, hmru2, hmr2u2, unmip, vmip){
  var score = 0
  var missing_values = (isNaN(cs) || hb == "" || (female == false && male == false) || blasts == "" || isNaN(type1) || isNaN(hmr2u2) || isNaN(hmru2) || (hmru2 == true && hmr2u2 == true) || (unmip == true  && vmip == true) || isNaN(unmip) || isNaN(vmip))
  
  if (isBool(cs) && cs)
    score += 2
  if (isNumber(hb) && ((hb < 8 && isBool(female) && female) || (hb <9 && isBool(male) && male)))
    score += 2
  if (isNumber(hb) && ((hb>= 8 && hb <= 9.9 && isBool(female) && female) || (hb >= 9 && hb <= 10.9 && isBool(male) && male)))
    score += 1
  if (isNumber(blasts) && blasts >= 2)
    score += 1
  if (isBool(type1) && type1)
    score += 2
  if (isBool(hmru2) && hmru2)
    score += 2
  if (isBool(hmr2u2) && hmr2u2)
    score += 3
  if (isBool(unmip) && unmip)
    score += 3
  if (isBool(vmip) && vmip)
    score += 4

  if (score == 0 && !missing_values)
    return "Very low (0), median survival NR"
  else if ((score == 1 || score == 2) && !missing_values)
    return "Low (1-2), median survival 16.4 years"
  else if ((score == 3 || score == 4) && !missing_values)
    return "Intermediate (3-4), median survival 7.7 years"
  else if ((score >= 5 && score <= 8) && !missing_values)
    return "High (5-8), median survival 4.1 years"
  else if (score > 8 && !missing_values)
    return "Very high (≥9), median survival 1.8 years"
  else if (score > 8 && missing_values)
    return "Warning: can't be calculated for missing values but with available data risk category is: Very high (≥9), median survival 1.8 years"
  else
    return "Can't be calculated (MISSING VALUES)"
}

function mtss(age, knf, mmud, wbc, plt, calr, as_){
  var score = 0
  var missing_values = (age == "" || isNaN(knf) || isNaN(mmud) || isNaN(wbc) || plt == "" || isNaN(calr) || isNaN(as_))

  if (isNumber(age) && age >= 57)
    score += 1
  if (isBool(knf) && knf)
    score += 1
  if (isBool(mmud) && mmud)
    score += 2
  if (isBool(wbc) && wbc)
    score += 1
  if (isNumber(plt) && plt < 150)
    score += 1
  if (isBool(calr) && calr)
    score += 2
  if (isBool(as_) && as_)
    score += 1
  
  if ((score >= 0 && score <= 2) && !missing_values)
    return "Low (0-2), 5-year survival 90%"
  else if ((score == 3 || score == 4) && !missing_values)
    return "Intermediate (3-4), 5-year survival 77%"
  else if (score == 5 && !missing_values)
    return "High (5), 5-year survival 50%"
  else if ((score >= 6 && score <= 9) && !missing_values)
    return "Very high (6-9), 5-year survival 34%"
  else if ((score >= 6 && score <= 9) && missing_values)
    return "Warning: can't be calculated for missing values but with available data risk category is: Very high (6-9), 5-year survival 34%"
  else
    return "Can't be calculated (MISSING VALUES)"
}

function computeScores() {
  /* Text Fields */
  age = document.getElementById("age").value
  hb = document.getElementById("hb").value
  blasts = document.getElementById("blasts").value
  plt = document.getElementById("plt").value
  
  /* Radio Buttons */
  male = document.getElementById("gender-male").checked
  female = document.getElementById("gender-female").checked
  cs = getRadioButtonStatus("cs")
  rbc = getRadioButtonStatus("rbc")
  knf = getRadioButtonStatus("knf")
  mmud = getRadioButtonStatus("mmud")
  wbc = getRadioButtonStatus("wbc")
  type1 = getRadioButtonStatus("type1")
  calr = getRadioButtonStatus("calr")
  hmr = getRadioButtonStatus("hmr")
  hmr2 = getRadioButtonStatus("hmr2")
  hmru2 = getRadioButtonStatus("hmru2")
  hmr2u2 = getRadioButtonStatus("hmr2u2")
  as_ = getRadioButtonStatus("as")
  dip = getRadioButtonStatus("dip")
  unmip = getRadioButtonStatus("unmip")
  vmip = getRadioButtonStatus("vmip")
  bmf = getRadioButtonStatus("bmf")

  // Show the results section
  document.getElementById("results-form").style.display = "block";
  
  // Scroll to the results section
  document.getElementById("results-form").scrollIntoView({ behavior: "smooth", block: "start" });

  document.getElementById("dipss").innerHTML = dipss(age, cs, hb, wbc, blasts);
  document.getElementById("dipss-plus").innerHTML = dipss_plus(age, cs, rbc, hb, wbc, plt, blasts, dip);
  document.getElementById("mips").innerHTML = mipss70(cs, hb, wbc, plt, blasts, type1, hmr, hmr2, bmf);
  document.getElementById("mips-plus").innerHTML = mipss70_plus(cs, hb, female, male, blasts, type1, hmru2, hmr2u2, unmip, vmip);
  document.getElementById("mtss").innerHTML = mtss(age, knf, mmud, wbc, plt, calr, as_);
  
  // Disable the Calculate Scores button
  const calculateButton = document.querySelector('.button-container button');
  calculateButton.disabled = true;
  calculateButton.style.opacity = '0.5';
  calculateButton.style.cursor = 'not-allowed';
}

// Function to re-enable the Calculate Scores button
function enableCalculateButton() {
  const calculateButton = document.querySelector('.button-container button');
  calculateButton.disabled = false;
  calculateButton.style.opacity = '1';
  calculateButton.style.cursor = 'pointer';
}

// Add event listeners to all form inputs when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to all number inputs
  const numberInputs = document.querySelectorAll('input[type="number"]');
  numberInputs.forEach(input => {
    input.addEventListener('input', enableCalculateButton);
  });
  
  // Add event listeners to all radio buttons
  const radioGroups = document.querySelectorAll('.radio-group');
  radioGroups.forEach(group => {
    const radioButtons = group.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      radio.addEventListener('change', enableCalculateButton);
    });
  });
});

function exportToPDF() {
    try {
        // Create a new window for printing
        const printWindow = window.open('', '_blank');
        
        // Get current date
        const currentDate = new Date().toLocaleDateString();
        
        // Get all input values
        const inputs = {
            "Age (y)": document.getElementById("age").value || "N/A",
            "Gender": document.getElementById("gender-male").checked ? "Male" : 
                     document.getElementById("gender-female").checked ? "Female" : "N/A",
            "Constitutional Symptoms": getRadioButtonStatus("cs") === true ? "Yes" : 
                                     getRadioButtonStatus("cs") === false ? "No" : "N/A",
            "RBC transfusions need": getRadioButtonStatus("rbc") === true ? "Yes" : 
                                   getRadioButtonStatus("rbc") === false ? "No" : "N/A",
            "Karnofsky <90%": getRadioButtonStatus("knf") === true ? "Yes" : 
                             getRadioButtonStatus("knf") === false ? "No" : "N/A",
            "HLA-mismatched unrelated donor": getRadioButtonStatus("mmud") === true ? "Yes" : 
                                            getRadioButtonStatus("mmud") === false ? "No" : "N/A",
            "Hb (g/dl)": document.getElementById("hb").value || "N/A",
            "WBC > 25x10⁹/l": getRadioButtonStatus("wbc") === true ? "Yes" : 
                             getRadioButtonStatus("wbc") === false ? "No" : "N/A",
            "Blasts (%)": document.getElementById("blasts").value || "N/A",
            "PLT (x10⁹/l)": document.getElementById("plt").value || "N/A",
            "Absence of type 1/type 1 like CALR mutation": getRadioButtonStatus("type1") === true ? "Yes" : 
                                                         getRadioButtonStatus("type1") === false ? "No" : "N/A",
            "Non-CALR/MPL driver mutation genotype": getRadioButtonStatus("calr") === true ? "Yes" : 
                                                   getRadioButtonStatus("calr") === false ? "No" : "N/A",
            "HMR mutation": getRadioButtonStatus("hmr") === true ? "Yes" : 
                          getRadioButtonStatus("hmr") === false ? "No" : "N/A",
            "HMR2 mutation": getRadioButtonStatus("hmr2") === true ? "Yes" : 
                           getRadioButtonStatus("hmr2") === false ? "No" : "N/A",
            "HMR-U2 mutation": getRadioButtonStatus("hmru2") === true ? "Yes" : 
                             getRadioButtonStatus("hmru2") === false ? "No" : "N/A",
            "HMR2-U2 mutation": getRadioButtonStatus("hmr2u2") === true ? "Yes" : 
                              getRadioButtonStatus("hmr2u2") === false ? "No" : "N/A",
            "ASXL1/SRSF2/EZH2/IDH1/2 mutation": getRadioButtonStatus("as") === true ? "Yes" : 
                                               getRadioButtonStatus("as") === false ? "No" : "N/A",
            "Unfavourable by DIPSS plus": getRadioButtonStatus("dip") === true ? "Yes" : 
                                        getRadioButtonStatus("dip") === false ? "No" : "N/A",
            "Unfavourable by MIPSS70 plus v. 2.0": getRadioButtonStatus("unmip") === true ? "Yes" : 
                                                 getRadioButtonStatus("unmip") === false ? "No" : "N/A",
            "V-High risk by MIPSS70 plus v. 2.0": getRadioButtonStatus("vmip") === true ? "Yes" : 
                                                getRadioButtonStatus("vmip") === false ? "No" : "N/A",
            "BMF grade ≥ 2": getRadioButtonStatus("bmf") === true ? "Yes" : 
                           getRadioButtonStatus("bmf") === false ? "No" : "N/A"
        };

        // Get results
        const results = {
            "DIPSS": document.getElementById("dipss").textContent,
            "DIPSS-Plus": document.getElementById("dipss-plus").textContent,
            "MIPSS70": document.getElementById("mips").textContent,
            "MIPSS70 plus version 2.0": document.getElementById("mips-plus").textContent,
            "MTSS": document.getElementById("mtss").textContent
        };

        // Create HTML content for the print window
        let htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>PMF Scores Calculator Results</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    color: #333;
                }
                h1 {
                    color: #2563eb;
                    text-align: center;
                    margin-bottom: 5px;
                }
                .date {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #666;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                th {
                    background-color: #2563eb;
                    color: white;
                }
                tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
                .footer {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 12px;
                    color: #666;
                }
                @media print {
                    body {
                        margin: 0;
                        padding: 20px;
                    }
                    .no-print {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <h1>PMF Scores Calculator Results</h1>
            <div class="date">Generated on: ${currentDate}</div>
            
            <h2>Clinical Features</h2>
            <table>
                <tr>
                    <th>Feature</th>
                    <th>Value</th>
                </tr>
        `;

        // Add input values to the table
        for (const [key, value] of Object.entries(inputs)) {
            htmlContent += `
                <tr>
                    <td>${key}</td>
                    <td>${value}</td>
                </tr>
            `;
        }

        htmlContent += `
            </table>
            
            <h2>Results</h2>
            <table>
                <tr>
                    <th>Score</th>
                    <th>Result</th>
                </tr>
        `;

        // Add results to the table
        for (const [key, value] of Object.entries(results)) {
            htmlContent += `
                <tr>
                    <td>${key}</td>
                    <td>${value}</td>
                </tr>
            `;
        }

        htmlContent += `
            </table>
            
            <div class="footer">
                PMF Scores Calculator - Generated on ${currentDate}
            </div>
            
            <div class="no-print" style="text-align: center; margin-top: 20px;">
                <button onclick="window.print()">Print Results</button>
            </div>
        </body>
        </html>
        `;

        // Write the HTML content to the new window
        printWindow.document.open();
        printWindow.document.write(htmlContent);
        printWindow.document.close();
        
        // Focus the new window
        printWindow.focus();
        
    } catch (error) {
        console.error('Error generating report:', error);
        alert('There was an error generating the report. Please try again.');
    }
}