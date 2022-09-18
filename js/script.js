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
    return "Low(0), median OS NR"
  else if (score == 1 || score == 2)
    return "Intermediate-1 (1-2), median OS 14.2 y"
  else if (score == 3 || score == 4)
    return "Intermediate-2 (3-4), median OS 4 y"
  else
    return "High (5-6), median OS 1.5 y"
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
    return "Low(0), median OS 15.4 y"
  else if (score == 1)
    return "Intermediate-1 (1), median OS 6.5 y"
  else if (score == 2 || score == 3)
    return "Intermediate-2 (2-3), median OS 2.9 y"
  else
    return "High (>=4), median OS 1.3 y"
}

function mipss70(cs, hb, wbc, plt, blasts, type1, hmr, hmr2, bmf){
  var score = 0
  if (isNaN(cs) || hb == "" || isNaN(wbc) || isNaN(plt) || blasts == "" || isNaN(type1) || isNaN(hmr) || isNaN(hmr2) || isNaN(bmf))
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
    return "Low (0-1), median OS NR"
  if (score >= 2 && score <= 4)
    return "Intermediate (2-4), median OS 6.3 y"
  else 
    return "High (≥5), median OS 3.1 y"

}

function mipss70_plus(cs, hb, female, male, blasts, type1, hmr, hmr2, u2, unmip, vmip){
  var score = 0
  if (isNaN(cs) || hb == "" || (female == false && male == false) || blasts == "" || isNaN(type1) || isNaN(hmr) || isNaN(hmr2) || isNaN(u2) || isNaN(unmip) || isNaN(vmip))
    return "Can't be calculated (MISSING VALUES)"

  if (cs)
    score += 2
  if ((hb < 8 && female) || (hb <9 && male))
    score += 2
  if ((hb>= 8 && hb <= 9.9 && female) || (hb >= 9 && hb <= 10.9 && male))
    score =+ 1
  if (blasts >= 2)
    score =+ 1
  if (type1)
    score =+ 2
  if (hmr && u2)
    score =+ 2
  if (hmr2 && u2)
    score =+ 3
  if (unmip)
    score =+ 3
  if (vmip)
    score =+ 4

  if (score == 0)
    return "Very low (0), median OS NR"
  else if (score == 1 || score == 2)
    return "Low (1-2), median OS 16.4 y"
  else if (score == 3 || score == 4)
    return "Intermediate (3-4), median OS 7.7 y"
  else if (score >= 5 && score <= 8)
    return "High (5-8), median OS 4.1 y"
  else
    return "Very high (≥9), median OS 1.8 y"
}

function mtss(age, knf, mmud, wbc, plt, calr, as_){
  var score = 0
  if (age == "" || isNaN(knf) || isNaN(mmud) || isNaN(wbc) || plt == "" || isNaN(calr) || isNaN(as_))
    return "Can't be calculated (MISSING VALUES)"

  if (age >= 57)
    score += 1
  if (knf)
    score =+ 1
  if (mmud)
    score =+ 2
  if (wbc)
    score =+ 1
  if (plt < 150)
    score =+ 1
  if (calr)
    score =+ 2
  if (as_)
    score =+ 1
  
  if (score >= 0 && score <= 2)
    return "Low (0-2), 5-year OS 90%"
  else if (score == 3 && score == 4)
    return "Intermediate (3-4), 5-year OS 77%"
  else if (score == 5)
    return "High (5), 5-year OS 50%"
  else if (score >= 6 && score <= 9)
    return "Very high (6-9), 5-year OS 34%"
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
  u2 = getRadioButtonStatus("u2")
  as_ = getRadioButtonStatus("as")
  dip = getRadioButtonStatus("dip")
  unmip = getRadioButtonStatus("unmip")
  vmip = getRadioButtonStatus("vmip")
  bmf = getRadioButtonStatus("bmf")

  console.log("age:", age, "hb:", hb, "blasts:", blasts, "plt:", plt, "male:", male, 
   "female:", female, "cs:", cs, "rbc:", rbc, "knf:", knf, "mmud:", mmud, "wbc:", wbc, 
   "type1:", type1, "calr:", calr, "hmr:", hmr, "hmr2:", hmr2, "u2:", u2, 
   "as_:", as_, "dip:", dip, "unmip:", unmip, "vmip:", vmip, "bmf:", bmf)

  document.getElementById("dipss").innerHTML = dipss(age, cs, hb, wbc, blasts);
  document.getElementById("dipss-plus").innerHTML = dipss_plus(age, cs, rbc, hb, wbc, plt, blasts, dip);
  document.getElementById("mips").innerHTML = mipss70(cs, hb, wbc, plt, blasts, type1, hmr, hmr2, bmf);
  document.getElementById("mips-plus").innerHTML = mipss70_plus(cs, hb, female, male, blasts, type1, hmr, hmr2, u2, unmip, vmip);
  document.getElementById("mtss").innerHTML = mtss(age, knf, mmud, wbc, plt, calr, as_);
}