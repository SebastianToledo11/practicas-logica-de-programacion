var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

/*pincel.fillStyle = "red"
pincel.fillRect(0,0,350,300);

pincel.fillStyle = "black"
pincel.fillRect(40,40,90,90);

pincel.fillStyle = "black"
pincel.fillRect(220,40,90,90);

pincel.fillStyle = "black"
pincel.fillRect(140,80,70,100);

pincel.fillStyle = "black"
pincel.fillRect(40,180,270,90); */

/*pincel.fillStyle = "black"
pincel.beginPath();
pincel.moveTo(50, 50);
pincel.lineTo(50, 400);
pincel.lineTo(400, 400);
pincel.fill();


pincel.fillStyle = "white"
pincel.beginPath();
pincel.moveTo(100, 175);
pincel.lineTo(100, 350);
pincel.lineTo(275, 350);
pincel.fill(); */

pincel.fillStyle = "red";
pincel.fillRect(0,0,50,50);
pincel.strokeStyle = "black";
pincel.strokeRect(0,0,50,50);

pincel.fillStyle = "";
pincel.fillRect(0,0,50,50);
pincel.strokeStyle = "black";
pincel.strokeRect(50,0,50,50);
