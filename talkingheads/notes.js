	function startBtnCreate() {
		console.log('create element');
		startBtn = document.createElement("h3");
		startBtn.id = "click-to-play";
		startBtn.alt = "Click to Play";
		startBtn.style.margin = "60% auto 0";
		startBtn.style.maxWidth = "50%";
		startBtn.style.position = "relative";
		startBtn.style.textAlign = "center";
		startBtn.style.cursor = "pointer";
		startBtn.style.zIndex = 100;
		startBtn.style.background = bgColor;
		startBtn.style.color = textColor;
		startBtn.style.border = textColor + " thin solid";
		startBtn.style.borderRadius = "8px";
		startBtn.style.padding = ".25rem";
		document.getElementById("controls").appendChild(startBtn);
		var t = document.createTextNode(btnText);
		startBtn.appendChild(t);
	}