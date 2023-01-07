let span = document.getElementsByClassName('arrow-btn');
let ig_post = document.getElementsByClassName('post')
let ig_post_page = Math.ceil(ig_post.length/6);
let l = 0;
let movePer = 17;
let maxMove = (ig_post.length - 6) * 17;
const right = document.getElementById('right')
const left = document.getElementById('left')

if (ig_post_page <= 1) {
	document.getElementById('arrows-container').style.display = 'none'
}

left.style.display = 'none'

let right_mover = () => {

	left.style.display = 'block'
	l = l + movePer;
	console.log(l)
	console.log(l === maxMove)
	
	if (ig_post_page == 1){l = 0;}
	for(const i of ig_post)
	{
		if (l > maxMove){l = l - movePer;}
		i.style.left = '-' + l + '%';
	}
}

let left_mover = () => {
	right.style.display = 'block'
	l = l - movePer;
	console.log(l)
	console.log(l === 0)
	if (l === 0) {
		left.style.display = 'none'
	}	
	if (l<=0){l = 0;}
	for(const i of ig_post){
		if (ig_post_page > 1){
			i.style.left = '-' + l + '%';
		}
	}
}
right.onclick = ()=>{right_mover();}
left.onclick = ()=>{left_mover();}