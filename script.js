a = document.getElementById("correct1");
b = document.getElementById("correct2");
c = document.getElementById("correct3");
d = document.getElementById("correct4");
e = document.getElementById("correct5");
f = document.getElementById("correct6");
g = document.getElementById("key");

function nextImage(el) {
	if (el.src.match("images/button.png")){
		 el.src = "images/cat.PNG";
	} 
}

function refreshPage(){
    window.location.reload();
} 

function checkImage(el){
	if (a.src.match("images/cat.PNG") && b.src.match("images/cat.PNG") && c.src.match("images/cat.PNG")){
		console.log("You win!");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
		d.classList.add("opaque");
		e.classList.add("opaque");
		f.classList.add("opaque");
		g.classList.add("here");
	} 
	else{
		//i wish this function would work when all lights are yellow, or all are red...
	}
}

function nextPage(el) {
	window.location.href = 'www.example.com';
}
