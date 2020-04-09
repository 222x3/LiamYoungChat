function createClicked(){
    $.ajax({
      url: "/create",
      type: "POST",
      data: {name:$("#myName").val(),comment:$("#myComment").val()},
      success: function(data){
        if (!data)
          alert("bad create");
        else if (data.retVal)
          alert("good create");
        else
          alert("bad create");
        } ,
      dataType: "json"
    });
  return false;
}
$(document).ready(function(){
  $("#createButton").click(createClicked);
});
