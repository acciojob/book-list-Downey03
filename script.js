
		 let arr =[];

		 function update() {
	let string = "";
	for(let i=0;i<arr.length;i++){
		let obj = arr[i]; 
		string+="<tr><td>"+obj.title+"</td><td>"+obj.author+"</td><td>"+obj.isbn+"</td></tr>";
	}
			 document.getElementById("book-list").innerHTML = string;
}
 
		   
function create(){
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let isbn = document.getElementById("isbn").value;
	if(title!=null &&  author!=null && isbn!=null){
	let obj = { 
				"title":title,
			   "author":author,
			   "isbn":isbn
			  }
		console.log(obj);
	arr.push(obj);
	update();
	}
	
}


