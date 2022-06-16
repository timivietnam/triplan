var appName = "Triplan";
var storeUrl = "https://1.envato.market/v6BDd";
var date = "2021-07-29";

function onIndexLoad() {
  document.title = appName;
  //document.getElementById("storeUrl").href = storeUrl;
}

function onPolicyLoad() {
  document.title = appName + " " + "Privacy Policy";
  getData();
}

function onTermLoad() {
  document.title = appName + " " + "Terms and Conditions";
  getData();
}

function getData() {
  document.getElementById("appName").innerHTML = appName;
  document.getElementById("date").innerHTML = date;
}
