var figuren = [
  "apu_1",
  "barney_2",
  "bart_3",
  "charles_4",
  "glancy_5",
  "grandpa_7",
  "hibbert_6",
  "homer_8",
  "krusty_9",
  "marge_10",
];
var names = [
  "apu",
  "barney",
  "bart",
  "charles",
  "glancy",
  "grandpa",
  "hibbert",
  "homer",
  "krusty",
  "marge",
];

var ausgeblendet = false;

function changePics() {
  var Blider = document.querySelectorAll(
    "#rowone .place img, #rowtwo .place img",
  );
  var namen = [
    document.getElementById("name1"),
    document.getElementById("name2"),
    document.getElementById("name3"),
    document.getElementById("name4"),
    document.getElementById("name5"),
    document.getElementById("name6"),
    document.getElementById("name7"),
    document.getElementById("name8"),
    document.getElementById("name9"),
    document.getElementById("name10"),
  ];

  for (var i = 0; i < Blider.length; i++) {
    Blider[i].src = "bilder/" + figuren[i] + ".png";
    namen[i].innerText = names[i];
  }
  document.getElementById("rowone").style.backgroundColor = "orange";
  document.getElementById("rowtwo").style.backgroundColor = "blue";

  var allePlaces = document.querySelectorAll(".place");
  for (var p = 0; p < allePlaces.length; p++) {
    if (!allePlaces[p].id) {
      allePlaces[p].classList.add("gelb");
    }
  }

  for (var k = 0; k < Blider.length; k++) {
    Blider[k].onclick = function () {
      for (var x = 0; x < Blider.length; x++) {
        if (Blider[x] != this) {
          if (ausgeblendet) {
            Blider[x].style.visibility = "visible";
          } else {
            Blider[x].style.visibility = "hidden";
          }
        }
      }
      ausgeblendet = !ausgeblendet;
    };
  }
}
