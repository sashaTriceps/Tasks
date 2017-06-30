const teamName = "tooling"
const people = [{name: "Jennie", role: "senior"},
                {name: "Ronald", role: "junior"},
                {name: "Martin", role: "senior"},
                {name: "Anneli", role: "junior"}]

let message = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`This is ${arr[i].name}, he is ${arr[i].role} of the ${teamName} team.`);
  }
}

message(people);