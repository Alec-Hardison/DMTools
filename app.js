$(document).ready(function()
{
 $("input[type = 'radio']").click(function()
    {
        var radioValue = $("input[name = 'test']:checked").val();
     console.log(radioValue);
     if(radioValue)
         {
             console.log("we are finally working bob");
         }
    });
    var imgArray = ["barovia.jpg","eberron.jpg","eragonMap.jpg","faerune.jpg"];
   
    
    $("#map").append($("<img>").attr(
        {
            "src" : "barovia.jpg",
            "height": "500",
            "width" : "1000"
        }));
    $("#map").mousedown(function (e)
        {
            console.log(e.clientX);
            console.log(e.clientY);
        })
});