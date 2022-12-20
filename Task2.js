const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`;
const data = JSON.parse(jsonString);
const list = data.list;
const firstListItem = list[0];
const secondListItem = list[1];

const result = {
  list: [
    {
      name: firstListItem.name,
      age: firstListItem.age,
      prof: firstListItem.prof,
    },
    {
      name: secondListItem.name,
      age: secondListItem.age,
      prof: secondListItem.prof,
    },
  ],
};
console.log("result", result);
