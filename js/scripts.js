var removedvar1 = false;
var removedvar2 = false;
var removedvar3 = false;
var removedvar4 = false;

function doremove1() {
  if(!removedvar1){
  $("#favColor option:first").remove();
  removedvar1 = true;
  }
};

function doremove2() {
  if(!removedvar2){
  $("#personType option:first").remove();
  removedvar2 = true;
  }
};

function doremove3() {
  if(!removedvar3){
  $("#favWeapon option:first").remove();
  removedvar3 = true;
  }
};

function doremove4() {
  if(!removedvar4){
  $("#favSpec option:first").remove();
  removedvar4 = true;
  }
};

$(function(){
  $("#datingSurvey").submit(function(event){

    $("#datingSurvey span").remove();
    var formComplete = true;

    if ($("#favColor").val() === '0'){
      $("#favColor").after('<span class="text-danger"> Please select an option to proceed</span>');
      formComplete = false;
    }
    if ($("#personType").val() === '0'){
      $("#personType").after('<span class="text-danger"> Please select an option to proceed</span>');
      formComplete = false;
    }
    if ($("#favWeapon").val() === '0'){
      $("#favWeapon").after('<span class="text-danger"> Please select an option to proceed</span>');
      formComplete = false;
    }
    if ($("#favSpec").val() === '0'){
      $("#favSpec").after('<span class="text-danger"> Please select an option to proceed</span>');
      formComplete = false;
    }

    var numberOfQuestions = 4;
    var result;

    if (formComplete) {
      var answers = 0;
      answers += parseFloat($("#favColor").val());
      answers += parseFloat($("#personType").val());
      answers += parseFloat($("#favWeapon").val());
      answers += parseFloat($("#favSpec").val());

      result = answers / numberOfQuestions;
      if (result < 1.7) {
        $("#godName").text("Saradomin");
      } else if ( result < 2.3) {
        $("#godName").text("Guthix");
      } else {
        $("#godName").text("Zamarock");
      }
      $("#runescapeRomance").show();
    };
    event.preventDefault();
  });
});
