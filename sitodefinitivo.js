// JavaScript Document
// mostra menu macro
$("#partealta").click(function(){
	
	$(".macro").slideDown({duration: 10, queue: false});
	
//  $("#universo").slideDown({duration: 10, queue: false});
//	$("#superammasso").slideDown({duration: 10, queue: false});
//	$("#gruppolocale").slideDown({duration: 10, queue: false});
//	$("#vialattea").slideDown({duration: 10, queue: false});
//	$("#sistemasolare").slideDown({duration: 10, queue: false});
	
	$("#blu").show("slide", { direction: "down" }, 1000);
	
	$("#aprimenu").animate({
      width: "toggle",
	  duration: 100
    });
	$("#titulo").hide();
	$("#logo").hide();
	$("body").css("overflow-y","auto");
	$("#contenitore").hide("slide", { direction: "up" }, 100);
	$("#contenitore").css("display","none");
	$("#cerchiconcentrici").hide("slide", { direction: "up" }, 100);
	
});



$("#logo").click(function(){
	
    document.getElementById("mySidenav").style.width = "100%";
	$("#logo").hide();
	//$("#blu").show("slide", { direction: "down" }, 100);
	//$("#viola").hide("slide", { direction: "up" }, 100);
	$("#titulo").hide();
});

// mostra menu micro

$("#partebassa").click(function(){
	
	//$("#molecole").show("slide", { direction: "down" }, 1000);
    //$("#atomi").show("slide", { direction: "down" }, 1000);
    //$("#particelle").show("slide", { direction: "down" }, 1000);
    //$("#bosoni").show("slide", { direction: "down" }, 1000);
    //$("#quanti").show("slide", { direction: "down" }, 1000);
	
    $("#viola").show("slide", { direction: "up" }, 100);
	$(".micro").show("slide", { direction: "down" }, 10);
	
	$("#aprimenu").animate({
      width: "toggle",
	  duration: 100,
    });
	
	$("#logo").hide();
	$("body").css("overflow-y","auto");
	//$("#contenitore").hide();
	$("#cerchiconcentrici").hide();
	$("#titulo").hide();
});

$("#blu").click(function(){
	$(".macro").slideUp({duration: 100, queue: false});
	$("#blu").hide();
//  $("#universo").slideUp({duration: 100, queue: false});
//	$("#superammasso").slideUp({duration: 100, queue: false});
//	$("#gruppolocale").slideUp({duration: 100, queue: false});
//	$("#vialattea").slideUp({duration: 100, queue: false});
//	$("#sistemasolare").slideUp({duration: 100, queue: false});
	
	$("#titulo").show();
	$("#contenitore").show();
	
	$("#cerchiconcentrici").show();
	
	$("#logo").show();
	
	$("#aprimenu").animate({
      width: "toggle",
	  duration: 100
    });
	$("body").css("overflow","hidden");
	});

$("#viola").click(function(){
	$(".micro").hide("slide", { direction: "down" }, 100);
	//$("#molecole").hide("slide", { direction: "down" }, 100);
//	$("#atomi").hide("slide", { direction: "down" }, 100);
//	$("#particelle").hide("slide", { direction: "down" }, 100);
//	$("#bosoni").hide("slide", { direction: "down" }, 100);
//	$("#quanti").hide("slide", { direction: "down" }, 100);
	$("#contenitore").show();
	$("#cerchiconcentrici").show();
	$("#logo").show();
	$("#aprimenu").animate({
      	width: "toggle",
		duration: 100
    });
	$("#viola").hide("slide", { direction: "up" }, 100);
	$("body").css("overflow","hidden");
	$("#titulo").show();
	});
/*
$("#contenitore").hover(function(){
	$("body").css("overflow","hidden");
});

$("#contenitoretalks").hover(function(){
	$("body").css("overflow","auto");
});

$("#contenitoreart").hover(function(){
	$("body").css("overflow","auto");
});*/


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//animazione sfondo

function mouseOver(event) {
  
  if(event.target.id === "partealta") {
    document.getElementById("partealta").style.height = "60%";
    document.getElementById("partebassa").style.height = "0";
  } else {
    document.getElementById("partebassa").style.height = "100%";
    document.getElementById("partealta").style.height = "0";
  }
}

function mouseOut(event) {
  
  document.getElementById("partealta").style.height = "50%";
  
  document.getElementById("partebassa").style.height = "50%";
  
}
$("#mySidenav").click(function(){
	$("#logo").show();
});






$(".descrizione").hover(function(){
	$("body").css("overflow","scroll");
});