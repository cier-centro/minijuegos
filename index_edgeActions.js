/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         sym.getSymbol("slide_1").play();
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         //$(sym.lookupSelector("textCount")).html("1 / 3");
         
         
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("1 / 3");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();
        sym.getSymbol("btn_home").play(1);
        slideCount = 3; 
        
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
        //$( "#Stage_slide_3" ).append( "<iframe src='comp/03/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
        //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("txt_unid")).html("Unidad 2");
        $(sym.lookupSelector("textCount")).html("2 / 3");
        

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
        sym.stop();
        $( "#Stage_slide_4" ).append( "<iframe src='comp/04/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
        slideCount = 4; 
        sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         $( "#Stage_slide_5" ).append( "<iframe src='comp/05/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         sym.$("bt_next").show();
         slideCount = 5; 
         flackfinal = true;

      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
      sym.stop();
      slideCount = 6; 
      flackfinal = false;
      sym.getSymbol("btn_homeArtes").play(1);

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         $( "#Stage_slide_7" ).append( "<iframe src='comp/07/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 7; 
         flackfinal = false;
         sym.$("bt_next").show();
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         $( "#Stage_slide_8" ).append( "<iframe src='comp/08/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 8; 
         flackfinal = true;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         slideCount = 9; 
         flackfinal = false;
         sym.getSymbol("btn_homeEducacion").play(1);
         

      });
      //Edge binding end
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         $( "#Stage_slide_10" ).append( "<iframe src='comp/10/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 10; 
         flackfinal = false;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_11" ).append( "<iframe src='comp/11/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 11; 
         flackfinal = true;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$( "#Stage_slide_12" ).append( "<iframe src='comp/12/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         flackfinal = false;
         slideCount = 12; 
         sym.getSymbol("btn_homeSalud").play(1);flackfinal = false;

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
          sym.stop();
         $( "#Stage_slide_13" ).append( "<iframe src='comp/13/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 13; 
         flackfinal = false;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_14" ).append( "<iframe src='comp/14/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 14; 
         flackfinal = true;
         sym.$("bt_next").show();
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$( "#Stage_slide_15" ).append( "<iframe src='comp/15/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         flackfinal = false;
         slideCount = 15; 
         sym.getSymbol("btn_homeSalud").play(1);flackfinal = false;

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_16" ).append( "<iframe src='comp/16/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 16; 
         flackfinal = false;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_17" ).append( "<iframe src='comp/17/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 17; 
         flackfinal = true;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          //$( "#Stage_slide_18" ).append( "<iframe src='comp/18/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         flackfinal = false;
         slideCount = 18; 
         sym.getSymbol("btn_homeEconomia").play(1);

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_19" ).append( "<iframe src='comp/19/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 19; 
         flackfinal = false;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_20" ).append( "<iframe src='comp/20/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 20; 
         flackfinal = true;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$( "#Stage_slide_21" ).append( "<iframe src='comp/21/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         flackfinal = false;
         slideCount = 21; 
         sym.getSymbol("btn_homeEconomia").play(1);

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          $( "#Stage_slide_22" ).append( "<iframe src='comp/22/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         slideCount = 22; 
         flackfinal = false;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_23" ).append( "<iframe src='comp/23/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         slideCount = 23; 
         flackfinal = true;
         sym.$("bt_next").show();

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          //$( "#Stage_slide_24" ).append( "<iframe src='comp/24/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         flackfinal = false;
         slideCount = 24; 
         sym.getSymbol("btn_homeEconomia").play(1);

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_25" ).append( "<iframe src='comp/25/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end
	  
	    Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_26" ).append( "<iframe src='comp/26/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("5 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 26000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_27" ).append( "<iframe src='comp/27/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_28" ).append( "<iframe src='comp/28/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end
      
	  
	   //Edge binding end
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_29" ).append( "<iframe src='comp/29/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end

       

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
            sym.$('.center-wrapper').css("overflow","hidden");
            slideCount = 1;
            flackfinal = false;
            //cambiar según el número de slides
            var numOfSlides = 29;
            
            if (slideCount <= 1){ 
            sym.setVariable("slideCount", 1);
            sym.$('bt_back').hide();
            }
            sym.getSymbol("slide_"+slideCount).play(0);
            //sym.getComposition().getStage().stop("slide_"+slideCount);
            
            sym.showSlide = function (slideDirection){
            	$("video").trigger("pause");
            	$("audio").trigger("pause");
            	console.log(flackfinal);
            	if(flackfinal==false){
            		slideCount = slideCount + slideDirection;
            	}else{
            		slideCount =30;
            	}
               sym.getComposition().getStage().stop("slide_"+slideCount);
               sym.getSymbol("slide_"+slideCount).play(0);
            	//Beyond 22, change to 1
            	if (slideCount < numOfSlides){ 
            		//sym.$('bt_next').show();
            	}
            	if (slideCount == numOfSlides){
            		slideCount = numOfSlides;
            		//sym.$('bt_next').hide();
            	} 
            	if (slideCount <= 1){ 
            		sym.setVariable("slideCount", 1);
            		//sym.$('bt_back').hide();
            	}else{
            		//sym.$('bt_back').show();
            	}
            	//	Silenciar el audio de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	$("iframe").contents().find("audio").prop("muted", true);
            	$("iframe").contents().find("audio").prop("currentTime",0);
            	//	Silenciar el video de la composición (funciona en servidor web, pero no funciona en chrome como archivo local)
            	//$("iframe").contents().find( "video" ).prop("muted", true);
            }
            //se definen las variables de los simbolos
            var btNext = sym.getSymbol("bt_next").$("hotspot_area_next");
            var btBack = sym.getSymbol("bt_back").$("hotspot_area_back");
            btBack.bind("click", function() {
            // Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            // Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            if (slideCount > 1){ 
            	sym.getComposition().getStage().showSlide(-1);
            }
            });
            btBack.bind("mouseup", function() {
            sym.getSymbol("bt_back").stop("up");
            });
            btBack.bind("mouseout", function() {
            sym.getSymbol("bt_back").stop("normal");
            });
            
            btBack.bind("mousedown", function() {
            sym.getSymbol("bt_back").stop("down");
            });
            
            btBack.bind("mouseover", function() {
            sym.getSymbol("bt_back").stop("over");
            });
            
            btNext.bind("click", function() {
            	// Silenciar todas las pistas de audio de la composición. Establecer el silencio en “false” para desactivar 
            	$("audio").prop("muted", true);
            	// Pausar el video de la composición, eliminar comentario si se requiere.
            	//$("video")[0].pause();
            	sym.getComposition().getStage().showSlide(1);
            });
            btNext.bind("mouseup", function() {
            sym.getSymbol("bt_next").stop("up");
            });
            btNext.bind("mouseout", function() {
            sym.getSymbol("bt_next").stop("normal");
            });
            
            btNext.bind("mousedown", function() {
            sym.getSymbol("bt_next").stop("down");
            });
            
            btNext.bind("mouseover", function() {
            sym.getSymbol("bt_next").stop("over");
            });
            

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         //$( "#Stage_slide_30" ).append( "<iframe src='comp/30/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_31" ).append( "<iframe src='comp/31/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("1 / 1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 31000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_32" ).append( "<iframe src='comp/32/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("32 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 32000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_33" ).append( "<iframe src='comp/33/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("33 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 33000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_34" ).append( "<iframe src='comp/34/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("34 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_35" ).append( "<iframe src='comp/35/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("35 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_36" ).append( "<iframe src='comp/36/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("36 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_37" ).append( "<iframe src='comp/37/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("37 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_38" ).append( "<iframe src='comp/38/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("38 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_39" ).append( "<iframe src='comp/39/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("39 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_39" ).append( "<iframe src='comp/39/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("39 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 39000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         //$( "#Stage_slide_40" ).append( "<iframe src='comp/40/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("40 / **");

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_btn_home}", "click", function(sym, e) {
         location.reload(true);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_homeArtes}", "click", function(sym, e) {
         location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_homeEducacion}", "click", function(sym, e) {
         location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_homeSalud}", "click", function(sym, e) {
         location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_homeSocial}", "click", function(sym, e) {
         location.reload(true);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_homeEconomia}", "click", function(sym, e) {
         location.reload(true);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'bt_next'
   (function(symbolName) {   
   
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

   })("bt_next");
   //Edge symbol end:'bt_next'

   //=========================================================
   
   //Edge symbol: 'bt_back'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      

      

      

      

      

      

   })("bt_back");
   //Edge symbol end:'bt_back'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.getComposition().getStage().append( "<iframe src='comp/02/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("slide_2");
   //Edge symbol end:'slide_2'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();
      
      });
      //Edge binding end
      
      

   })("slide_4");
   //Edge symbol end:'slide_4'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_3" ).append( "<iframe src='comp/03/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

   })("slide_3");
   //Edge symbol end:'slide_3'

   //=========================================================
   
   //Edge symbol: 'slide_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("slide_5");
   //Edge symbol end:'slide_5'

   //=========================================================
   
   //Edge symbol: 'Hot_Spot'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("Hot_Spot");
   //Edge symbol end:'Hot_Spot'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_7");
   //Edge symbol end:'slide_7'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_8");
   //Edge symbol end:'slide_8'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_10");
   //Edge symbol end:'slide_10'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      })("slide_11");
   //Edge symbol end:'slide_11'

   //=========================================================
   
   //Edge symbol: 'slide_2'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         //CAMBIAR ESTA OPCIÓN A PLAY SI SE DESEA INICIAR LA ANIMACIÓN O SI ES IMAGEN FIJA PONERLA EN STOP 
         sym.stop();

      });
            //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Rectangle").html("<video width='958' height='538' title='Video' preload='auto' controls ><source src='media/F3_A2.mp4' type='video/mp4'></video>");

      });
      //Edge binding end

         })("slide_13");
   //Edge symbol end:'slide_13'

   //=========================================================
   
   //Edge symbol: 'slide_5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_14");
   //Edge symbol end:'slide_14'

   //=========================================================
   
   //Edge symbol: 'slide_16'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_16");
   //Edge symbol end:'slide_16'

   //=========================================================
   
   //Edge symbol: 'slide_17'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_17");
   //Edge symbol end:'slide_17'

   //=========================================================
   
   //Edge symbol: 'slide_19'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_19");
   //Edge symbol end:'slide_19'

   //=========================================================
   
   //Edge symbol: 'slide_20'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_20");
   //Edge symbol end:'slide_20'

   //=========================================================
   
   //Edge symbol: 'slide_22'
   (function(symbolName) {   
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
      
      });
            //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("Rectangle").html("<video width='958' height='538' title='Video' preload='auto' controls ><source src='media/F3_A3.mp4' type='video/mp4'></video>");
      
      });
      //Edge binding end

         })("slide_22");
   //Edge symbol end:'slide_22'

   //=========================================================
   
   //Edge symbol: 'slide_23'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_23");
   //Edge symbol end:'slide_23'

   //=========================================================
   
   //Edge symbol: 'slide_24'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_24");
   //Edge symbol end:'slide_24'

   //=========================================================
   
   //Edge symbol: 'slide_25'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_25");
   //Edge symbol end:'slide_25'

   //=========================================================
   
   //Edge symbol: 'slide_26'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_26");
   //Edge symbol end:'slide_26'

   //=========================================================
   
   //Edge symbol: 'slide_27'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_27");
   //Edge symbol end:'slide_27'

   //=========================================================
   
   //Edge symbol: 'slide_28'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_28");
   //Edge symbol end:'slide_28'

   //=========================================================
   
   //Edge symbol: 'slide_29'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_29");
   //Edge symbol end:'slide_29'

   //=========================================================
   
   //Edge symbol: 'slide_30'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${_finalCopy}", "click", function(sym, e) {
         location.reload(true);

      });
      //Edge binding end

         })("slide_30");
   //Edge symbol end:'slide_30'

   //=========================================================
   
   //Edge symbol: 'home'
   (function(symbolName) {   
   
      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("home");
   //Edge symbol end:'home'

   //=========================================================
   
   //Edge symbol: 'slide_31'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_31");
   //Edge symbol end:'slide_31'

   //=========================================================
   
   //Edge symbol: 'slide_32'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_32");
   //Edge symbol end:'slide_32'

   //=========================================================
   
   //Edge symbol: 'slide_33'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_33");
   //Edge symbol end:'slide_33'

   //=========================================================
   
   //Edge symbol: 'slide_34'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_34");
   //Edge symbol end:'slide_34'

   //=========================================================
   
   //Edge symbol: 'slide_35'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_35");
   //Edge symbol end:'slide_35'

   //=========================================================
   
   //Edge symbol: 'slide_36'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_36");
   //Edge symbol end:'slide_36'

   //=========================================================
   
   //Edge symbol: 'slide_37'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_37");
   //Edge symbol end:'slide_37'

   //=========================================================
   
   //Edge symbol: 'slide_38'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_38");
   //Edge symbol end:'slide_38'

   //=========================================================
   
   //Edge symbol: 'slide_39'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_39");
   //Edge symbol end:'slide_39'

   //=========================================================
   
   //Edge symbol: 'slide_40'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_40");
   //Edge symbol end:'slide_40'

   //=========================================================
   
   //Edge symbol: 'slide_41'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
               //Edge binding end

            })("slide_41");
   //Edge symbol end:'slide_41'

   //=========================================================
   
   //Edge symbol: 'slide_42'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_42");
   //Edge symbol end:'slide_42'

   //=========================================================
   
   //Edge symbol: 'slide_43'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_43");
   //Edge symbol end:'slide_43'

   //=========================================================
   
   //Edge symbol: 'slide_44'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_44");
   //Edge symbol end:'slide_44'

   //=========================================================
   
   //Edge symbol: 'slide_45'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_45");
   //Edge symbol end:'slide_45'

   //=========================================================
   
   //Edge symbol: 'slide_46'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_46");
   //Edge symbol end:'slide_46'

   //=========================================================
   
   //Edge symbol: 'slide_47'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_47");
   //Edge symbol end:'slide_47'

   //=========================================================
   
   //Edge symbol: 'slide_48'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_48");
   //Edge symbol end:'slide_48'

   //=========================================================
   
   //Edge symbol: 'slide_49'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_49");
   //Edge symbol end:'slide_49'

   //=========================================================
   
   //Edge symbol: 'home_1'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      })("guia");
   //Edge symbol end:'guia'

   //=========================================================
   
   //Edge symbol: 'guia_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
         //Edge binding end

         })("mapa");
   //Edge symbol end:'mapa'

   //=========================================================
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_btnac1}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(2000);
         sym.getComposition().getStage().getSymbol("slide_3").play(1);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnc1}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(5000);
         sym.getComposition().getStage().getSymbol("slide_6").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnac3}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(8000);
         sym.getComposition().getStage().getSymbol("slide_9").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnac4}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(11000);
         sym.getComposition().getStage().getSymbol("slide_12").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnac5}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(14000);
         sym.getComposition().getStage().getSymbol("slide_15").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnac6}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(17000);
         sym.getComposition().getStage().getSymbol("slide_18").play(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btnac7}", "click", function(sym, e) {
         sym.getComposition().getStage().stop(20000);
         sym.getComposition().getStage().getSymbol("slide_21").play(1);

      });
      //Edge binding end

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'btnac1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle6}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle6}", "mouseout", function(sym, e) {
         sym.stop(500);

      });
      //Edge binding end

   })("btnac1");
   //Edge symbol end:'btnac1'

   //=========================================================
   
   //Edge symbol: 'btn_iniciar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.play(2000);

      });
      //Edge binding end

   })("btn_iniciar");
   //Edge symbol end:'btn_iniciar'

   //=========================================================
   
   //Edge symbol: 'btn_home'
   (function(symbolName) {   
   
   })("btn_home");
   //Edge symbol end:'btn_home'

   //=========================================================
   
   //Edge symbol: 'btnc1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Hotspot}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Hotspot}", "mouseout", function(sym, e) {
         sym.stop(0);
         

      });
      //Edge binding end

   })("btnc1");
   //Edge symbol end:'btnc1'

   //=========================================================
   
   //Edge symbol: 'slide_6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_6" ).append( "<iframe src='comp/06/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_6");
   //Edge symbol end:'slide_6'

   //=========================================================
   
   //Edge symbol: 'slide_50'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_3" ).append( "<iframe src='comp/03/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_50");
   //Edge symbol end:'slide_50'

   //=========================================================
   
   //Edge symbol: 'slide_51'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_3" ).append( "<iframe src='comp/03/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_51");
   //Edge symbol end:'slide_51'

   //=========================================================
   
   //Edge symbol: 'btn_home_1'
   (function(symbolName) {   
   
   })("btn_homeArtes");
   //Edge symbol end:'btn_homeArtes'

   //=========================================================
   
   //Edge symbol: 'btnac3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_hotspot}", "mouseout", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("btnac3");
   //Edge symbol end:'btnac3'

   //=========================================================
   
   //Edge symbol: 'btn_home_1'
   (function(symbolName) {   
   
   })("btn_homeEducacion");
   //Edge symbol end:'btn_homeEducacion'

   //=========================================================
   
   //Edge symbol: 'slide_9'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_9" ).append( "<iframe src='comp/09/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_9");
   //Edge symbol end:'slide_9'

   //=========================================================
   
   //Edge symbol: 'btnac4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle14}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle14}", "mouseout", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("btnac4");
   //Edge symbol end:'btnac4'

   //=========================================================
   
   //Edge symbol: 'slide_12'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_12" ).append( "<iframe src='comp/12/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_12");
   //Edge symbol end:'slide_12'

   //=========================================================
   
   //Edge symbol: 'btn_home_1'
   (function(symbolName) {   
   
   })("btn_homeSalud");
   //Edge symbol end:'btn_homeSalud'

   //=========================================================
   
   //Edge symbol: 'btn_home_1'
   (function(symbolName) {   
   
   })("btn_homeSocial");
   //Edge symbol end:'btn_homeSocial'

   //=========================================================
   
   //Edge symbol: 'slide_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_15" ).append( "<iframe src='comp/15/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_15");
   //Edge symbol end:'slide_15'

   //=========================================================
   
   //Edge symbol: 'btnac5'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Rectangle15}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle15}", "mouseout", function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("btnac5");
   //Edge symbol end:'btnac5'

   //=========================================================
   
   //Edge symbol: 'btnac6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle16}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle16}", "mouseout", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("btnac6");
   //Edge symbol end:'btnac6'

   //=========================================================
   
   //Edge symbol: 'slide_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_18" ).append( "<iframe src='comp/18/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_18");
   //Edge symbol end:'slide_18'

   //=========================================================
   
   //Edge symbol: 'btn_home_1'
   (function(symbolName) {   
   
   })("btn_homeEconomia");
   //Edge symbol end:'btn_homeEconomia'

   //=========================================================
   
   //Edge symbol: 'slide_21'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         $( "#Stage_slide_21" ).append( "<iframe src='comp/21/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         sym.getComposition().getStage().$("bt_next").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_btn_iniciar2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      })("slide_21");
   //Edge symbol end:'slide_21'

   //=========================================================
   
   //Edge symbol: 'btnac7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle17}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle17}", "mouseout", function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

   })("btnac7");
   //Edge symbol end:'btnac7'

   //=========================================================
   
   //Edge symbol: 'btn_home_1'
   (function(symbolName) {   
   
   })("btn_homeHumanidades");
   //Edge symbol end:'btn_homeHumanidades'

})(jQuery, AdobeEdge, "EDGE-5531445");