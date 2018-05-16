
$(document).ready(function () {


    $(document).on('click', '#email_submit', function () {

        $('#errorMsg').html('');

        var yemail = $('#email_sub').val();

        if (yemail.length < 2) {
            alert("Please Insert Valid Email !!!");
            return false;
        }

        //if  email is INVALID
        if (!isValidEmail(yemail)) {
            alert("Please Insert Valid Email !!!");
            return false;
        }


        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {yemail: yemail, id: '974'},
            url: '/ajax/',
            success: function (result) {

                $("#subscribe_email").hide();
                $('#submit_msg').text("We'll send a letter to " + yemail);
                $('#submit_msg').show();

            },
            error: function (result) {
                $("#subscribe_email").hide();
                $('#submit_msg').text("Contact " + yemail + " already added to target campaign");
                $('#submit_msg').show();
            }
        });

    });


    $(document).on('click', '.save_profile', function () {



        $('#errorMsgRespond').html('');

        $("#loader_buy").show().delay(50).fadeOut();
        var iduser = $('#iduser_address').val();
        var ether_address = $('#ether_address').val();
        var bitcoin_address = $('#bitcoin_address').val();

        if (bitcoin_address.length < 2) {
            alert("Please Insert Valid bitcoin address !!!");
            return false;
        }




        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, ether_address: ether_address, bitcoin_address: bitcoin_address, referal: '1544'},
            url: '/ajax/saveaddress/',
            success: function (result) {

                $('#errorMsgRespond').html('Done!');

            },
            error: function (result) {

            }
        });

    });


    $(document).on('click', '.save_profile_ether', function () {



        $('#errorMsgRespond_ether').html('');

        $("#loader_buy_ether").show().delay(50).fadeOut();
        var iduser = $('#iduser_address_ether').val();
        var ether_address = $('#ether_address_n').val();


        if (ether_address.length < 2) {
            alert("Please Insert Valid Ethereum address !!!");
            return false;
        }




        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, ether_address: ether_address, referal: '1544'},
            url: '/ajax/saveaddress/',
            success: function (result) {

                $('#errorMsgRespond_ether').html('Done!');

            },
            error: function (result) {

            }
        });

    });



    $(document).on('click', '.save_profile_ether2', function () {



        $('#errorMsgRespond_ether2').html('');

        $("#loader_buy_ether2").show().delay(50).fadeOut();
        var iduser = $('#iduser_address_ether2').val();
        var ether_address = $('#ether_address_n2').val();


        if (ether_address.length < 2) {
            alert("Please Insert Valid Ethereum address !!!");
            return false;
        }




        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, ether_address: ether_address, referal: '1544'},
            url: '/ajax/saveaddress/',
            success: function (result) {

                $('#errorMsgRespond_ether2').html('Done!');

            },
            error: function (result) {

            }
        });

    });


    $(document).on('click', '.save_profile_lite', function () {



        $('#errorMsgRespond_lite').html('');

        $("#loader_buy_lite").show().delay(50).fadeOut();
        var iduser = $('#iduser_address_lite').val();
        var lite_address = $('#lite_address').val();


        if (lite_address.length < 2) {
            alert("Please Insert Valid Litecoin address !!!");
            return false;
        }




        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, lite_address: lite_address, referal: '1544'},
            url: '/ajax/saveaddress/',
            success: function (result) {

                $('#errorMsgRespond_lite').html('Done!');

            },
            error: function (result) {

            }
        });

    });


    $(document).on('click', '#buy_with_ltc', function () {

        var iduser = $(this).attr('rel');

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, click_button: 'litecoin_button', referal: '1544'},
            url: '/ajax/clickbutton/',
            success: function (result) {

            },
            error: function (result) {

            }
        });

    });


    $(document).on('click', '#buy_with_ltc', function () {
        var iduser = $(this).attr('rel');

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, click_button: 'litecoin_button', referal: '1544'},
            url: '/ajax/clickbutton/',
            success: function (result) {

            },
            error: function (result) {

            }
        });

    });


      $(document).on('click', '#buy_with_ether', function () {
        var iduser = $(this).attr('rel');

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, click_button: 'buy_with_ether', referal: '1544'},
            url: '/ajax/clickbutton/',
            success: function (result) {

            },
            error: function (result) {

            }
        });

    });
    
    
          $(document).on('click', '#buy_with_btc', function () {
        var iduser = $(this).attr('rel');

        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, click_button: 'buy_with_btc', referal: '1544'},
            url: '/ajax/clickbutton/',
            success: function (result) {

            },
            error: function (result) {

            }
        });

    });
    
    
    
    $(document).on('click', '#email_submit_footer', function () {

        $('#errorMsg').html('');

        var yemail = $('#email_sub_footer').val();

        if (yemail.length < 2) {
            alert("Please Insert Valid Email !!!");
            return false;
        }

        //if  email is INVALID
        if (!isValidEmail(yemail)) {
            alert("Please Insert Valid Email !!!");
            return false;
        }


        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {yemail: yemail, id: '974'},
            url: '/ajax/',
            success: function (result) {

                $("#subscribe_email_footer").hide();
                $('#submit_msg_footer').text("We'll send a letter to " + yemail);
                $('#submit_msg_footer').show();

            },
            error: function (result) {
                $("#subscribe_email_footer").hide();
                $('#submit_msg_footer').text("Contact " + yemail + " already added to target campaign");
                $('#submit_msg_footer').show();
            }
        });

    });

    
    
    
    $(document).on('click', '#close_message', function () {
 
        var iduser = $(this).attr('rel');



        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {iduser: iduser, referal: '1544'},
            url: '/ajax/closemessage/',
            success: function (result) {

               

            },
            error: function (result) {

            }
        });

    });
    
    
    
    $(document).on('click', '#email_submit_mobile', function () {

        $('#errorMsg').html('');

        var yemail = $('#email_sub').val();

        if (yemail.length < 2) {
            alert("Please Insert Valid Email !!!");
            return false;
        }

        //if  email is INVALID
        if (!isValidEmail(yemail)) {
            alert("Please Insert Valid Email !!!");
            return false;
        }


        $.ajax({
            type: 'post',
            dataType: 'json',
            data: {yemail: yemail, id: '974'},
            url: '/ajax/',
            success: function (result) {

                $("#subscribe_email").hide();
                $('#submit_msg').text("We'll send a letter to " + yemail);
                $('#submit_msg').show();

            },
            error: function (result) {
                $("#subscribe_email").hide();
                $('#submit_msg').text("Contact " + yemail + " already added to target campaign");
                $('#submit_msg').show();
            }
        });

    });

});

function isValidEmail(emailText) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailText);
}




