var colorlist = ["#FFD3D3", "#FFE7D3", "#C9F3F3", "#CEF9CE","#C5B8FB","#9FFD9F","#81E2E2","#CD9EDC","#FFF89E","#DC8172","#FDECAD","#F58095","#D29AEF","#9C90FF","#73ADDE","#BEFBC5","#FDBE68"];
var color = Math.floor(Math.random()*colorlist.length);
eval(atob('dmFyIHNuID0gWyJiZ28/Pz8iLCJiYWtwYW9mZ3VueiIsImxvdmUgdSBiYWJ5Iiwic2Fya2F6bSIsImhlcmUncyB0aGF0IHRoaW5nIHlvdSB3YW50ZWQsIGVwaSIsImVwaWxlcHNpIiwiaGV5IHRoZXJlLCBiZXN0YSA7LSkiLCJ3b3Jzbm9wbG92ZXIiLCJ3aG9hIHdob2Egd2hvYSB3aG9hIHdob2Egd2hvYSB3aG9hISA6LSkgaHVncyIsImltYWdpbmlzdCIsImQgZSBkIGEgbSBhIGQgZSB0IGggaSBzIiwiZGVkYSIsIm15IGZhdm91cml0ZSBub3J3ZWdpYW4hISEiLCJlbGl6YWxvdmUiLCJ5b3UgbWFrZSBtZSBkcmVhbSBvZiBidXR0ZXJmbHkgdmFsbGV5LCBteSBzd2VldGVzdCBsb3ZlIiwibWFja3N0YXIiLCJvbWcgaXQncyB0aGUgPGI+Q0hJRUYgQkVFRiBMT0NPPC9iPiIsInNpbm53aWRyaWciLCJ3ZSdsbCBzcGxpdCB0aGUgcHJvZml0cyA5NS81IiwibWlubm1hIiwiaGkgOi0tKSIsInVua25vd25jbGF3cyIsIm15IHN3ZWV0ZXN0IGFyY2hhZW9sb2dpc3QgPDMiLCJmYXJ0YmFsbGluZyIsImRlbHRyb3R0ZXIiLCJkZWV0ZWEiLCJkdSBlciBhbHRz5SBmdWNraW5nIG5pY2UiLCJmYXRieW1lYXQiLCJvLyIsImZsaW5ueWZsb3AiLCJqYWNvYiwgbXkgZGVhcmVzdCA6LSkiLCJqYWNvYm1vb2QiLCJraXNzZXMgdG8geW91IiwibGV2ZWx1cCIsIm1lIGd1c3RhcyB0dSA6LSkiLCJtYXJhY2hhb3QiLCJpIHN0aWxsIGxvdmUgdSIsIm1lcmNlcmxlcmIiLCJmcmllbmQhIiwibWluYXJ5dSIsImxpYmVydGFyaWFuaXNtIHN1Y2tzIGFzcyBkdWRlIiwibmlja25pa28iLCJpIHN3ZWFyIGknbSBnb25uYSBnZXQgYm9ybiBieSBhIHdhdGVyYmVkIHNvbWUgZGF5Iiwic3Vuc2hpcCIsInRoZSB5dW5nIHRhaHNlZW5icm8gdGhvIiwidGFoc2VlbnBybyIsInNhdCBzaXJpIGFrYWwgbGFkISIsInRodW5kZXJhaSIsImdldCBvbiB5b3VyIG1haW4gbG9sIiwicHJvcmFpIiwibWlya28gbXkgbWFpbiBtYW5nbyBtb3JuaW5nIG1hbiEiLCJsYXphYXIiLCJ5b3UncmUgaG9uZXN0bHkgbm90IGV2aWwgOnAiLCJpbmZpbml0ZWhhdGUiXTs='));
var titles=[{key:"0",title:"Little Mouse",type:"cheeses",htg:"0"},{key:"1",title:"Shaman Disciple",type:"saves",htg:"10"},{key:"2",title:"Accomplished Shaman",type:"saves",htg:"100"},{key:"3",title:"Shaman",type:"saves",htg:"1000"},{key:"4",title:"Shaman Master",type:"saves",htg:"2000"},{key:"5",title:"Greedy Mouse",type:"cheeses",htg:"5"},{key:"6",title:"Here ! Cheese !",type:"cheeses",htg:"20"},{key:"7",title:"Yeeeeah Cheese ^^",type:"cheeses",htg:"100"},{key:"8",title:"Cheeeeeese *-*",type:"cheeses",htg:"200"},{key:"9",title:"Fast Mouse",type:"firsts",htg:"1"},{key:"10",title:"Agile Mouse",type:"firsts",htg:"10"},{key:"11",title:"Pirate Mouse",type:"firsts",htg:"100"},{key:"12",title:"Ninja Mouse",type:"firsts",htg:"200"},{key:"13",title:"Inspired Shaman",type:"saves",htg:"3000"},{key:"14",title:"Shaman Champion",type:"saves",htg:"4000"},{key:"15",title:"Glorious Shaman",type:"saves",htg:"5000"},{key:"16",title:"Shaman Duchess",type:"saves",htg:"6000"},{key:"17",title:"Shaman Princess",type:"saves",htg:"7000"},{key:"18",title:"Shaman Empress",type:"saves",htg:"8000"},{key:"19",title:"Legendary Shaman",type:"saves",htg:"9000"},{key:"20",title:"Immortal Shaman",type:"saves",htg:"10000"},{key:"21",title:"The Chosen Shaman",type:"saves",htg:"11000"},{key:"22",title:"Holy Shaman",type:"saves",htg:"12000"},{key:"23",title:"Shaman Oracle",type:"saves",htg:"13000"},{key:"24",title:"Shaman Prophet",type:"saves",htg:"14000"},{key:"25",title:"Shamarvelous",type:"saves",htg:"15000"},{key:"26",title:"Glutton Mouse",type:"cheeses",htg:"600"},{key:"27",title:"Gleany",type:"cheeses",htg:"700"},{key:"28",title:"Plumpy Mouse",type:"cheeses",htg:"800"},{key:"29",title:"Paunchy Mouse",type:"cheeses",htg:"900"},{key:"30",title:"Chubby Mouse",type:"cheeses",htg:"1000"},{key:"31",title:"Fluffy Mouse",type:"cheeses",htg:"1100"},{key:"32",title:"Tubby Mouse",type:"cheeses",htg:"1200"},{key:"33",title:"The Chubby",type:"cheeses",htg:"1300"},{key:"34",title:"The Puffy",type:"cheeses",htg:"1400"},{key:"35",title:"Activist Mouse",type:"cheeses",htg:"300"},{key:"36",title:"Unionized Mouse",type:"cheeses",htg:"400"},{key:"37",title:"Mouse on Strike",type:"cheeses",htg:"500"},{key:"38",title:"The Cheese Initiated",type:"cheeses",htg:"1500"},{key:"39",title:"The Cheese Adept",type:"cheeses",htg:"1600"},{key:"40",title:"The Cheese Priest",type:"cheeses",htg:"1700"},{key:"41",title:"The Reaper",type:"cheeses",htg:"1800"},{key:"42",title:"Rogue Mouse",type:"firsts",htg:"300"},{key:"43",title:"Looter",type:"firsts",htg:"400"},{key:"44",title:"Stalker",type:"firsts",htg:"500"},{key:"45",title:"Frothy Mouse",type:"firsts",htg:"600"},{key:"46",title:"The Silent",type:"firsts",htg:"700"},{key:"47",title:"Hawk Mouse",type:"firsts",htg:"800"},{key:"48",title:"Cobra Mouse",type:"firsts",htg:"900"},{key:"49",title:"Spidermouse",type:"firsts",htg:"1000"},{key:"50",title:"Quick Silver",type:"firsts",htg:"1100"},{key:"51",title:"Athletic Mouse",type:"firsts",htg:"1200"},{key:"52",title:"Hasty Mouse",type:"firsts",htg:"1400"},{key:"53",title:"Rocket Mouse",type:"firsts",htg:"1600"},{key:"54",title:"Sonic The Mouse",type:"firsts",htg:"1800"},{key:"55",title:"Pingless",type:"firsts",htg:"2000"},{key:"56",title:"Kamikaze",type:"firsts",htg:"2200"},{key:"57",title:"Warrior Mouse",type:"firsts",htg:"2400"},{key:"58",title:"Mach 1",type:"firsts",htg:"2600"},{key:"59",title:"Hunter",type:"firsts",htg:"2800"},{key:"60",title:"First!",type:"firsts",htg:"3000"},{key:"61",title:"Sniper",type:"firsts",htg:"3200"},{key:"62",title:"Flash",type:"firsts",htg:"3400"},{key:"63",title:"Supermouse",type:"firsts",htg:"3600"},{key:"64",title:"Light Speed",type:"firsts",htg:"3800"},{key:"65",title:"Time Traveler",type:"firsts",htg:"4000"},{key:"66",title:"Fast Wind",type:"firsts",htg:"4500"},{key:"67",title:"E=MouseC²",type:"firsts",htg:"5000"},{key:"68",title:"Jumper",type:"firsts",htg:"5500"},{key:"69",title:"The Untouchable",type:"firsts",htg:"6000"},{key:"70",title:"Wall-Jumper",type:"firsts",htg:"10000"},{key:"71",title:"LIGHTNING",type:"firsts",htg:"40000"},{key:"72",title:"Cheese Finder",type:"cheeses",htg:"2000"},{key:"73",title:"Cheese Knight",type:"cheeses",htg:"2300"},{key:"74",title:"Cheesegrubber",type:"cheeses",htg:"2700"},{key:"75",title:"Fatty",type:"cheeses",htg:"3200"},{key:"76",title:"Stout Mouse",type:"cheeses",htg:"3800"},{key:"77",title:"Cheese Lover",type:"cheeses",htg:"4600"},{key:"78",title:"Camembert",type:"cheeses",htg:"6000"},{key:"79",title:"Pont-L'Évêque",type:"cheeses",htg:"7000"},{key:"80",title:"Cheese Catcher",type:"cheeses",htg:"8000"},{key:"81",title:"It's Over 9000",type:"cheeses",htg:"9001"},{key:"82",title:"Collector",type:"cheeses",htg:"10000"},{key:"83",title:"Cheeseleader",type:"cheeses",htg:"14000"},{key:"84",title:"Cheese Thief",type:"cheeses",htg:"18000"},{key:"85",title:"Cheese Creator",type:"cheeses",htg:"22000"},{key:"86",title:"Cheese Pizza",type:"cheeses",htg:"26000"},{key:"87",title:"Cheese Minister",type:"cheeses",htg:"30000"},{key:"88",title:"Prodigy Mouse",type:"cheeses",htg:"34000"},{key:"89",title:"Princess Of Transformice",type:"cheeses",htg:"38000"},{key:"90",title:"Cheesoholic",type:"cheeses",htg:"42000"},{key:"91",title:"The Cheesen One",type:"cheeses",htg:"46000"},{key:"92",title:"Sailor Mouse",type:"cheeses",htg:"50000"},{key:"93",title:"MAH CHEESE!",type:"cheeses",htg:"80000"},{key:"94",title:"Ancient Shaman",type:"saves",htg:"16000"},{key:"95",title:"Fearless Shaman",type:"saves",htg:"18000"},{key:"96",title:"Almighty Shaman",type:"saves",htg:"20000"},{key:"97",title:"Architect Shaman",type:"saves",htg:"22000"},{key:"98",title:"Mademoiselle",type:"saves",htg:"24000"},{key:"99",title:"Lady Chamane",type:"saves",htg:"26000"},{key:"100",title:"Loved",type:"saves",htg:"28000"},{key:"101",title:"Magician",type:"saves",htg:"30000"},{key:"102",title:"Hero of",type:"saves",htg:"35000"},{key:"103",title:"Angel Shaman",type:"saves",htg:"40000"},{key:"104",title:"The Creator",type:"saves",htg:"45000"},{key:"105",title:"Absolute Shaman",type:"saves",htg:"50000"},{key:"106",title:"Miraculous Shaman",type:"saves",htg:"55000"},{key:"107",title:"Liberator",type:"saves",htg:"60000"},{key:"108",title:"Troll Shaman",type:"saves",htg:"65000"},{key:"109",title:"Ghost Shaman",type:"saves",htg:"70000"},{key:"110",title:"Spirit",type:"saves",htg:"75000"},{key:"111",title:"Demigoddess Shaman",type:"saves",htg:"80000"},{key:"112",title:"Last Hope",type:"saves",htg:"85000"},{key:"113",title:"Redeemer",type:"saves",htg:"90000"},{key:"114",title:"Alpha & Omega",type:"saves",htg:"140000"},{key:"115",title:"Nice Mouse",type:"accessories",htg:"1"},{key:"116",title:"Adorable Mouse",type:"accessories",htg:"2"},{key:"117",title:"Charming Mouse",type:"accessories",htg:"5"},{key:"118",title:"Pretty Mouse",type:"accessories",htg:"10"},{key:"119",title:"Cute Mouse",type:"accessories",htg:"15"},{key:"120",title:"Frivolous Mouse",type:"accessories",htg:"20"},{key:"121",title:"Snob Mouse",type:"accessories",htg:"25"},{key:"122",title:"Stylish Mouse",type:"accessories",htg:"30"},{key:"123",title:"Actress Mouse",type:"accessories",htg:"35"},{key:"124",title:"Fashion Mouse",type:"accessories",htg:"40"},{key:"125",title:"Sexy",type:"accessories",htg:"45"},{key:"126",title:"SuperStar",type:"accessories",htg:"50"},{key:"127",title:"Little Snowflake",type:"xmas",htg:"Christmas 2011"},{key:"128",title:"Christmas Spirit",type:"xmas",htg:"Christmas 2011"},{key:"129",title:"Little Pixie",type:"xmas",htg:"Christmas 2011"},{key:"130",title:"Santa Claus",type:"xmas",htg:"Christmas 2011"},{key:"138",title:"Evian Mouse",type:"butts",htg:'<a href="http://www.youtube.com/watch?v=dQw4w9WgXcQ">Click Here To Get It</a>'},{key:"200",title:"Goddess Shaman",type:"saves",htg:"100000"},{key:"202",title:"The Wind Master",type:"firsts",htg:"20000"},{key:"210",title:"Alluring Mouse ",type:"valentines",htg:"Valentines 2014"},{key:"211",title:"Temptress",type:"valentines",htg:"Valentines 2014"},{key:"212",title:"Latin Lover",type:"valentines",htg:"Valentines 2014"},{key:"213",title:"Decorator",type:"hardmodes",htg:"500"},{key:"214",title:"Builder",type:"hardmodes",htg:"2000"},{key:"215",title:"Manufacturer",type:"hardmodes",htg:"4000"},{key:"216",title:"Technician",type:"hardmodes",htg:"7000"},{key:"217",title:"Mechanic",type:"hardmodes",htg:"10000"},{key:"218",title:"Specialist",type:"hardmodes",htg:"14000"},{key:"219",title:"Inventor",type:"hardmodes",htg:"18000"},{key:"220",title:"Engineer",type:"hardmodes",htg:"22000"},{key:"221",title:"Inventive Mouse",type:"hardmodes",htg:"26000"},{key:"222",title:"Ingenious Mouse",type:"hardmodes",htg:"30000"},{key:"223",title:"Virtuoso",type:"hardmodes",htg:"34000"},{key:"224",title:"Sprinter",type:"firsts",htg:"12000"},{key:"225",title:"Batmouse",type:"firsts",htg:"14000"},{key:"226",title:"The Unseen",type:"firsts",htg:"16000"},{key:"227",title:"Unstoppable",type:"firsts",htg:"18000"},{key:"228",title:"¡Ándale! ¡Ándale!",type:"firsts",htg:"25000"},{key:"229",title:"Torpedo",type:"firsts",htg:"30000"},{key:"230",title:"Speedy Gorgonzola",type:"firsts",htg:"35000"},{key:"231",title:"Dynamite",type:"firsts",htg:"7000"},{key:"232",title:"Speedmaster",type:"firsts",htg:"8000"},{key:"233",title:"Whirlwind",type:"firsts",htg:"9000"},{key:"234",title:"Om Nom Nom",type:"cheeses",htg:"55000"},{key:"235",title:"*-*",type:"cheeses",htg:"60000"},{key:"236",title:"Cheese Addict",type:"cheeses",htg:"65000"},{key:"237",title:"Cheesus",type:"cheeses",htg:"70000"},{key:"238",title:"Queen of Cheese",type:"cheeses",htg:"75000"},{key:"240",title:"Cookies",type:"xmas",htg:"Christmas 2011"},{key:"241",title:"Christmas Cake",type:"xmas",htg:"Christmas 2011"},{key:"242",title:"Whitebeard",type:"xmas",htg:"Christmas 2011"},{key:"243",title:"Generous",type:"xmas",htg:"Christmas 2011"},{key:"244",title:"Snowy",type:"xmas",htg:"Christmas 2011"},{key:"245",title:"Snowstorm",type:"xmas",htg:"Christmas 2011"},{key:"246",title:"Dauphine",type:"cosplay",htg:"Cosplay Contest 2011"},{key:"247",title:"Foxy",type:"cosplay",htg:"Cosplay Contest 2011"},{key:"248",title:"Miss Transformice",type:"cosplay",htg:"Cosplay Contest 2011"},{key:"249",title:"Omelettovore",type:"valentines",htg:"Valentines 2014"},{key:"250",title:"My Cutie Pie",type:"valentines",htg:"Valentines 2014"},{key:"252",title:"Souris Lilloise",type:"meetup",htg:"March 2012 Transformice meetup"},{key:"253",title:"Tonnerre de Brest",type:"fools",htg:"April Fools Day"},{key:"254",title:"Chocovore",type:"easters",htg:"Easter 2014"},{key:"255",title:"Chocobunny",type:"easters",htg:"Easter 2014"},{key:"256",title:"Rookie",type:"bootcamps",htg:"1"},{key:"257",title:"Neophyte",type:"bootcamps",htg:"3"},{key:"258",title:"Private",type:"bootcamps",htg:"5"},{key:"259",title:"Deft Mouse",type:"bootcamps",htg:"7"},{key:"260",title:"Solo Artist",type:"bootcamps",htg:"10"},{key:"261",title:"Corporal",type:"bootcamps",htg:"15"},{key:"262",title:"Accurate Mouse",type:"bootcamps",htg:"20"},{key:"263",title:"Bootcamper",type:"bootcamps",htg:"25"},{key:"264",title:"Sergeant",type:"bootcamps",htg:"30"},{key:"265",title:"Corner Jumper",type:"bootcamps",htg:"40"},{key:"266",title:"Skilled Mouse",type:"bootcamps",htg:"50"},{key:"267",title:"Lieutenant",type:"bootcamps",htg:"60"},{key:"268",title:"Longjumper",type:"bootcamps",htg:"70"},{key:"269",title:"Incredimouse",type:"bootcamps",htg:"80"},{key:"270",title:"Bootcamp Addict",type:"bootcamps",htg:"90"},{key:"271",title:"Captain",type:"bootcamps",htg:"100"},{key:"272",title:"Dexterous Mouse",type:"bootcamps",htg:"120"},{key:"273",title:"Maniac",type:"bootcamps",htg:"140"},{key:"274",title:"Major",type:"bootcamps",htg:"160"},{key:"275",title:"Cheese Artist",type:"bootcamps",htg:"180"},{key:"276",title:"Acrobat",type:"bootcamps",htg:"200"},{key:"277",title:"Colonel",type:"bootcamps",htg:"250"},{key:"278",title:"Shortcutter",type:"bootcamps",htg:"300"},{key:"279",title:"Tarzan",type:"bootcamps",htg:"350"},{key:"280",title:"Général",type:"bootcamps",htg:"400"},{key:"281",title:"Living Legend",type:"bootcamps",htg:"500"},{key:"282",title:"Stuntmouse",type:"bootcamps",htg:"600"},{key:"283",title:"Pro",type:"bootcamps",htg:"700"},{key:"284",title:"Chuck Souris",type:"bootcamps",htg:"800"},{key:"285",title:"Queen of Bootcamp",type:"bootcamps",htg:"900"},{key:"286",title:"Gravity Master",type:"bootcamps",htg:"1000"},{key:"287",title:"Vampire",type:"halloweens",htg:"Halloween 2013"},{key:"288",title:"Snowball",type:"xmas",htg:"Christmas 2012"},{key:"289",title:"I'm cold",type:"xmas",htg:"Christmas 2012"},{key:"290",title:"Grilled Chestnut",type:"xmas",htg:"Christmas 2012"},{key:"291",title:"Chaussette",type:"xmas",htg:"Christmas 2012"},{key:"292",title:"Souris Sapin",type:"xmas",htg:"Christmas 2012"},{key:"293",title:"Cookies Eater",type:"xmas",htg:"Christmas 2012"},{key:"294",title:"I Cheese You",type:"valentines",htg:"Valentines 2014"},{key:"295",title:"Chicken",type:"easters",htg:"Easter 2014"},{key:"296",title:"Explorer",type:"fishings",htg:"Fishing 2013"},{key:"297",title:"Sardine",type:"fishings",htg:"Fishing 2013"},{key:"298",title:"Fishermouse",type:"fishings",htg:"Fishing 2013"},{key:"299",title:"Adorer",type:"fishings",htg:"Fishing 2013"},{key:"300",title:"Frankenmaus",type:"halloweens",htg:"Halloween 2013"},{key:"301",title:"Candy *-*",type:"halloweens",htg:"Halloween 2013"},{key:"302",title:"Pumpkin Juice",type:"halloweens",htg:"Halloween 2013"},{key:"303",title:"Trick or Treat",type:"halloweens",htg:"Halloween 2013"},{key:"304",title:"Poltergeist",type:"halloweens",htg:"Halloween 2013"},{key:"305",title:"Halloween 2012",type:"halloweens",htg:"Halloween 2013"},{key:"306",title:"Halloween 2013",type:"halloweens",htg:"Halloween 2013"},{key:"307",title:"Von Drekkemaus",type:"halloweens",htg:"Halloween 2013"},{key:"308",title:"Candy Cane",type:"xmas",htg:"Christmas 2013"},{key:"309",title:"Fairy Lights",type:"xmas",htg:"Christmas 2013"},{key:"310",title:"Papaille Noel",type:"xmas",htg:"Christmas 2013"},{key:"311",title:"Elfette",type:"xmas",htg:"Christmas 2013"},{key:"312",title:"Snow Angel",type:"xmas",htg:"Christmas 2013"},{key:"313",title:"Just Married",type:"valentines",htg:"Valentines 2014"},{key:"314",title:"Candy Apple",type:"valentines",htg:"Valentines 2014"},{key:"315",title:"Broken Heart",type:"valentines",htg:"Valentines 2014"},{key:"316",title:"Honeymoon",type:"valentines",htg:"Valentines 2014"},{key:"317",title:"Carnaval 2014",type:"carnavals",htg:"Carnaval 2014"},{key:"318",title:"Churros",type:"carnavals",htg:"Carnaval 2014"},{key:"319",title:"Partygoer",type:"carnavals",htg:"Carnaval 2014"},{key:"320",title:"Cock-a-doodle-doo",type:"easters",htg:"Easter 2014"},{key:"321",title:"Cocoa",type:"easters",htg:"Easter 2014"},{key:"322",title:"Egg hunter",type:"easters",htg:"Easter 2014"},{key:"323",title:"Childish Mouse",type:"childrens",htg:"Children's Day 2014"},{key:"324",title:"Smart",type:"divines",htg:"500"},{key:"326",title:"Mice's friend",type:"divines",htg:"2000"},{key:"327",title:"Professor",type:"divines",htg:"4000"},{key:"328",title:"Designer",type:"divines",htg:"7000"},{key:"329",title:"Mysterious",type:"divines",htg:"10000"},{key:"330",title:"Shamazing",type:"divines",htg:"15000"},{key:"331",title:"Cheese Detector",type:"divines",htg:"20000"},{key:"332",title:"The Brain",type:"divines",htg:"25000"},{key:"333",title:"Majestic",type:"divines",htg:"30000"},{key:"334",title:"Divinity",type:"divines",htg:"40000"},{key:"335",title:"What the Fish",type:"fishings",htg:"Fishing 2014"},{key:"336",title:"Fromagic",type:"fishings",htg:"Fishing 2014"},{key:"337",title:"Yeeehaaaa!",type:"fishings",htg:"Fishing 2014"},{key:"338",title:"Best Trainer",type:"fishings",htg:"Fishing 2014"},{key:"339",title:"All Aboard!",type:"fishings",htg:"Fishing 2014"},{key:"340",title:"herp derp",type:"fishings",htg:"Fishing 2014"},{key:"341",title:"Captain Nemouse",type:"fishings",htg:"Fishing 2014"},{key:"342",title:"Indiana Mouse",type:"fishings",htg:"Fishing 2014"},{key:"343",title:"Casper",type:"halloweens",htg:"Halloween 2014"},{key:"344",title:"Pumpkin Pie",type:"halloweens",htg:"Halloween 2014"},{key:"345",title:"Ghostbuster",type:"halloweens",htg:"Halloween 2014"},{key:"346",title:"Zombie",type:"halloweens",htg:"Halloween 2014"},{key:"347",title:"Vampire Slayer",type:"halloweens",htg:"Halloween 2014"},{key:"348",title:"Spooky",type:"halloweens",htg:"Halloween 2014"},{key:"349",title:"Sweet Tooth",type:"halloweens",htg:"Halloween 2014"},{key:"350",title:"Wintry",type:"xmas",htg:"Christmas 2014"},{key:"351",title:"Gingerbread",type:"xmas",htg:"Christmas 2014"},{key:"352",title:"Polar Mouse",type:"xmas",htg:"Christmas 2014"},{key:"353",title:"Big Turkey",type:"xmas",htg:"Christmas 2014"},{key:"354",title:"Christmas Savior",type:"xmas",htg:"Christmas 2014"},{key:"355",title:"Angry Mouse",type:"easters",htg:"Easter 2015"},{key:"356",title:"Caramel Duchess",type:"easters",htg:"Easter 2015"},{key:"357",title:"King's Pastry Chef",type:"easters",htg:"Easter 2015"},{key:"358",title:"Cake Face",type:"easters",htg:"Easter 2015"},{key:"359",title:"Candy Lord",type:"easters",htg:"Easter 2015"},{key:"360",title:"Model Student",type:"childrens",htg:"Children's Day 2015"},{key:"361",title:"Dora the Explorer",type:"fishings",htg:"Fishing 2015"},{key:"362",title:"Archaeologist Mouse",type:"fishings",htg:"Fishing 2015"},{key:"363",title:"Allan Quatermouse",type:"fishings",htg:"Fishing 2015"},{key:"364",title:"Patriotic",type:"independences",htg:"USA USA USA USA!!!!"},{key:"365",title:"Sans-culotte",type:"independences",htg:"Bastille Day"},{key:"366",title:"Dunce",type:"school",htg:"Back to School 2015"},{key:"367",title:"First in the Class",type:"school",htg:"Back to School 2015"},{key:"368",title:"Bookmouse",type:"school",htg:"Back to School 2015"},{key:"369",title:"Academician",type:"school",htg:"Back to School 2015"},{key:"370",title:"Namaste",type:"independences",htg:"India Independence Day"},{key:"440",title:"Fromadmin",type:"admins",htg:"Transformice admin"},{key:"442",title:"Sourigami",type:"admins",htg:"Transformice admin"},{key:"444",title:"La Belette",type:"admins",htg:"Transformice admin"},{key:"445",title:"El Pinolero",type:"admins",htg:"Transformice admin"},{key:"447",title:"Kikoo Admin",type:"admins",htg:"Transformice admin"},{key:"448",title:"Queijadinha",type:"admins",htg:"Transformice admin"},{key:"446",title:"Dehset Admin",type:"admins",htg:"Transformice admin"},{key:"449",title:"La Goulue",type:"admins",htg:"Transformice admin"},{key:"450",title:"Souris Électrique",type:"admins",htg:"Transformice admin"},{key:"451",title:"Gold Saint",type:"admins",htg:"Transformice admin"}];
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
	for (var i = 0; i < titles.length; i++){
        if (titles[i].key.toLowerCase().indexOf(xs) != -1 && isNaN(titles[i].htg) === false){
			titlelist.push("<font size=2>"+titles[i].key+"</font><br>"+titles[i].title+" ("+titles[i].htg+" "+titles[i].type+")");
        } else if (titles[i].key.toLowerCase().indexOf(xs) != -1) {
	        titlelist.push("<font size=2>"+titles[i].key+"</font><br>"+titles[i].title+" ("+titles[i].htg+")");
	    }
    }
}

if (xs && xs.length >= 2 && isNaN(xs) === true) {
	for (var i = 0; i < titles.length; i++){
	    if (titles[i].title.toLowerCase().indexOf(xs) != -1 && isNaN(titles[i].htg) === false) {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+" " + titles[i].type + ")</font><br>/title "+titles[i].key);
	    } else if (titles[i].title.toLowerCase().indexOf(xs) != -1) {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
	    }
    }
}


if (xs === "full list") {
	for (var i = 0; i < titles.length; i++){
	    if (isNaN(titles[i].htg) === false) {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+" "+titles[i].type+")</font><br>/title "+titles[i].key);
	    } else {
	        titlelist.push("<font size=2>"+titles[i].title+" ("+titles[i].htg+")</font><br>/title "+titles[i].key);
	    }
	}
}

if (xs === "help") {
	titlelist.push("<p>Hi! Type these words in to get all titles that have something to do with them:<br>full list, cheeses, firsts, saves, xmas, fishing, independence, easter, childrens, halloweens, hardmode, divine, bootcamps, shops, school, carnavals<br><br>Otherwise, try and type in your name, there might be a message for you. :-)<br><br>Maybe there's some other stuff too.</p>");
}

if (xs === "credits") {
	titlelist.push("<p>Creation: Dedax :)))<br><br>Banner/logo thingy: Jacobmood<br><br>Suggestions from:<br>Elizalove, Levelup, Epilepsy</p>");
}

if (xs === "random") {
	var randomtitle = Math.floor(Math.random()*titles.length);
	if (isNaN(titles[randomtitle].htg) === false) {
	    titlelist.push("<font size=2>"+titles[randomtitle].title+" ("+titles[randomtitle].htg+" "+titles[randomtitle].type+")</font><br>/title "+titles[randomtitle].key);
	} else {
	    titlelist.push("<font size=2>"+titles[randomtitle].title+" ("+titles[randomtitle].htg+")</font><br>/title "+titles[randomtitle].key);
	}
}

if (xs === "cheeses" || "firsts" || "saves" || "accessories" || "hardmode" || "divines" || "bootcamps" || "xmas" || "halloweens" || "valentines" || "easters" || "fishings" || "carnavals" || "childrens" || "independences" || "admins" || "fools" || "school") {
	for (var i = 0; i < titles.length; i++){
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
/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-68128014-1', 'auto');
ga('send', 'pageview');*/
