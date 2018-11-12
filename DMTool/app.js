$(document).ready(function()
{
    $("#map").hide();
    var val = 0;
 $("input[type = 'radio']").click(function()
    {
        var radioValue = $("input[name = 'test']:checked").val();
     console.log(radioValue);
     if(radioValue)
         {
             val = radioValue-1;
             console.log("we are finally working bob");
             $("#map").show();
             console.log(val);
             draw();
         }
    });
    var imgArray = ["barovia.jpg","eberron.jpg","eragonMap.jpg","faerune.jpg"];
   
    var cityArray = [];
    
    var done = false;
    

   
    
    function city(x,y)
    {
        this.x = x;
        this.y = y;
        var map = imgArray[2];
    }
    
   
    
   var newCanvas = $("<canvas></canvas>")
   .attr(
        {
             "width": "500",
             "Height":"1000",
             "id":"canvas"
            
        });

    
    $("#map").append(newCanvas);
    
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
   function draw()
    {
    var img = new Image(500,500);
    img.addEventListener('load',function()
                        {          
            ctx.drawImage(img,0,0);
    });
    img.src = imgArray[val];
    console.log(val);
    }
   
   $("#canvas").mousedown(function (e)
        {
            
       var ncity = new city(e.clientX,e.clientY);
       cityArray.push(ncity);
       var rect = document.getElementById("canvas").getBoundingClientRect();
       var x = (e.clientX - rect.left)*(document.getElementById("canvas").width/rect.width);
       var y = (e.clientY - rect.top)*(document.getElementById("canvas").height/rect.height);
            ctx.beginPath();
            ctx.arc(x,y,3,0,Math.PI*2);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();
        });
    
    //localStorage.setItem()//key value pair JSON.stringify 
    
});