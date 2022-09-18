function returnRadioButtonValue(name) {
  var ele = document.getElementsByName(name);
    
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
        return ele[i].name;
  }
}

function computeScores() {
  document.getElementById("score1").innerHTML = "Score 1";
  document.getElementById("score2").innerHTML = "Score 2";
  document.getElementById("score3").innerHTML = "Score 3";
  document.getElementById("score4").innerHTML = "Score 4";
  document.getElementById("score5").innerHTML = returnRadioButtonValue("mmud")
}