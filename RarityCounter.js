let rarity = prompt("Which rarity do you want to find? (Uncommon, Rare, ..., Mystical)");
let count = 0;
let total = 0;
let totalBlooks = [];
for (let key in blacket.blooks) {
  totalBlooks.push(key);
}
let userBlooks = [];
for (let key in blacket.user.blooks) {
  userBlooks.push(key);
}
for (let i of totalBlooks) {
  if (blacket.blooks[i].rarity == rarity) {
    if (userBlooks.includes(i)) {
      count++;
    }
    total++;
  }
}
alert("You have " + count + " / " + total + " " + rarity + "s.");
