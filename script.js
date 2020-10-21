let dino = document.querySelector(".dino");
let enemy = document.querySelector(".enemy");
let scoreCounter = 0;

window.addEventListener('keydown', (e) => {
	if (dino.classList == "animate") {
		return;
	}

	let keyCode = e.keyCode;
	if (keyCode == 32) {
		dino.classList.add("animate");
	}
	setTimeout(() => {
		dino.classList.remove("animate");
	}, 300);
})

const checkDead = setInterval(function () {
	let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
	let enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
	if (enemyLeft < 20 && enemyLeft > -20 && dinoTop >= 130) {
		enemy.style.animation = "none";
		alert("you noob your scoreis " + Math.floor(scoreCounter / 100));
		scoreCounter = 0;
		enemy.style.animation = "enemy 1s infinite linear";
	} else {
		scoreCounter++;
		document.querySelector(".score").innerHTML = Math.floor(scoreCounter / 100);
	}
}, 10);
