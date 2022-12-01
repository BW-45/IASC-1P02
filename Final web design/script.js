window.onload=function()
{
	let oDiv=document.getElementById('tab');
	let oUl=oDiv.getElementsByTagName('ul')[0];
	let aLi=oUl.getElementsByTagName('li');
	let aDiv=oDiv.getElementsByTagName('div')[0];
	let i=0;
	let arr=['January-snowdrop',
	'February-Violet',
	'March—Daffodil',
	'April—Primrose',
	'May—Annunciation',
	'June—Rose',
	'July—Carnation',
	'August—Heather',
	'September—Goldenrod',
	'October—Rosemary',
	'November—Lvy',
	'December—Christmas',
	]
	for(i=0;i<aLi.length;i++)
	{
	  aLi[i].index=i;
	  aLi[i].onmouseover=function()
	  {
		for(i=0;i<aLi.length;i++)  
		{
		 aLi[i].className='';	
		}
		this.className='active';
		aDiv.innerHTML='<h2>lucky flower</h2>'+'<p>'+arr[this.index]+'</p>';
	  }
	  	
	}
};
function reduce(typeNumber){
	let idString = "cat-"+typeNumber;
	let initialCount = Number(document.getElementById(idString).innerText);
	if(initialCount > 1){
		document.getElementById(idString).innerHTML = initialCount -1;
	}else{
		window.alert("The quantity cannot be reduced any more")
	}
}

function increase(typeNumber){
	let idString = "cat-"+typeNumber;
	let initialCount = Number(document.getElementById(idString).innerText);
	if(initialCount < 10){
		document.getElementById(idString).innerHTML = initialCount +1;
	}else{
		window.alert("The quantity cannot be increased")
	}
}