var colorlist = ["#FFD3D3", "#FFE7D3", "#C9F3F3", "#CEF9CE","#C5B8FB","#9FFD9F","#81E2E2","#CD9EDC","#FFF89E","#DC8172","#FDECAD","#F58095","#D29AEF","#9C90FF","#73ADDE","#BEFBC5","#FDBE68"];
var color = Math.floor(Math.random()*colorlist.length);
eval(atob('dmFyIHNuID0gWyJiZ28/Pz8iLCJiYWtwYW9mZ3VueiIsImxvdmUgdSBiYWJ5Iiwic2Fya2F6bSIsImhlcmUncyB0aGF0IHRoaW5nIHlvdSB3YW50ZWQsIGVwaSIsImVwaWxlcHNpIiwiaGV5IHRoZXJlLCBiZXN0YSA7LSkiLCJ3b3Jzbm9wbG92ZXIiLCJ3aG9hIHdob2Egd2hvYSB3aG9hIHdob2Egd2hvYSB3aG9hISA6LSkgaHVncyIsImltYWdpbmlzdCIsImQgZSBkIGEgbSBhIGQgZSB0IGggaSBzIiwiZGVkYSIsIm15IGZhdm91cml0ZSBub3J3ZWdpYW4hISEiLCJlbGl6YWxvdmUiLCJ5b3UgbWFrZSBtZSBkcmVhbSBvZiBidXR0ZXJmbHkgdmFsbGV5LCBteSBzd2VldGVzdCBsb3ZlIiwibWFja3N0YXIiLCJvbWcgaXQncyB0aGUgPGI+Q0hJRUYgQkVFRiBMT0NPPC9iPiIsInNpbm53aWRyaWciLCJ3ZSdsbCBzcGxpdCB0aGUgcHJvZml0cyA5NS81IiwibWlubm1hIiwiaGkgOi0tKSIsInVua25vd25jbGF3cyIsIm15IHN3ZWV0ZXN0IGFyY2hhZW9sb2dpc3QgPDMiLCJmYXJ0YmFsbGluZyIsImRlbHRyb3R0ZXIiLCJkZWV0ZWEiLCJkdSBlciBhbHRz5SBmdWNraW5nIG5pY2UiLCJmYXRieW1lYXQiLCJvLyIsImZsaW5ueWZsb3AiLCJqYWNvYiwgbXkgZGVhcmVzdCA6LSkiLCJqYWNvYm1vb2QiLCJraXNzZXMgdG8geW91IiwibGV2ZWx1cCIsIm1lIGd1c3RhcyB0dSA6LSkiLCJtYXJhY2hhb3QiLCJpIHN0aWxsIGxvdmUgdSIsIm1lcmNlcmxlcmIiLCJmcmllbmQhIiwibWluYXJ5dSIsImxpYmVydGFyaWFuaXNtIHN1Y2tzIGFzcyBkdWRlIiwibmlja25pa28iLCJpIHN3ZWFyIGknbSBnb25uYSBnZXQgYm9ybiBieSBhIHdhdGVyYmVkIHNvbWUgZGF5Iiwic3Vuc2hpcCIsInRoZSB5dW5nIHRhaHNlZW5icm8gdGhvIiwidGFoc2VlbnBybyIsInNhdCBzaXJpIGFrYWwgbGFkISIsInRodW5kZXJhaSIsImdldCBvbiB5b3VyIG1haW4gbG9sIiwicHJvcmFpIiwibWlya28gbXkgbWFpbiBtYW5nbyBtb3JuaW5nIG1hbiEiLCJsYXphYXIiLCJ5b3UncmUgaG9uZXN0bHkgbm90IGV2aWwgOnAiLCJpbmZpbml0ZWhhdGUiXTs='));
var titles=[{key:"0",title:"Little Mouse",type:"cheeses",htg:"Gather 0 cheese"}, {key:"1",title:"Shaman Disciple",type:"saves",htg:"10 saves"}, {key:"2",title:"Accomplished Shaman",type:"saves",htg:"100 saves"}, {key:"3",title:"Shaman",type:"saves",htg:"1000 saves"}, {key:"4",title:"Shaman Master",type:"saves",htg:"2000 saves"}, {key:"5",title:"Greedy Mouse",type:"cheeses",htg:"Gather 5 cheese"}, {key:"6",title:"Here ! Cheese !",type:"cheeses",htg:"Gather 20 cheese"}, {key:"7",title:"Yeeeeah Cheese ^^",type:"cheeses",htg:"Gather 100 cheese"}, {key:"8",title:"Cheeeeeese *-*",type:"cheeses",htg:"Gather 200 cheese"}, {key:"9",title:"Fast Mouse",type:"firsts",htg:"Get 1 first"}, {key:"10",title:"Agile Mouse",type:"firsts",htg:"Get 10 firsts"}, {key:"11",title:"Pirate Mouse",type:"firsts",htg:"Get 100 firsts"}, {key:"12",title:"Ninja Mouse",type:"firsts",htg:"Get 200 firsts"}, {key:"13",title:"Inspired Shaman",type:"saves",htg:"3000 saves"}, {key:"14",title:"Shaman Champion",type:"saves",htg:"4000 saves"}, {key:"15",title:"Glorious Shaman",type:"saves",htg:"5000 saves"}, {key:"16",title:"Shaman Duchess",type:"saves",htg:"6000 saves"}, {key:"17",title:"Shaman Princess",type:"saves",htg:"7000 saves"}, {key:"18",title:"Shaman Empress",type:"saves",htg:"8000 saves"}, {key:"19",title:"Legendary Shaman",type:"saves",htg:"9000 saves"}, {key:"20",title:"Immortal Shaman",type:"saves",htg:"10000 saves"}, {key:"21",title:"The Chosen Shaman",type:"saves",htg:"11000 saves"}, {key:"22",title:"Holy Shaman",type:"saves",htg:"12000 saves"}, {key:"23",title:"Shaman Oracle",type:"saves",htg:"13000 saves"}, {key:"24",title:"Shaman Prophet",type:"saves",htg:"14000 saves"}, {key:"25",title:"Shamarvelous",type:"saves",htg:"15000 saves"}, {key:"26",title:"Glutton Mouse",type:"cheeses",htg:"Gather 600 cheese"}, {key:"27",title:"Gleany",type:"cheeses",htg:"Gather 700 cheese"}, {key:"28",title:"Plumpy Mouse",type:"cheeses",htg:"Gather 800 cheese"}, {key:"29",title:"Paunchy Mouse",type:"cheeses",htg:"Gather 900 cheese"}, {key:"30",title:"Chubby Mouse",type:"cheeses",htg:"Gather 1000 cheese"}, {key:"31",title:"Fluffy Mouse",type:"cheeses",htg:"Gather 1100 cheese"}, {key:"32",title:"Tubby Mouse",type:"cheeses",htg:"Gather 1200 cheese"}, {key:"33",title:"The Chubby",type:"cheeses",htg:"Gather 1300 cheese"}, {key:"34",title:"The Puffy",type:"cheeses",htg:"Gather 1400 cheese"}, {key:"35",title:"Activist Mouse",type:"cheeses",htg:"Gather 300 cheese"}, {key:"36",title:"Unionized Mouse",type:"cheeses",htg:"Gather 400 cheese"}, {key:"37",title:"Mouse on Strike",type:"cheeses",htg:"Gather 500 cheese"}, {key:"38", title:"The Cheese Initiated", type:"cheeses", htg:"Gather 1500 cheese"}, {key:"39",title:"The Cheese Adept",type:"cheeses",htg:"Gather 1600 cheese"}, {key:"40",title:"The Cheese Priest",type:"cheeses",htg:"Gather 1700 cheese"}, {key:"41",title:"The Reaper",type:"cheeses",htg:"Gather 1800 cheese"}, {key:"42",title:"Rogue Mouse",type:"firsts",htg:"Get 300 firsts"}, {key:"43",title:"Looter",type:"firsts",htg:"Get 400 firsts"}, {key:"44",title:"Stalker",type:"firsts",htg:"Get 500 firsts"}, {key:"45",title:"Frothy Mouse",type:"firsts",htg:"Get 600 firsts"}, {key:"46",title:"The Silent",type:"firsts",htg:"Get 700 firsts"}, {key:"47",title:"Hawk Mouse",type:"firsts",htg:"Get 800 firsts"}, {key:"48",title:"Cobra Mouse",type:"firsts",htg:"Get 900 firsts"}, {key:"49",title:"Spidermouse",type:"firsts",htg:"Get 1000 firsts"}, {key:"50",title:"Quick Silver",type:"firsts",htg:"Get 1100 firsts"}, {key:"51",title:"Athletic Mouse",type:"firsts",htg:"Get 1200 firsts"}, {key:"52",title:"Hasty Mouse",type:"firsts",htg:"Get 1400 firsts"}, {key:"53",title:"Rocket Mouse",type:"firsts",htg:"Get 1600 firsts"}, {key:"54",title:"Sonic The Mouse",type:"firsts",htg:"Get 1800 firsts"}, {key:"55",title:"Pingless",type:"firsts",htg:"Get 2000 firsts"}, {key:"56",title:"Kamikaze",type:"firsts",htg:"Get 2200 firsts"}, {key:"57",title:"Warrior Mouse",type:"firsts",htg:"Get 2400 firsts"}, {key:"58",title:"Mach 1",type:"firsts",htg:"Get 2600 firsts"}, {key:"59",title:"Hunter",type:"firsts",htg:"Get 2800 firsts"}, {key:"60",title:"First!",type:"firsts",htg:"Get 3000 firsts"}, {key:"61",title:"Sniper",type:"firsts",htg:"Get 3200 firsts"}, {key:"62",title:"Flash",type:"firsts",htg:"Get 3400 firsts"}, {key:"63",title:"Supermouse",type:"firsts",htg:"Get 3600 firsts"}, {key:"64",title:"Light Speed",type:"firsts",htg:"Get 3800 firsts"}, {key:"65",title:"Time Traveler",type:"firsts",htg:"Get 4000 firsts"}, {key:"66",title:"Fast Wind",type:"firsts",htg:"Get 4500 firsts"}, {key:"67",title:"E=MouseC²",type:"firsts",htg:"Get 5000 firsts"}, {key:"68",title:"Jumper",type:"firsts",htg:"Get 5500 firsts"}, {key:"69",title:"The Untouchable",type:"firsts",htg:"Get 6000 firsts"}, {key:"70",title:"Wall-Jumper",type:"firsts",htg:"Get 10000 firsts"}, {key:"71",title:"LIGHTNING",type:"firsts",htg:"Get 40000 firsts"}, {key:"72",title:"Cheese Finder",type:"cheeses",htg:"Gather 2000 cheese"}, {key:"73",title:"Cheese Knight",type:"cheeses",htg:"Gather 2300 cheese"}, {key:"74",title:"Cheesegrubber",type:"cheeses",htg:"Gather 2700 cheese"}, {key:"75",title:"Fatty",type:"cheeses",htg:"Gather 3200 cheese"}, {key:"76",title:"Stout Mouse",type:"cheeses",htg:"Gather 3800 cheese"}, {key:"77",title:"Cheese Lover",type:"cheeses",htg:"Gather 4600 cheese"}, {key:"78",title:"Camembert",type:"cheeses",htg:"Gather 6000 cheese"}, {key:"79",title:"Pont-L'Évêque",type:"cheeses",htg:"Gather 7000 cheese"}, {key:"80",title:"Cheese Catcher",type:"cheeses",htg:"Gather 8000 cheese"}, {key:"81",title:"It's Over 9000",type:"cheeses",htg:"Gather 9001 cheese"}, {key:"82",title:"Collector",type:"cheeses",htg:"Gather 10000 cheese"}, {key:"83",title:"Cheeseleader",type:"cheeses",htg:"Gather 14000 cheese"}, {key:"84",title:"Cheese Thief",type:"cheeses",htg:"Gather 18000 cheese"}, {key:"85",title:"Cheese Creator",type:"cheeses",htg:"Gather 22000 cheese"}, {key:"86",title:"Cheese Pizza",type:"cheeses",htg:"Gather 26000 cheese"}, {key:"87",title:"Cheese Minister",type:"cheeses",htg:"Gather 30000 cheese"}, {key:"88",title:"Prodigy Mouse",type:"cheeses",htg:"Gather 34000 cheese"}, {key:"89", title:"Princess Of Transformice", type:"cheeses", htg:"Gather 38000 cheese"}, {key:"90",title:"Cheesoholic",type:"cheeses",htg:"Gather 42000 cheese"}, {key:"91",title:"The Cheesen One",type:"cheeses",htg:"Gather 46000 cheese"}, {key:"92",title:"Sailor Mouse",type:"cheeses",htg:"Gather 50000 cheese"}, {key:"93",title:"MAH CHEESE!",type:"cheeses",htg:"Gather 80000 cheese"}, {key:"94",title:"Ancient Shaman",type:"saves",htg:"16000 saves"}, {key:"95",title:"Fearless Shaman",type:"saves",htg:"18000 saves"}, {key:"96",title:"Almighty Shaman",type:"saves",htg:"20000 saves"}, {key:"97",title:"Architect Shaman",type:"saves",htg:"22000 saves"}, {key:"98",title:"Mademoiselle",type:"saves",htg:"24000 saves"}, {key:"99",title:"Lady Chamane",type:"saves",htg:"26000 saves"}, {key:"100",title:"Loved",type:"saves",htg:"28000 saves"}, {key:"101",title:"Magician",type:"saves",htg:"30000 saves"}, {key:"102",title:"Hero of",type:"saves",htg:"35000 saves"}, {key:"103",title:"Angel Shaman",type:"saves",htg:"40000 saves"}, {key:"104",title:"The Creator",type:"saves",htg:"45000 saves"}, {key:"105",title:"Absolute Shaman",type:"saves",htg:"50000 saves"}, {key:"106",title:"Miraculous Shaman",type:"saves",htg:"55000 saves"}, {key:"107",title:"Liberator",type:"saves",htg:"60000 saves"}, {key:"108",title:"Troll Shaman",type:"saves",htg:"65000 saves"}, {key:"109",title:"Ghost Shaman",type:"saves",htg:"70000 saves"}, {key:"110",title:"Spirit",type:"saves",htg:"75000 saves"}, {key:"111",title:"Demigoddess Shaman",type:"saves",htg:"80000 saves"}, {key:"112",title:"Last Hope",type:"saves",htg:"85000 saves"}, {key:"113",title:"Redeemer",type:"saves",htg:"90000 saves"}, {key:"114",title:"Alpha & Omega",type:"saves",htg:"140000 saves"}, {key:"115",title:"Nice Mouse",type:"accessories",htg:"Buy 1 accessory"}, {key:"116",title:"Adorable Mouse",type:"accessories",htg:"Buy 2 accessories"}, {key:"117",title:"Charming Mouse",type:"accessories",htg:"Buy 5 accessories"}, {key:"118",title:"Pretty Mouse",type:"accessories",htg:"Buy 10 accessories"}, {key:"119",title:"Cute Mouse",type:"accessories",htg:"Buy 15 accessories"}, {key:"120", title:"Frivolous Mouse", type:"accessories", htg:"Buy 20 accessories"}, {key:"121",title:"Snob Mouse",type:"accessories",htg:"Buy 25 accessories"}, {key:"122",title:"Stylish Mouse",type:"accessories",htg:"Buy 30 accessories"}, {key:"123",title:"Actress Mouse",type:"accessories",htg:"Buy 35 accessories"}, {key:"124",title:"Fashion Mouse",type:"accessories",htg:"Buy 40 accessories"}, {key:"125",title:"Sexy",type:"accessories",htg:"Buy 45 accessories"}, {key:"126",title:"SuperStar",type:"accessories",htg:"Buy 50 accessories"}, {key:"127",title:"Little Snowflake",type:"xmas",htg:"Christmas 2011"}, {key:"128",title:"Christmas Spirit",type:"xmas",htg:"Christmas 2011"}, {key:"129",title:"Little Pixie",type:"xmas",htg:"Christmas 2011"}, {key:"130",title:"Santa Claus",type:"xmas",htg:"Christmas 2011"}, {key:"138", title:"Evian Mouse", type:"butts", htg:"<a href='http://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click Here To Get It</a>"}, {key:"200",title:"Goddess Shaman",type:"saves",htg:"100000 saves"}, {key:"202",title:"The Wind Master",type:"firsts",htg:"Get 20000 firsts"}, {key:"210",title:"Alluring Mouse ",type:"valentines",htg:"Valentines 2014"}, {key:"211",title:"Temptress",type:"valentines",htg:"Valentines 2014"}, {key:"212",title:"Latin Lover",type:"valentines",htg:"Valentines 2014"}, {key:"213",title:"Decorator",type:"hardmodes",htg:"500 hard mode saves"}, {key:"214",title:"Builder",type:"hardmodes",htg:"2000 hard mode saves"}, {key:"215",title:"Manufacturer",type:"hardmodes",htg:"4000 hard mode saves"}, {key:"216",title:"Technician",type:"hardmodes",htg:"7000 hard mode saves"}, {key:"217",title:"Mechanic",type:"hardmodes",htg:"10000 hard mode saves"}, {key:"218",title:"Specialist",type:"hardmodes",htg:"14000 hard mode saves"}, {key:"219",title:"Inventor",type:"hardmodes",htg:"18000 hard mode saves"}, {key:"220",title:"Engineer",type:"hardmodes",htg:"22000 hard mode saves"}, {key:"221", title:"Inventive Mouse", type:"hardmodes", htg:"26000 hard mode saves"}, {key:"222", title:"Ingenious Mouse", type:"hardmodes", htg:"30000 hard mode saves"}, {key:"223",title:"Virtuoso",type:"hardmodes",htg:"34000 hard mode saves"}, {key:"224",title:"Sprinter",type:"firsts",htg:"Get 12000 firsts"}, {key:"225",title:"Batmouse",type:"firsts",htg:"Get 14000 firsts"}, {key:"226",title:"The Unseen",type:"firsts",htg:"Get 16000 firsts"}, {key:"227",title:"Unstoppable",type:"firsts",htg:"Get 18000 firsts"}, {key:"228",title:"¡Ándale! ¡Ándale!",type:"firsts",htg:"Get 25000 firsts"}, {key:"229",title:"Torpedo",type:"firsts",htg:"Get 30000 firsts"}, {key:"230",title:"Speedy Gorgonzola",type:"firsts",htg:"Get 35000 firsts"}, {key:"231",title:"Dynamite",type:"firsts",htg:"Get 7000 firsts"}, {key:"232",title:"Speedmaster",type:"firsts",htg:"Get 8000 firsts"}, {key:"233",title:"Whirlwind",type:"firsts",htg:"Get 9000 firsts"}, {key:"234",title:"Om Nom Nom",type:"cheeses",htg:"Gather 55000 cheese"}, {key:"235",title:"*-*",type:"cheeses",htg:"Gather 60000 cheese"}, {key:"236",title:"Cheese Addict",type:"cheeses",htg:"Gather 65000 cheese"}, {key:"237",title:"Cheesus",type:"cheeses",htg:"Gather 70000 cheese"}, {key:"238",title:"Queen of Cheese",type:"cheeses",htg:"Gather 75000 cheese"}, {key:"240",title:"Cookies",type:"xmas",htg:"Christmas 2011"}, {key:"241",title:"Christmas Cake",type:"xmas",htg:"Christmas 2011"}, {key:"242",title:"Whitebeard",type:"xmas",htg:"Christmas 2011"}, {key:"243",title:"Generous",type:"xmas",htg:"Christmas 2011"}, {key:"244",title:"Snowy",type:"xmas",htg:"Christmas 2011"}, {key:"245",title:"Snowstorm",type:"xmas",htg:"Christmas 2011"}, {key:"246",title:"Dauphine",type:"cosplay",htg:"Cosplay Contest 2011"}, {key:"247",title:"Foxy",type:"cosplay",htg:"Cosplay Contest 2011"}, {key:"248", title:"Miss Transformice", type:"cosplay", htg:"Cosplay Contest 2011"}, {key:"249",title:"Omelettovore",type:"valentines",htg:"Valentines 2014"}, {key:"250",title:"My Cutie Pie",type:"valentines",htg:"Valentines 2014"}, {key:"252", title:"Souris Lilloise", type:"meetup", htg:"March 2012 Transformice meetup"}, {key:"253",title:"Tonnerre de Brest",type:"fools",htg:"April Fools Day"}, {key:"254",title:"Chocovore",type:"easters",htg:"Easter 2014"}, {key:"255",title:"Chocobunny",type:"easters",htg:"Easter 2014"}, {key:"256",title:"Rookie",type:"bootcamps",htg:"Finish 1 bootcamp map"}, {key:"257",title:"Neophyte",type:"bootcamps",htg:"Finish 3 bootcamp maps"}, {key:"258",title:"Private",type:"bootcamps",htg:"Finish 5 bootcamp maps"}, {key:"259",title:"Deft Mouse",type:"bootcamps",htg:"Finish 7 bootcamp maps"}, {key:"260", title:"Solo Artist", type:"bootcamps", htg:"Finish 10 bootcamp maps"}, {key:"261",title:"Corporal",type:"bootcamps",htg:"Finish 15 bootcamp maps"}, {key:"262", title:"Accurate Mouse", type:"bootcamps", htg:"Finish 20 bootcamp maps"}, {key:"263",title:"Bootcamper",type:"bootcamps",htg:"Finish 25 bootcamp maps"}, {key:"264",title:"Sergeant",type:"bootcamps",htg:"Finish 30 bootcamp maps"}, {key:"265", title:"Corner Jumper", type:"bootcamps", htg:"Finish 40 bootcamp maps"}, {key:"266", title:"Skilled Mouse", type:"bootcamps", htg:"Finish 50 bootcamp maps"}, {key:"267",title:"Lieutenant",type:"bootcamps",htg:"Finish 60 bootcamp maps"}, {key:"268",title:"Longjumper",type:"bootcamps",htg:"Finish 70 bootcamp maps"}, {key:"269", title:"Incredimouse", type:"bootcamps", htg:"Finish 80 bootcamp maps"}, {key:"270", title:"Bootcamp Addict", type:"bootcamps", htg:"Finish 90 bootcamp maps"}, {key:"271",title:"Captain",type:"bootcamps",htg:"Finish 100 bootcamp maps"}, {key:"272", title:"Dexterous Mouse", type:"bootcamps", htg:"Finish 120 bootcamp maps"}, {key:"273",title:"Maniac",type:"bootcamps",htg:"Finish 140 bootcamp maps"}, {key:"274",title:"Major",type:"bootcamps",htg:"Finish 160 bootcamp maps"}, {key:"275", title:"Cheese Artist", type:"bootcamps", htg:"Finish 180 bootcamp maps"}, {key:"276",title:"Acrobat",type:"bootcamps",htg:"Finish 200 bootcamp maps"}, {key:"277",title:"Colonel",type:"bootcamps",htg:"Finish 250 bootcamp maps"}, {key:"278", title:"Shortcutter", type:"bootcamps", htg:"Finish 300 bootcamp maps"}, {key:"279",title:"Tarzan",type:"bootcamps",htg:"Finish 350 bootcamp maps"}, {key:"280",title:"Général",type:"bootcamps",htg:"Finish 400 bootcamp maps"}, {key:"281", title:"Living Legend", type:"bootcamps", htg:"Finish 500 bootcamp maps"}, {key:"282", title:"Stuntmouse", type:"bootcamps", htg:"Finish 600 bootcamp maps"}, {key:"283",title:"Pro",type:"bootcamps",htg:"Finish 700 bootcamp maps"}, {key:"284", title:"Chuck Souris", type:"bootcamps", htg:"Finish 800 bootcamp maps"}, {key:"285", title:"Queen of Bootcamp", type:"bootcamps", htg:"Finish 900 bootcamp maps"}, {key:"286", title:"Gravity Master", type:"bootcamps", htg:"Finish 1000 bootcamp maps"}, {key:"287",title:"Vampire",type:"halloweens",htg:"Halloween 2013"}, {key:"288",title:"Snowball",type:"xmas",htg:"Christmas 2012"}, {key:"289",title:"I'm cold",type:"xmas",htg:"Christmas 2012"}, {key:"290",title:"Grilled Chestnut",type:"xmas",htg:"Christmas 2012"}, {key:"291",title:"Chaussette",type:"xmas",htg:"Christmas 2012"}, {key:"292",title:"Souris Sapin",type:"xmas",htg:"Christmas 2012"}, {key:"293",title:"Cookies Eater",type:"xmas",htg:"Christmas 2012"}, {key:"294",title:"I Cheese You",type:"valentines",htg:"Valentines 2014"}, {key:"295",title:"Chicken",type:"easters",htg:"Easter 2014"}, {key:"296",title:"Explorer",type:"fishings",htg:"Fishing 2013"}, {key:"297",title:"Sardine",type:"fishings",htg:"Fishing 2013"}, {key:"298",title:"Fishermouse",type:"fishings",htg:"Fishing 2013"}, {key:"299",title:"Adorer",type:"fishings",htg:"Fishing 2013"}, {key:"300",title:"Frankenmaus",type:"halloweens",htg:"Halloween 2013"}, {key:"301",title:"Candy *-*",type:"halloweens",htg:"Halloween 2013"}, {key:"302",title:"Pumpkin Juice",type:"halloweens",htg:"Halloween 2013"}, {key:"303",title:"Trick or Treat",type:"halloweens",htg:"Halloween 2013"}, {key:"304",title:"Poltergeist",type:"halloweens",htg:"Halloween 2013"}, {key:"305",title:"Halloween 2012",type:"halloweens",htg:"Halloween 2013"}, {key:"306",title:"Halloween 2013",type:"halloweens",htg:"Halloween 2013"}, {key:"307",title:"Von Drekkemaus",type:"halloweens",htg:"Halloween 2013"}, {key:"308",title:"Candy Cane",type:"xmas",htg:"Christmas 2013"}, {key:"309",title:"Fairy Lights",type:"xmas",htg:"Christmas 2013"}, {key:"310",title:"Papaille Noel",type:"xmas",htg:"Christmas 2013"}, {key:"311",title:"Elfette",type:"xmas",htg:"Christmas 2013"}, {key:"312",title:"Snow Angel",type:"xmas",htg:"Christmas 2013"}, {key:"313",title:"Just Married",type:"valentines",htg:"Valentines 2014"}, {key:"314",title:"Candy Apple",type:"valentines",htg:"Valentines 2014"}, {key:"315",title:"Broken Heart",type:"valentines",htg:"Valentines 2014"}, {key:"316",title:"Honeymoon",type:"valentines",htg:"Valentines 2014"}, {key:"317",title:"Carnaval 2014",type:"carnavals",htg:"Carnaval 2014"}, {key:"318",title:"Churros",type:"carnavals",htg:"Carnaval 2014"}, {key:"319",title:"Partygoer",type:"carnavals",htg:"Carnaval 2014"}, {key:"320",title:"Cock-a-doodle-doo",type:"easters",htg:"Easter 2014"}, {key:"321",title:"Cocoa",type:"easters",htg:"Easter 2014"}, {key:"322",title:"Egg hunter",type:"easters",htg:"Easter 2014"}, {key:"323", title:"Childish Mouse", type:"childrens", htg:"Children's Day 2014"}, {key:"324",title:"Smart",type:"divines",htg:"500 divine mode saves"}, {key:"326", title:"Mice's friend", type:"divines", htg:"2000 divine mode saves"}, {key:"327",title:"Professor",type:"divines",htg:"4000 divine mode saves"}, {key:"328",title:"Designer",type:"divines",htg:"7000 divine mode saves"}, {key:"329",title:"Mysterious",type:"divines",htg:"10000 divine mode saves"}, {key:"330",title:"Shamazing",type:"divines",htg:"15000 divine mode saves"}, {key:"331", title:"Cheese Detector", type:"divines", htg:"20000 divine mode saves"}, {key:"332",title:"The Brain",type:"divines",htg:"25000 divine mode saves"}, {key:"333",title:"Majestic",type:"divines",htg:"30000 divine mode saves"}, {key:"334",title:"Divinity",type:"divines",htg:"40000 divine mode saves"}, {key:"335",title:"What the Fish",type:"fishings",htg:"Fishing 2014"}, {key:"336",title:"Fromagic",type:"fishings",htg:"Fishing 2014"}, {key:"337",title:"Yeeehaaaa!",type:"fishings",htg:"Fishing 2014"}, {key:"338",title:"Best Trainer",type:"fishings",htg:"Fishing 2014"}, {key:"339",title:"All Aboard!",type:"fishings",htg:"Fishing 2014"}, {key:"340",title:"herp derp",type:"fishings",htg:"Fishing 2014"}, {key:"341",title:"Captain Nemouse",type:"fishings",htg:"Fishing 2014"}, {key:"342",title:"Indiana Mouse",type:"fishings",htg:"Fishing 2014"}, {key:"343",title:"Casper",type:"halloweens",htg:"Halloween 2014"}, {key:"344",title:"Pumpkin Pie",type:"halloweens",htg:"Halloween 2014"}, {key:"345",title:"Ghostbuster",type:"halloweens",htg:"Halloween 2014"}, {key:"346",title:"Zombie",type:"halloweens",htg:"Halloween 2014"}, {key:"347",title:"Vampire Slayer",type:"halloweens",htg:"Halloween 2014"}, {key:"348",title:"Spooky",type:"halloweens",htg:"Halloween 2014"}, {key:"349",title:"Sweet Tooth",type:"halloweens",htg:"Halloween 2014"}, {key:"350",title:"Wintry",type:"xmas",htg:"Christmas 2014"}, {key:"351",title:"Gingerbread",type:"xmas",htg:"Christmas 2014"}, {key:"352",title:"Polar Mouse",type:"xmas",htg:"Christmas 2014"}, {key:"353",title:"Big Turkey",type:"xmas",htg:"Christmas 2014"}, {key:"354",title:"Christmas Savior",type:"xmas",htg:"Christmas 2014"}, {key:"355",title:"Angry Mouse",type:"easters",htg:"Easter 2015"}, {key:"356",title:"Caramel Duchess",type:"easters",htg:"Easter 2015"}, {key:"357",title:"King's Pastry Chef",type:"easters",htg:"Easter 2015"}, {key:"358",title:"Cake Face",type:"easters",htg:"Easter 2015"}, {key:"359",title:"Candy Lord",type:"easters",htg:"Easter 2015"}, {key:"360",title:"Model Student",type:"childrens",htg:"Children's Day 2015"}, {key:"361",title:"Dora the Explorer",type:"fishings",htg:"Fishing 2015"}, {key:"362",title:"Archaeologist Mouse",type:"fishings",htg:"Fishing 2015"}, {key:"363",title:"Allan Quatermouse",type:"fishings",htg:"Fishing 2015"}, {key:"364",title:"Patriotic",type:"independences",htg:"USA USA USA USA!!!!"}, {key:"365",title:"Sans-culotte",type:"independences",htg:"Bastille Day"}, {key:"366",title:"Dunce",type:"school",htg:"Back to School 2015"}, {key:"367", title:"First in the Class", type:"school", htg:"Back to School 2015"}, {key:"368",title:"Bookmouse",type:"school",htg:"Back to School 2015"}, {key:"369",title:"Academician",type:"school",htg:"Back to School 2015"}, {key:"370",title:"Namaste",type:"independences",htg:"India Independence Day"}, {key:"440",title:"Fromadmin",type:"admins",htg:"Transformice admin"}, {key:"442",title:"Sourigami",type:"admins",htg:"Transformice admin"}, {key:"444",title:"La Belette",type:"admins",htg:"Transformice admin"}, {key:"445",title:"El Pinolero",type:"admins",htg:"Transformice admin"}, {key:"447",title:"Kikoo Admin",type:"admins",htg:"Transformice admin"}, {key:"448",title:"Queijadinha",type:"admins",htg:"Transformice admin"}, {key:"446",title:"Dehset Admin",type:"admins",htg:"Transformice admin"}, {key:"449",title:"La Goulue",type:"admins",htg:"Transformice admin"}, {key:"450",title:"Souris Électrique",type:"admins",htg:"Transformice admin"}, {key:"451",title:"Gold Saint",type:"admins",htg:"Transformice admin"}];
function doBG() {
	document.body.style.background = colorlist[color];
}
catmode = 0;
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
var tinput = document.getElementById("title").value;
var xs = tinput.toLowerCase();
var found = [];
var sm;
var keywordlist = [];
var titlelist = [];
var randomtitle;

if (xs && isNaN(xs) === false) {
	for (var i = 0; i < titles.length; i++){
        if (titles[i].key.toLowerCase().indexOf(xs) != -1) {
	        titlelist.push("<font size=2>"+titles[i].key+"</font><br>"+titles[i].title+" ("+titles[i].htg+")");
	    }
    }
}

if (xs && xs.length >= 2 && isNaN(xs) === true) {
	for (var i = 0; i < titles.length; i++){
	    if (titles[i].title.toLowerCase().indexOf(xs) != -1) {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
	    }
    }
}


if (xs === "full list") {
	for (var i = 0; i < titles.length; i++){
	    titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
	}
}

if (xs === "help") {
	titlelist.push("<h3>Use the box to the right of the logo.</h3> This is an app for choosing titles.<br> You can start by writing the title or the title number of the title you want.<br> The links in the top will show you titles from specific achievements.<br><br>There might be a few hidden features as well."); }

if (xs === "credits") {
	titlelist.push("<p>Creation: Dedax :)))<br><br>Banner/logo thingy: Jacobmood<br><br>Suggestions from:<br>Elizalove, Levelup, Epilepsy</p>");
}

if (xs === "random") {
	var randomtitle = Math.floor(Math.random()*titles.length);
	titlelist.push("<font size=2>"+titles[randomtitle].title+" ("+titles[randomtitle].htg+")</font><br>/title "+titles[randomtitle].key);
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
        titlelist.push("<font size=2>" + keywordlist[i].title + " (" + keywordlist[i].htg + ")</font><br>/title " + keywordlist[i].key);
      }
    }
  }

document.getElementById("command").innerHTML = titlelist.join("<br>");

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