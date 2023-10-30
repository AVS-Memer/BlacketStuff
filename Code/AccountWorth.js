let obtained = 0;
let blooks = [];
for (let key in blacket.user.blooks) {
  blooks.push(key);
}
for (let i of blooks) {
  obtained += blacket.blooks[i].price*blacket.user.blooks[i];
}
let total = obtained + blacket.user.tokens;
alert("Selling all of your blooks will result in obtaining " + obtained + " tokens, resulting in a total of " + total);
