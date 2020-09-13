const inventors =[
    { firts: 'Albert', last : 'Einsten', year:  1879, passed: 1955 },
    { firts: 'Isaac', last : 'Newton', year:  1643, passed: 1727 },
    { firts: 'Galileo', last : 'Galiei', year:  1564, passed: 1642 },
    { firts: 'Marie', last : 'Curie', year:  1867, passed: 1934 },
    { firts: 'Johanes', last : 'Kepple', year:  1571, passed: 1630 },
    { firts: 'Nicolaus', last : 'Copernico', year:  1473, passed: 1543 },
    { firts: 'Max', last : 'Planck', year:  1858, passed: 1947 }
]

const people =['Paco, Perez', 'Alfonso, Ramirez','Carlos, Torres','Benedick, Morales','Carolina, Saenz','Andres, Ticoa','Luz, Marquez','Karen, Espinosa','Jose, Calvache','Juana, Paz','Milena, Cruz','John, Quintero','Sandra, Abella','Nancy, Velasquez','Angela, Cuervo','Alejandro, Rodirguez', 'Andres, Torres', 'Eduard, Naranjo', 'Adriana, Chiquillo', 'Maria, Sotelo', 'Jenny, Lopez','Guillermo, Del toro','Sofia, Vergara','Laura, Pulido', 'Natalia, Lopez','Andres, Perez','Talia, Abella','Mauricio, Espinosa','Estefania, Ticoa','Angel, Paz','Francisco, Marquez','Eduardo, Sotelo','Jesus, Naranjo','Julio, Ramirez','Jose, Quintero', 'Milena, Lopez','Adriana, Del toro','Jessica, Vergara','Anna, Torres','Emma, Quintero','Gustavo, Ovalle','Bryan, Velasquez','Rolando, Vasquez','Raul, Molina','Jorge, Ramirez']

 const born1500 = inventors.filter((inventor)=> (inventor.year > 1499 && inventor.year <= 1599))

 console.table(born1500);

 console.log('----------------');

 const newArray = inventors.map((inventor)=> { 
     return { firts : inventor.firts, last : inventor.last}
 });

 console.table(newArray);

 console.log('----------------');

 const sortInventors = inventors.sort((a, b)=> a.year > b.year? 1 : -1);
 console.table(sortInventors);

 console.log('----------------');

 const sumaAnnios = inventors.reduce((acum, inventor)=> { return acum + (inventor.passed-inventor.year)},0);
 console.log(sumaAnnios);

 console.log('----------------');
 const orden = inventors.sort((inventor1, inventor2)=>{
     let edad1 = inventor1.passed - inventor1.year;
     console.log(edad1);
     let edad2 = inventor2.passed - inventor2.year;
     console.log(edad2);
     if(edad1 < edad2){
         return 1;
     }
     else{
         return -1
     }
 }); 
 console.table(orden);


 console.log('-----------');

 const alfabetico = people.sort((last,next)=>{
    const nombres = last.split(',');
    const nombres2 = next.split(',');
    if(nombres[1] < nombres2[1]){
        return 1
    }
    else {
        return -1
    }
 });

 console.log(alfabetico);

 const data = ['car','truck','bike','walk','car', 'truck','bike','walk','car','truck','walk','truck','bike','walk','car','bike','bike','car','truck','bike','walk','car','walk','truck','bike','walk','car'];

 const objetos = {
     car : 0,
     truck : 0,
     bike : 0,
     walk: 0
 }

 const result = data.reduce(( obj, item )=>{
    if (!obj[item]) {
        obj[item]=0;
    }
    obj[item]++;
    return obj;
    },{});

 console.log(result);