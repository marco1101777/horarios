const  id = ID => document.getElementById(ID) , $ = sel => document.querySelector(sel) 





let loadDiv = id("load") ;

let  AllHorarios  ;
const days = ["Lunes" , "Martes" , "Miercoles" , "Jueves"  ,"Viernes"]
const hrs = ["7:30 A 8:20" , "8:20 A 9:10" , "9:10 A 10:00" ,"RECESO", "10:30 A 11:20" , "11:20 A 12:10" , "12:10 A 1:00","1:00 A 1:50" , "1:50 A  2:20" ,"2:20 A 3:30"  ] ; 
let ctx = id("msj")   ;
let  view  = $("#view")   ;


function getTableHorario(H){
	let $table = `<table border='1' id = "horario" >
					<tr>
						<td></td>
						<td>Lunes</td>
						<td>Martes</td>
						<td>Miercoles</td>
						<td>Jueves</td>
						<td>Viernes</td>
					</tr>
					` ;
	for(let i  in  hrs){
		$table += "<tr>" ;
		$table += `<td >${hrs[i]}</td>`
		if(i != 3 ){
			for(let  j in days){
				let materia  = H[days[j]][i]  ; 
				$table += materia != null ?`<td> ${materia} </td>`: "<td></td>" ;    
			}
		}
		$table += "</tr>" ;
	} 

	$table += "</table>" ;
	return  $table ; 
}



let SelectGroup  = $("#Group") ; 
SelectGroup.addEventListener('change' ,()=>{
	let group = SelectGroup.value ; 
	let  horario   ; 
	if(group != "none") {
		horario = AllHorarios[group]  ; 	
		ctx.innerHTML =  getTableHorario(horario)  ;
		
	}else{
		ctx.innerHTML =  "<h1>Selecciona un grupo</h1>" ;
	}
	

}) ;


view.addEventListener("click" , () => {
	SelectGroup.style.animation = "destello 1s "  ;

});

fetch("https://marco1101777.github.io/horarios/static/horarios/All.json")
	.then(res => res.json())
	.then(response => {
		AllHorarios = response ; 
		loadDiv.style.display = "none"   ;	
		ctx.innerHTML =  "<h1>Selecciona un grupo</h1>" ;
	
	});





