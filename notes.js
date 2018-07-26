
		addListeners();
		switch (controlbar) {
			case "no":
				dv.style.visibility = "hidden";
				break;
			case "yes":
				document.getElementById("playerBar").style.marginTop = playerBar.marginBase;
				break;
			case "mouse":
				setCss3Style(document.getElementById("playerBar"), "transition", "all 1s");
				break;
			default:
				console.log("controlbar not set properly");
		}
	}