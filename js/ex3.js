// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
  ];

const input = document.getElementById('country');
const suggestionsContainer = document.getElementById('suggestions');

function showSuggestions(value) {
    suggestionsContainer.innerHTML = '';
    if (value) {
        const filteredCountries = countryList.filter(country => 
            country.toLowerCase().startsWith(value.toLowerCase())
        );

        filteredCountries.forEach(country => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = country;
            suggestionItem.className = 'suggestion';
            suggestionItem.onclick = () => selectCountry(country);
            suggestionsContainer.appendChild(suggestionItem);
        });
    }
}

function selectCountry(country) {
    input.value = country;
    suggestionsContainer.innerHTML = '';
}

input.addEventListener('input', () => {
    const inputValue = input.value;
    if (inputValue && inputValue.charAt(0).toLowerCase() === 'a') {
        showSuggestions(inputValue);
    } else {
        suggestionsContainer.innerHTML = '';
    }
});