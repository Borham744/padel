function search() {
    var input = document.getElementById("search-box");
    var filter = input.value.toUpperCase();
    var sections = document.getElementsByTagName("section");
  
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var text = section.textContent.toUpperCase();
  
      if (text.indexOf(filter) > -1) {
        section.style.display = "";
      } else {
        section.style.display = "none";
      }
    }
  }
  