$("document").ready(function(){

  init();

  $("#articles").click(function(){
    if(! $(this).hasClass("btn-primary"))
      {
        initArtikelen(this);
      }
  });

  $("#control_center").click(function(){
    dialog("control_center");
  });

  $("#verkoop_levering").click(function(){
    dialog("verkoop_levering");
  });

  $("#verkoop_stock").click(function(){
    alert("verkoop_stock");
  });

  $("#verkoop_verkoop").click(function(){
    alert("verkoop_verkoop");
  });

  $("#verkoop_groteverkoop").click(function(){
    alert("verkoop_groteverkoop");
  });

  $(".verkoop_groot").click(function(){
    alert("verkoop_groot");
  });

  $("#verkoop_kas").click(function(){
    alert("verkoop_kas");
  });

  $("#prom-tab").click(function(){

    initPromsTab();
  });
});

function clearView()
{
  $("section").empty();
}

function init()
{
  var save = new Storage();

  // //array van productheader
  //     var productenheader = new Array();
  //     productenheader[0] = "Artikelnummer";
  //     productenheader[1] = "Artikelnaam";
  //     productenheader[2] = "Prijs";
  //     productenheader[3] = "Type";
  //
  //     save.setObject("productenheader",productenheader);
  //
  // //array van producten (enkel structuur)
  // var producten = new Array();
  //
  // var product1 = new Product("0003","sfeerlichtje","13.50","kaars");
  // producten[0] = product1;
  //
  // save.setObject("producten",producten);
  //
  // var producttypes = new Array();
  // producttypes[0] = "kaars";
  // producttypes[1] = "textiel";
  // producttypes[2] = "kalender";
  // producttypes[3] = "divers";
  //
  // save.setObject("producttypes",producttypes);

  var proms = new Array();
  proms[0] = new Prom("2100","Rogge-De Snoeck","Henri - Marie José", "Ponthove", "18","Zulte","9870","056611101","049711101","henri.rogge@telenet.be");
  proms[1] = new Prom("2000","Reynaert - Rogge","Geert - Ann", "Kouterweg", "11","Zulte","9870","056611101","049711101","ann.rogge@telenet.be");

  var db = new PromDb();
  db.setProms(proms);
}

function deleteTestInit()
{
  var save = new Storage();
  save.clearAll();
}
