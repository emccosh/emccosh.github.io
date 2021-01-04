$( document ).ready(function() {

// show first content
$('#tabs-nav li:first-child').addClass('active');
$('.content').hide();
$('.content:first').show();

// on click functions for tabs
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
  
});
    
    
// hide answers to begin with
  $("#1a1, #1a2, #2a1, #2a2, #2a3, #2a4, #3a1, #3a2, #4a1, #4a2, #4a3, #4a4, #4a5, #5a1, #5a2").hide();
    
    
    
    
// question one   
  $("#1o1").click(function (){
  $("#1a1").show();
  $("#1a2").hide();
  });
  
  $("#1o2").click(function (){
    $("#1a2").show();
    $("#1a1").hide();
  });
  
    
    
// question two   
  $("#2o1").click(function (){
  $("#2a1").show();
  $("#2a2").hide();
  $("#2a3").hide();
  $("#2a4").hide();
  });
  
  $("#2o2").click(function (){
    $("#2a2").show();
    $("#2a1").hide();
    $("#2a3").hide();
    $("#2a4").hide();
  });
    
  $("#2o3").click(function (){
    $("#2a3").show();
    $("#2a1").hide();
    $("#2a2").hide();
    $("#2a4").hide();
  });
    
  $("#2o4").click(function (){
    $("#2a4").show();
    $("#2a1").hide();
    $("#2a2").hide();
    $("#2a3").hide();
  });
    
    
    
// question three   
  $("#3o1").click(function (){
  $("#3a1").show();
  $("#3a2").hide();
  });
  
  $("#3o2").click(function (){
    $("#3a2").show();
    $("#3a1").hide();
  });
    
    
    
// question four   
  $("#4o1").click(function (){
  $("#4a1").show();
  $("#4a2").hide();
  $("#4a3").hide();
  $("#4a4").hide();
  $("#4a5").hide();
  });
  
  $("#4o2").click(function (){
    $("#4a2").show();
    $("#4a1").hide();
    $("#4a3").hide();
    $("#4a4").hide();
    $("#4a5").hide();
  });
    
  $("#4o3").click(function (){
    $("#4a3").show();
    $("#4a1").hide();
    $("#4a2").hide();
    $("#4a4").hide();
    $("#4a5").hide();
  });
    
  $("#4o4").click(function (){
    $("#4a4").show();
    $("#4a1").hide();
    $("#4a2").hide();
    $("#4a3").hide();
    $("#4a5").hide();
  });
    
  $("#4o5").click(function (){
    $("#4a5").show();
    $("#4a1").hide();
    $("#4a2").hide();
    $("#4a3").hide();
    $("#4a4").hide();
  });
    
   
   
    
// question five   
  $("#5o1").click(function (){
  $("#5a1").show();
  $("#5a2").hide();
  });
  
  $("#5o2").click(function (){
    $("#5a2").show();
    $("#5a1").hide();
  });

});
