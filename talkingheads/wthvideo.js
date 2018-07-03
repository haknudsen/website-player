// Copyright 2018 Website Talking Heads
//Version 1.4.1
// JavaScript Document
//Delay creation until page is loaded
if (window.addEventListener) {
	window.addEventListener("load", report, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", report);
} else {
	window.onload = report;
}

function report() {
	"use strict";
	var theReport = JSON.stringify(th);
	var splitedStr = JSON.stringify(theReport).split(',');
	var report = '';
	for (var i = 0; i < splitedStr.length; i++) {
		report += splitedStr[i] + '<br />';
	}
	document.getElementById('reporter').innerHTML = report;
	console.log("local = " + th.storage.local());
	console.log("session = " + th.storage.session());
	console.log("toPlay = " + th.player.toPlay());
}
var th = {
	responsive: "no", //You must place <div id:"wthvideo"></div> inside the div you want the video to be in.
	showDevice: true, //Display Talking Head On Devices true or false
	cookies: true, //Use cookies to effect autostart and once per session options -true or false
	width: "320", //video width
	height: "320", //video height
	position: "fixed", //fixed or absolute positioning
	left: "50%", //if centering on page change this to 50%
	right: "auto",
	divTop: "0",
	bottom: "auto",
	centeroffset: "-160", //if centering on page negative numbers are left and positive numbers are right
	bgColor: "rgba(255,255,255,0.6)", //the color of the player bar.
	textColor: "#0474ff", //set color of text
	volume: "0.8",
	delay: 0, //delay start of video 1000= 1 second
	goStop: "0",
	controlbar: "mouse", //options for showing the controlbar, yes, no, and mouse
	btnText: "PLAY", //you can customs playbuton text
	exitbtn: "yes", //show or not show exitbtn
	autostart: "yes", //autostart options yes, no, mute, oncethenpic, oncethenmute, onceonlythenpic, onceonlythenmute, and loop
	exitoncomplete: "no", //option for player to close after video completes. "yes" or "no"
	oncepersession: "no", //option for number of times video plays "yes", "no", or "onceonly"
	path: "talkingheads", //path to where the files are located
	actorpic: "slider", //transparent gif
	canvas: "Slider-Matte-hb", //Just name,not extension
	h264: "slider", //Just name,not extension h264
	// end Main Player Vars--------------------------------------------------------------------------------------
	overflow: "hidden",
	myPause: false,
	vendors: ["-moz-", "-webkit-", "-o-", "-ms-", "-khtml-", ""],
	toLoop: false,
	toMute: false,
	toPlay: true,
	canvasSupported: !!window.HTMLCanvasElement,
	device: function () {
		"use strict";
		if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
			return true;
		} else {
			return false;
		}
	},
	leftEnd: function () {
		'use strict';
		return this.left.charAt(this.left.length - 1);
	},
	btn: {
		width: 32
	},
	playerBar: {
		width: 132,
		marginHeight: function () {
			'use strict';
			return th.btn.width + 2;
		},
		marginBase: function () {
			'use strict';
			return th.btn.width + 2 + "px";
		},
		margin: function () {
			'use strict';
			return ((th.width - this.width) / 2) + "px";
		}
	},
	paths: {
		asset: function () {
			'use strict';
			return th.path + "/";
		},
		button: function () {
			'use strict';
			return th.path + "/" + "buttons" + "/";
		},
		video: function () {
			'use strict';
			if (th.canvasSupported) {
				return th.path + "/" + th.canvas + ".mp4";
			} else {
				return th.path + "/" + th.h264 + ".mp4";
			}
			return th.path + "/" + th.canvas + ".mp4";
		},
		poster: function () {
			'use strict';
			return th.path + "/" + th.actorpic + ".gif";
		}

	},
	storage: {
		name: function () {
			'use strict';
			return th.canvas;
		},
		local: function () {
			'use strict';
			var l = localStorage.getItem(th.canvas);
			if (l) {
				return true;
			} else {
				localStorage.setItem(th.canvas, true);
				return false;
			}
		},
		session: function () {
			'use strict';
			var s = sessionStorage.getItem(th.canvas);
			if (s) {
				return true;
			} else {
				sessionStorage.setItem(th.canvas, true);
				return false;
			}
		},
		use: function () {
			'use strict';
			return th.cookies;
		}
	},
	location: {
		position: "fixed", //fixed or absolute positioning
		left: function () {
			'use strict';
			switch (th.leftEnd) {
				case "%":
				case "o":
					return th.left;
				default:
					return th.left += "px";
			}
		},
		right: function () {
			'use strict';
			if (th.right !== "auto") {
				return th.right += "px";
			} else {
				return th.right;
			}
		},
		top: function () {
			'use strict';
			if (th.divTop !== "auto") {
				return th.divTop += "px";
			} else {
				return th.divTop;
			}
		},
		bottom: function () {
			'use strict';
			if (th.bottom !== "auto") {
				return th.bottom += "px";
			} else {
				return th.bottom;
			}
		},
		centeroffset: function () {
			'use strict';
			if (th.centeroffset !== "auto") {
				return th.centeroffset += "px";
			} else {
				return th.centeroffset;
			}
		}
	},
	player: {
		loop: function () {
			'use strict';
			if (th.autostart === "loop") {
				return true;
			}
			return false;
		},
		mute: function () {
			'use strict';
			if (th.autostart === "mute") {
				return true;
			}
			if (th.autostart === "oncethenmute" && th.storage.session === true) {
				return true;
			} else {
				return false;
			}
		},
		autostart: function () {
			'use strict';
			if (this.loop || this.mute) {
				return true;
			} else {
				return false;
			}
		},
		toPlay: function () {
			'use strict';
			if (th.storage.local && th.oncepersession === "yes") {
				return false;
			} else if (th.storage.session && th.oncepersession === "onceonly") {
				return false;
			} else {
				return true;
			}
		}
	}
};

function wthplayer() {
	"use strict";
	//Variables for Player


	if (th.device && !th.showDevice) {
		return;
	}


	if (th.player.toPlay === true) {
		setTimeout(function () {
			createDiv();
		}, th.delay);
	} else {
		return;
	}





	function createDiv() {
		if (responsive === "yes") {
			createTH = document.getElementById("wthvideo");
			createTH.style.position = "relative";
			createTH.style.left = "50%";
			createTH.style.marginLeft = (width / 2) * -1 + "px";
			createTH.style.top = "auto";
			createTH.style.bottom = 0;
		} else {
			createTH = document.createElement("div");
			createTH.id = "wthvideo";
			createTH.style.position = position;
			createTH.style.marginLeft = centeroffset;
			createTH.style.left = left;
			createTH.style.right = right;
			createTH.style.marginLeft = centeroffset;
			createTH.style.top = divTop;
			createTH.style.bottom = bottom;
			var wthbody = document.body || document.getElementsByTagName("body")[0];
			wthbody.insertBefore(createTH, wthbody.childNodes[0]);
		}
		thv = document.getElementById("wthvideo");
		createTH.style.height = height + "px";
		createTH.style.width = width + "px";
		createTH.style.zIndex = 9999;
		createTH.style.cursor = "pointer";
		createTH.style.overflow = overflow;
		if (!canvasSupported) {
			createVideo();
			createControls();
			HTML5Autostart();
		} else {
			createVideo();
			createControls();
			createCanvas();
			HTML5Autostart();
		}
	}

	function createVideo() {
		var v = document.createElement("VIDEO");
		v.id = "talkinghead";
		v.setAttribute("playsinline", "");
		if (autostart === "yes") {
			v.setAttribute("autostart", "");
		}
		v.src = hVideo;
		v.zIndex = 1;
		v.poster = actorGif;
		if (canvasSupported) {
			v.style.display = "none";
		}
		v.volume = volume;
		v.style.width = width + "px";
		if (toLoop) {
			v.loop = true;
		}
		if (toMute) {
			v.muted = true;
			if (autostart !== "loop") {
				startBtnCreate();
			}
		}
		if (canvasSupported) {
			v.style.height = height * 2 + "px";
		} else {
			v.style.height = height + "px";
		}
		thv.appendChild(v);
		thplayer = document.getElementById("talkinghead");
		var p = document.createElement("p");
		p.innerHTML = "Your Browser does not support the <video> tag";
		v.appendChild(p);
	}

	function createCanvas() {
		thb = document.createElement("CANVAS");
		thb.id = "bufferCanvas";
		thb.width = width;
		thb.height = height * 2;
		thb.style.display = "none";
		thb.style.position = "absolute";
		thv.appendChild(thb);
		thc = document.createElement("CANVAS");
		thc.style.position = "absolute";
		thc.style.top = "0";
		thc.style.left = "0";
		thc.id = "talkingCanvas";
		thc.width = width;
		thc.height = height * 2;
		thv.appendChild(thc);
	}

	function createControls() {
		var newD = document.createElement("div");
		newD.id = "playholder";
		newD.style.position = "relative";
		if (!canvasSupported) {
			newD.style.top = (height * -1) + "px";
		} else {
			newD.style.top = 0;
		}
		newD.style.width = width + "px";
		newD.style.height = height + "px";
		thv.appendChild(newD);
		if (exitbtn === "yes") {
			var newI = document.createElement("img");
			newI.id = "htmlClose";
			newI.style.marginLeft = (width - 20) + "px";
			newI.style.width = "16px";
			newI.style.display = "block";
			newI.style.position = "relative";
			newI.src = buttonPath + "ExitBtn-full.png";
			newI.style.zIndex = 10020;
			dv = document.getElementById("playholder");
			var windowClose = newI;
			dv.appendChild(windowClose);
		}
		newP = document.createElement("div");
		newP.id = "PlayerBar";
		newP.style.height = playerBarHeight + "px";
		newP.style.width = playerBar.Width;
		newP.style.borderRadius = "8px";
		newP.style.paddingLeft = "3px";
		newP.style.paddingTop = "1px";
		newP.style.marginTop = "0px";
		newP.style.left = playerBar.margin + "px";
		newP.style.bottom = "0px";
		if (!canvasSupported) {
			newP.style.position = "absolute";
		} else {
			newP.style.position = "relative";
		}
		newP.style.zIndex = 10020;
		newP.style.background = bgColor;
		PlayerBar = newP;
		thv.appendChild(PlayerBar);
		createTH = document.createElement("img");
		createTH.style.maxWidth = btnWidth;
		createTH.id = "PlayPauseBtn";
		createTH.style.float = "left";
		createTH.src = buttonPath + "PlayBtn.png";
		createTH.style.position = "relative";
		createTH.style.zIndex = "inherit";
		dv = document.getElementById("PlayerBar");
		newP.style.position = "PlayPauseBtn";
		var PlayButton = createTH;
		dv.appendChild(PlayButton);
		createTH = document.createElement("img");
		createTH.style.width = btnWidth;
		createTH.id = "muteBtn";
		if (document.getElementById("talkinghead").muted) {
			createTH.src = buttonPath + "VolumeBtnMute.png";
		} else {
			createTH.src = buttonPath + "VolumeBtn.png";
		}
		createTH.style.float = "left";
		dv = document.getElementById("PlayerBar");
		muteBtn = createTH;
		dv.appendChild(muteBtn);
		createTH = document.createElement("img");
		createTH.style.width = btnWidth;
		createTH.id = "restartBtn";
		createTH.style.float = "left";
		createTH.src = buttonPath + "RestartBtn.png";
		createTH.style.position = "relative";
		createTH.style.float = "left";
		createTH.style.zIndex = 10050;
		dv = document.getElementById("PlayerBar");
		restartBtn = createTH;
		dv.appendChild(restartBtn);
		createTH = document.createElement("img");
		createTH.style.width = btnWidth;
		createTH.id = "playerClose";
		createTH.style.position = "relative";
		createTH.style.zIndex = 99050;
		createTH.style.float = "left";
		createTH.src = buttonPath + "ExitBtn.png";
		dv = document.getElementById("PlayerBar");
		playerClose = createTH;
		dv.appendChild(playerClose);
		addListeners();
		switch (controlbar) {
			case "no":
				dv.style.visibility = "hidden";
				break;
			case "yes":
				document.getElementById("PlayerBar").style.marginTop = playerBar.marginBase;
				break;
			case "mouse":
				setCss3Style(document.getElementById("PlayerBar"), "transition", "all 1s");
				break;
			default:
				console.log("controlbar not set properly");
		}
	}

	function startPlaying() {
		theCanvas = document.getElementById("talkingCanvas");
		outputCanvas = document.getElementById("bufferCanvas");
		if (theCanvas && theCanvas.getContext) {
			var ctx = theCanvas.getContext("2d");
			if (ctx) {
				playingS = setInterval(function () {
					showVideo();
				}, 16);
			}
		}
	}

	function showVideo() {
		try {
			var theCanvas = document.getElementById("talkingCanvas"),
				ctx = theCanvas.getContext("2d"),
				srcVid = thplayer,
				buffer = outputCanvas.getContext("2d");
			buffer.drawImage(srcVid, 0, 0);
			var image = buffer.getImageData(0, 0, width, height),
				imageData = image.data,
				alphaData = buffer.getImageData(0, height, width, height).data;
			for (var i = 3, len = imageData.length; i < len; i = i + 4) {
				imageData[i] = alphaData[i - 1];
			}
			ctx.putImageData(image, 0, 0, 0, 0, width, height);
		} catch (err) {}
	}

	function HTML5Autostart() {
		if (autostart === "yes" || toLoop === true) {
			var promise = thplayer.play();
			if (promise !== undefined) {
				promise.then(_ => {
					document.getElementById("PlayPauseBtn").src = buttonPath + "PauseBtn.png";
				}).catch(error => {
					console.log('Play Error');
					goPoster();
				});
			}
		}
		if (autostart === "yes" || toLoop === true) {
			thplayer.autoplay = true;
			document.getElementById("PlayPauseBtn").src = buttonPath + "PauseBtn.png";
			document.getElementById("PlayerBar").style.opacity = "1";
			startPlaying();
		} else {
			goPoster();
		}
		if (exitoncomplete === "yes") {
			thplayer.addEventListener("ended", closePlayer, false);
		}
	}

	function addListeners() {
		theParent = document.querySelector("#wthvideo");
		theParent.addEventListener("click", doSomething, false);
		theParent.addEventListener("mouseover", overVideo, false);
		theParent.addEventListener("mouseout", outVideo, false);
		if (goStop > 0) {
			var frameRate = 30;
			thplayer.ontimeupdate = function () {
				if (myPause === false) {
					timeUpdate();
				}
			};
		}

		function timeUpdate() {
			curTime = thplayer.currentTime;
			var theCurrentFrame = Math.floor(curTime * frameRate);
			if (theCurrentFrame >= goStop && theCurrentFrame <= goStop + 10) {
				document.getElementById("PlayPauseBtn").src = buttonPath + "PlayBtn.png";
				myPause = true;
				thplayer.pause();
				startBtnCreate();
			}
		}

		function outVideo(e) {
			if (e.target !== e.currentTarget) {
				switch (e.target.id) {
					case "talkingCanvas":
						document.getElementById("PlayerBar").style.marginTop = "0px";
						break;
					case "PlayPauseBtn":
					case "muteBtn":
					case "restartBtn":
					case "playerClose":
					case "htmlClose":
					case "imgLnk":
						e.target.style.opacity = 1;
						break;
				}
			}
			e.stopPropagation();
		}

		function overVideo(e) {
			if (e.target !== e.currentTarget) {
				switch (e.target.id) {
					case "talkingCanvas":
						document.getElementById("PlayerBar").style.marginTop = playerBar.marginBase;
						break;
					case "PlayPauseBtn":
					case "muteBtn":
					case "restartBtn":
					case "playerClose":
					case "htmlClose":
					case "imgLnk":
						e.target.style.opacity = 0.5;
						document.getElementById("PlayerBar").style.marginTop = playerBar.marginBase;
						break;
				}
			}
			e.stopPropagation();
		}

		function doSomething(e) {
			if (e.target !== e.currentTarget) {
				if (toMute) {
					removeMuted();
				}
				switch (e.target.id) {
					case "muteBtn":
						muteToggle();
						break;
					case "restartBtn":
						restartClick();
						break;
					case "playerClose":
					case "htmlClose":
						closePlayer();
						break;
					case "talkingCanvas":
					case "talkinghead":
					case "click-to-play":
					case "PlayPauseBtn":
						playToggle();
						break;
				}
			}
			e.stopPropagation();
		}
		try {
			thplayer.addEventListener("ended", videoEnded, false);
		} catch (err) {}
	}

	function setCss3Style(el, prop, val) {
		for (var i = 0, l = vendors.length; i < l; i++) {
			el.style[toCamelCase(vendors[i] + prop)] = val;
		}
	}

	function toCamelCase(str) {
		return str.toLowerCase().replace(/(\-[a-z])/g, function ($1) {
			return $1.toUpperCase().replace("-", "");
		});
	}

	function videoEnded() {
		document.getElementById("PlayPauseBtn").src = buttonPath + "PlayBtn.png";
		if (exitoncomplete === "yes") {
			closePlayer();
		} else {
			thplayer.autoplay = false;
			goPoster();
		}
	}

	function playClick() {
		document.getElementById("click-to-play").style.visibility = "visible";
		if (!canvasSupported) {
			thplayer.play();
			document.getElementById("PlayPauseBtn").src = buttonPath + "PauseBtn.png";
		} else {
			startPlaying();
		}
	}

	function playToggle() {
		if (thplayer.paused) {
			try {
				document.getElementById("click-to-play").parentNode.removeChild(document.getElementById("click-to-play"));
			} catch (err) {}
			thplayer.play();
			document.getElementById("PlayPauseBtn").src = buttonPath + "PauseBtn.png";
			document.getElementById("PlayerBar").style.opacity = "1";
		} else {
			document.getElementById("PlayPauseBtn").src = buttonPath + "PlayBtn.png";
			thplayer.pause();
		}
	}

	function muteToggle() {
		if (thplayer.muted) {
			thplayer.muted = false;
			document.getElementById("muteBtn").src = buttonPath + "VolumeBtn.png";
		} else {
			document.getElementById("muteBtn").src = buttonPath + "VolumeBtnMute.png";
			thplayer.muted = true;
		}
	}

	function restartClick() {
		thplayer.currentTime = 0;
		document.getElementById("PlayPauseBtn").src = buttonPath + "PauseBtn.png";
		playClick();
		thplayer.play();
	}

	function closePlayer() {
		thplayer.pause();
		clearInterval(playingS);
		try {
			thv.parentNode.removeChild(document.getElementById("wthvideo"));
		} catch (err) {}
		return;
	}

	function goPoster() {
		console.log('goPoster');
		thplayer.load();
		var elementExists = document.getElementById('click-to-play');
		if (elementExists) {
			startBtn.style.visibility = "visible";
			console.log('elementExists');
		} else {
			startBtnCreate();
		}
	}

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
		document.getElementById("playholder").appendChild(startBtn);
		var t = document.createTextNode(btnText);
		startBtn.appendChild(t);
	}


	function removeMuted() {
		document.getElementById("muteBtn").src = buttonPath + "VolumeBtn.png";
		toMute = false;
		toLoop = false;
		thplayer.muted = false;
		thplayer.loop = false;
		setTimeout(function () {
			restartClick();
		}, 150);
	}
}
// Copyright 2018 Website Talking Heads
