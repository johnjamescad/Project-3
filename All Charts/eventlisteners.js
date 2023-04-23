function openChart(evt, chartName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="chart" and hide them
  tabcontent = document.getElementsByClassName("chart");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(chartName).style.display = "block";
  evt.currentTarget.className += " active";
}

d3.select(".tab > button:first-child").dispatch('click');
