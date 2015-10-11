var colorlist = ["#FFD3D3", "#FFE7D3", "#C9F3F3", "#CEF9CE","#C5B8FB","#9FFD9F","#81E2E2","#CD9EDC","#FFF89E","#DC8172","#FDECAD","#F58095","#D29AEF","#9C90FF","#73ADDE","#BEFBC5","#FDBE68"];
var color = Math.floor(Math.random()*colorlist.length);
eval(atob('dmFyIHNuID0gWyJiZ28/Pz8iLCJiYWtwYW9mZ3VueiIsImxvdmUgdSBiYWJ5Iiwic2Fya2F6bSIsImhlcmUncyB0aGF0IHRoaW5nIHlvdSB3YW50ZWQsIGVwaSIsImVwaWxlcHNpIiwiaGV5IHRoZXJlLCBiZXN0YSA7LSkiLCJ3b3Jzbm9wbG92ZXIiLCJ3aG9hIHdob2Egd2hvYSB3aG9hIHdob2Egd2hvYSB3aG9hISA6LSkgaHVncyIsImltYWdpbmlzdCIsImQgZSBkIGEgbSBhIGQgZSB0IGggaSBzIiwiZGVkYSIsIm15IGZhdm91cml0ZSBub3J3ZWdpYW4hISEiLCJlbGl6YWxvdmUiLCJ5b3UgbWFrZSBtZSBkcmVhbSBvZiBidXR0ZXJmbHkgdmFsbGV5LCBteSBzd2VldGVzdCBsb3ZlIiwibWFja3N0YXIiLCJvbWcgaXQncyB0aGUgPGI+Q0hJRUYgQkVFRiBMT0NPPC9iPiIsInNpbm53aWRyaWciLCJ3ZSdsbCBzcGxpdCB0aGUgcHJvZml0cyA5NS81IiwibWlubm1hIiwiaGkgOi0tKSIsInVua25vd25jbGF3cyIsIm15IHN3ZWV0ZXN0IGFyY2hhZW9sb2dpc3QgPDMiLCJmYXJ0YmFsbGluZyIsImRlbHRyb3R0ZXIiLCJkZWV0ZWEiLCJkdSBlciBhbHRz5SBmdWNraW5nIG5pY2UiLCJmYXRieW1lYXQiLCJvLyIsImZsaW5ueWZsb3AiLCJqYWNvYiwgbXkgZGVhcmVzdCA6LSkiLCJqYWNvYm1vb2QiLCJraXNzZXMgdG8geW91IiwibGV2ZWx1cCIsIm1lIGd1c3RhcyB0dSA6LSkiLCJtYXJhY2hhb3QiLCJpIHN0aWxsIGxvdmUgdSIsIm1lcmNlcmxlcmIiLCJmcmllbmQhIiwibWluYXJ5dSIsImxpYmVydGFyaWFuaXNtIHN1Y2tzIGFzcyBkdWRlIiwibmlja25pa28iLCJpIHN3ZWFyIGknbSBnb25uYSBnZXQgYm9ybiBieSBhIHdhdGVyYmVkIHNvbWUgZGF5Iiwic3Vuc2hpcCIsInRoZSB5dW5nIHRhaHNlZW5icm8gdGhvIiwidGFoc2VlbnBybyIsInNhdCBzaXJpIGFrYWwgbGFkISIsInRodW5kZXJhaSIsImdldCBvbiB5b3VyIG1haW4gbG9sIiwicHJvcmFpIiwibWlya28gbXkgbWFpbiBtYW5nbyBtb3JuaW5nIG1hbiEiLCJsYXphYXIiLCJ5b3UncmUgaG9uZXN0bHkgbm90IGV2aWwgOnAiLCJpbmZpbml0ZWhhdGUiXTs='));
var titles = []
$.getJSON('titles.json', function(data){
  titles = $.parseJSON(data);
})
function doBG() {
	document.body.style.background = colorlist[color];
}
var catmode = 0;
var addcopy = 0;
function cat() {
	if (catmode == 0) {
		catmode = 1;
		document.getElementById("cat").innerHTML = "cat-mode: on";
	}
	else if (catmode == 1) {
		catmode = 0;
		document.getElementById("cat").innerHTML = "cat-mode: off";
	}
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
	document.getElementById("command").innerHTML = '<iframe width="100%" height="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/149460370&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>';
}
function doStuff() {
document.getElementById("command").className = "command";
setTimeout(function () {document.getElementById("command").className = "command show";}, 25);  
var tinput = document.getElementById("title").value;
var xs = tinput.toLowerCase();
var found = [];
var sm;
var keywordlist = [];
var titlelist = [];
var copylist = [];
var randomtitle;
var titlecmd;

if (xs && isNaN(xs) === false) {
	for (var i = 0; i < titles.length; i++){
        if (titles[i].key.toLowerCase().indexOf(xs) != -1) {
	    	if (titlelist.length == 0) {
		    	titlecmd = "/title "+titles[i].key;
				copylist.push("lmc_id="+i+";lmc_set_dom_html('title"+i+"',lmc_get_button('"+titlecmd+"',"+i+",cfg));");
	    	    titlelist.push("<font size=2>/title "+titles[i].key+"<span id='title"+i+"' class='col-button'>button</span></font><br>"+titles[i].title+" ("+titles[i].htg+")");
			} else {
				titlelist.push("<font size=2>/title "+titles[i].key+"</font><br>"+titles[i].title+" ("+titles[i].htg+")");
			}
	    }
    }
}

if (xs && xs.length >= 2 && isNaN(xs) === true) {
	for (var i = 0; i < titles.length; i++){
	    if (titles[i].title.toLowerCase().indexOf(xs) != -1) {
	    	if (titlelist.length == 0) {
		    	titlecmd = "/title "+titles[i].key;
				copylist.push("lmc_id="+i+";lmc_set_dom_html('title"+i+"',lmc_get_button('"+titlecmd+"',"+i+",cfg));");
				titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key+"<span id='title"+i+"' class='col-button-s'>button</span>");
			} else {
				titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
			}
	    }
	}
}


if (xs === "full list") {
	for (var i = 0; i < titles.length; i++){
		titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
	}
}

if (xs === "help") {
	titlelist.push("<h2>Use the box to the right of the logo.</h2><h4>- Type part of a title or type the title number.<br>- Press the little \"C\" button to copy.<br>- The links in the top will show you titles from specific achievements.</h4>There might be a few hidden features as well."); }

if (xs === "credits") {
	titlelist.push("<h3>Creation:</h3> Dedax <h3>Banner:</h3> Jacobmood <h4>Suggestions from:</h4>Elizalove, Levelup, Epilepsy, Imaginist<br><br><b>Copy-button:</b> <a href='http://www.lettersmarket.com/lmcbutton.html'>lmcbutton2</a>");
}

if (xs === "random") {
	var randomtitle = Math.floor(Math.random()*titles.length);
	titlecmd = "/title "+titles[randomtitle].key;
	copylist.push("lmc_id="+randomtitle+";lmc_set_dom_html('title"+randomtitle+"',lmc_get_button('"+titlecmd+"',"+randomtitle+",cfg));");
	titlelist.push("<font size=2>"+titles[randomtitle].title+" ("+titles[randomtitle].htg+")</font><br>/title "+titles[randomtitle].key+"<span id='title"+randomtitle+"' class='col-button-s'>button</span>");
}

if (xs === "cheeses" || "firsts" || "saves" || "accessories" || "hardmode" || "divines" || "bootcamps" || "xmas" || "halloweens" || "valentines" || "easters" || "fishings" || "carnavals" || "childrens" || "independences" || "admins" || "fools" || "school") {
    for (var i = 0; i < titles.length; i++) {
      if (titles[i].type === xs) {
        keywordlist.push(titles[i]);
      }
    }

    if (keywordlist !== 0) {
      keywordlist.sort(function(a, b) {
        var alc = parseInt(a.htg.replace(/^\D+|\D+$/g, "")),
          blc = parseInt(b.htg.replace(/^\D+|\D+$/g, ""));
        return alc > blc ? 1 : alc < blc ? -1 : 0;
      });

      for (var i = 0; i < keywordlist.length; i++) {
        titlelist.push("<font size=2>"+keywordlist[i].title+" ("+keywordlist[i].htg+")</font><br>/title "+keywordlist[i].key);
	  }
    }
}

var copying = "var cfg={caption:'C',height:'20',width:'20',clr_bck:'eaeaea',clr_txt:'111111'};"+copylist.join("");

document.getElementById("command").innerHTML = titlelist.join("<br>");
eval(copying);

if (catmode == 1) {
	cat = document.getElementById("command").innerHTML;
	cat = cat.replace(/mouse/gi, "Cat");
	cat = cat.replace(/mice/gi, "Cat");
	document.getElementById("command").innerHTML = cat;
}

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
	document.getElementById(ab("YW15Y29udGFpbmVy")).style.display = "block";
} else {
	document.getElementById(ab("YW15Y29udGFpbmVy")).style.display = "none";
}

if (sm) {
	document.getElementById("secret").innerHTML = "| <b>"+sm+"</b>";
} else {
	document.getElementById("secret").innerHTML = "";
}

function cat() {
	if (catmode == 0) {
		catmode = 1;
		document.getElementById("cat").innerHTML = "cat-mode: on";
	}
	else if (catmode == 1) {
		catmode = 0;
		document.getElementById("cat").innerHTML = "cat-mode: off";
	}
}

}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-68128014-1', 'auto');
ga('send', 'pageview');
