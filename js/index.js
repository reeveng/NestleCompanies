import companies from '../json/companies.js';

function addCompaniesToListWithId(list, parentId) {
  let companiesDiv = document.getElementById(parentId);
  companiesDiv.innerHTML = "";

  list.sort((a, b) => {
    return a.name - b.name
  });

  list.forEach(elem => {
    let childLi = document.createElement("li");
    childLi.appendChild(document.createTextNode(elem.name));
    companiesDiv.appendChild(childLi);
  });
}

function companyName() {
  let companyName = document.getElementById("companyName").value;
  if (companyName.trim() == null) {
    initCompanies();
  }

  companyName = companyName.toLowerCase().trim();
  let filteredList = companies.filter(elem => elem.name.toLowerCase().includes(companyName))

  addCompaniesToListWithId(filteredList, "companies");
}

let timer = 0;
let delay = function () {
  timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  }
}();

function initCompanies() {
  addCompaniesToListWithId(companies, "companies");
}

window.onload = function () {
  document.getElementById('companyName').onkeyup = function () {
    delay(companyName(), 2000);
  };

  initCompanies();
};