let totalBlooks = [];
for (let key in blacket.blooks) {
  totalBlooks.push(key);
}
let blook = prompt('Which blook do you want to find?');
while (!(totalBlooks.includes(blook))) {
  blook = prompt('That is an inapplicable answer (all blooks other than Staff Blooks must be Uppercase). Which blook do you want to find?');
}
let find = prompt('What do you want to find?');
while (!["rarity", "chance"].includes(find.toLowerCase())) {
  find = prompt('That is an inapplicable answer. What do you want to find?');
}
if (find.toLowerCase() == 'rarity') {
  alert(blook + " is a " + blacket.blooks[blook].rarity);
} else if (find.toLowerCase() == 'chance') {
  alert(blook + " has a " + blacket.blooks[blook].chance) + "% chance.";
}
