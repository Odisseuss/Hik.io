var mongoose = require("mongoose");
var Hikeroute = require("./models/hikeroute");
var Comment = require("./models/comment");

var data = [
	{
		name: "Busteni-Cascada Urlatoarea" ,
	 	image: "http://hotelmarasinaia.ro/upload/pages/page_544f8461381ed.jpg",
		description: "Traseul nr. 5 Punct Roșu din Bușteni (885 m) spre Cascada Urlătoarea (1055 m) este accesibil tot timpul anului și se parcurge în 1h și 15 min. Cascada Urlătoarea este un punct de atracţie pentru mii de turişti, datorită frumuseții căderii de apă și legendei care o însoțeste. Este unul dintre cele mai ușoare trasee montane din Bucegi."
	},
	{
		name: "Poiana Tapului- Cabana Stana Regala" ,
	 	image: "https://muntii-nostri.ro/sites/default/files/styles/gallery/public/_1MN_img_Intre%20Poiana%20Tapului%20si%20Poiana%20Stanii%201%20-%2003.jpg?itok=PzfYChUR",
		description: "De la Halta Poiana Ţapului urcăm până la DN1 şi urmăm strada Mihai Viteazu până la ieşirea din localitate. De aici, marcajele urcă pe un drum de TAF, intersectează un drum forestier şi continuă până în Valea Babei (sursă de apă şi posibilitate de a coborî pe potecă nemarcată în Poiana Ţapului). Urcăm abrupt prin pădurea de foioase, depăşim Valea Pietrei Arse şi continuăm până în capătul nordic al Poienii Stânii. Prin poiană urcăm până la Cabana Stâna Regală."
	},
	{
		name: "Buşteni - Cabana Babele - Pietroşiţa" ,
	 	image: "https://muntii-nostri.ro/sites/default/files/styles/gallery/public/_1MN_img_Valea%20Jepilor%20-%208.jpg?itok=YYYVSqVR",
		description: "Traseul porneşte din Gara Buşteni pe DN1 spre sud şi urcă pe strada Telecabinei, până la staţia de telecabină. În continuare urcă pe drumul forestier şi în 10 minute suntem la intrarea în pădure. Lăsăm în stânga traseele 5 (punct roşu) şi 7 (triunghi albastru) şi începem să urcăm, pe potecă şi apoi cateva zeci de metri, pe un drum de TAF. Lăsăm drumul în dreapta (duce spre Apa Jepilor şi spre Baza Salvamont de la începutul Văii Spumoase) şi urcăm în serpentine spre stânga, pe versantul sudic al Văii Jepilor. În 20 de minute dăm de o scară de lemn şi un izvor. Aici găsim şi primul din cele 19 cabluri care ne însoţesc până la Cabana Caraiman. Continuăm să urcăm pe versantul stâng folosindu-ne de trei cabluri şi ajungem la un alt loc panoramic, deasupra abrupturilor inferioare ale Caraimanului. Trecem peste un pod de lemn şi încă un cablu şi după o oră şi jumătate de la intrarea în traseu trecem pe versantul stâng (geografic) al văii. Un indicator ne arată 4 ore până la Cabana Babele. Urcăm circa 45 de minute şi ieşim din pădure în prima poiană alpină în care şi întâlnim un cablu cu o treaptă metalică fixată în stâncă. În 20 de minute trecem iarăşi pe versantul drept al văii şi printr-un horn echipat cu cablu urcăm o diferenţă de nivel de 10-15 m. Aici se află intrarea în traseul nemarcat Brâul lui Răducu, care leagă Valea Jepilor de Valea Urlătorii. Trecem iarăşi pe versantul stâng, urcăm în serpentine prin pădure şi gol alpin, până când intrăm definitiv în gol alpin. O treaptă stâncoasă din faţa noastră este udată de Cascada Caraimanului. Urmând firul principal al văii, urcăm în dreapta cascadei prin poieni şi ajungem la o săritoare care nu se poate trece direct. Facem dreapta pe o brână echipată cu cabluri. În capătul ei ne întoarcem spre stânga, pe deasupra poienii din care pleacă Brâul Portiţei (traseu nemarcat). Urcăm pe nişte scări din beton amenajate cu un alt cablu solid. Ne aflăm sub ultima treaptă stâncoasă de sub platou şi urcăm în serpentine strânse până la platoul Cabanei Caraiman (legătura cu traseul 42). Continuăm în urcuş spre Babele, peste 5 minute lăsăm în stânga traseul 40 spre Piatra Arsă şi urmăm poteca ce depăşeşte o treaptă stâncoasă. După aceasta traversăm firul văii la stânga şi pe curbă de nivel uşor ascendentă ajungem după 5-5 ½ ore la staţia de telecabină Babele (legătura cu traseul 37). Până la Cabana Babele urmăm pentru 10 minute traseul 37. Traseul continuă de lângă Cabana Babele şi coboară spre vest pe piciorul Babelor, urmând parţial conducta de gaze ce coboară la Peştera. Doar în jurul altitudinii de 1800 m poteca trece printr-o zonă cu jnepeniş. După 1-1 ½ ore de coborâre ajungem la intersecţia cu traseele 28 (triunghi roşu), 44 (punct roşu) şi 54 (bandă albastră). Coborâm până la Hotelul Peştera (legătura cu traseul 55) şi urmăm pentru câteva sute de metri drumul auto până la Mănăstirea Peştera. După curtea mănăstirii facem dreapta şi coborâm pe poteca întărită cu trepte de lemn sau de ciment până la cursul Văii Ialomiţei. Îl traversăm şi, în dreapta, o potecă largă ne duce în 10 minute la intrarea în Peştera Ialomiţei în care se află şi Schitul Peştera. Continuăm să coborâm pe lângă Ialomiţa şi în 20-25 de minute ajungem la Cabana Padina (legătura cu traseul 1). Lăsăm cabana în dreapta potecii. 100 de metri mai jos trecem pe lângă Baza Naţională Salvamont şi apoi pe lângă Restaurantul Diana (drumul spre Diana este comun cu cel spre Plaiul lui Păcală-nemarcat), pe lângă vila particulară Coteanu (2*) şi intrăm în Cheile Coteanului. După aceste chei scurte se despart drumurile auto care merg pe cele două laturi ale Lacului Bolboci. Noi urmăm drumul din dreapta lacului (vest), trecem de păstrăvărie (părăsită) şi de Turbăria Lăptici (în stânga noastră) şi curând parcurgem scurtele şi frumoasele Chei ale Tătarului, care ne conduc la coada Lacului Bolboci. După primele două curbe ale drumului întâlnim punctul de pornire în traseul 56. Continuăm curbele drumului auto pe marginea lacului, traversăm Văile Tătarului Mircii şi Bolboci (legătura cu traseul 43) şi după 2 ½ ore de la Padina ajungem la Cabana Bolboci aflată lângă barajul lacului de acumulare. Pe baraj pleacă traseul 36 spre Valea Dorului şi fosta Cabană Vârful cu Dor. După prima curbă de la cabană lăsăm în dreapta traseul 31 (cruce roşie), coborâm pe drumul auto şi într-o oră ajungem de la Bolboci la Cabana Zănoaga. După cinci minute de la cabană lăsăm în stânga drumul auto ce urcă pe Muntele Dichiu şi spre Sinaia şi Baza Salvamont Zănoaga, facem dreapta pe un pod de lemn, pe lângă campingul Zănoaga şi urmăm firul Ialomiţei ce parcurge frumoasele Chei ale Zănoagei Mari. În aceste chei amenajate cu podeţe găsim trei izvoare din care ne putem alimenta cu apă. După o oră şi jumătate de la Zănoaga ajungem la Complexul de la Scropoasa. Cabana veche Scropoasa este închisă! În stânga se formează un drum de acces pe Valea Scropoasa şi Plaiul Orzei spre DJ 714 (drum de acces din Moroeni la Hotelul Peştera) (traseul 32). Noi urmăm malul drept al lacului de acumulare Scropoasa (pe care este un izvor cu apă potabilă), lăsăm în dreapta intrarea în Cheile Orzei (închise publicului) şi ocolim în serpentine muntele ce formează versantul stâng al cheilor, pentru a coborî după ce se termină Cheile Orzei şi încep frumoasele Chei ale Ialomiţei. Folosind drumul de acces al muncitorilor, parcurgem cheile pe versantul drept, aproape de cursul de apă, întâlnim un izvor şi urmele fostei linii de transport de piatră de la Cariera Lespezi şi ieşim după circa o oră de mers prin chei la Tabăra Vânătorul şi la hidrocentrala Dobreşti. De aici urmăm drumul auto nemodernizat, după cca 1.5 km trecem pe lângă Tabăra Cerbul, după alţi cca 3 km trecem de Tabăra Căprioara şi în final ultimii cca. 4 km ne duc până în satul Pucheni al comunei Moroeni. De aici, încă 7-8 km ne despart de Pietroşiţa, unde se află ultima gară din amonte de pe Valea Ialomiţei."
	}
]


function seedDB(){
	Hikeroute.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed campgrounds");

		//add a few starter hikeroutes
		data.forEach(function(seed){
			Hikeroute.create(seed, function(err, hikeroute){
				if(err){
					console.log(err)
				}else{
					console.log("added hike route");
					//add a few comments
					Comment.create({
						text: "This is a nice place, but no internet",
						author:{ username: "Spartacus"}
					}, function(err, comment){
						if(err){
							console.log(err);
						}else{
							hikeroute.comments.push(comment);
							hikeroute.save();
							console.log("created new comm");
						}
						
					});
				}
			});
		});
	});

	
	
	
}

module.exports = seedDB;