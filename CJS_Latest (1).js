$(document).on('click', "a[data-target='#contacts-single']", function () {
  $("input[name='no-dedupe-single']").prop("checked", true);

  $("button[class='btn btn-primary']").css('display', 'none');

  $(".btn-default").after(
    '<button type="button" id="capvalidator" class="btn">Validate Data</button>'
  );

  $("button[id='capvalidator']").css('float', 'right');

  $("input[data-sginput='Email']").attr("placeholder", "required");
  $("input[data-sginput='Email']").parent().parent().find('label').text("Customer Email");
  $("input[data-sginput='Email']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Email']").css('border-width', '2px');

  $("input[data-sginput='First Name']").attr("placeholder", "required");
  $("input[data-sginput='First Name']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='First Name']").parent().parent().find('label').text("Customer First Name");
  $("input[data-sginput='First Name']").css('border-width', '2px');
  $("input[data-sginput='First Name']").required = true;
  $("input[data-sginput='Last Name']").attr("placeholder", "required");
  $("input[data-sginput='Last Name']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Last Name']").parent().parent().find('label').text("Customer Last Name");
  $("input[data-sginput='Last Name']").css('border-width', '2px');
  $("input[data-sginput='Last Name']").required = true;

  $("input[data-sginput='Organization Name']").attr("placeholder", "required");
  $("input[data-sginput='Organization Name']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Organization Name']").parent().parent().find('label').text("Company Name");
  $("input[data-sginput='Organization Name']").css('border-width', '2px');

  $("input[data-sginput='Division']").attr("placeholder", "required");
  $("input[data-sginput='Division']").parent().parent().find('label').text("Sales Rep Email");
  $("input[data-sginput='Division']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Division']").css('border-width', '2px');
  $("input[data-sginput='Division']").parent().parent().find('div').html('<select id="Sales Rep Email" name="8e42853e3c70cc0defecebdac3ce7c1b"><option value="mark.probert@shareworks.com">mark.probert@shareworks.com</option><option value="todd.jensen@shareworks.com">todd.jensen@shareworks.com</option><option value="david.devenport@shareworks.com">david.devenport@shareworks.com</option><option value="chris.arnold@shareworks.com">chris.arnold@shareworks.com</option><option value="sean.orourke@shareworks.com">sean.orourke@shareworks.com</option><option value="michael.quigley@shareworks.com">michael.quigley@shareworks.com</option><option value="stuart.lake@shareworks.com">stuart.lake@shareworks.com</option><option value="brandon.soderberg@shareworks.com">brandon.soderberg@shareworks.com</option></select>');

  $("input[data-sginput='Department']").attr("placeholder", "required");
  $("input[data-sginput='Department']").parent().parent().find('label').text("Sales Rep Name");
  $("input[data-sginput='Department']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Department']").css('border-width', '2px');
  $("input[data-sginput='Department']").parent().parent().find('div').html('<select id="Sales Rep Name" name="a8d98e537a4d4e5c398aad0bb8448931"><option value="Mark Probert">Mark Probert</option><option value="Todd Jensen">Todd Jensen</option><option value="David Devenport">David Devenport</option><option value="Chris Arnold">Chris Arnold</option><option value="Sean ORourke">Sean ORourke</option><option value="Michael Quigley">Michael Quigley</option><option value="Stuart Lake">Stuart Lake</option><option value="Brandon Soderberg">Brandon Soderberg</option></select>');

  $("input[data-sginput='Team']").parent().parent().find('label').text("Salesforce Opportunity ID");
  $("input[data-sginput='Team']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Team']").css('border-width', '2px');
  $("input[data-sginput='Team']").attr("placeholder", "Salesforce Opportunity ID (e.g. 00661000009EZDH)");
  $("input[data-sginput='Team']").css('border-width', '2px');

  $("input[data-sginput='Group']").parent().parent().find('label').text("Account Manager Name");
  $("input[data-sginput='Group']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Group']").css('border-width', '2px');
  $("input[data-sginput='Group']").attr("placeholder", "required");
  $("input[data-sginput='Group']").css('border-width', '2px');
  $("input[data-sginput='Group']").parent().parent().find('div').html('<select id="Account Manager Name" name="d2ae222a262f6a090ddf4d07731e589b"><option value="Jason Parker">Jason Parker</option><option value="Randy Phommahaxay">Randy Phommahaxay</option></select>');

  $("input[data-sginput='Role']").parent().parent().find('label').text("Account Manager Email");
  $("input[data-sginput='Role']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Role']").css('border-width', '2px');
  $("input[data-sginput='Role']").css('border-width', '2px');
  $("input[data-sginput='Role']").parent().parent().find('div').html('<select id="Account Manager Email" name="4efdce6802b873021ef52c0d4fe3ea58"><option value="jason.parker@shareworks.com">jason.parker@shareworks.com</option><option value="randy.phommahaxay@shareworks.com">randy.phommahaxay@shareworks.com</option></select>');

  /*
  $("input[data-sginput='Phone (Home)']").parent().parent().find('label').text("Survey Type");
  $("input[data-sginput='Phone (Home)']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[data-sginput='Phone (Home)']").css('border-width', '2px');
  $("input[data-sginput='Phone (Home)']").attr("placeholder", "yes/no");
  $("input[data-sginput='Phone (Home)']").css('border-width', '2px');
  */

  $("input[name='invite_custom_field_1']").parent().parent().find('label').text("CTM Price");
  $("input[name='invite_custom_field_1']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_1']").css('border-width', '2px');
  $("input[name='invite_custom_field_1']").attr("placeholder", "Annual/Monthly");
  //$("input[name='invite_custom_field_1']").val("$3.00");
  $("input[name='invite_custom_field_2']").parent().parent().find('label').text("Implementation Fee");
  $("input[name='invite_custom_field_2']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_2']").css('border-width', '2px');
  $("input[name='invite_custom_field_2']").attr("placeholder", "One-time Fee");
  $("input[name='invite_custom_field_2']").val("$500");

  $("input[name='invite_custom_field_3']").parent().parent().find('label').text("ASC 718 Price");
  $("input[name='invite_custom_field_3']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_3']").css('border-width', '2px');
  $("input[name='invite_custom_field_3']").attr("placeholder", "Annual/Monthly");
  //$("input[name='invite_custom_field_3']").val("$149");

  $("input[name='invite_custom_field_4']").parent().parent().find('label').text("409A Price");
  $("input[name='invite_custom_field_4']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_4']").css('border-width', '2px');
  $("input[name='invite_custom_field_4']").attr("placeholder", "Annual Only");
  //$("input[name='invite_custom_field_4']").val("$99");

  $("input[name='invite_custom_field_5']").parent().parent().find('label').text("Valuation Date");
  $("input[name='invite_custom_field_5']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_5']").css('border-width', '2px');
  $("input[name='invite_custom_field_5']").attr("placeholder", "MM/DD/YYYY");


  $("input[name='invite_custom_field_6']").parent().parent().find('label').text("Subscription Discount Percentage");
  $("input[name='invite_custom_field_6']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_6']").css('border-width', '2px');
  $("input[name='invite_custom_field_6']").attr("placeholder", "% only. Applies to both CTM and ASC 718");


  $("input[name='invite_custom_field_7']").parent().parent().find('label').text("CTM/ASC 718 Interval");
  $("input[name='invite_custom_field_7']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_7']").css('border-width', '2px');
  $("input[name='invite_custom_field_7']").attr("placeholder", "Annual/Monthly");
  $("input[name='invite_custom_field_7']").parent().parent().find('div').html('<select id="Survey Type" name="invite_custom_field_7"><option value="Monthly">Monthly</option><option value="Annually">Annually</option></select>')

  /*
  $("input[name='invite_custom_field_8']").parent().parent().find('label').text("Using Custom Agreement");
  $("input[name='invite_custom_field_8']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_8']").css('border-width', '2px');
  $("input[name='invite_custom_field_8']").attr("placeholder", "e.g. Yes - If you are using docusign, leave blank otherwise");
  */
  $("input[name='invite_custom_field_9']").parent().parent().find('label').text("Shareworks Startup Company ID");
  $("input[name='invite_custom_field_9']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_9']").css('border-width', '2px');
  $("input[name='invite_custom_field_9']").attr("placeholder", "XXXXXX - required - NOT cap table ID");

  $("input[name='invite_custom_field_10']").parent().parent().find('label').text("Survey Type");
  $("input[name='invite_custom_field_10']").parent().parent().find('label').css('font-weight', 'bold');
  $("input[name='invite_custom_field_10']").css('border-width', '2px');
  $("input[name='invite_custom_field_10']").attr("placeholder", "Yes - leave blank otherwise");
  $("input[name='invite_custom_field_10']").parent().parent().find('div').html('<select id="Survey Type" name="invite_custom_field_10"><option value="CTM">CTM</option><option value="CTM_409A">CTM+409A</option><option value="CTM_409A_ASC718">CTM+409A+ASC 718</option><option value="CTM_ASC718">CTM+ASC 718</option><option value="409A_Only">409A Only</option></select>')
  /*condense row spacing */
  $("div[class='form-row']").css('margin-top', '-20px');
  /*remove unused fields*/
  $("div[class='row form-group']").css('margin-bottom', '5px');
  $("div[class='row form-group']").has('label:contains(Phone (Fax))').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Phone (Home))').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Custom Field 5)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Custom Field 6)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Custom Field 7)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Custom Field 8)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Custom Field 10)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Role)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Phone (Work))').css('display', 'none');
  $("div[class='row form-group']").has('h4:contains(Address)').css('display', 'none');
  $("div[class='row form-group']").has('h4:contains(specific)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Address)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Suite/Apt)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(City)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(State/Region)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Country)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Postal Code)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Job Title)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Website)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Phone)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Ste/Apt)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Ste/Apt)').css('display', 'none');
  //$("div[class='form-group']").has('label:contains(Custom Field 10)').css('display', 'none');
  $("div[class='form-group']").has('label:contains(Allow duplicate)').css('display', 'block');
  $("div[class='row form-group']").has('h4:contains(Other Contact)').css('display', 'none');
  $("div[class='row form-group']").has('label:contains(Other Contact)').css('display', 'none');
}
);
$(document).on('click', "button[id='capvalidator']", function () {
  //Old validation -- if ($("input[data-sginput='First Name']").val() && $("input[data-sginput='Last Name']").val() && $("input[data-sginput='Organization Name']").val() && $("input[name='invite_custom_field_9']").val() ) {

  //Customer info validation
  if ($("input[data-sginput='Email']").val() == "") {
    alert("Customer Email is required.");
    var dataValidated = false;
    return false;
  } else {
    var dataValidated = true;
  }
  if ($("input[data-sginput='First Name']").val() == "") {
    alert("Customer First Name is required.");
    var dataValidated = false;
    return false;
  } else {
    var dataValidated = true;
  }
  if ($("input[data-sginput='Last Name']").val() == "") {
    alert("Customer Last Name is required.");
    var dataValidated = false;
    return false;
  } else {
    var dataValidated = true;
  }
  if ($("input[data-sginput='Organization Name']").val() == "") {
    alert("Company Name is required.");
    var dataValidated = false;
    return false;
  } else {
    var dataValidated = true;
  }
  //Account Manager name and email validation
  if ($("select[id='Account Manager Name']").val() == "Jason Parker" && $("select[id='Account Manager Email']").val() == "jason.parker@shareworks.com") {
    var dataValidated = true;
  } else if ($("select[id='Account Manager Name']").val() == "Randy Phommahaxay" && $("select[id='Account Manager Email']").val() == "randy.phommahaxay@shareworks.com") {
    var dataValidated = true;
  } else {
    alert("Account Manager Name and Account Manager Email mismatched.");
    var dataValidated = false;
    return false;
  }
  //Sales Rep name and email validation
  if ($("select[id='Sales Rep Name']").val() == "Mark Probert" && $("select[id='Sales Rep Email']").val() == "mark.probert@shareworks.com") {
    var dataValidated = true;
  } else if ($("select[id='Sales Rep Name']").val() == "Todd Jensen" && $("select[id='Sales Rep Email']").val() == "todd.jensen@shareworks.com") {
    var dataValidated = true;
  } else if ($("select[id='Sales Rep Name']").val() == "Chris Arnold" && $("select[id='Sales Rep Email']").val() == "chris.arnold@shareworks.com") {
    var dataValidated = true;
  } else if ($("select[id='Sales Rep Name']").val() == "Sean ORourke" && $("select[id='Sales Rep Email']").val() == "sean.orourke@shareworks.com") {
    var dataValidated = true;
  } else if ($("select[id='Sales Rep Name']").val() == "Michael Quigley" && $("select[id='Sales Rep Email']").val() == "michael.quigley@shareworks.com") {
    var dataValidated = true;
  } else if ($("select[id='Sales Rep Name']").val() == "Stuart Lake" && $("select[id='Sales Rep Email']").val() == "stuart.lake@shareworks.com") {
    var dataValidated = true;
  } else if ($("select[id='Sales Rep Name']").val() == "Brandon Soderberg" && $("select[id='Sales Rep Email']").val() == "brandon.soderberg@shareworks.com") {
    var dataValidated = true;
  } else {
    alert("Sales Rep Name and Sales Rep Email mismatched.");
    var dataValidated = false;
    return false;
  }
  //CTM Pricing validation
  if ($("select[name='invite_custom_field_10']").val() == "CTM" && $("input[name='invite_custom_field_3']").val() !== "N/A" && $("input[name='invite_custom_field_4']").val() !== "N/A") {
    alert("409A Price and ASC 718 Price should be N/A for CTM Only");
    var dataValidated = false;
    return false;
  } else {
    var dataValidated = true;
  }
  if ($("select[name='invite_custom_field_10']").val() == "CTM" && $("input[name='invite_custom_field_1']").val() == "") {
    alert("CTM Price is required for CTM Only");
    var dataValidated = false;
    return false;
  } else {
    var dataValidated = true;
  }
  //CTM+409A pricing validation
  if ($("select[name='invite_custom_field_10']").val() == "CTM_409A" && $("input[name='invite_custom_field_3']").val() !== "N/A") {
    alert("ASC 718 Price should be N/A for CTM+409A");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A" && $("input[name='invite_custom_field_1']").val() == "N/A") {
    alert("CTM Price needs to be entered for CTM+409A");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A" && $("input[name='invite_custom_field_1']").val() == "") {
    alert("CTM Price needs to be entered for CTM+409A");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A" && $("input[name='invite_custom_field_4']").val() == "N/A") {
    alert("409A Price needs to be entered for CTM+409A");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A" && $("input[name='invite_custom_field_4']").val() == "") {
    alert("409A Price needs to be entered for CTM+409A");
    var dataValidated = false;
    return false;
  }
  //CTM+409A+ASC718 pricing validation
  if ($("select[name='invite_custom_field_10']").val() == "CTM_409A_ASC718" && $("input[name='invite_custom_field_1']").val() == "N/A") {
    alert("CTM Price needs to be entered for CTM+409A+ASC 718");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A_ASC718" && $("input[name='invite_custom_field_1']").val() == "") {
    alert("CTM Price needs to be entered for CTM+409A+ASC 718");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A_ASC718" && $("input[name='invite_custom_field_4']").val() == "N/A") {
    alert("409A Price needs to be entered for CTM+409A+ASC 718");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A_ASC718" && $("input[name='invite_custom_field_4']").val() == "") {
    alert("409A Price needs to be entered for CTM+409A+ASC 718");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A_ASC718" && $("input[name='invite_custom_field_3']").val() == "N/A") {
    alert("ASC 718 Price needs to be entered for CTM+409A+ASC 718");
    var dataValidated = false;
    return false;
  } else if ($("select[name='invite_custom_field_10']").val() == "CTM_409A_ASC718" && $("input[name='invite_custom_field_3']").val() == "") {
    alert("ASC 718 Price needs to be entered for CTM+409A+ASC 718");
    var dataValidated = false;
    return false;
  }
  //409A only validation
  if ($("select[name='invite_custom_field_10']").val() == "409A_Only" && $("input[name='invite_custom_field_1']").val() !== "N/A") {
    alert("CTM Price should be N/A for 409A Only");
    var dataValidated = false;
    return false;
  }
  if ($("select[name='invite_custom_field_10']").val() == "409A_Only" && $("input[name='invite_custom_field_3']").val() !== "N/A") {
    alert("ASC 718 Price should be N/A for 409A Only");
    var dataValidated = false;
    return false;
  }
  if ($("select[name='invite_custom_field_10']").val() == "409A_Only" && $("input[name='invite_custom_field_4']").val() == "N/A") {
    alert("409A Price is required for 409A Only");
    var dataValidated = false;
    return false;
  }
  if ($("select[name='invite_custom_field_10']").val() == "409A_Only" && $("input[name='invite_custom_field_4']").val() == "") {
    alert("409A Price is required for 409A Only");
    var dataValidated = false;
    return false;
  }
  //Company ID validation
  if ($("input[data-sginput='invite_custom_field_9']").val() == "N/A" || $("input[name='invite_custom_field_9']").val() == "") {
    alert("Shareworks Startup Company ID is a required field");
    var dataValidated = false;
    return false;
  }

  if (dataValidated) {
    $("button[class='btn btn-primary']").css('display', 'block');
    $("button[class='btn btn-primary']").css('float', 'right');
    $("button[id='capvalidator']").css('display', 'none');
  } else {
    return false;
  }
});
$(document).on('click', "button[class='btn btn-default']", function () {
  $("button[class='btn btn-primary']").css('display', 'block');
  $("button[class='btn btn-primary']").css('float', 'right');
  $("button[id='capvalidator']").css('display', 'none');
});
