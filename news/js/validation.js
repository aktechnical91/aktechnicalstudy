//*******************Select Post to Apply*********************************************
function trade_select() {
  if ($('#applied_post').val() === 'ITI') {
    $('#trade_block').show();
   $('#trade').focus();                                                      
  } else {
    $('#trade_block').hide();
    $('#trade').val("");                      
    // $('#trade_hidden').val("");              
  }
}
//*************************************************************************************
//*********************Check PIN CODE is Number****************************************
function checkpincode(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('pincode').value = '';
    document.getElementById('per_pincode').value = '';

    return false;
  }

  return true;
}
//*********************/Check PIN CODE is Number****************************************


//*********************Check Obtain Marks is Number****************************************
function checkobtmarks(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('obtmarks').value = '';
    return false;
  }

  return true;
}

//*********************************************************************************

//*********************Check Total Marks is Number****************************************
function checktotmarks(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('totmarks').value = '';
    return false;
  }

  return true;
}

//*********************************************************************************


//*********************Check CGPA is Number****************************************
function checkcgpa(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('cgpa').value = '';
    return false;
  }

  return true;
}

//*********************************************************************************

//*********************Check Valid Mobile***************************************
function checkmobile(str) {
  if (isNaN(str)) {
    alert('Please enter only numeric digits');
    document.getElementById('mobileno').value = '';
    return false;
  }

  return true;
}

//***************************************************************************

//*************************Marks Style*****************************************

function grade_select() {
  var gr = document.getElementById('grade');
   if (gr.value == 'Yes') {
    document.getElementById('result_grade_block').style.display = 'block';
    document.getElementById('result_mark_block').style.display = 'none';
    document.getElementById('percentage').value='';
	  document.getElementById('totmarks').value='';
	  document.getElementById('obtmarks').value='';
    document.getElementById('cgpa').focus();

  }

  else if (gr.value == 'No') {
    document.getElementById('result_mark_block').style.display = 'block';
    document.getElementById('result_grade_block').style.display = 'none'
	  document.getElementById('percentage').value='';
    document.getElementById('cgpa').value='';
    document.getElementById('totmarks').focus();

  } else {
    document.getElementById('result_mark_block').style.display = 'none';
    document.getElementById('result_grade_block').style.display = 'none';
  }

}

//******************************************************************************

// function setblank(){
//   var totmarks=document.getElementById('totmarks');
//   if(totmarks!='')
//   {
//   document.getElementById('obtmarks').value='';
//   document.getElementById('percentage').value'';
//   }
// }

//***************************************************************************
//********************************************************************************
function per0() {
  var result = 0;
  var tot = parseInt(document.getElementById('totmarks').value);
  var obt = parseInt(document.getElementById('obtmarks').value);
  if(tot<obt)
    {
    alert("obtain marks should be less than or equals to total marks");
    document.getElementById('totmarks').value=""; 
    document.getElementById('obtmarks').value=""; 
    document.getElementById('percentage').value="";
    document.getElementById("cgpa").value="";
    document.getElementById("totmarks").focus();
    }
  }

//*******************************************************************************


//********************************************************************************

function per() {
  var result = 0;
  var tot = parseInt(document.getElementById('totmarks').value);
  var obt = parseInt(document.getElementById('obtmarks').value);
 if(tot<obt)
 {
	 alert("obtain marks should be less than or equals to total marks");
  document.getElementById('totmarks').value="";	
  document.getElementById('obtmarks').value="";	
  document.getElementById('percentage').value="";
  document.getElementById("cgpa").value="";
  document.getElementById("totmarks").focus();
 }
 else
	{		
  result = (obt * 100) / tot;
  result=result.toFixed(2);
  document.getElementById('percentage').value = result;
      if (result < 50) {
	   alert('Your percentage is less than 50%, so You are Not Eligible for Act Apprentiship-2019');
     document.getElementById('totmarks').value="";	
  document.getElementById('obtmarks').value="";	
	 document.getElementById('obtmarks').focus();
     document.getElementById('percentage').value="";
	  }
	}

    // obtmarks.focus();
  }
//*******************************************************************************



//************************************************************************************
function per1() {
  var c = parseFloat(document.getElementById('cgpa').value);
    var result=c*9.5;
  result=result.toFixed(2);
  if (c < 5 || c > 10 || isNaN(c)) {
    alert('CGPA Must be Between 5 to 10');
    document.getElementById('totmarks').value="";	
  document.getElementById('obtmarks').value="";	
  document.getElementById('percentage').value="";
  document.getElementById("cgpa").value="";
	   cgpa.focus();
    result = 0;

  } else if (result < 50.00) {
    alert('Your percentage is less than 50%, so You are Not Eligible for Act Apprentiship-2019');
     result=0;
	 document.getElementById('percentage').value ="";
	document.getElementById('totmarks').value ="";
	document.getElementById('obtmarks').value ="";
	document.getElementById('cgpa').value="";
	cgpa.focus();
  } 

  document.getElementById('percentage').value = result;
 }
//**************************************************************************
