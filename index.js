var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens = kittens.concat(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.splice(0, 0, name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens = kittens.slice(0, kittens.length-1);
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1);
  return kittens;
}

function appendKitten(name){
  kittens = [...kittens, name];
  return kittens
}