function getRadioButtonStatus(name){
  if (document.getElementById(name + "-yes").checked)
    return true
  else if (document.getElementById(name + "-no").checked)
    return false
  else
    return NaN
}

function computeScores() {
  /* Numeric */
  age = document.getElementById("age").value
  hb = document.getElementById("hb").value
  blasts = document.getElementById("blasts").value
  plt = document.getElementById("plt").value

  male = document.getElementById("gender-male").checked
  female = document.getElementById("gender-female").checked
  
  /* Binary */
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

  document.getElementById("score1").innerHTML = "Score 1";
  document.getElementById("score2").innerHTML = "Score 2";
  document.getElementById("score3").innerHTML = "Score 3";
  document.getElementById("score4").innerHTML = "Score 4";
  document.getElementById("score5").innerHTML = "Score 5"
}