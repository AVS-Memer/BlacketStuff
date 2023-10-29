let totalBlooks = [];
for (let key in blacket.blooks) {
  totalBlooks.push(key);
}
let blook = prompt('Which blook do you want to find?');
while (!(totalBlooks.includes(blook))) {
  find = prompt('That is an inapplicable answer (all blooks other than User Blooks must be uppercase). Which blook do you want to find?');
}
let find = prompt('What do you want to find?');
while (find != 'Rarity' && find != 'rarity' && find != 'Chance' && find != 'chance') {
  find = prompt('That is an inapplicable answer. What do you want to find?');
}
if (find == 'Rarity' || find == 'rarity') {
  alert(blook + " is a " + blacket.blooks[blook].rarity);
} else if (find == 'Chance' || find == 'chance') {
  alert(blook + " is a " + blacket.blooks[blook].chance);
}
