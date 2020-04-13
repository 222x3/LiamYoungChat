function createClicked(){
    $.ajax({
      url: "/create",
      type: "POST",
      data: {name:$("#myName").val(),message:$("#myMessage").val()},
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
function readClicked(){
    $.ajax({
      url: "/read",
      type: "GET",
      success: function(messages){
        var messageCount = Object.keys(messages.messages).length;
        $("#chatLog").empty();
        for(let i=0;i<messageCount;i++){
          console.log(messages.messages[i].name+": "+messages.messages[i].message)
          let htmlMessage = "<li id='removeOnRead'>"+messages.messages[i].name+": "+messages.messages[i].message+"</li>";
          $("#chatLog").append(htmlMessage)
        }

      } ,
      dataType: "json"
    });
  return false;
}
$(document).ready(function(){
  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
});
