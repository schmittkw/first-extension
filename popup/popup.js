// // Array of 12 objects with full details
// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     phoneNumber: "555-1234",
//     streetAddress: "123 Elm St",
//     zipCode: "12345",
//     city: "Springfield"
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     phoneNumber: "555-5678",
//     streetAddress: "456 Oak St",
//     zipCode: "23456",
//     city: "Rivertown"
//   },
//   {
//     firstName: "Emily",
//     lastName: "Johnson",
//     phoneNumber: "555-8765",
//     streetAddress: "789 Maple St",
//     zipCode: "34567",
//     city: "Lakeside"
//   },
//   {
//     firstName: "Michael",
//     lastName: "Brown",
//     phoneNumber: "555-4321",
//     streetAddress: "101 Pine St",
//     zipCode: "45678",
//     city: "Hill Valley"
//   },
//   {
//     firstName: "Sarah",
//     lastName: "Davis",
//     phoneNumber: "555-6789",
//     streetAddress: "202 Cedar St",
//     zipCode: "56789",
//     city: "Greenville"
//   },
//   {
//     firstName: "David",
//     lastName: "Miller",
//     phoneNumber: "555-9876",
//     streetAddress: "303 Birch St",
//     zipCode: "67890",
//     city: "River City"
//   },
//   {
//     firstName: "Jessica",
//     lastName: "Wilson",
//     phoneNumber: "555-5432",
//     streetAddress: "404 Walnut St",
//     zipCode: "78901",
//     city: "Clearwater"
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Moore",
//     phoneNumber: "555-2109",
//     streetAddress: "505 Cherry St",
//     zipCode: "89012",
//     city: "Silverton"
//   },
//   {
//     firstName: "Laura",
//     lastName: "Taylor",
//     phoneNumber: "555-8765",
//     streetAddress: "606 Aspen St",
//     zipCode: "90123",
//     city: "Summerville"
//   },
//   {
//     firstName: "James",
//     lastName: "Anderson",
//     phoneNumber: "555-6543",
//     streetAddress: "707 Beech St",
//     zipCode: "01234",
//     city: "Lakeview"
//   },
//   {
//     firstName: "Sophia",
//     lastName: "Thomas",
//     phoneNumber: "555-7654",
//     streetAddress: "808 Hickory St",
//     zipCode: "12345",
//     city: "Ridgewood"
//   },
//   {
//     firstName: "William",
//     lastName: "Jackson",
//     phoneNumber: "555-4321",
//     streetAddress: "909 Sycamore St",
//     zipCode: "23456",
//     city: "Meadowbrook"
//   }
// ];

// const printPeople = (ppl) => {
// // Mapping over the array to print first and last names along with additional details
// ppl.map(person => {
//     console.log(`${person.firstName} ${person.lastName}`);
//     console.log(`Phone: ${person.phoneNumber}`);
//     console.log(`Address: ${person.streetAddress}, ${person.city}, ${person.zipCode}`);
//     console.log('-------------------------');
// });
// console.log("This is a popup!!!")
// }

// printPeople(people);



document.addEventListener('DOMContentLoaded', () => {
  const peopleListContainer = document.getElementById('people-list');
  
  // Check if the element exists
  if (!peopleListContainer) {
    console.error("Element with id 'people-list' not found.");
    return; // Exit if the element is not found
  }

  // Array of 12 objects with full details
  const people = [
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "555-1234",
      streetAddress: "123 Elm St",
      zipCode: "12345",
      city: "Springfield"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "555-5678",
      streetAddress: "456 Oak St",
      zipCode: "23456",
      city: "Rivertown"
    },
    {
      firstName: "Emily",
      lastName: "Johnson",
      phoneNumber: "555-8765",
      streetAddress: "789 Maple St",
      zipCode: "34567",
      city: "Lakeside"
    },
    {
      firstName: "Michael",
      lastName: "Brown",
      phoneNumber: "555-4321",
      streetAddress: "101 Pine St",
      zipCode: "45678",
      city: "Hill Valley"
    },
    {
      firstName: "Sarah",
      lastName: "Davis",
      phoneNumber: "555-6789",
      streetAddress: "202 Cedar St",
      zipCode: "56789",
      city: "Greenville"
    },
    {
      firstName: "David",
      lastName: "Miller",
      phoneNumber: "555-9876",
      streetAddress: "303 Birch St",
      zipCode: "67890",
      city: "River City"
    },
    {
      firstName: "Jessica",
      lastName: "Wilson",
      phoneNumber: "555-5432",
      streetAddress: "404 Walnut St",
      zipCode: "78901",
      city: "Clearwater"
    },
    {
      firstName: "Daniel",
      lastName: "Moore",
      phoneNumber: "555-2109",
      streetAddress: "505 Cherry St",
      zipCode: "89012",
      city: "Silverton"
    },
    {
      firstName: "Laura",
      lastName: "Taylor",
      phoneNumber: "555-8765",
      streetAddress: "606 Aspen St",
      zipCode: "90123",
      city: "Summerville"
    },
    {
      firstName: "James",
      lastName: "Anderson",
      phoneNumber: "555-6543",
      streetAddress: "707 Beech St",
      zipCode: "01234",
      city: "Lakeview"
    },
    {
      firstName: "Sophia",
      lastName: "Thomas",
      phoneNumber: "555-7654",
      streetAddress: "808 Hickory St",
      zipCode: "12345",
      city: "Ridgewood"
    },
    {
      firstName: "William",
      lastName: "Jackson",
      phoneNumber: "555-4321",
      streetAddress: "909 Sycamore St",
      zipCode: "23456",
      city: "Meadowbrook"
    }
  ];

  // Your code for rendering people
  people.forEach(person => {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person');

    const nameElement = document.createElement('div');
    nameElement.classList.add('person-name');
    nameElement.textContent = `${person.firstName} ${person.lastName}`;
    personDiv.appendChild(nameElement);

    const detailsElement = document.createElement('div');
    detailsElement.textContent = `Phone: ${person.phoneNumber} | Address: ${person.streetAddress}, ${person.city}, ${person.zipCode}`;
    personDiv.appendChild(detailsElement);

    const separator = document.createElement('hr');
    personDiv.appendChild(separator);

    peopleListContainer.appendChild(personDiv);
  });
});