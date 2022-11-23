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
  if (age == "" || isNaN(cs) || hb == "" || isNaN(wbc) || blasts == "")
    return "Can't be calculated (MISSING VALUES)"

  if (age > 65)
    score += 1
  if (cs)
    score += 1
  if (hb < 10)
    score += 2
  if (wbc)
    score += 1
  if (blasts >= 1)
    score += 1

  if (score == 0)
    return "Low(0), median survival NR"
  else if (score == 1 || score == 2)
    return "Intermediate-1 (1-2), median survival 14.2 years"
  else if (score == 3 || score == 4)
    return "Intermediate-2 (3-4), median survival 4 years"
  else
    return "High (5-6), median survival 1.5 years"
}

function dipss_plus(age, cs, rbc, hb, wbc, plt, blasts, dip){
  var score = 0
  if (age == "" || isNaN(cs) || isNaN(rbc) || hb == "" || isNaN(wbc) || isNaN(plt) || blasts == "" || isNaN(dip))
    return "Can't be calculated (MISSING VALUES)"
    
  if (age > 65)
    score += 1
  if (cs)
    score += 1
  if (rbc)
    score += 1
  if (hb < 10)
    score += 1
  if (wbc)
    score += 1
  if (plt < 100)
    score += 1
  if (blasts >= 1)
    score += 1
  if (dip)
    score += 1

  if (score == 0)
    return "Low(0), median survival 15.4 years"
  else if (score == 1)
    return "Intermediate-1 (1), median survival 6.5 years"
  else if (score == 2 || score == 3)
    return "Intermediate-2 (2-3), median survival 2.9 years"
  else
    return "High (>=4), median survival 1.3 years"
}

function mipss70(cs, hb, wbc, plt, blasts, type1, hmr, hmr2, bmf){
  var score = 0
  if (isNaN(cs) || hb == "" || isNaN(wbc) || isNaN(plt) || blasts == "" || isNaN(type1) || isNaN(hmr) || isNaN(hmr2) || isNaN(bmf) || (hmr == true && hmr2 == true))
    return "Can't be calculated (MISSING VALUES)"
  
  if (cs)
    score += 1
  if (hb < 10)
    score += 2
  if (wbc)
    score += 2
  if (plt < 100)
    score += 2
  if (blasts >= 2)
    score += 1
  if (type1)
    score += 1
  if (hmr)
    score += 1
  if (hmr2)
    score += 2
  if (bmf)
    score += 1
  
  if (score == 0 || score == 1)
    return "Low (0-1), median survival NR"
  if (score >= 2 && score <= 4)
    return "Intermediate (2-4), median survival 6.3 years"
  else 
    return "High (≥5), median survival 3.1 years"

}

function mipss70_plus(cs, hb, female, male, blasts, type1, hmru2, hmr2u2, unmip, vmip){
  var score = 0
  if (isNaN(cs) || hb == "" || (female == false && male == false) || blasts == "" || isNaN(type1) || isNaN(hmr2u2) || isNaN(hmru2) || (hmru2 == true && hmr2u2 == true) || (unmip == true  && vmip == true) || isNaN(unmip) || isNaN(vmip))
    return "Can't be calculated (MISSING VALUES)"
  
  if (cs)
    score += 2
  if ((hb < 8 && female) || (hb <9 && male))
    score += 2
  if ((hb>= 8 && hb <= 9.9 && female) || (hb >= 9 && hb <= 10.9 && male))
    score += 1
  if (blasts >= 2)
    score += 1
  if (type1)
    score += 2
  if (hmru2)
    score += 2
  if (hmr2u2)
    score += 3
  if (unmip)
    score += 3
  if (vmip)
    score += 4

  console.log(score)

  if (score == 0)
    return "Very low (0), median survival NR"
  else if (score == 1 || score == 2)
    return "Low (1-2), median survival 16.4 years"
  else if (score == 3 || score == 4)
    return "Intermediate (3-4), median survival 7.7 years"
  else if (score >= 5 && score <= 8)
    return "High (5-8), median survival 4.1 years"
  else
    return "Very high (≥9), median survival 1.8 years"
}

function mtss(age, knf, mmud, wbc, plt, calr, as_){
  var score = 0
  if (age == "" || isNaN(knf) || isNaN(mmud) || isNaN(wbc) || plt == "" || isNaN(calr) || isNaN(as_))
    return "Can't be calculated (MISSING VALUES)"

  if (age >= 57)
    score += 1
  if (knf)
    score += 1
  if (mmud)
    score += 2
  if (wbc)
    score += 1
  if (plt < 150)
    score += 1
  if (calr)
    score += 2
  if (as_)
    score += 1
  
  if (score >= 0 && score <= 2)
    return "Low (0-2), 5-year survival 90%"
  else if (score == 3 && score == 4)
    return "Intermediate (3-4), 5-year survival 77%"
  else if (score == 5)
    return "High (5), 5-year survival 50%"
  else if (score >= 6 && score <= 9)
    return "Very high (6-9), 5-year survival 34%"
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

  document.getElementById("dipss").innerHTML = dipss(age, cs, hb, wbc, blasts);
  document.getElementById("dipss-plus").innerHTML = dipss_plus(age, cs, rbc, hb, wbc, plt, blasts, dip);
  document.getElementById("mips").innerHTML = mipss70(cs, hb, wbc, plt, blasts, type1, hmr, hmr2, bmf);
  document.getElementById("mips-plus").innerHTML = mipss70_plus(cs, hb, female, male, blasts, type1, hmru2, hmr2u2, unmip, vmip);
  document.getElementById("mtss").innerHTML = mtss(age, knf, mmud, wbc, plt, calr, as_);
}