let rarity = prompt("Which rarity do you want to find? (Uncommon, Rare, ..., Mystical)");
let count = 0;
let total = 0;
for (let i of blacket.blooks) {
  if (i.rarity == rarity) {
    if (blacket.user.blooks.includes(i)) {
      count++;
    }
    total++;
  }
}
alert("You have " + count + " / " total + " " + rarity + "s.");
