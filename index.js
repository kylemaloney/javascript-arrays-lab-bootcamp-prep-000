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
  kittens.slice(0, kittens.slice(-1));
  return kittens;
}