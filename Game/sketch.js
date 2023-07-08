let persona
let grama
const tamanho = 64
let x = 64
let y = 64
let andarX = 0
let andarY = 0
let velocidade = 64
let button


//carrega assets
function setup() {
  createCanvas(576, 576);
  persona = loadImage('Assets/person.png');
  grama = loadImage('Assets/grass.png');
}


function draw() {
  background(220)
  
  //Limita a tela
  if(andarX < 0) {
   andarX = 0
  }
  if(andarX > tamanho*8) {
   andarX = tamanho*8
  }
  if(andarY > tamanho*8) {
   andarY = tamanho*8
  }
  if(andarY < 0) {
   andarY = 0
  }
  //desenha o cenário
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      image(grama, x*i, y*j, tamanho, tamanho)
    }
  }
  //desenha o personagem
  image(persona, andarX, andarY, tamanho, tamanho)
  
  //finaliza o jogo
  if(andarX === tamanho*8 && andarY === tamanho*8){
    rect(157, 128, 256, 256)
    textSize(35)
    text('＼(￣▽￣)／', 192, 256)
    //cria botão de restart
    button = createButton('Restart')
    button.position(257, 330);
    button.mousePressed(restart)
    noLoop()
  }
}

//registra o imput do jogador
function keyPressed(){
  if(keyIsDown(RIGHT_ARROW)){
     andarX += velocidade
     } 
  if(keyIsDown(DOWN_ARROW)){
     andarY += velocidade
     } 
  if(keyIsDown(UP_ARROW)){
     andarY -= velocidade
     } 
    if(keyIsDown(LEFT_ARROW)){
     andarX -= velocidade
     } 
}
//reseta o jogo
function restart(){
  andarX=0
  andarY=0
  button.remove()
  loop()
}



