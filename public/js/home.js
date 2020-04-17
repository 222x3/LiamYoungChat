(function(){
  setInterval(function(){
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
  }, 1000);
})();
$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      $.ajax({
        url: "/create",
        type: "POST",
        data: {name:$("#myName").val(),message:$("#myMessage").val()},
        success: function(data){
          console.log(data);
          $("#myMessage").val("");
          } ,
        dataType: "json"
      });
    }
});
