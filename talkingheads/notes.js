	function th.btn.startBtnCreate() {
		console.log('create startbtn');
		th.btn.startBtn = document.createElement("h3");
		th.btn.startBtn.id = "click-to-play";
		th.btn.startBtn.alt = "Click to Play";
		th.btn.startBtn.style.margin = "60% auto 0";
		th.btn.startBtn.style.maxWidth = "50%";
		th.btn.startBtn.style.position = "relative";
		th.btn.startBtn.style.textAlign = "center";
		th.btn.startBtn.style.cursor = "pointer";
		th.btn.startBtn.style.zIndex = 100;
		th.btn.startBtn.style.background = bgColor;
		th.btn.startBtn.style.color = textColor;
		th.btn.startBtn.style.border = textColor + " thin solid";
		th.btn.startBtn.style.borderRadius = "8px";
		th.btn.startBtn.style.padding = ".25rem";
		th.controls.appendChild(th.btn.startBtn);
		var t = document.createTextNode(btnText);
		th.btn.startBtn.appendChild(t);
	}