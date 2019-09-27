// Get references to tbody elements, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $searchBtn = document.querySelector("#search");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

// Adding eventlistener to searchButton to allow customization of user
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set initial dataset to variable filtTable
var filtTable = dataSet;

// rendTable renders the filtTable to the tbody
function rendTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filtTable.length; i++) {
    // Get get the current address object and its fields
    var address = filtTable[i];
    console.log(address)
    var fields = Object.keys(address);
    // insert in a new row and increase index with i + 
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell
      // at set its inner text to be the current value at the 
      // current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format user's search by removing any whitespace, and lowercase string
  var filterDate = $dateInput.value;
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set filterAddresses to array of addresses whose "state"
  // matches the filter
  if (filterDate != "") {
    filtTable = dataSet.filter(function(address) 
    { var addressDate = address.datetime; 
      return addressDate === filterDate;
    });
  }
  else {filtTable};
  
  if(filterState != "") {
    filtTable = filtTable.filter(function(address)
    { var addressState = address.state;
      return addressState === filterState;
    });
  }
  else{filtTable};

  if(filterCity != "") {
    filtTable = filtTable.filter(function(address)
    { var addressCity = address.city;
      return addressCity === filterCity;
    });
  }
  else{filtTable};

  if(filterCountry != "") {
    filtTable = filtTable.filter(function(address)
    { var addressCountry = address.country;
      return addressCountry === filterCountry;
    });
  }
  else{filtTable};

  if(filterShape != "") {
    filtTable = filtTable.filter(function(address)
    { var addressShape = address.shape;
      return addressShape === filterShape;
    });
  }
  else{filtTable};

rendTable();
}

// Render the table when page initially load
rendTable();
s
$(document).ready(function() {
  $('#table').DataTable();
});