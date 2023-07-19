var $FNameLNameRegEx = /^([a-zA-Z]{2,20})$/;
var $FullNameRegEx = /^([a-zA-Z ]{2,40})$/;
var $BankAccountNameRegEx = /^([a-zA-Z ]{2,60})$/;
var $PasswordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,12}$/;

var $EmailIdRegEx = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,8}\b$/i;
var $ConNoRegEx = /^([0-9]{10})$/;
var $AgeRegEx = /^([0-9]{1,2})$/;
var $AadhaarNoRegEx = /^([0-9]{12})$/;
var $GSTNoRegEx = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
var $IndianDrivingLicenseNoRegEx = /^([A-Z]{2,3}[-/0-9]{8,13})$/;
var $IndianVehicleRegNoRegEx = /^([A-Z]{2}[0-9]{1,2}[A-Z]{1,3}[0-9]{1,4})$/;
var $PincodeRegEx = /^[1-9][0-9]{5,6}$/;
var $PANNoRegEx = /^[A-Z]{3}[ABCFGHLJPT][A-Z][0-9]{4}[A-Z]$/;
var $IFSCCodeRegEx = /^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/;
var $BankAccountNoRegEx = /^([0-9]{9,18})$/;
var $LatitudeLongitude = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,8})?|180(?:\.0{1,8})?)$/;

$(document).ready(function () {
    $("#fname").blur(function () {
        $("#fname_valid").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#fname_valid").html("(*)first name required..!!");
        }
        else {
            if (!($(this).val().match($FNameLNameRegEx))) {
                $("#fname_valid").html("(*)Invalid firstname..!!");
            }
        }
    });
    $("#fname").keypress(function (e) {
        $("#fname_valid").empty();
        var flag = (e.which >= 65 && e.which <= 90 || e.which >= 97 && e.which <= 122);
        if (flag == false) {
            $("#fname_valid").html("(*)Invalid input..!!");
        }
        return flag;
    });

    $("#lname").blur(function () {
        $("#lname_valid").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#lname_valid").html("(*)last name required..!!");
        }
        else {
            if (!($(this).val().match($FNameLNameRegEx))) {
                $("#lname_valid").html("(*)Invalid lastname..!!");
            }
        }
    });
    $("#lname").keypress(function (e) {
        $("#lname_valid").empty();
        var flag = (e.which >= 65 && e.which <= 90 || e.which >= 97 && e.which <= 122);
        if (flag == false) {
            $("#lname_valid").html("(*)Invalid input..!!");
        }
        return flag;
    });

    $("#contact").blur(function () {
        $("#contact_valid").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#contact_valid").html("(*)contact number required..!!");
        }
        else {
            if (!($(this).val().match($ConNoRegEx))) {
                $("#contact_valid").html("(*)Invalid contact number..!!");
            }
        }
    });
    $("#contact").keypress(function (e) {
        $("#contact_valid").empty();
        var flag = (e.which >= 48 && e.which <= 57);
        if (flag == false) {
            $("#contact_valid").html("(*)Invalid input..!!");
        }
        return flag;
    });

    $("#email").blur(function () {
        $("#email_valid").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#email_valid").html("(*)email required..!!");
        }
        else {
            if (!($(this).val().match($EmailIdRegEx))) {
                $("#email_valid").html("(*)Invalid email..!!");
            }
        }
    });
    $("#email").keypress(function () {
        $("#email_valid").empty();
    });

    $("#message").blur(function () {
        $("#message_valid").empty();
        if ($(this).val() == "" || $(this).val() == null) {
            $("#message_valid").html("(*)message required");
        }
        else {
            if ($(this).val() > 300) {
                $("#message_valid").html("(*)Invalid message");
            }
        }
    });
    $("#message").keypress(function () {
        $("#message_valid").empty();
    });

    var fname_flag = false, lname_flag = false, contact_flag = false, email_flag = false, message_flag = false;
    $("#btn1").click(function () {
        $("#fname_valid").empty();
        if ($("#fname").val() == "" || $("#fname").val() == null) {
            $("#fname_valid").html("(*)first name required..!!");
            fname_flag = false;
        }
        else {
            if (!($("#fname").val().match($FNameLNameRegEx))) {
                $("#fname_valid").html("(*)Invalid firstname..!!");
                fname_flag = false;
            }
            else {
                fname_flag = true;
            }
        }

        $("#lname_valid").empty();
        if ($("#lname").val() == "" || $("#lname").val() == null) {
            $("#lname_valid").html("(*)last name required..!!");
            lname_flag = false;
        }
        else {
            if (!($("#lname").val().match($FNameLNameRegEx))) {
                $("#lname_valid").html("(*)Invalid lastname..!!");
                lname_flag = false;
            }
            else {
                lname_flag = true;
            }
        }

        $("#contact_valid").empty();
        if ($("#contact").val() == "" || $("#contact").val() == null) {
            $("#contact_valid").html("(*)contact number required..!!");
            contact_flag = false;
        }
        else {
            if (!($("#contact").val().match($ConNoRegEx))) {
                $("#contact_valid").html("(*)Invalid contact number..!!");
                contact_flag = false;
            }
            else {
                contact_flag = true;
            }
        }

        $("#email_valid").empty();
        if ($("#email").val() == "" || $("#email").val() == null) {
            $("#email_valid").html("(*)email required..!!");
            email_flag = false;
        }
        else {
            if (!($("#email").val().match($EmailIdRegEx))) {
                $("#email_valid").html("(*)Invalid email..!!");
                email_flag = false;
            }
            else {
                email_flag = true;
            }
        }

        $("#message_valid").empty();
        if ($("#message").val() == "" || $("#message").val() == null) {
            $("#message_valid").html("(*)message required");
            message_flag = false;
        }
        else {
            if ($("#message").val() > 300) {
                $("#message_valid").html("(*)Invalid message");
                message_flag = false;
            }
            else {
                message_flag = true;
            }
        }

        if (fname_flag == true && lname_flag == true && contact_flag == true && email_flag == true && message_flag == true) {
            $("input,textarea").val("");
            alert("Form submitted successfully..!!");
        }
        else {
            alert("Invalid Input..!!");
            $("#my_form").submit(function (event) {
                event.preventDefault();
            });
        }
    });

    $("#btn2").click(function () {
        $("#fname_valid").empty();
        $("#lname_valid").empty();
        $("#contact_valid").empty();
        $("#email_valid").empty();
        $("#message_valid").empty();
    });

});