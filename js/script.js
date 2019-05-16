jQuery(document).ready(function(){
    
    var apiBase ="http://statenweb.mockable.io/conversions/";
    document.getElementById("centimeter_to_Inches_botton").addEventListener("click", function(event){
        event.preventDefault()
    });
    $('#centimeter_to_Inches_botton').on('click',function(){
        var cm = $("#centimeter").val();
        if(isNaN(cm))
        {
            var type = typeof cm;
            alert('You entered is '+ type + ', Please enter a number to continue');
            $('#centimeterResult').html('We can not calculate a ' + type);
        }
        else{
            axios.get(apiBase).then(function(response){
                var CMTOIN = response.data.inchesInCm;
                    setTimeout(function(){
                        var cmresult;
                        cmresult = cm * CMTOIN;
                        $("#centimeterResult").html('Result: ' + cmresult +' Inches');
                    },1000);
                });
            $('#centimeterResult').html(' We are calculating your result, please wait... ');
            }
    });


    document.getElementById("Inches_to_centimeter_botton").addEventListener("click", function(event){
        event.preventDefault()
    });
    $('#Inches_to_centimeter_botton').on('click',function(){
        var inch = $("#inches").val();
        if(isNaN(inch))
        {
           var type = typeof inch;
            alert('You entered is '+ type + ', Please enter a number to continue');
            $('#inchesResult').html('We can not calculate a ' + type);
        }
        else{
           axios.get(apiBase).then(function(response){
                var INTOCM = response.data.centimetersInInch;
                    setTimeout(function(){
                        var inresult;
                        inresult = inch * INTOCM;
                        $("#inchesResult").html('Result: ' + inresult +' centimeter');
                    },1000);
                });
           $('#inchesResult').html(' We are calculating your result, please wait... ');
           }
       
        });
});