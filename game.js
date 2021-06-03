var P1 = localStorage.getItem("player1")
var P2 = localStorage.getItem("player2")
console.log(P1)
var p1s = 0
var p2s = 0
document.getElementById("P1_name").innerHTML = P1 + " : "
document.getElementById("P2_name").innerHTML = P2 + " : "
document.getElementById("P1_score").innerHTML = p1s
document.getElementById("P2_score").innerHTML = p2s
document.getElementById("question").innerHTML = "Question turn : " + P1
document.getElementById("answer").innerHTML = "Answer turn : " + P2

function send() {
    var gw = document.getElementById("word").value
    lc = gw.toLowerCase()
    var m1 = lc.charAt(1)
    var m2 = lc.charAt(Math.floor(lc.length / 2))
    var m3 = lc.charAt(lc.length - 1)
    var rm1 = lc.replace(m1, "_")
    var rm2 = rm1.replace(m2, "_")
    var rm3 = rm2.replace(m3, "_")
    var q = "<h4 id='word_display'>1. " + rm3 + "</h4>"
    var a = "<br> <h4>Answer : </h4> <input id='ans'>"
    var b = "<br><br> <button class='btn btn-danger' onclick='check()'>Check</button>"
    var join = q + a + b
    document.getElementById("output").innerHTML = join
    document.getElementById("word").value = ""
}
var qt = "P1"
var at = "P2"

function check() {
    var ga = document.getElementById("ans").value
    var alc = ga.toLowerCase()
    if(lc == alc){
        if(at == "P1"){
            p1s++
            document.getElementById("P1_score").innerHTML = p1s
        }
        else{
            p2s++
            document.getElementById("P2_score").innerHTML = p2s
        }
    }
    
  if(qt == "P1"){
      qt = "P2"
      document.getElementById("question").innerHTML = "Question turn : " + P2
        }
        else{
            qt = "P1"
            document.getElementById("question").innerHTML = "Question turn : " + P1
        }    
    
    if(at == "P1"){
      at = "P2"
      document.getElementById("answer").innerHTML = "Answer turn : " + P2
        }
        else{
            at = "P1"
            document.getElementById("answer").innerHTML = "Answer turn : " + P1
        } 
    document.getElementById("output").innerHTML = ""
}
