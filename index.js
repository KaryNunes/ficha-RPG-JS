var registrationForm

console.log("𔒿𔒿𔒿𔒿 FICHA Personagem 𔒿𔒿𔒿𔒿")
registrationForm = prompt ("Nome:")
console.log("Nome:" + registrationForm)

registrationForm = prompt ("Idade:")
console.log("Idade:" + registrationForm)

registrationForm = prompt ("Sexo:")
console.log("Sexo:" + registrationForm)

registrationForm = prompt ("Classes Disponíveis:\nNecromante\n Ladino\n Guerreiro\n Mago\n Bárbaro")

console.log("Classe:" + registrationForm)

registrationForm = prompt ("Raça: \n Dríade\n Vampiro\n Orc\n Kappa \nBanshee  \nLican \nAnjo\nDemonio")
console.log("Raça:" + registrationForm)

registrationForm = prompt ("Altura:")
console.log("Altura:" + registrationForm)


console.log("# Atributos:")

let userPointsForc = prompt("Quantos Pontos adicionar em Força?[1-6]")

console.log ("Força: ", userPointsForc)

let boxes = "";
let pointsTraveledInLoop = 1;
const POINTS_TOTAL_LENGHT = 6;

while(pointsTraveledInLoop <= POINTS_TOTAL_LENGHT){
  if(pointsTraveledInLoop <= userPointsForc){
    boxes += " [◈]";
  }
  else{
    boxes += " [ ] ";
  }
  
  pointsTraveledInLoop += 1;
}

console.log(boxes)

userPointsInt = prompt("Quantos pontos adicionar em Inteligência? [1-6]")

console.log ("Inteligência: ", userPointsInt)

pointsTraveledInLoop = 1;
boxes = "";

while(pointsTraveledInLoop <= POINTS_TOTAL_LENGHT){
  if(pointsTraveledInLoop <= userPointsInt){
    boxes += " [◈] ";
  }
  else{
    boxes += " [ ] ";
  }
  
  pointsTraveledInLoop += 1;
}

console.log(boxes)

userPointsAgil = prompt("Quantos pontos adicionar em Agilidade? [1-6]")

console.log ("Agilidade: ", userPointsAgil)

pointsTraveledInLoop = 1
boxes = "";

while(pointsTraveledInLoop <= POINTS_TOTAL_LENGHT){
  if(pointsTraveledInLoop <= userPointsAgil){
    boxes += " [◈] ";
  }
  else{
    boxes += " [ ] ";
  }
  
  pointsTraveledInLoop += 1;
  }
console.log(boxes)

userPointsDest = prompt("Quantos pontos adicionar em Destreza? [1-6]")

console.log("Destreza: ", userPointsDest)

pointsTraveledInLoop = 1
boxes = "";

while(pointsTraveledInLoop <= POINTS_TOTAL_LENGHT){
  if(pointsTraveledInLoop <= userPointsDest){
    boxes += " [◈] ";
  }
  else{
    boxes += " [ ] ";
  }  
  pointsTraveledInLoop += 1;
  }
console.log  (boxes)
