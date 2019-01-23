var answers= 0;
$(document).ready(function() {
  $("#stress-survey").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=negative-signs]:checked").each(function() {
      var negativeSigns= $(this).val();
      answers += 1;
      if (answers > 4) {
        $("#coping-solutions").show();
        $("#solutions").hide();
        $("#positive").hide();
      } else if (answers < 5 && answers > 2 ){
        $("#solutions").show();
        $("#coping-solutions").hide();
        $("#positive").hide();
      } else {
        $("#positive").show();
        $("#solutions").hide();
        $("#coping-solutions").hide();
      }
    });
    $("input:checkbox[name=stress-symptom]:checked").each(function() {
      var stressSigns =$(this).val();
      answers +=1;
      if(answers > 5) {
        $("#high-stress").show();
        $("#medium-stress").hide();
        $("#positive-stress").hide();
      } else if (answers < 5 && answers > 3 ) {
        $("#medium-stress").show();
        $("#high-stress").hide();
        $("#positive-stress").hide();
      } else {
        $("#positive-stress").show();
        $("#medium-stress").hide();
        $("#high-stress").hide();
      }
    })
  });
});
