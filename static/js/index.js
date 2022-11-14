const  id = ID => document.getElementById(ID) , $ = sel => document.querySelector(sel) ,$$ = sel => document.querySelectorAll(sel) 



let loadDiv = id("load") ;
let  AllHorarios  ;
let info  ; 
let  horario   ;
let ctx = id("msj")   ;
let  view  = $("#view")   ;





let SelectGroup  = $("#Group") ; 
SelectGroup.addEventListener('change' ,()=>{
	let group = SelectGroup.value ; 
	 
	if(group != "none") {
		horario = AllHorarios[group]  ; 
		console.log(info);	
		ctx.innerHTML =  getTableHorario(horario)  ;
		setEventTd();
		
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
		info  = AllHorarios["Info"] ;
  		loadDiv.style.display = "none"   ;	
		ctx.innerHTML =  "<h1>Selecciona un grupo</h1>" ;
		console.log(info) ;
	
	})
	.catch(err => console.log(err));





