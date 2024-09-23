let tokens = prompt("How many tokens?");
let conversion = prompt("What should the tokens be converted into?");
let conversions = ["dollars","usd","1 hour boosters","1 hour booster","1hr booster","1hr boosters","3 hour boosters","3 hour booster","3hr booster","3hr booster","Plus","plus"];
while (!conversions.includes(conversion.toLowerCase())) {
  conversion = prompt("That is not an acceptable answer. What should the tokens be converted into?");
}
if (conversions.slice(0,2).includes(conversion.toLowerCase())) {
  let dollars = Math.floor(tokens/100)/100;
  alert(tokens + " tokens is equivalant to " + dollars + " dollars.");
} else if (conversions.slice(2,6).includes(conversion.toLowerCase())) {
  let booster = Math.floor(tokens/50000);
  alert(tokens + " tokens is equivalant to buying " + booster + " 1 Hour Boosters.");
} else if (conversions.slice(6,10).includes(conversion.toLowerCase())) {
  let booster = Math.floor(tokens/100000);
  alert(tokens + " tokens is equivalant to buying " + booster + " 3 Hour Boosters.");
} else if (conversions.slice(10).includes(conversion.toLowerCase())) {
  let plus = Math.floor(tokens/100000);
  alert(tokens + " tokens is equivalant to buying Blacket Plus " + plus + "times.");
}
