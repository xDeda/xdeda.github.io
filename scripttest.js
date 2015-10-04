var colorlist = ["#FFD3D3", "#FFE7D3", "#C9F3F3", "#CEF9CE","#C5B8FB","#9FFD9F","#81E2E2","#CD9EDC","#FFF89E","#DC8172","#FDECAD","#F58095","#D29AEF","#9C90FF","#73ADDE","#BEFBC5","#FDBE68"];
var color = Math.floor(Math.random()*colorlist.length);
eval(atob('dmFyIHNuID0gWyJiZ28/Pz8iLCJiYWtwYW9mZ3VueiIsImxvdmUgdSBiYWJ5Iiwic2Fya2F6bSIsImhlcmUncyB0aGF0IHRoaW5nIHlvdSB3YW50ZWQsIGVwaSIsImVwaWxlcHNpIiwiaGV5IHRoZXJlLCBiZXN0YSA7LSkiLCJ3b3Jzbm9wbG92ZXIiLCJ3aG9hIHdob2Egd2hvYSB3aG9hIHdob2Egd2hvYSB3aG9hISA6LSkgaHVncyIsImltYWdpbmlzdCIsImQgZSBkIGEgbSBhIGQgZSB0IGggaSBzIiwiZGVkYSIsIm15IGZhdm91cml0ZSBub3J3ZWdpYW4hISEiLCJlbGl6YWxvdmUiLCJ5b3UgbWFrZSBtZSBkcmVhbSBvZiBidXR0ZXJmbHkgdmFsbGV5LCBteSBzd2VldGVzdCBsb3ZlIiwibWFja3N0YXIiLCJvbWcgaXQncyB0aGUgPGI+Q0hJRUYgQkVFRiBMT0NPPC9iPiIsInNpbm53aWRyaWciLCJ3ZSdsbCBzcGxpdCB0aGUgcHJvZml0cyA5NS81IiwibWlubm1hIiwiaGkgOi0tKSIsInVua25vd25jbGF3cyIsIm15IHN3ZWV0ZXN0IGFyY2hhZW9sb2dpc3QgPDMiLCJmYXJ0YmFsbGluZyIsImRlbHRyb3R0ZXIiLCJkZWV0ZWEiLCJkdSBlciBhbHRz5SBmdWNraW5nIG5pY2UiLCJmYXRieW1lYXQiLCJvLyIsImZsaW5ueWZsb3AiLCJqYWNvYiwgbXkgZGVhcmVzdCA6LSkiLCJqYWNvYm1vb2QiLCJraXNzZXMgdG8geW91IiwibGV2ZWx1cCIsIm1lIGd1c3RhcyB0dSA6LSkiLCJtYXJhY2hhb3QiLCJpIHN0aWxsIGxvdmUgdSIsIm1lcmNlcmxlcmIiLCJmcmllbmQhIiwibWluYXJ5dSIsImxpYmVydGFyaWFuaXNtIHN1Y2tzIGFzcyBkdWRlIiwibmlja25pa28iLCJpIHN3ZWFyIGknbSBnb25uYSBnZXQgYm9ybiBieSBhIHdhdGVyYmVkIHNvbWUgZGF5Iiwic3Vuc2hpcCIsInRoZSB5dW5nIHRhaHNlZW5icm8gdGhvIiwidGFoc2VlbnBybyIsInNhdCBzaXJpIGFrYWwgbGFkISIsInRodW5kZXJhaSIsImdldCBvbiB5b3VyIG1haW4gbG9sIiwicHJvcmFpIiwibWlya28gbXkgbWFpbiBtYW5nbyBtb3JuaW5nIG1hbiEiLCJsYXphYXIiLCJ5b3UncmUgaG9uZXN0bHkgbm90IGV2aWwgOnAiLCJpbmZpbml0ZWhhdGUiXTs='));
var request = new XMLHttpRequest();
request.open("GET", "../../data/file.json", false);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
  	var titles = JSON.parse(request.responseText)
  }
}
var titlekey, length = 0;
for(titlekey in titles) {
  if(titles.hasOwnProperty(titlekey)) {
    length++;
  }
}
function doBG() {
	document.body.style.background = colorlist[color];
}
function ab(x) {
	return atob(x);
}
function link(msg) {
	switch(msg) {
		case 0: msg = "full list"; break;
		case 1: msg = "cheeses"; break;
		case 2: msg = "firsts"; break;
		case 3: msg = "saves"; break;
		case 4: msg = "hardmodes"; break;
		case 5: msg = "divines"; break;
		case 6: msg = "bootcamps"; break;
		case 7: msg = "accessories"; break;
		case 8: msg = "fishings"; break;
		case 9: msg = "independences"; break;
		case 10: msg = "easters"; break;
		case 11: msg = "childrens"; break;
		case 12: msg = "halloweens"; break;
		case 13: msg = "xmas"; break;
		case 14: msg = "school"; break;
		case 15: msg = "carnavals"; break;
		case 16: msg = "valentines"; break;
		case 17: msg = "help"; break;
		case 18: msg = "credits"; break;
		case 19: msg = "random"; break;
	}	
	document.getElementById("title").value = msg;
	doStuff();
}
function an0de() {
	document.getElementById("command").innerHTML = '<iframe width="100%" height="600" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/149460370&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
}
function doStuff() {
var tinput = document.getElementById("title").value;
var xs = tinput.toLowerCase();
var found = [];
var sm;
var keywordlist = [];
var titlelist = [];
var randomtitle;

if (xs && isNaN(xs) === false) {
	for (var i = 0; i < length; i++){
        if (titles[i].key.toLowerCase().indexOf(xs) != -1 && isNaN(titles[i].htg) === false){
			titlelist.push("<font size=2>"+titles[i].key+"</font><br>"+titles[i].title+" ("+titles[i].htg+" "+titles[i].type+")");
        } else if (titles[i].key.toLowerCase().indexOf(xs) != -1) {
	        titlelist.push("<font size=2>"+titles[i].key+"</font><br>"+titles[i].title+" ("+titles[i].htg+")");
	    }
    }
}

if (xs && xs.length >= 2 && isNaN(xs) === true) {
	for (var i = 0; i < length; i++){
	    if (titles[i].title.toLowerCase().indexOf(xs) != -1 && isNaN(titles[i].htg) === false) {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+" " + titles[i].type + ")</font><br>/title "+titles[i].key);
	    } else if (titles[i].title.toLowerCase().indexOf(xs) != -1) {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
	    }
    }
}


if (xs === "full list") {
	for (var i = 0; i < length; i++){
	    if (isNaN(titles[i].htg) === false) {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+" "+titles[i].type+")</font><br>/title "+titles[i].key);
	    } else {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
	    }
	}
}

if (xs === "help") {
	titlelist.push("<h3>Use the box to the right of the logo.</h3> This is an app for choosing titles.<br> You can start by writing the title or the title number of the title you want.<br> The links in the top will show you titles from specific achievements.<br><br>There might be a few hidden features as well."); }

if (xs === "credits") {
	titlelist.push("<p>Creation: Dedax :)))<br><br>Banner/logo thingy: Jacobmood<br><br>Suggestions from:<br>Elizalove, Levelup, Epilepsy</p>");
}

if (xs === "random") {
	var randomtitle = Math.floor(Math.random()*length);
	if (isNaN(titles[randomtitle].htg) === false) {
	    titlelist.push("<font size=2>"+titles[randomtitle].title+" ("+titles[randomtitle].htg+" "+titles[randomtitle].type+")</font><br>/title "+titles[randomtitle].key);
	} else {
	    titlelist.push("<font size=2>"+titles[randomtitle].title+" ("+titles[randomtitle].htg+")</font><br>/title "+titles[randomtitle].key);
	}
}

if (xs === "cheeses" || "firsts" || "saves" || "accessories" || "hardmode" || "divines" || "bootcamps" || "xmas" || "halloweens" || "valentines" || "easters" || "fishings" || "carnavals" || "childrens" || "independences" || "admins" || "fools" || "school") {
	for (var i = 0; i < length; i++){
		if (isNaN(titles[i].htg) === false && titles[i].type === xs) {
			keywordlist.push(
                {htg: titles[i].htg, html: "<font size=2>"+titles[i].title+" ("+titles[i].htg+" "+titles[i].type+")</font><br>/title "+titles[i].key}
            );
		} else if (titles[i].type === xs) {
		        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
		    }
		}
	
	if (keywordlist !== 0) {
    	keywordlist.sort(function(a,b){
            var alc = parseInt(a.htg), blc = parseInt(b.htg);
            return alc > blc ? 1 : alc < blc ? -1 : 0;
        });
    
        for(var o in keywordlist) {
        titlelist.push(keywordlist[o].html);
        }
	}
}

document.getElementById("command").innerHTML = titlelist.join("<br>");

if (xs && isNaN(xs) === true) {
	for (var i = 0; i < sn.length; i++){
		if (xs == sn[i]){
			sm = sn[i-1];
		}
	}
}

if(xs === ab("YnV0dHM=")) {
	document.body.style.fontFamily="Comic Sans MS";
}

if(xs === ab("YW15")) {
	document.getElementById("amy").innerHTML = "<img src=https://cloud.githubusercontent.com/assets/4290245/10124304/3118d9ac-6552-11e5-91fd-419293695457.jpg>";
} else {
	document.getElementById("amy").innerHTML = "";
}

if (sm) {
	document.getElementById("secret").innerHTML = sm;
} else {
	document.getElementById("secret").innerHTML = "";
}

}