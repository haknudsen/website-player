	function HTML5Autostart() {
		if (th.autostart === "yes" || th.toLoop === true) {
			var promise = th.video.play();
			if (promise !== undefined) {
				promise.then(_ => {
					document.getElementById("PlayPauseBtn").src = buttonPath + "PauseBtn.png";
				}).catch(error => {
					console.log('Play Error');
					goPoster();
				});
			}
		}
		if (th.autostart === "yes" || th.toLoop === true) {
			th.video.autoplay = true;
			document.getElementById("PlayPauseBtn").src = buttonPath + "PauseBtn.png";
			document.getElementById("playerBar").style.opacity = "1";
			startPlaying();
		} else {
			goPoster();
		}
		if (th.exitoncomplete === "yes") {
			th.video.addEventListener("ended", closePlayer, false);
		}
	}