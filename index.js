// function sub(e) {
// 	e.preventDefault();
// const Name=document.getElementById("name").value;
// const Number=document.getElementById("num").value;
// const Email=document.getElementById("email").value;
// const Massage=document.getElementById("massege").value;
// console.log(Name,Number, Email, Massage)
// }
const check=document.getElementById("sub");
check.addEventListener('submit',(e)=>{
	e.preventDefault();
	const Name=document.getElementById("name").value;
const Number=document.getElementById("num").value;
const Email=document.getElementById("email").value;
const Massage=document.getElementById("massege").value;
console.log(Name,Number, Email, Massage)

					// Data Store

// const dataarr= new Array();
// dataarr=JSON.parse(localStorage.getItem("Alvi"))
// dataarr.push({
// 	dataobj
// })
const dataobj={
	Name:Name,
	Number:Number,
	Email:Email,
	Massage:Massage,
}
let arr=[];
arr.push(dataobj);
  arr.push(JSON.parse(localStorage.getItem('arr')));
  console.log(arr);


  localStorage.setItem("arr", JSON.stringify(arr));

// arr.push(dataobj);
// localStorage.setItem("Alvi", JSON.stringify(arr))

empty();
store();
})
check();
function empty(){

	document.getElementById("name").value="";
	document.getElementById("num").value="";
	document.getElementById("email").value="";
	document.getElementById("massege").value="";
}
function store(){
	const Name=document.getElementById("name").value;
const Number=document.getElementById("num").value;
const Email=document.getElementById("email").value;
const Massage=document.getElementById("massege").value;
	// NameText.textContent=Name;
	// const dataobj={
	// 	Name:Name,
	// 	Number:Number,
	// 	Email:Email,
	// 	Massage:Massage,

	// }

}


