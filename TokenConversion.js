let tokens = prompt("How many tokens?");
let conversion = prompt("What should the tokens be converted into?");
let conversions = ["dollars","Dollars","USD","1 Hour Boosters","1 hour booster","1hr Booster","1hr booster","3 Hour Boosters","3 hour booster","3hr Booster","3hr booster","Plus","plus"];
while (!conversions.includes(conversion)) {
  conversion = prompt("That is not an acceptable answer. What should the tokens be converted into?");
}
if (conversions.slice(0,3).includes(conversion)) {
  let dollars = Math.floor(tokens/100)/100;
  alert(tokens + " tokens is equivalant to " + dollars + " dollars.");
}
else if (conversions.slice(3,8).includes(conversion)) {
  let booster = Math.floor(tokens/50000);
  alert(tokens + " tokens is equivalant to buying " + booster + " 1 Hour Boosters.");
}
else if (conversions.slice(8,11).includes(conversion)) {
  let booster = Math.floor(tokens/100000);
  alert(tokens + " tokens is equivalant to buying " + booster + " 3 Hour Boosters.");
}
else if (conversions.slice(11,13).includes(conversion)) {
  let plus = Math.floor(tokens/100000);
  alert(tokens + " tokens is equivalant to buying Blacket Plus " + plus + "times.");
}
