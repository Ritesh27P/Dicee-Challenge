
player1_score = Math.random() * 6;
player2_score = Math.random() * 6;

player1_score = (Math.floor(player1_score) + 1);
player2_score = (Math.floor(player2_score) + 1);

ply1_img = "images/dice" + player1_score + ".png"
ply2_img = "images/dice" + player2_score + ".png"

document.querySelector(".dice .img1").src = ply1_img;
document.querySelector(".dice .img2").src = ply2_img;


if (player1_score === player2_score){
  document.querySelector("h1").textContent = "Draw";
}
if (player1_score > player2_score){
  document.querySelector("h1").textContent= "🚩Player1 Wins";
}
if (player1_score < player2_score){
  document.querySelector("h1").textContent = "Player2 Wins🚩";
}
