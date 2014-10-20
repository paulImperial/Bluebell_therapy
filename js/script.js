$(document).ready(function(){
  
  



	// $('.item').matchHeight();
	
	//mustache templates
        
        var view = {};
 
        $("#templates").load("mustacheTemplates.html #headerTemplate",function(){
          var template = document.getElementById('headerTemplate').innerHTML;
          var output = Mustache.render(template, view);
          $("#headerInsert").html(output);
        });
        
        $("#templates").load("mustacheTemplates.html #footerTemplate",function(){
          var template = document.getElementById('footerTemplate').innerHTML;
          var output = Mustache.render(template, view);
          $("#footerInsert").html(output);
        });
        
        $("#templates").load("mustacheTemplates.html #formPopup",function(){
          var template = document.getElementById('formPopup').innerHTML;
          var output = Mustache.render(template, view);
          $("#popupInsert").html(output);
        });
        
        // end mustache templates
        

        
     
        
                
  var testArray=['<a href="testimonials.html#needle">I can&rsquo;t thank you enough, Judith, my needle phobia is completely cured,  <strong>Stacey</strong> </a>',
                       '<a href="#">Thank you, Judith - since our hypnotherapy sessions, I now have some great strategies to deal with stress and feel much calmer and able to cope with life,  <strong>Susan</strong> </a>',
                       '<a href="#">A massive thanks to you Judith, my nailbiting is now cured for good, <strong>James</strong></a>',
                       '<a href="testimonials.html#david">Thank you for helping me to understand my issues and guiding me through them, <strong>David</strong></a>'];
        
        var counter=-1;
        
   //   var myVar=setInterval(function () {myTimer()}, 7000);


function myTimer() {
      
    counter=counter+1;
    
    if (counter>testArray.length-1){
        
        counter=0;
    }
    
 
    $('#testimonials').html(testArray[counter]);
}
      
      });
