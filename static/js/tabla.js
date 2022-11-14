const days = ["Lunes" , "Martes" , "Miercoles" , "Jueves"  ,"Viernes"]
const hrs = ["7:30 A 8:20" , "8:20 A 9:10" , "9:10 A 10:00" ,"RECESO", "10:30 A 11:20" , "11:20 A 12:10" , "12:10 A 1:00","1:00 A 1:50" , "1:50 A  2:20" ,"2:20 A 3:30"  ] ; 


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
				$table += materia != null ?`<td id="getInfo"> ${materia} </td>`: "<td></td>" ;    
			}
		}
		$table += "</tr>" ;
	} 

	$table += "</table>" ;
	return  $table ; 
}


function setEventTd(){
	let AllTdMateria =  $$("#getInfo")  ;
	AllTdMateria.forEach((materia)  => {
		materia.addEventListener("click" , (e)=>{
			
			let  nameMateria = e.target.innerHTML; 
			ctx.innerHTML = MoreInfo(nameMateria.trim()) ;

		});

	});

}



function  MoreInfo(materia){
	let profesor = horario["Profesores"][materia];
	let  prf  = info[profesor].Nombre  ;
	console.log(profesor);
	let  inf = `<div class="info">
    <div class="materia">
      Materia:<br>
      <small>${materia}</small>
    </div>
    <div class="profesor">
      Profesor(a):<br>
      <small>${prf}</small> 
    </div>
    
  </div>
  <div class="map">
    <img src="" alt="mapa">
  </div>` ;
	return  inf  ; 
}