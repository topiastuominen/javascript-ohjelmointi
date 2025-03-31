// 05_osa_javascript
let teamMembers = ['Jukka', 'Emilia', 'Miikka', 'Saara'];

// harjoitus 1
teamMembers.forEach(member => {
  console.log(member);
});

// harjoitus 2
teamMembers.shift('Jukka');
console.log(teamMembers);

// harjoitus 3
teamMembers.pop();
console.log(teamMembers);

// harjoitus 4
teamMembers.unshift('Aleksi');
console.log(teamMembers);

// harjoitus 5
teamMembers.push('Linda');
console.log(teamMembers);

// harjoitus 6
let newTeamMembers = teamMembers.slice(2);
console.log(newTeamMembers);

// harjoitus 7
let miikkaIndex = teamMembers.indexOf('Miikka');
console.log(miikkaIndex);

// harjoitus 8
let jaakkoIndex = teamMembers.indexOf('Jaakko');
console.log(jaakkoIndex);

// harjoitus 9
teamMembers.splice(miikkaIndex, 1, 'Karoliina', 'Bettina');
console.log(teamMembers);

// harjoitus 10
teamMembers.push('Hemmo');
let updatedTeamMembers = [...teamMembers];
console.log(updatedTeamMembers);

// harjoitus 11
let copiedTeamMembers = teamMembers.slice();
console.log(copiedTeamMembers);

// harjoitus 12
let newMembers = ['Tiina', 'Daniel'];
let combinedTeamMembers = teamMembers.concat(newMembers);
console.log(combinedTeamMembers);

// harjoitus 13
let jukkaOccurrences = teamMembers.filter(member => member === 'Jukka');
console.log(jukkaOccurrences);

// harjoitus 14
let upperCaseTeamMembers = teamMembers.map(member => member.toUpperCase());
console.log(upperCaseTeamMembers);