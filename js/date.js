$(function () {
    var bindDatePicker = function() {
         $(".date").datetimepicker({
         format:'YYYY-MM-DD | hh:mm A',
             icons: {
                 time: "glyphicon glyphicon-time",
                 date: "glyphicon glyphicon-calendar",
                 up: "glyphicon glyphicon-chevron-up",
                 down: "glyphicon glyphicon-chevron-down"
             }
         }).find('input:first').on("blur",function () {
             // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
             // update the format if it's yyyy-mm-dd
             var date = parseDate($(this).val());
 
             if (! isValidDate(date)) {
                 //create date based on momentjs (we have that)
                 date = moment().format('YYYY-MM-DD | hh:mm A');
             }
 
             $(this).val(date);
         });
     }
    
    var isValidDate = function(value, format) {
         format = format || false;
         // lets parse the date to the best of our knowledge
         if (format) {
             value = parseDate(value);
         }
 
         var timestamp = Date.parse(value);
 
         return isNaN(timestamp) == false;
    }
    
    var parseDate = function(value) {
         var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
         if (m)
             value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);
 
         return value;
    }
    
    bindDatePicker();
  });

  $(document).ready(function(){
    // Date Object
    $('#datepicker1').datepicker({
         dateFormat: "yy-mm-dd",
         minDate: new Date('2022-12-5')
    });

    // Number
    $('#datepicker2').datepicker({
         dateFormat: "yy-mm-dd",
         minDate: -3
    });

    // String
    $('#datepicker3').datepicker({
         dateFormat: "yy-mm-dd",
         minDate: "-3w"
    });
});