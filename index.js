var listInput = document.getElementById('listInput');
var myInput = document.getElementById('myInput');
var list = document.getElementById('myUL');
var total = document.getElementById('total');
function onBtnClick() {
	var li = document.createElement('li');
	var innerInput = document.getElementById('myInput').value;
	var t = document.createTextNode(innerInput);
	li.appendChild(t);
	console.log(li);
	if (innerInput === '') {
		alert('Please Add Your Items');
	} else {
		document.getElementById('myUL').appendChild(li);
	}
	document.getElementById('myInput').value = '';
	store();
}

myInput.addEventListener('keyup', function(e) {
	if (e.keyCode === 13) {
		e.preventDefault();
		document.getElementById('btn').click();
	}
});

list.addEventListener(
	'click',
	(e) => {
		var t = e.target;
		if (t.classList.contains('checked')) {
			t.parentNode.removeChild(t);
		} else {
			t.classList.add('checked');
		}
		store();
	},
	false
);

// var toggleCheck = document.querySelector('ul');
// toggleCheck.addEventListener('click', (e) => {
// 	if (e.target.tagName === 'LI') {
// 		e.target.classList.toggle('checked');
// 	}
// });

function store() {
	window.localStorage.myList = list.innerHTML;
}

function getValue() {
	var stored = window.localStorage.myList;
	if (!stored) {
		list.innerHTML =
			'<li>Welcome to my list</li>' + '<li>Delete this default list and yours or you may continue😍</li>';
	} else {
		list.innerHTML = stored;
	}
}
getValue();
