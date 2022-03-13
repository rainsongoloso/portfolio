//Storage for all Expense Object
var data = [];

function Expenses(id,expN, aM) {
		this.id = id;
		this.expN = expN;
		this.aM = aM;
}

function domValues() {
	var expN = document.getElementById('exN').value;
	var aM = document.getElementById('aM').value;

	if(expN == "" && expN == "" || aM == "" && aM == "") {
		var alertMsg = alert("Please enter Expense name and The Expense Amount") ;
		if(alertMsg == undefined) {
			return 0;
		}
	}
	else {
		return {
			expName: expN,
			expAmount: aM
		}
	}	
}

function calcExp() {
	var sum = 0;
	for(var i = 0; i < data.length; i++) {
		sum += data[i].aM; 
	}
	return sum;
}

function storeDatas() {
	var expObj,id;
	var domVal = domValues();

	if(domVal == 0) {
		return 0;
	} else {
		//Create ID
		if (data.length > 0) {
        	id = data[data.length - 1].id + 1;
	    } else {
	        id = 0;
	    }

		//Instantiate Object Expenses
		expObj = new Expenses(id,domVal.expName, parseInt(domVal.expAmount));

	    //Add object to Data array
		data.push(expObj);

		return 1;
	}
}

function displayDatas() {
 	var tableDatas ="";
	var forId, forExpn, forAm;

	//Call storeDatas function
	var storage = storeDatas();

	if(storage == 0){
		return 0;
	} else {
		for(var c = 0; c < data.length; c++) {
			forId = data[c].id;
			forExpn = data[c].expN;
			forAm = data[c].aM;
		}

		//Create Table data HTML
		tableDatas += "<td>" + String(forId) + "</td><td>" + String(forExpn) + "</td><td>" + String(forAm);

		return tableDatas;
	}	
}

function clearInputs() {
	document.getElementById("exN").value  = "";
	document.getElementById("aM").value  = "";
}

function init() {
	var display, totalExp, tr, tbody;

	display = displayDatas();
	if(display != 0) {
		totalExp = calcExp();
		tr = document.createElement("tr");
		tbody = document.querySelector("#tableStyle tbody");
		tr.innerHTML = display;
		tbody.appendChild(tr);
		document.getElementById("totalExp").innerHTML = "Total Expenses: "+totalExp;
		clearInputs();
	}
}







