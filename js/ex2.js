// Character list. Each house has a name and a code
const houses = [
  {
  code: "ST",
  name: "Stark"
  },
  {
  code: "LA",
  name: "Lannister"
  },
  {
  code: "BA",
  name: "Baratheon"
  },
  {
  code: "TA",
  name: "Targaryen"
  }
  ];

  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
  switch (houseCode) {
  case "ST":
  return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
  case "LA":
  return ["Tywin", "Cersei", "Jaime", "Tyrion"];
  case "BA":
  return ["Robert", "Stannis", "Renly"];
  case "TA":
  return ["Aerys", "Daenerys", "Viserys"];
  default:
  return []; // Empty array
  }
  };

  const populateHouseDropdown = () => {
    const houseSelect = document.getElementById('house');
    houses.forEach(house => {
        const option = document.createElement('option');
        option.value = house.code;
        option.textContent = house.name;
        houseSelect.appendChild(option);
    });
};

const displayCharacters = () => {
    const houseSelect = document.getElementById('house');
    const charactersList = document.getElementById('characters');
    charactersList.innerHTML = '';
    const selectedHouseCode = houseSelect.value;

    const characters = getCharacters(selectedHouseCode);
    characters.forEach(character => {
        const li = document.createElement('li');
        li.textContent = character;
        charactersList.appendChild(li);
    });
};

document.getElementById('house').addEventListener('change', displayCharacters);
window.onload = populateHouseDropdown;