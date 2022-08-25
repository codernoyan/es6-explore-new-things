// show the outputs:
/**
 * email
 * address
 * city
 * lat
 * company name
 */

const user = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
]

/**
 * email
 * address
 * city
 * lat
 * company name
 */

const { email, address, company } = user[0];

// email
console.log(email);
// address
const { street, city, geo } = address;
console.log(street, ',', city);
// lat
const { lat } = geo;
console.log(lat);

// company name
// const companyName = company.name;
const { name: companyName } = company;

console.log(companyName)