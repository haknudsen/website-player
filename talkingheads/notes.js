	player: {
		loop: function () {
			'use strict';
			if(th.autostart === "loop"){
				return true;
			}
			return false;
		},
		mute: function () {
			'use strict';
			if(th.autostart = mute){
				return true;
			}
			if(th.autostart === "oncethenmute" && th.storage.session === true){
				return true;
			}else{
				return false;
			}
		},
			autostart:function(){
				if(this.loop || this.mute){
					return true;
				}else{
					return false;
				}
			}


				switch (th.oncepersession) {
					case "yes":
						if (hasSeenSS === "true") {
							th.toPlay = false;
						} else {
							th.toPlay = true;
						}
						break;
					case "onceonly":
						if (hasSeenLS === "true") {
							th.toPlay = false;
						} else {
							th.toPlay = true;
						}
						break;
					default:
						th.toPlay = true;
						break;
				}
				switch (th.autostart) {
					case "onceonlythenmute":
					case "mute":
						th.autostart = "mute";
						break;
					case "onceonlythenpic":
						th.autostart = "no";
						break;
					default:
						th.autostart = "yes";
				}
	}