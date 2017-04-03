// function theObject() {
// 	document.getElementById("myBtn").addEventListener("mousemove", function(){
//     document.getElementById("primus").innerHTML = "primus";
//     //document.getElementById("divIndiv").innerHTML = "divIndiv";
// });
// 	document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("divIndiv").innerHTML = "divIndiv";
// });
// };


//console.log(dataArray);

// function io(){
// 	var a = ['1','2','3','4','5'];
// 	var b = ['1','2','3','4','5'];	for(i=0;i<a.length;i++)1,2,3{

// 		for(j=0;j<b.length;j+// 			//console.log(a[i]);


// 			console.log(b[j]);


    var patrate = {

	 totOreZi : [],
	 ma : [
	  {
	    d:"Mon Mar 20 2017 15:11:39 GMT+0300 (Eastern Europe Daylight Time)",
	    p:[
	      {
	        unu:'sdsd',
	        doi:'fdfdf'
	      },
	      {
	        unu:'sdsd',
	        doi:'fdfdf'
	      }
	    ]
	  }
	],
	mainArray : [
	 	{
	 		dataCareSeSchimba:"Mon Mar 20 2017 15:11:39 GMT+0300 (Eastern Europe Daylight Time)",
		 	programarile:
		 	[ 			 	
			 	{
			 		oraProgramare:"9:00",
			 		durataProgramare:"2",
			 		numeProgramare:"Eu",
			 		idClient:"00001"
			 	}, 
		    	{
		    		oraProgramare: "13:00",
		    		durataProgramare: "1",
		    		numeProgramare: "Tu",
		    		idClient:"00004"
		    	},
		    	{
		    		oraProgramare: "15:00",
		    		durataProgramare: "3",
		    		numeProgramare: "El",
		    		idClient:"00007"
		    	}
			]

	 	}
	 	,
	 	//SFARSIT PRIMUL OBIECT
	 	
	 	{
	 		//INCEPUT [1] obiect 
		 	dataCareSeSchimba:"Mon Mar 24 2017 15:11:39 GMT+0300 (Eastern Europe Daylight Time)",
		 	programarile:
		 	[ 			 	
			 	{
			 		oraProgramare:"9:00",
			 		durataProgramare:"1",
			 		numeProgramare:"Eu",
			 		idClient:"00001"
			 	}, 
		    	{
		    		oraProgramare: "13:00",
		    		durataProgramare: "1",
		    		numeProgramare: "Tu",
		    		idClient:"00004"
		    	},
		    	{
		    		oraProgramare: "15:00",
		    		durataProgramare: "2",
		    		numeProgramare: "El",
		    		idClient:"00007"
		    	}
			]
				 		
	 	},//SFARSIT [1] obiect
	 	
	 	{//INCEPUT[2] obiect

		 	dataCareSeSchimba:"Fri Mar 28 2017 15:11:39 GMT+0300 (Eastern Europe Daylight Time)",
		 	programarile:
		 	[ 			 	
			 	{
			 		oraProgramare:"9:00",
			 		durataProgramare:"3",
			 		numeProgramare:"Eu",
			 		idClient:"00001"
			 	}, 
		    	{
		    		oraProgramare: "13:00",
		    		durataProgramare: "1",
		    		numeProgramare: "Tu",
		    		idClient:"00004"
		    	},
		    	{
		    		oraProgramare: "15:00",
		    		durataProgramare: "5",
		    		numeProgramare: "El",
		    		idClient:"00007"
		    	}
			]	 
	 	}//SFARSIT[2] obiect
	],

	
 
	 

//ordinea din init tine cont de ordinea in care au fost chemate /create metodele
	//orarTest : ['8:00','9:00' , '10:00', '11:00' , '12:00' , '13:00', '14:00', '15:00' , '16:00'],	
	zile : ['luni' , 'marti' , 'miercuri' , 'joi' , 'vineri' , 'sambata' , 'duminica' ],
	lunile_din_an :["ianuarie" , 'februarie', 'martie', 'aprilie' , 'mai', 'iunie', 'iulie', 'august','septembrie','octombrie','noiembrie','decembrie'],
	contorLuna : 0,
	

	init : function () {
		// console.log('ma array la inceput:',this.ma);
		// console.log('main array la inceput:',this);
		
		this.puneZilele();
		//this.pushMethod();
		//this.creatingSquare();
		this.allSquares();
		this.mai_pune_inca_2_sapt();		//aici se pune event listener pe butonul de next
		this.io();
		
		//this.displayInTitle();
		var azi = new Date();
		azi.setDate(azi.getDate());
		//s ar putea un if aici daca azi vine null sau undefine sa l creeze cu niste valori standard 
		//console.log('azi peste 28 zile: ',azi);
		
		//aici completam datele in patratele, ca sa le putem folosi in metoda urmatoare sa le transformam in variabile Data() si sa comparam
		this.calendar(azi);
		
		this.gaseste_data_din_patrat();
		this.adaugaPrincipalProgramare();
	},
	
	

	adaugaPrincipalProgramare:function()
    {
            var butProg = document.getElementById('butonul_adauga_programare');
            butProg.onclick = function apareData(e)
            {	var ptr = document.getElementsByClassName('second');
            	var divProgAscuns = document.getElementById('popupDivProgramari');
            	var valoarea = document.getElementById('data_input');
            	divProgAscuns.style.display= 'block';
            	valoarea.value = ptr[0].innerHTML.split('data:')[1].split('<br>');
            };


            //alert('clicked');
            
    },

//incep metodele 
//metoda asta impinge in array principal(care este gol pana la momentul acesta)fiecare array de programare(luniP,martiP,etc) pe rand 
//pentru a putea fi iterate pe rand ....accesate  in metoda calculeazaOreOcupate    
	
     
	 puneZilele: function () 
	 {
        	
         	for(j=0;j<this.zile.length;j++) 
         		{
		         	var zi = this.creatingSquare('zile', this.zile[j], j);            
                };

		         	     	



      },
//gaseste programari pentru fiecare data in metoda |gaseste data din patrat|
	gaseste_programari_din_data:function(data_de_comparat)//_din_patrate
	{  // vazut din exterior ....de la distanta ......o metoda carre este folosita DE O ALTA METODA 
		// in principiu scopul ei este sa aiba niste conditii 

		for(var f=0;f<this.mainArray.length;f++)  //Du te prin mainArray si cauta prin toate elementele din ARray(obiect din array )

			{   
				var data_din_mainArray =  new Date(this.mainArray[f].dataCareSeSchimba); // data asta care se schimba (in prima)
				//console.log(data_de_comparat.getDate());								//programare fiind data_care_se_schimba:"Fri Mar 18 2017 15:11:39 GMT+0300 (Eastern Europe Daylight Time)"
				//console.log(data_din_mainArray.getDate());								//programare fiind data_care_se_schimba:"Fri Mar 18 2017 15:11:39 GMT+0300 (Eastern Europe Daylight Time)"
				 if((data_din_mainArray.getMonth() == data_de_comparat.getMonth()) && (data_din_mainArray.getDate() == data_de_comparat.getDate()) && (data_din_mainArray.getFullYear() == data_de_comparat.getFullYear()) )
				 	{  // >>>  atunci returneaza PROGRAMARILE PE ZIUA RESPECTIVA 
						//console.log(data_de_comparat);
						var oprog = [];
						for (var qi=0;qi<this.mainArray[f].programarile.length;qi++)
							oprog.push(this.mainArray[f].programarile[qi] );
						//var oprog = this.mainArray[f].programarile; 														// DACA getMONTH getDATE din main array e la fel cu data care trebuie comparata ,folosita ca parametru in aceasta functie 
						//console.log('oprog :',oprog);
				 		return oprog;// this.mainArray[f].programarile;
				 		//console.log("gasit data din mainArray : " + data_din_mainArray);
				 	}else {
				 		//console.log(false);
				 	};
				 //= new Date(data_de_comparat);
			
			};
			return false;
	},
	// eventButonProgRapide: function() {
        
        
 //        
 //        this.butonData.addEventListener('click', );
 //        //console.log();
 //    },

	gaseste_data_din_patrat: function()
	{
		var toate_patrate = document.getElementsByClassName('second');
		var data_luata = document.getElementById('data_input').value;
		var numele_clientului = document.getElementById('numeClient').value;
		console.log('#CEEA CE SCRIU IN INPUT NUME SI INPUT DATA #:' ,data_luata ,numele_clientului);
		
			for(var i= 0;i<toate_patrate.length;i++)
				{
					///console.log('data din patrate ',data_din_patrate);
					var data_din_patrate = new Date(toate_patrate[i].innerHTML.split("data:")[1]);
					//console.log('new Date(toate_patrate[i].innerHTML.split("data:")[1]) este ',data_din_patrate);
					//console.log('programus', programus);
					var programus = this.gaseste_programari_din_data(data_din_patrate);  /// In metoda de mai sus ce o  sa ti returneze 
					//dataDinHeader[i].innerHTML = data_din_patrate;
					//console.log('programus este fiecare programare din fiecare data ? ',programus);                                                      // o sa fie return this.mainArray[f].programarile; (care de fapt sunt programrile) pe ziua respectiva 
					//console.log('this.gaseste_programari_din_data(data_din_patrate) este ',program);
					
					if (programus) {  //AMU daca se gaseste o programare // intotdeauna cand cauti ceva si ti returneaza ceea ce ai cautat e true    
 						var ore = this.parcurgeSirul(toate_patrate[i], programus);
	///////////					//console.log('ore libere', ore);  
						//console.log('aici este dataDinHeader', dataDinHeader );
						toate_patrate[i].innerHTML = ore + ' data: ' + data_din_patrate.getDate()+ ' '+ this.lunile_din_an[data_din_patrate.getMonth()]+'<br>'+data_din_patrate.getFullYear();
					} else {
						toate_patrate[i].innerHTML = this.totOreZi[0].length + ' data: ' + data_din_patrate.getDate()+ ' '+ this.lunile_din_an[data_din_patrate.getMonth()]+'<br>'+data_din_patrate.getFullYear();
						//dataDinHeader.innerHTML = this.totOreZi[0].length + ' data: ' + data_din_patrate.getDate()+ ' '+ this.lunile_din_an[data_din_patrate.getMonth()]+'<br>'+data_din_patrate.getFullYear();
						
					}

					if(toate_patrate[i].innerHTML == data_luata)
					{
						console.log('toate_patrate[i].innerHTML : ',toate_patrate[i].innerHTML);
					} else { 
						console.log('trebuie de adaugat event pe buton ');	
					}
					
					//console.log(this.gaseste_programari_din_data(data_din_patrate));
					//mainArray[0].programarile[0]
					//if(){}
					//console.log('aici: ' + data_din_patrate);
				};
	},
	calendar: function(start_data) 
	{
 
		
		var startDate = new Date(); // moment actual
  	  		endDate = new Date(startDate.getTime());// moment actual  + 11 days
    		//iDate = new Date(startDate); // Date object to be used as iterator

    		iDate = new Date(start_data)
    		
    		//console.log(iDate);
		//console.log('asta ar fi obiectul data care poate fi folosit ca iterator' + new Date(startDate));
		var squares = document.getElementsByClassName('second');
		var data_loc = squares[startDate.getDay()-1]; 
		
		var week = 1;
		var adaugaSapte = 0;
		var ziuaRo = 0; //cum e la englezi cu 7 duminica 
			//console.log(squares);
			
	    			 // console.log('functia calendar cu thisul:'+this + "startDate e : " + startDate);
	    			 // console.log('functia calendar cu thisul:'+this + "endDate e : " + endDate);
	    			 // console.log('functia calendar cu thisul:'+this +""+ "iDate e : " + iDate);

			while(week < 5) 
				{
					//console.log(iDate);

					iDate.setDate(iDate.getDate()+1); //[incrementeaza zilele] seteaza data / de / ia data de azi / adauga una de fiecare data ATATA timp cat week<3
					//console.log(iDate.setDate(iDate.getDate()+1)+ " aici");
					if(iDate.getDay() == 1) //daca ziua de azi e la inceput iar sus incepe cu iteratia deci returneaza un nr 
											// care poate fi folosit intr un if 
					{
						//console.log(iDate.getDay());				
						adaugaSapte+= 7;// se aduaga cate 7 zile la fiecare week ; 
						week++;  //se adauga cate o sapt in timp ce week creste adaugam cate o serie de 7 (zile)
							 if(week==5){ //daca am ajuns la a treia sapt/ daca a rulat tot ce este mai sus o data++  
							 break; // poti sa sari din if si sa continui ceea ce faceai
						}; // adica aici 
					};//aici
					
												//apoi aici 
												//un console pe adaugaSapte arata ca a fost folosit pt a reseta

					//console.log(adaugaSapte); ==>0
					ziuaRo = iDate.getDay()-1 + adaugaSapte;
					//console.log(ziuaRo); //===>7
					//console.log(iDate.getDay()); ==> 2 3 4 5 6 /  0 1  2 3 4 5 6 / 0  
					if(iDate.getDay() == 0) //cee ce e 
						{
							ziuaRo= 7*week -1;
							//console.log(ziuaRo); ==> cand week e 1 ziuaRo e 6 prima oara ....a doua oara cand week=2 e 13 
						};

					//console.log(iDate);
					squares[ziuaRo].innerHTML +=" data:" + iDate;//
					//console.log( 'toate datele din patrat ? :', squares[ziuaRo].innerHTML);
					squares[ziuaRo].title = iDate;
					//console.log('caut data sa o impart ca n patrate :',iDate);
					//squares[ziuaRo].data_in_div = iDate;
					//console.log(typeof squares[ziuaRo]);
					//console.log(iDate.getDate());//datele. /incepand cu 21
					
				//console.log(squares.innerHTML);
				};
										
				iDate = new Date(start_data); // trebuie initializate toate la valoarea pe care au 
				week = 1 ;   	            // avut o la inceput 
				while(week>0) // atata timp cat week e mai mare ca 0// adica de fiecare data //
				{   
				ziuaRo = iDate.getDay()-1;
					//console.log(ziuaRo); //ziuaRo acum LUNI da 0 
					if(ziuaRo < 0)
					{

						ziuaRo = 6;
					};
				//console.log(squares[ziuaRo]);//ar trebui sa fie ..habar nu am 	^^^^^^^^^^^^^$$$$$$$%%^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
				//console.log(iDate.getDate());	
				squares[ziuaRo].innerHTML += ' data:'+iDate;
				squares[ziuaRo].title = iDate;
				//aici din cauza ca aici 	
				iDate.setDate(iDate.getDate()-1);

					if(iDate.getDay()==0)
						{
							//ziuaRo = 
							week--;
						};
						

				};
	},	



	
//metoda asta cheama toate patratele(care au clasa second()) si pentru fiecare patrat(o zi ) impinge orarTest(orele pe care se fac 
//programarile)
	io : function () 
	{
		var toatePatrate = document.getElementsByClassName('second');
		var orarTest=['8:00','9:00' , '10:00', '11:00' , '12:00' , '13:00', '14:00', '15:00' , '16:00', '17:00', '18:00', '19:00'];
		
		for(i=0;i< orarTest.length;i++)
		{
			this.totOreZi.push(orarTest);
		
		};

	
	},		

    parcurgeSirul: function(patratel, programari, programariDirect){
    		var prog = programari;
    		var progDirect = programariDirect;
    		//prog.pop();
    		//console.log(this.mainArray)
        	var totalore = this.calculeazaOreOcupate(programari,programariDirect);   
        	var oreOcupate= totalore;
        	var rezultat = this.totOreZi[0].length - oreOcupate; 
        //console.log(oreOcupate); //==> de 3 ori '9' ? 	


    	
 			
    	 	 if(rezultat == 3)
 				{
 				//toateZilele[i].style.background = 'green';
 					patratel.className+= ' un_sfert';
 				}
 			if(rezultat == 2)
 				{
 					patratel.className+= ' doua_sferturi';
 				}
 			if(rezultat == 1)
 					{
 						patratel.className+= ' trei_sferturi';
 					};	 
 			if(rezultat == 4)
 					{
 						patratel.className+= ' patru_sferturi';
 					};	 
 			if(rezultat == 5)
 					{
 						patratel.className+= ' cinci_sferturi';
 					};	 
 			if(rezultat == 6)
 					{
 						patratel.className+= ' sase_sferturi';
 					};	 
 			if(rezultat == 7)
 					{
 						patratel.className+= ' sapte_sferturi';
 					};	 
 			if(rezultat == 8)
 					{
 						patratel.className+= ' opt_sferturi';
 					};	 
    	 	
 						 
    	
		return rezultat;
    	
    },



//metoda asta iti parcurge orice ia ca param(program care este = this.gaseste_programari_din_data(data_din_patrate))
//var ore = this.parcurgeSirul(toate_patrate[i], program)
    calculeazaOreOcupate: function(arrayProgramari)
    {  
    	var suma=0;
    	var arr = arrayProgramari;//param arrayProgramari(fii atent la propozitia asta) e folosit in metoda 
    	// parcurge sirul unde i se da alt nume la arrayProgramari devine programri in  metoa parcurgesirul
    	//si e folosit intrun final de gaseste_data_din_patrat cu var program = this.gaseste_programari_din_data(data_din_patrate) 
    							
    		if (arr==null) return suma;//daca e nulll arrayul  returneaza 0 adica nu sunt ore ocupate
    		//console.log('arr este: ',arr);					   			 
    		for (var j=0;j<arr.length;j++)
    	
    			{
		    		//console.log(suma);
		 
		    		suma += parseInt(arr[j].durataProgramare);// UNDE ARR[THIS>MAINARRAY pe rand ]
    				//console.log('suma este ',suma);	
    			};
    		return suma;
    		
    	
    },


//metoda asta iti creeaza patratele cu ce clasa /nume / ITERATAOR vrei
//folosit in  allSquares(unde il folosesti sa addEventListener)  var unu = this.creatingSquare('second','patratel', i );
//folosit in  puneZilele var zi = this.creatingSquare('zile', this.zile[j], j); 	
	creatingSquare : function(clasa , nume, numarPatrat) 
	{

		this.wrapper = document.getElementById('wrapper');
		this.patratel = document.createElement('div');

		this.patratel.innerHTML= nume;
		this.patratel.className = clasa ;
		this.patratel.id = numarPatrat+'_patratos';
		this.wrapper.appendChild(this.patratel);

		return this.wrapper;
	},

	displayInTitle: function()
	{
		var toate = document.getElementsByClassName('second');
		var titlu = document.getElementById("2_patratos");	
				
			for (var i= 0; i< toate.length; ++i) 
			{
				var dateleDeCareAmNevoie= toate[i].innerHTML;		
				
    			toate[i].setAttribute("title", 'daca');
    			toate[i].title = dateleDeCareAmNevoie;
    			// document.getElementById("2_patratos").title = 'fsfdfdfdf';
				//console.log(this.iDate.getDate());
			};
		

	},
		
	removeAllSquares: function() 
	{
		var allsq = document.getElementsByClassName('second');
		var cont = document.getElementById('wrapper');
		console.log('allsq: ',allsq.length);
		var count = 0;
		console.log('cont: ',cont);
		
			for (var k=allsq.length-1;k>=0;k--)
				{
					cont.removeChild(allsq[k]);
				};
		
	},	
//hardcoded 28 patrate chemate doar in init  
	allSquares: function() 
	{

		var toate = document.getElementsByClassName('second');
		var arr = [];
			arr.length = 28;
													

			
		function makeAlert(event)                                             
			{//console.log('hola ', parseInt(event.target.id.split('_patratos')[0]));//rezultattul complet returneaza un array /cauta split/ arrayjoin/indexOf
			// iar noi avem nevoie de nr ...deci parseInt 
				//window.open('lista.html?zi='+ parseInt(event.target.id.split('_patratos')[0]));
              // if (listProg.style.visibility == 'hidden')
              // 	{
              // 		listProg.style.visibility = 'visible';	
              // 	};   
				var listProg = document.getElementById('listaProgramari');//patrate cu programari
    			var wrp = document.getElementById('patrateCuData'); //patratele cu data /eventlitstenere   
                        //console.log('dsdsdsd: ',getDisplay(wrp));
                        if(getDisplay(wrp) == 'block'){
                            //listProg.style.visibility = 'hidden';
                        	//wrp.style.visibility = 'visible';
                        	wrp.style.display = 'none';
                        	listProg.style.display = 'block';
                        	var data_din_patrat = new Date(event.currentTarget.title);
							//console.log('new Date(toate_patrate[i].innerHTML.split("data:")[1]) este ',data_din_patrate);
							var program = patrate.gaseste_programari_din_data(data_din_patrat);
							console.log(data_din_patrat);
							clienti.init(program, data_din_patrat);
                        }
    
			};	

			for(i=0;i<arr.length;i++)
			{
				var unu = this.creatingSquare('second','patratel', i );
				document.getElementsByClassName('second')[i].addEventListener("click", makeAlert, false);
			};
	
	},
//punem eventListener pe butoane de Adauga  Scade  (luna ,de fapt 28 de zile )			
	mai_pune_inca_2_sapt: function()
	{
		var buton_plus_2_sapt = document.getElementById('butonul_schimba_luna');
		var buton_minus_2_sapt = document.getElementById('butonul_schimba_luna_inapoi');
		
		buton_plus_2_sapt.addEventListener('click', this.clickPeNext.bind(this) , false);
		buton_minus_2_sapt.addEventListener('click', this.clickPeBack.bind(this) , false);
	},
//metoda asta incarca aproape tot init 
//contorLuna e unu .....dupa care la metoda mai_pune_inca_2_sapt unde e eventListener refresh inca 4sapt 
	clickPeNext:function()
	{

		this.contorLuna++;
		
		this.removeAllSquares();
		this.allSquares();

		var azi = new Date();
		azi.setDate(azi.getDate()+28*this.contorLuna);

		this.calendar(azi);
		this.gaseste_data_din_patrat();
		
	},
//aceeasi chestie ca clickPeNext diferenta fiind contor luna merge in spate si mai jos
	clickPeBack:function()
	{

		this.contorLuna--;
		
		this.removeAllSquares();
		this.allSquares();

		var azi = new Date();
		azi.setDate(azi.getDate()-28*(-this.contorLuna)); //aici e genial ....merge in spate cu 28 de zile 
		console.log('data cu minus: ')
		
		this.calendar(azi);
		this.gaseste_data_din_patrat();

	},

	
		
};
	
var getDisplay = function(element)
{
	return element.currentStyle ? element.currentStyle.display : getComputedStyle(element, null).display;
}	

window.onload = function ()
{
	console.log('mainArr:', patrate.mainArray);	
	patrate.init();
	//console.log('io');		
};
