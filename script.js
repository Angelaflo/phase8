a = document.getElementById("correct1"); // variables that are linked to the tiles id in the html 
b = document.getElementById("correct2");
c = document.getElementById("correct3");
d = document.getElementById("correct4");
e = document.getElementById("correct5");
f = document.getElementById("correct6");
g = document.getElementById("key"); // variable of the key image

function nextImage(el) {
	if (el.src.match("images/button.png")){
		 el.src = "images/cat.PNG";
	} 
} // onclick feature when you click one of the correct tiles "button.png", it changes to the cat image

function refreshPage(){
    window.location.reload();
} // onclick feature that refreshes the page 

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
		
	}
} // onclick feature where you click coraline and checks if all the correct tiles and if it is, it makes the cat images opaque and makes the key that is hidden appear. If all the correct tiles isn't checked, this function won't do anyhting.

function nextPage(el) {
	window.location.href = 'https://ashleygonzalez9.github.io/phase8/escape.html';
} //onclick feature where it takes you to the next page of the escape room. 
