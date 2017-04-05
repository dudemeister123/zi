
           //caut ora in tabel ...parcurgi pana la durata j=1 i +durata si verifici daca {if!=}  daca ii ceva return false 
           //la capatul metodei return true dupa toate parantezele ...daca nu return false 
        console.log();
var clienti = {
         
    programarilePeDivuri:[],
        programariTest : [
            {
                ora_programare: "9:00",
                durata_programare: "3",
                nume_programare: "Eu",
                id_client:"00001"
            },
            {
                ora_programare: "13:00",
                durata_programare: "1",
                nume_programare: "Tu",
                id_client:"00004"  
            },
            {
                ora_programare: "15:00",
                durata_programare: "3",
                nume_programare: "El",
                id_client:"00007"
            }
        ],

          
       // ziTest   :"Luni" ,
        //dataTest :"12.01.2017",
        proTest  :[] , 

        mainArray : [],

         luniP : [

        {ora_programare: "9:00",durata_programare: "2",nume_programare: "Eu",id_client:"00001"}, 
        {ora_programare: "13:00",durata_programare: "2",nume_programare: "Tu",id_client:"00004"},
        {ora_programare: "15:00",durata_programare: "3",nume_programare: "El",id_client:"00007"}
    ],
         martiP : [

        {ora_programare: "9:00",durata_programare: "3",nume_programare: "Eu",id_client:"00001"}, 
        {ora_programare: "13:00",durata_programare: "2",nume_programare: "Tu",id_client:"00004"},
        {ora_programare: "15:00",durata_programare: "2",nume_programare: "El",id_client:"00007"}
    ],
        miercuriP : [

        {ora_programare: "9:00",durata_programare: "3",nume_programare: "Eu",id_client:"00001"}, 
        {ora_programare: "13:00",durata_programare: "2",nume_programare: "Tu",id_client:"00004"},
        {ora_programare: "15:00",durata_programare: "2",nume_programare: "El",id_client:"00007"}
    ],
        joiP : [],
        vineriP : [],
        sambataP : [],
        duminicaP : [],

        ziuaDinURL: 0,// e bine de initializat o val pt a nu da crash tot codul /cel putin returneazaz o val 
        orarTest :["8:00" , "9:00" , '10:00' , '11:00' , "12:00" , '13:00' , '14:00' , '15:00' , '16:00' , '17:00', '18:00', '19:00'],
     init : function(arrayProgramari,dataVenitaDinPatrat) {
        console.log('in init data din patrat circula : ',dataVenitaDinPatrat);
        //this.pushMethod();
        //this.getValue_URL();
        this.cacheDom();
        this.appendOrar();
        this.appendDataZi(dataVenitaDinPatrat);
        this.bindEVENTS();
        this.createSelector();
        //console.log(patrate.mainArray);
        this.adaugaProgramari(arrayProgramari);  ////
        this.unEventPeOre();
        this.backButton();
        //this.adaugaClienti();
       // this.eventPeFiecareArrayProg();
     },

    cacheDom: function() {

        this.desf = document.getElementById('desf');
        this.head = document.getElementById('header');
        this.hZi  = document.getElementById('hzi');
        this.hData = document.getElementById('hData');
        this.continut = document.getElementById('continut');
        this.nume = document.getElementById('value-name') ;
        this.numar = document.getElementById('value-phone');
        this.durata= document.getElementById('value-duration');
        this.buton = document.getElementById('value-np-button');
        this.butonData = document.getElementById('butonProgDirect');
        this.popup = document.getElementById('popupDiv');
     },

     
     backButton: function() 
    {
        //id butonBack
        function clickBack(event)                                             
            {
                var listProg = document.getElementById('listaProgramari');//patrate cu programari
                var wrp = document.getElementById('patrateCuData'); //patratele cu data /eventlitstenere   
                        //console.log('visibilitatea patratelor cu data: ', wrp.style.visibility);
                 //console.log('avem desf: ', listProg);
                 console.log('clicked');
                    if(getDisplay(wrp) == 'block')
                    {   
                        //console.log('primul if');
                        //if(wrp.style.display == 'block')
                        
                        //listProg.style.display = 'none';
                            
                    } else { 

                        wrp.style.display = 'block';
                        listProg.style.display = 'none';
                        this.removeOrar();
                    }
                            
             };  
                        
            document.getElementById('butonBack').addEventListener("click", clickBack.bind(this), false);
            
                        
    },                    
                        
                        
    

             
    bindEVENTS: function() {
        
        
        this.buton.addEventListener('click', this.addNP.bind(this) );
        //this.butonData.addEventListener('click', );
        //console.log();
    },

    adaugaProgramari: function(progTest) ///aici vine arrayul cu programari dintr o zi /noi trebuie s a bagam intr un for toate programrile 
    //2 randuri de cod    ehhh 2 randuri de cod  vezi tu ce ti bagi aici 
    //__ innerHTML+= iti lipeste la ce este./ orele libere care trebuie aratate in div /   
    {    
        //var primulObiect = this.programariTest[0];
        //console.log(primulObiect);

        //tot[j].children[0].innerHTML        
        //var pro= progTest;
        //console.log(progTest);
        
        for(var i=0;i<progTest.length;i++)
        {
            //console.log(progTest[i]);
            this.adaugaOprogramare(progTest[i]);


        }
    },

    

    adaugaOprogramare: function(oprogramare)
   { //            ora_programare: "9:00",
    //             durata_programare: "2",
    //             id_client:"00001"
    //             nume_programare: "Eu",
        
        
        var idul = oprogramare.idClient;
        var numeP = oprogramare.numeProgramare;
        var durataP = parseInt(oprogramare.durataProgramare);
        var oraPrimaProgramare = oprogramare.oraProgramare;
        var tot = document.getElementsByClassName("orar"); //de la var tot ai posibilitatea sa compari children[0]ora   [1]pacient cu primulOBJ?
        
         

          for(var i=0;i<tot.length;i++)
            {
                //if(tot[i].children[1].innerHTML == ''){
                if(oraPrimaProgramare == tot[i].children[0].innerHTML )
                {

                tot[i].children[1].innerHTML = numeP + " iar durata este de :" + durataP ;

                for(varj=i;j<i+durataP;j++)//de la ora la care incepe programarea[i] inca cat dureaza programarea (duratap)
                {
             
                tot[j].children[1].innerHTML = numeP;

                };
            //return;
        
            //console.log(tot[j].children[1]);
            //};
        };

        };
        //console.log(durataP);
        //console.log(oprogramare.ora_programare);
    },

    eventPeFiecareArrayProg: function()
    {   
        function ataseaza(e)
        {   console.log('!!!!!! event target este: ',e.target);
            console.log('!!!!!! this  este: ', this);
            console.log('!!!!!! this.a este: ', this.a);
            this.a.style.background = 'white';



            //this.style.background = 'black';
        }

        console.log('@@@ programarilePeDivuri in functie se vede',this.programarilePeDivuri); 
        for(var j =0;j<this.programarilePeDivuri.length;j++)
            {   
            console.log('@@@ programarilePeDivuri in functie in for se vede',this.programarilePeDivuri[j]); 
                for(var k=0;k<this.programarilePeDivuri[j].length;k++)
                    {    
                        console.log('@@@@@@@@@@@@',this.programarilePeDivuri[j][k]);
                        this.a = this.programarilePeDivuri[j][k]
                        this.a.addEventListener('mouseover', ataseaza.bind(this), false);
                    };
                //var k = j+1;
                //console.log('####this.programarilePeDivuri[j]',this.programarilePeDivuri[j]);
            
            // console.log('@@@@pro[j].length array care contine aray de fiecare prog ',pro[j]);
            //   pro[j].addEventListener('mouseover',function(){

            //     console.log('sa dat click');
            //   });  
            //console.log('#####pro.pacientText.length este vizibil',pro.pacientText);
                //for(var k=0;k<pro.pacientText.length;k++)
                   // {

                    //console.log('@@@@pro[j].length array care contine aray de fiecare prog ',pro[j].pacientText[k]);
                    
                    //};
                //var k = j+1;
                // pro[j].addEventListener("mouseover", function(ev){
                //     pro = event.target;
                //     pro.style.backgroundColor = 'white';
                // });
                //console.log("@@@ toate this.programarilePeDivuri.Eu am nevoie de divuri ?:",pro[j]);
            };
        
    
        //return
    },

    addNP : function(event) {

           
           console.log('e.currentTarget: ', event.Target);
           var inputDurata=parseInt(this.durata.value);
           var inputNume =  this.nume.value;
           var inputNumar = this.numar.value;
        
           //console.log(inputDurata);
           var tot = document.getElementsByClassName("orar");
           var sel = document.getElementById("select").value;
           //var oraDinOrar = document.getElementsByClassName('oraTest');
           //console.log("oraDinOrar este  " ,);

           if(sel === "time"){
            alert("nu este selctata ora");
              return;

           } else {

            for(var j=0 ; j<tot.length;j++){      /////daca poti face pana unde vrei tu autocomplete la ora 
//o condtiie cu programarea introdusa e valida 
//

                
                if(sel == tot[j].children[0].innerHTML ){

                    //tot[j].children[0].style.background = 'white';
                    //sel = tot[j].children[0].innerHTML;
                    if(tot[j].children[1].innerHTML == '') {

                        if (this.cateOreLibere(j,tot) < inputDurata) 
                        {
                            alert("Este deja o programare pt aceasta ora");
                            return;
                        }
                        //console.log
                        //console.log(this.cateOreLibere(j,tot));
                        //console.log('j:',j,'tot:',tot);

                        tot[j].children[1].innerHTML = inputNume + " " +inputNumar;

                        for(var k=j;k<j+inputDurata;k++)//de la ora la care incepe programarea[i] inca cat dureaza programarea (duratap)
                        {
                            //if(inputDurata == )
                            tot[k].children[1].innerHTML = inputNume + " " +inputNumar;
                            
                        };
                        
                        //return;
                        this.manipulator_progFacute(inputNume,inputNumar,inputDurata);
                        console.log('iDurata:',inputDurata);
                        console.log('inputNume:',typeof inputNume);
                        console.log('inputNumar:',typeof inputNumar);
                        this.popup.style.display = 'none';
                    } else {
                        alert("Este deja o programare pt aceasta ora");
                        return;
                    }
                }; /// aici am gasit randul din tabel cu ora selectata din selector


            };
           }

           

    },

    manipulator_progFacute: function(iName,iNumber,iDuration)
    {
        function ataseaza(e)
        {   
            var aa = e.target;
            console.log('!!!!!! event target este: ',e.target);
            //console.log('!!!!!! this  este: ', this);
            console.log('!!!!!! aa este: ', aa);
            aa.style.background = 'white';

            for (var kk =0;kk<this.programarilePeDivuri.length;kk++)
            {
                if (this.programarilePeDivuri[kk].indexOf(aa)>=0)
                {
                    for (var k2=0;k2<this.programarilePeDivuri[kk].length;k2++)
                    {
                        this.programarilePeDivuri[kk][k2].style.background = 'white';
                        //this.programarilePeDivuri[kk][k2].style.opacity = 0.4;
                    }
                }
            }
        }

        function ataseazaOut(e)
        {   
            var aa = e.target;
            console.log('!!!!!! event target este: ',e.target);
            //console.log('!!!!!! this  este: ', this);
            console.log('!!!!!! aa este: ', aa);
            aa.style.background = 'white';

            for (var kk =0;kk<this.programarilePeDivuri.length;kk++)
            {
                if (this.programarilePeDivuri[kk].indexOf(aa)>=0)
                {
                    for (var k2=0;k2<this.programarilePeDivuri[kk].length;k2++)
                    {
                        this.programarilePeDivuri[kk][k2].style.background = 'none';
                    }
                }
            }
        }

        

       this.name= iName; 
       this.number= iNumber; 
       this.duration= iDuration; 
        
        this.comparat = this.name + " " + this.number;
        console.log('1/3this.comparat ar trebui sa fie egal cu numele spatiu telefon :',this.comparat);
       var obj_date_programari = {};
       var count = 0;
       var parent_prog = document.getElementsByClassName("orar");

            var prg=[]; //array cu divurile unei programari
            for(var i=0; i<parent_prog.length; i++)
                {

                    if(this.comparat == parent_prog[i].children[1].innerHTML) 
                    {
                        count++;
                        var a  = parent_prog[i].children[1];   
                        a.addEventListener('mouseover', ataseaza.bind(this), false);
                        a.addEventListener('mouseout', ataseazaOut.bind(this), false);
                        prg.push(a);

                        //console.log("this.programarilePeDivuri in interiorul functii: " ,this.programarilePeDivuri);
                    //puteam folosi aceste 2 divuri sa si schimbe stilul simultan?    
                        console.log('2/3 count este : ',count);
                        console.log('3/3 sunt in if iar parent_prog[i].children[1].innerHTML este ',parent_prog[i].children[1].innerHTML);
                    }


                };
            this.programarilePeDivuri.push(prg);

            //this.eventPeFiecareArrayProg();

        // for(var j=0;j<this.programarilePeDivuri.length;j++)
        // {
        //     var b= this.programarilePeDivuri[i];
            
        //     this.programarilePeDivuri[i].addEventListener('mouseover',function(e){
        //         b = e.target;
        //         b.style.backgroundColor = 'white'; 
        //     } );   
                        
                
        // };

        
//var pacient_Un= new manipulator_progFacute 
       console.log('1.numele preluate din addNP: ',this.name);
       console.log('2.numarul  preluate din addNP: ',this.number);
       console.log('3.durata preluate din addNP: ',this.duration);

    },
    createSelector: function(){

        var selectEl = document.getElementById('select');
        var first = this.createTimeSelect("time");
        selectEl.appendChild(first);   
        //var option = document.createElement('option');
        //selectEl.appendChild(allOpt);
        for(var i=0;i<this.orarTest.length;i++){

            var unTime = this.createTimeSelect(this.orarTest[i]);
            //select.appendChild(option);
            //allOpt[i].innerHTML = this.orarTest;
            
            selectEl.appendChild(unTime);
            //return ;
        };


    },
    
    cateOreLibere:function(iterator,ore)
            {
                var totalOreLiber = 0;
                for(var j=iterator;j<ore.length;j++) 
                {
                    //console.log(ore[j].children[1].innerHTML);
                    if(ore[j].children[1].innerHTML == '')
                    {
                        totalOreLiber++;
                        //onsole.log(true);
                        console.log('cate ore se mai pot ocupa ',totalOreLiber)    
                    } else {

                        return totalOreLiber;
                    
                    }
                
                }
                console.log('cate ore sunt valabile de la ora unde ai dat click  ',totalOreLiber)    
                return totalOreLiber;   
            },    
    unEventPeOre : function() 
        {
            var ore = document.getElementsByClassName('orar');
            var selectTime = document.getElementById("select");
            
            //var ore = document.getElementsByClassName('oraText');

           // console.log('selecttime',selectTime.options.text);

            function io(e)

                {
                    //var optIndex=0;

                    //punem un event listener pe fiecare optiune din select 
                   for(var i = 0;i<selectTime.options.length;i++){ //iar daca
                        //console.log(selectTime.options[i].text);/// current targetul evenimentului este egala cu orice ora 
                        if(e.currentTarget.children[0].innerHTML == selectTime.options[i].text ){//din textul (select.options.text)
                            //in iful asta se gaseste ora pe care am dat click 
                            //cateOreLibere(i);                           
                            selectTime.options[i].selected = true; //i este pe ce am dat eu click 
                            //var oreLibere = cateOreLibere(i);
                            //console.log(cateOreLibere(i));
                            console.log('i este numarul orei pe care am dat click ',i);
                            document.getElementById('value-duration').value = this.cateOreLibere(i,ore);
                            console.log('ore din orar clssname orar ',ore);
                            console.log('oreLibere ',this.cateOreLibere(i,ore));
                        }
                    

                    }



                    var divAscuns = document.getElementById('popupDiv');
                    
                        if(divAscuns.style.display == 'block'){
                            divAscuns.style.display = 'none';
                           

                        }
                        else
                        {
                            divAscuns.style.display = 'block';
                            
                        }
    
                       
                };
            for(var i = 0 ; i<this.orarTest.length;i++)
                {
                    ore[i].addEventListener('click', io.bind(this) , false);
                    
                    
                };
        },

     appendOrar: function () {
        //var child = document.getElementById("continut");
        var orarTitlu = this.createTableElement('orar bold','Orar');
        this.continut.appendChild(orarTitlu);
        
        for(var i=0;i<this.orarTest.length;i++) {

            var rand = this.createTableElement('orar bold', this.orarTest[i]);
            this.continut.appendChild(rand);
            //console.log(child.length);            

        };

     },
     appendDataZi: function (data)   {
        //console.log( 'data transmisa in append : ',data);
         //console.log(this.hZi);
         //console.log(this.hData);
         //this.programari.innerHTML = this.proTest;
         //


         var ziDinArr = (data.getDay() - 1 < 0) ? 6 : data.getDay() - 1;
         /* expresia de mai sus inseamna :

         if (data.getDay() - 1 < 0) ziDinArr = 6;
         else ziDinArr = data.getDay() - 1;

        */

         this.hZi.innerHTML = patrate.zile[ziDinArr];
         this.hData.innerHTML= data.getDate() + ' ' + data.getMonth() + " " + data.getFullYear();//valoarea.placeholder = ptr[0].innerHTML.split('data:')[1].split('<br>');
         
         //]
         console.log('this.hData.innerHTML este : ',data.getFullYear());
         //console.log(this.hData.innerHTML);
///e bine sa faci o metoda cu un for ....si de fiecare data cand ai nevoie IL APELEZI in codul care vrei 

     },

     createTimeSelect: function(valoare){

        //var select= document.getElementById("select");
        var option = document.createElement("option");
        //option.className = clase;
        option.text = valoare;

        //select.appendChild(option);

        return option;

     },

     createTableElement: function (clase, ora) 
        {
        
        //metoda asta creaza 2 divuri intr un singur div     ora pacient in tabel 
        var tabel = document.createElement('div');
        tabel.className = clase;
        
        var hours = document.createElement('div');
        var pacient = document.createElement('div');

        hours.className = "oraText";
        pacient.className = "pacientText";

        tabel.appendChild(hours);
        tabel.appendChild(pacient);

    	hours.innerHTML = ora;
    	return tabel;

        },

    removeOrar: function ()
    {
        var allore = document.getElementsByClassName('orar');
        var cont = document.getElementById('continut');
        //console.log('allsq: ',allsq.length);
        //var count = 0;
        //console.log('cont: ',cont);
        
        for (var k=allore.length-1;k>=0;k--)
        {
            cont.removeChild(allore[k]);
        };
    }  

};



// function getURLValues() {

//     var search = window.location.search.replace(/^\?/,'').replace(/\+/g,' ');
//     var values = {};

//       if (search.length) 
//       {
//         var part, parts = search.split('&');

//           for (var i=0, iLen=parts.length; i<iLen; i++ ) 
//           {
//             part = parts[i].split('=');
//             values[part[0]] = window.decodeURIComponent(part[1]);
//           }
//       }
//       return values;
// }
