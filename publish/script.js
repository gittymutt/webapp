function store_money_interests() {
	
	
	var wants = $("#wants").val();
	var thoughts = $("#thoughts").val();
	var expectations = $("#expectations").val();

	//console.log("wants=" + wants);
	localStorage.setItem("wants", wants);
	localStorage.setItem("thoughts", thoughts);
	localStorage.setItem("expectations", expectations);
	console.log(localStorage.getItem("wants"));
	console.log(localStorage.getItem("thoughts"));
	console.log(localStorage.getItem("expectations"));

	window.location.href = 'money_issues_2.html'; // go to next page
};

function store_money_possiblilties() {
	
	var possibility =	$('input[name=possibilities]:checked').val();
	localStorage.setItem("possibility", possibility);
	console.log(localStorage.getItem("possibility"));

};


function getData() {
	
	for (var i = 0; i < localStorage.length; i++){
    	console.log(localStorage.getItem(localStorage.key(i)),
    		localStorage.key(i));
    }	


};



// how to store arrays in localstorage
// http://stackoverflow.com/questions/3357553/how-to-store-an-array-in-localstorage

function store_no_money_reasons() {

	var chkArray = [];
	$("#no_money:checked").each(function() {
		chkArray.push($(this).val());
		//console.log($(this).val());
	});


	localStorage.setItem('no_money_reasons', JSON.stringify(chkArray));
	var thereasons = JSON.parse(localStorage.getItem('no_money_reasons'));
	console.log("the reasons: " + thereasons);
	
	
	///$("#no_money:checked").hide();
};



$(document).on('pageshow', '#report' ,function(){
 	document.write('hay!');

 });




