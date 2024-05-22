document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchAns = document.getElementById("searchAns");
  const search = document.getElementById("search");
  const addNumberInput = document.getElementById("addNumberInput");
  const addStringInput = document.getElementById("addStringInput");
  const numberDisplay = document.getElementById("numberDisplay");
  const stringDisplay = document.getElementById("stringDisplay");
  const sortedNumberDisplay = document.getElementById("sortedNumberDisplay");
  const sortedStringDisplay = document.getElementById("sortedStringDisplay");

  let numbers = [];
  let strings = [];

  // Function to sort numbers
  function sortNumbers() {
    sortedNumberDisplay.value = numbers
      .slice()
      .sort((a, b) => a - b)
      .join(", ");
    console.log(numbers);
  }

  // Function to display numbers
  function displayNumbers() {
    numberDisplay.value = numbers.join(", ");
  }

  // Event listener for sorting numbers
  document
    .getElementById("sortNumbersBtn")
    .addEventListener("click", function () {
      sortNumbers();
    });

  // Event listener for adding numbers
  document
    .getElementById("addNumberBtn")
    .addEventListener("click", function () {
      const number = parseInt(addNumberInput.value);
      console.log("number added " + number);
      if (!isNaN(number)) {
        numbers.push(number);
        displayNumbers();
        addNumberInput.value = "";
      }
    });

  // Function to sort strings
  function sortStrings() {
    // Implement sorting logic for strings
    let temp = [...strings];
    sortedStringDisplay.value = temp.sort((a, b) => {
      // Sort alphabetically by default
      return a.localeCompare(b);
    });
    console.log(strings);
  }

  // Function to display strings
  function displayStrings() {
    // Implement displaying logic for strings
    stringDisplay.value = strings.join(", ");
  }

  // Event listener for sorting strings
  document
    .getElementById("sortStringsBtn")
    .addEventListener("click", function () {
      sortStrings();
    });

  // Event listener for adding strings
  document
    .getElementById("addStringBtn")
    .addEventListener("click", function () {
      // Implement adding logic for strings
      const string = addStringInput.value;
      console.log("string added " + string);
      strings.push(string);
      displayStrings();
      addStringInput.value = "";
    });

  // Event listener for search
  search.addEventListener("click", function () {
    const searchTerm = searchInput.value;
    const searchTerm2 = parseInt(searchTerm);

    if (!isNaN(searchTerm2)) {
      // Search in the number array
      const numIndex = numbers.indexOf(Number(searchTerm2));
      if (numIndex !== -1) {
        searchAns.value = "The number is at index : " + (numIndex + 1);
      } else {
        searchAns.value = "The number does not exist.";
      }
    } else {
      const sidx = strings.indexOf(searchTerm);

      if (sidx !== -1) {
        searchAns.value = "The string is at index : " + (sidx + 1);
      } else {
        searchAns.value = "The string does not exist.";
      }
    }
  });
});
