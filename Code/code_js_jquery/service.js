var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var accordion_buttons = document.querySelectorAll(".accordion.active");
    var accordion_panels = document.querySelectorAll(
      ".panel.accordion-visible"
    );

    for (let i = 0; i < accordion_buttons.length; i++) {
      accordion_buttons[i].classList.remove("active");
    }
    for (let i = 0; i < accordion_panels.length; i++) {
      accordion_panels[i].classList.remove("accordion-visible");
    }

    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.classList.contains("accordion-visible")) {
      panel.classList.remove("accordion-visible");
    } else {
      panel.classList.add("accordion-visible");
    }
  });
}

function openTab(evt, tabId) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
}
