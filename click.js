window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectyellow"),
    stars = document.querySelector("#yellow"),
    numyellow = 0,
    imgyellow = document.createElement("img"),
    tempyellow;
    imgyellow.src = "img/s1.png";
    imgyellow.className="balls";
  
    section.addEventListener("click", function(event) {
      var id = event.target.id;
      if (id == "plusyellow") {
        numyellow += 1;
      }
      if (id == "minusyellow") {
        numyellow --;
      }
      if (numyellow < 0) {
        numyellow = 0;
      }
      stars.innerHTML = "";
      tempyellow = document.createDocumentFragment();
      for (var i = 0; i < numyellow; i++) {
        tempyellow.appendChild(imgyellow.cloneNode());
      }
      stars.appendChild(tempyellow);
    });
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectblue"),
    stars = document.querySelector("#blue"),
    tempblue;
    numblue = 0,
    imgblue = document.createElement("img"),
    imgblue.src = "img/s3.png";
    imgblue.className = "balls";
  
    section.addEventListener("click", function(event) {
        var id = event.target.id;
        if (id == "plusblue") {
          numblue += 1;
        }
        if (id == "minusblue") {
          numblue --;
        }
        if (numblue < 0) {
          numblue = 0;
        }
        stars.innerHTML = "";
        tempblue = document.createDocumentFragment();
        for (var i = 0; i < numblue; i++) {
          tempblue.appendChild(imgblue.cloneNode());
        }
        stars.appendChild(tempblue);
      });
  });
  
  window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectgrey"),
    stars = document.querySelector("#grey"),
    tempgrey;
    numgrey = 0,
    imggrey = document.createElement("img"),
    imggrey.src = "img/s4.png";
    imggrey.className = "balls";
  
    section.addEventListener("click", function(event) {
        var id = event.target.id;
        if (id == "plusgrey") {
          numgrey += 1;
        }
        if (id == "minusgrey") {
          numgrey --;
        }
        if (numgrey < 0) {
          numgrey = 0;
        }
        stars.innerHTML = "";
        tempgrey = document.createDocumentFragment();
        for (var i = 0; i < numgrey; i++) {
          tempgrey.appendChild(imggrey.cloneNode());
        }
        stars.appendChild(tempgrey);
      });
  });

  window.addEventListener("DOMContentLoaded", function() {
    var section = document.querySelector("#sectgreen"),
    stars = document.querySelector("#green"),
    tempgreen;
    numgreen = 0,
    imggreen = document.createElement("img"),
    imggreen.src = "img/s5.png";
    imggreen.className = "balls";
  
    section.addEventListener("click", function(event) {
        var id = event.target.id;
        if (id == "plusgreen") {
          numgreen += 1;
        }
        if (id == "minusgreen") {
          numgreen --;
        }
        if (numgreen < 0) {
          numgreen = 0;
        }
        stars.innerHTML = "";
        tempgreen = document.createDocumentFragment();
        for (var i = 0; i < numgreen; i++) {
          tempgreen.appendChild(imggreen.cloneNode());
        }
        stars.appendChild(tempgreen);
      });
  });
  

    