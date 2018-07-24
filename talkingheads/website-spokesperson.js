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
	if (th.device && !th.showDevice) {
		return;
	}
	if (th.player.toPlay() === true) {
		setTimeout(function () {
			createPlayer();
		}, th.delay);
	} else {
		console.log('Not going to play');
		return;
	}
	var str = objToString(th.player, 3);
	str.replace(/,/g, "\n");

	function objToString(obj, ndeep) {
		if (obj === null) {
			return String(obj);
		}
		switch (typeof obj) {
			case "string":
				return '"' + obj + '"';
			case "function":
				return obj.name || obj.toString();
			case "object":
				var indent = Array(ndeep || 1).join('\t'),
					isArray = Array.isArray(obj);
				return [+isArray] + Object.keys(obj).map(function (key) {
					return '\t' + indent + key + ': ' + objToString(obj[key], (ndeep || 1) + 1);
				}).join('\n') + '\n' + indent + [+isArray];
			default:
				return obj.toString();
		}
	}
	document.getElementById('reporter').value = str;
	console.log(th.controlbar);
}
var th = {
	responsive: false, //You must place <div id:"wthvideo"></div> inside the div you want the video to be in.
	showDevice: true, //Display Talking Head On Devices true or false
	cookies: true, //Use cookies to effect autostart and once per session options -true or false
	width: 320, //video width
	height: 320, //video height
	position: "fixed", //fixed or absolute positioning
	left: "50%", //if centering on page change this to 50%
	right: "auto",
	divTop: "0",
	bottom: "auto",
	centeroffset: "-160", //if centering on page negative numbers are left and positive numbers are right
	bgColor: "rgba(200, 200, 255,0.5)", //the color of the player bar.
	textColor: "#0474ff", //set color of text
	volume: "0.8",
	delay: 500, //delay start of video 1000= 1 second
	goStop: "1",
	controlbar: "mouse", //options for showing the controlbar, yes, no, and mouse
	btnText: "PLAY", //you can customs playbuton text
	exitbtn: "yes", //show or not show exitbtn
	autostart: "no", //yes, no, mute,loop, slide, oncethenpic, oncethenmute, onceonlythenpic, onceonlythenmute, once, onceonly,goStop
	exitoncomplete: "no", //option for player to close after video completes. "yes" or "no"
	path: "talkingheads", //path to where the files are located
	actorpic: "slider", //transparent gif
	canvasVideo: "Slider-Matte-hb", //Just name,not extension
	h264: "slider", //Just name,not extension h264
	// end Main Player Vars--------------------------------------------------------------------------------------
	overflow: "hidden",
	vendors: ["-moz-", "-webkit-", "-o-", "-ms-", "-khtml-", ""],
	toPlay: true,
	canvasSupported: !!window.HTMLCanvasElement,
	holder: "true",
	video: "",
	controls: "yes",
	canvas: {
		buffer: "",
		main: ""
	},
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
		width: 32,
		names: ["playBtn", "restartBtn", "muteBtn", "closeBtn"],
		padding: "1px",
		float: "left",
		playBtn: "",
		restartBtn: "",
		muteBtn: "",
		closeBtn: "",
		startBtn: ""
	},
	playerBar: {
		width: function () {
			'use strict';
			return (th.btn.width * th.btn.names.length) + 6;
		},
		margin: function () {
			'use strict';
			return ((th.width - th.playerBar.width()) / 2) + "px";
		},
		height: function () {
			'use strict';
			return th.btn.width + 6;
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
				return th.path + "/" + th.canvasVideo + ".mp4";
			} else {
				return th.path + "/" + th.h264 + ".mp4";
			}
		},
		poster: function () {
			'use strict';
			return th.path + "/" + th.actorpic + ".gif";
		}

	},
	storage: {
		name: function () {
			'use strict';
			return th.canvasVideo;
		},
		local: function () {
			'use strict';
			var l = localStorage.getItem(th.canvasVideo);
			if (l) {
				return true;
			} else {
				localStorage.setItem(th.canvasVideo, true);
				return false;
			}
		},
		session: function () {
			'use strict';
			var s = sessionStorage.getItem(th.canvasVideo);
			if (s) {
				return true;
			} else {
				sessionStorage.setItem(th.canvasVideo, true);
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
			if (th.autostart === "mute" || th.autostart === "loop") {
				return true;
			} else {
				return false;
			}
		},
		mute: function () {
			'use strict';
			switch (th.autostart) {
				case "mute":
					th.autostart = "yes";
					return true;
				case "oncethenmute":
					if (th.storage.local === true) {
						th.autostart = "yes";
						return true;
					} else {
						return false;
					}
					break;
				case "onceonlythenmute":
					if (th.storage.storage === true) {
						th.autostart = "yes";
						return true;
					} else {
						return false;
					}
					break;
				default:
					return false;
			}
		},
		autostart: function () {
			'use strict';
			if (this.loop() || this.mute() || this.goStop()) {
				return true;
			} else {
				return false;
			}
		},
		frameRate: 30,
		slide: function () {
			'use strict';
			if (th.autostart === "slide") {
				return true;
			} else {
				return false;
			}
		},
		goStop: function () {
			'use strict';
			if (th.autostart === "goStop") {
				return true;
			} else {
				return false;
			}
		},
		toPlay: function () {
			'use strict';
			if (th.storage.local && th.autostart === "once") {
				return false;
			} else if (th.storage.session && th.autostart === "onceonly") {
				return false;
			} else {
				return true;
			}
		}
	}
};

function createPlayer() {
	'use strict';
	if (th.responsive) {
		th.holder = document.getElementById("wthvideo");
		th.holder.style.position = "relative";
		th.holder.style.left = "50%";
		th.holder.style.marginLeft = (th.width / 2) * -1 + "px";
		th.holder.style.top = "auto";
		th.holder.style.bottom = 0;
	} else {
		th.holder = document.createElement("div");
		th.holder.id = "wthvideo";
		th.holder.style.position = th.position;
		th.holder.style.marginLeft = th.centeroffset + "px";
		th.holder.style.left = th.left;
		th.holder.style.right = th.right;
		th.holder.style.marginLeft = th.centeroffset;
		th.holder.style.top = th.divTop;
		th.holder.style.bottom = th.bottom;
		var wthbody = document.body || document.getElementsByTagName("body")[0];
		wthbody.insertBefore(th.holder, wthbody.childNodes[0]);
	}
	th.holder.style.height = th.height + "px";
	th.holder.style.width = th.width + "px";
	th.holder.style.zIndex = 9999;
	th.holder.style.cursor = "pointer";
	th.holder.style.overflow = "hidden";
	th.holder.style.overflow = th.overflow;
	createVideo();
	createControls();
	if (th.canvasSupported) {
		createCanvas();
	}
	playSpokesperson();
	//-----------------------------------------------CREATE VIDEO--------------	
	function createVideo() {
		th.video = document.createElement("VIDEO");
		th.video.id = "talkinghead";
		th.video.setAttribute("playsinline", "");
		if (th.player.autostart()) {
			th.video.setAttribute("autostart", "");
		}
		if (th.player.loop()) {
			th.video.setAttribute("loop", "");
			th.video.loop = true;
		}
		th.video.src = th.paths.video();
		th.video.zIndex = 1;
		th.video.poster = th.paths.poster();
		if (th.canvasSupported) {
			th.video.style.display = "none";
		}
		th.video.volume = th.volume;
		th.video.style.width = th.width + "px";
		if (th.canvasSupported) {
			th.video.style.height = th.height * 2 + "px";
		} else {
			th.video.style.height = th.height + "px";
		}
		th.holder.appendChild(th.video);
		var p = document.createElement("p");
		p.innerHTML = 'Your Browser does not support the video tag.  <a href="https://www.websitetalkingheads.com/">Learn More</a>';
		th.video.appendChild(p);
	}
	//-----------------------------------------------CREATE Controlls--------------	
	function createControls() {
		th.controls = document.createElement("div");
		th.controls.id = "controls";
		th.controls.style.position = "relative";
		if (!th.canvasSupported) {
			th.controls.style.top = (th.height * -1) + "px";
		} else {
			th.controls.style.top = 0;
		}
		th.controls.style.width = th.width + "px";
		th.controls.style.height = th.height + "px";
		th.holder.appendChild(th.controls);
		if (th.exitbtn === "yes") {
			th.exitbtn = document.createElement("img");
			th.exitbtn.id = "htmlClose";
			th.exitbtn.style.marginLeft = (th.width - 20) + "px";
			th.exitbtn.style.width = "16px";
			th.exitbtn.style.display = "block";
			th.exitbtn.style.position = "absolute";
			th.exitbtn.src = th.paths.button() + "ExitBtn-full.png";
			th.exitbtn.style.zIndex = 10020;
			th.controls.appendChild(th.exitbtn);
		}
		th.controls.playerBar = document.createElement("div");
		th.controls.playerBar.id = "playerBar";
		th.controls.playerBar.style.border = "thin solid " + th.textColor;
		th.controls.playerBar.style.borderRadius = "8px";
		th.controls.playerBar.style.padding = "2px";
		th.controls.playerBar.style.margin = "auto";
		th.controls.playerBar.style.left = th.playerBar.margin();
		th.controls.playerBar.style.bottom = "0px";
		if (th.canvasSupported) {
			th.controls.playerBar.style.position = "absolute";
		} else {
			th.controls.playerBar.style.position = "relative";
		}
		th.controls.playerBar.style.zIndex = 10;
		th.controls.playerBar.style.background = th.bgColor;
		switch (th.controlbar) {
			case "no":
				th.controls.playerBar.style.visibility = "hidden";
				break;
			case "yes":
				th.controls.playerBar.style.marginTop = th.playerBar.height();
				break;
			case "mouse":
				setCss3Style(th.controls.playerBar, "transition", "all 1s");
				break;
			default:
				console.log("controlbar not set properly");
				th.controls.playerBar.style.marginTop = th.playerBar.height();
				break;
		}
		th.controls.appendChild(th.controls.playerBar);
		var i = 0;
		while (i < th.btn.names.length) {
			new Button(th.btn.names[i]);
			i++;
		}
		th.btn.playBtn = document.getElementById('playBtn');
		th.btn.restartBtn = document.getElementById('restartBtn');
		th.btn.muteBtn = document.getElementById('muteBtn');
		th.btn.closeBtn = document.getElementById('closeBtn');

		function setCss3Style(el, prop, val) {
			console.log( "controlbasr" );
			for (var i = 0, l = th.vendors.length; i < l; i++) {
				el.style[toCamelCase(th.vendors[i] + prop)] = val;
			}
		}

		function toCamelCase(str) {
			return str.toLowerCase().replace(/(\-[a-z])/g, function ($1) {
				return $1.toUpperCase().replace("-", "");
			});
		}

		function Button(name) {
			var newBtn = document.createElement("img");
			newBtn.style.maxWidth = th.btn.width;
			newBtn.id = name;
			newBtn.width = th.btn.width;
			newBtn.style.float = "left";
			newBtn.src = th.paths.button() + name + ".png";
			newBtn.style.position = "relative";
			th.controls.playerBar.appendChild(newBtn);
		}
	}
	//-----------------------------------------------CREATE Canvas--------------	
	function createCanvas() {
		th.canvas.buffer = document.createElement("CANVAS");
		th.canvas.buffer.id = "bufferCanvas";
		th.canvas.buffer.width = th.width;
		th.canvas.buffer.height = th.height * 2;
		th.canvas.buffer.style.display = "none";
		th.canvas.buffer.style.position = "absolute";
		th.holder.appendChild(th.canvas.buffer);
		th.canvas.main = document.createElement("CANVAS");
		th.canvas.main.style.position = "absolute";
		th.canvas.main.style.top = "0";
		th.canvas.main.style.left = "0";
		th.canvas.main.id = "talkingCanvas";
		th.canvas.main.width = th.width;
		th.canvas.main.height = th.height * 2;
		th.holder.appendChild(th.canvas.main);
		addListeners();
	}
	//-----------------------------------------------Start Playing--------------	
	function playSpokesperson() {
		if (th.player.autostart()) {
			var promise = th.video.play();
			if (promise !== undefined) {
				promise.then(_ => {
					th.controls.playerBar.playBtn = th.paths.button() + "pauseBtn.png";
					th.controls.playerBar.style.opacity = "1";
				}).catch(error => {
					console.log('Play Error');
					goPoster();
				});
			}
			if (th.player.mute()) {
				th.video.muted = true;
				startBtnCreate();
			} else if (th.autostart === "no") {
				goPoster();
			} else {
				startPlaying();
			}
		} else {
			goPoster();
		}
	}

	function startPlaying() {
		if (th.canvas.main && th.canvas.main.getContext) {
			var ctx = th.canvas.main.getContext("2d");
			if (ctx) {
				var playingS = setInterval(function () {
					showVideo();
				}, 16);
			}
		}
	}

	function showVideo() {
		try {
			var ctx = th.canvas.main.getContext("2d"),
				srcVid = th.video,
				buffer = th.canvas.buffer.getContext("2d");
			buffer.drawImage(srcVid, 0, 0);
			var image = buffer.getImageData(0, 0, th.width, th.height),
				imageData = image.data,
				alphaData = buffer.getImageData(0, th.height, th.width, th.height).data;
			for (var i = 3, len = imageData.length; i < len; i = i + 4) {
				imageData[i] = alphaData[i - 1];
			}
			ctx.putImageData(image, 0, 0, 0, 0, th.width, th.height);
		} catch (err) {}
	}

	function startBtnCreate() {
		if (th.btn.startBtn === "") {
			th.btn.startBtn = document.createElement("h3");
			th.btn.startBtn.id = "click-to-play";
			th.btn.startBtn.alt = "Click to Play";
			th.btn.startBtn.style.margin = "-60% auto 0";
			th.btn.startBtn.style.maxWidth = "50%";
			th.btn.startBtn.style.position = "relative";
			th.btn.startBtn.style.textAlign = "center";
			th.btn.startBtn.style.cursor = "pointer";
			th.btn.startBtn.style.zIndex = 100;
			th.btn.startBtn.style.background = th.bgColor;
			th.btn.startBtn.style.color = th.textColor;
			th.btn.startBtn.style.border = th.textColor + " thin solid";
			th.btn.startBtn.style.borderRadius = "8px";
			th.btn.startBtn.style.padding = ".25rem";
			th.holder.appendChild(th.btn.startBtn);
			var t = document.createTextNode(th.btnText);
			th.btn.startBtn.appendChild(t);
		} else {
			th.btn.startBtn.style.visibility = "visible";
		}
	}

	function goPoster() {
		th.video.removeAttribute("autostart");
		th.video.pause();
		if (!th.player.poster) {
			th.player.poster = document.createElement("IMG");
			th.player.poster.src = th.paths.poster();
			th.player.poster.id = "poster";
			th.player.poster.style.visibility = "visible";
			th.player.poster.style.position = "relative";
			th.player.poster.style.top = 0;
			th.controls.appendChild(th.player.poster);
		} else {
			th.player.poster.style.visibility = "visible";
		}
		startPlaying();
		th.btn.playBtn.src = th.paths.button() + "playBtn.png";
		if (!th.btn.startBtn) {
			startBtnCreate();
		} else {
			th.btn.startBtn.style.visibility = "visible";
		}
		if (th.player.slide()) {
			slide();
		}
	}

	function addListeners() {
		th.holder.addEventListener("click", doSomething, false);
		th.holder.addEventListener("mouseover", overVideo, false);
		th.holder.addEventListener("mouseout", outVideo, false);
		th.video.addEventListener("ended", videoEnded, false);
		if (th.exitoncomplete === "yes") {
			th.video.getElementById('talkinghead').addEventListener("ended", closePlayer, false);
		}
		if (th.player.goStop()) {
			th.video.ontimeupdate = function () {
				timeUpdate();
			};
		}
	}

	function timeUpdate() {
		var theCurrentFrame = Math.floor(th.video.currentTime * th.player.frameRate);
		if (theCurrentFrame >= th.goStop && theCurrentFrame <= th.goStop + 10) {
			th.btn.playBtn.src = th.paths.button() + "playBtn.png";
			th.video.pause();
			th.video.ontimeupdate = null;
			th.autostart = "yes";
			startBtnCreate();
		}
	}

	function outVideo(e) {
		if (e.target !== e.currentTarget) {
			console.log( e.target.id );
			switch (e.target.id) {
				case "talkingCanvas":
					th.controls.playerBar.style.marginTop = "0px";
					break;
				case "playBtn":
				case "muteBtn":
				case "restartBtn":
				case "closeBtn":
				case "htmlClose":
					e.target.style.opacity = 1;
					break;
			}
		}
		e.stopPropagation();
	}

	function overVideo(e) {
		if (e.target !== e.currentTarget) {
			console.log( e.target.id );
			switch (e.target.id) {
				case "talkingCanvas":
					console.log( th.playerBar.margin() );
					th.controls.playerBar.style.marginTop = th.playerBar.margin;
					break;
				case "playBtn":
				case "muteBtn":
				case "restartBtn":
				case "closeBtn":
				case "htmlClose":
					e.target.style.opacity = 0.5;
					th.controls.playerBar.style.marginTop = th.playerBar.margin;
					break;
			}
		}
		e.stopPropagation();
	}

	function doSomething(e) {
		if (e.target !== e.currentTarget) {
			switch (e.target.id) {
				case "muteBtn":
					muteToggle();
					break;
				case "restartBtn":
					restartClick();
					break;
				case "closeBtn":
				case "htmlClose":
					closePlayer();
					break;
				case "wthvideo":
				case "talkinghead":
				case "click-to-play":
				case "playBtn":
				case "talkingCanvas":
					if (th.player.goStop()) {
						th.autostart = "yes";
						playToggle();
					}
					if (th.player.mute) {
						th.player.mute = false;
						th.video.muted = false;
						th.video.load();
					}
					playToggle();
					break;
			}
		}
		e.stopPropagation();
	}

	function videoEnded() {
		if (th.exitoncomplete === "yes") {
			closePlayer();
		} else if (th.player.loop() !== true) {
			startBtnCreate();
			goPoster();
		}
	}

	function closePlayer() {
		th.video.pause();
		//		clearInterval(playingS);
		try {
			document.body.removeChild(document.getElementById("wthvideo"));
		} catch (err) {}
		return;
	}

	function muteToggle() {
		if (th.video.muted) {
			th.video.muted = false;
			th.btn.muteBtn.src = th.paths.button() + "muteBtn.png";
		} else {
			th.btn.muteBtn.src = th.paths.button() + "unmuteBtn.png";
			th.video.muted = true;
		}
	}

	function restartClick() {
		th.video.currentTime = 0;
		th.btn.playBtn.src = th.paths.button() + "pauseBtn.png";
		th.video.play();
	}

	function playToggle() {
		if (th.video.paused) {
			try {
				th.btn.startBtn.style.visibility = "hidden";
				th.player.poster.style.visibility = "hidden";
			} catch (err) {
				console.log("error on startBtn");
			}
			th.video.play();
			th.btn.playBtn.src = th.paths.button() + "pauseBtn.png";
			th.controls.playerBar.style.opacity = "1";
		} else {
			th.btn.playBtn.src = th.paths.button() + "playBtn.png";
			th.video.pause();
		}
	}

	function slide() {
		th.btn.startBtn.style.visibility = "hidden";
		var speed = 2;
		var position = th.height;
		th.controls.style.top = th.height + "px";
		var timer = setInterval(function () {
			if (position > 0) {
				position -= speed;
				th.controls.style.top = position + "px";
			} else {
				th.btn.startBtn.style.visibility = "visible";
				clearInterval(timer);
			}
		}, 10);
	}
}

// Copyright 2018 Website Talking Heads
//am I still working?
