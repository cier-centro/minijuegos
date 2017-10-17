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
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
        //$( "#Stage_slide_4" ).append( "<iframe src='comp/04/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("txt_unid")).html("Unidad 2");
        $(sym.lookupSelector("textCount")).html("1 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_5" ).append( "<iframe src='comp/05/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end
      
      
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
      $( "#Stage_slide_6" ).append( "<iframe src='comp/06/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
      
      
      
      //textos
      //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
      //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
      $(sym.lookupSelector("txt_unid")).html("Unidad 2");
      $(sym.lookupSelector("textCount")).html("3 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_7" ).append( "<iframe src='comp/07/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_8" ).append( "<iframe src='comp/08/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("5 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.stop();
         
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_9" ).append( "<iframe src='comp/09/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end
      
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_10" ).append( "<iframe src='comp/10/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_11" ).append( "<iframe src='comp/11/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_12" ).append( "<iframe src='comp/12/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("9 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12000, function(sym, e) {
          sym.stop();
          //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          
         //$( "#Stage_slide_13" ).append( "<iframe src='comp/13/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("1 / 9");
         

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_14" ).append( "<iframe src='comp/14/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_15" ).append( "<iframe src='comp/15/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("3 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_16" ).append( "<iframe src='comp/16/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_17" ).append( "<iframe src='comp/17/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 17000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_18" ).append( "<iframe src='comp/18/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 18000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_19" ).append( "<iframe src='comp/19/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_20" ).append( "<iframe src='comp/20/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_21" ).append( "<iframe src='comp/21/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("9 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_22" ).append( "<iframe src='comp/22/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("1 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_23" ).append( "<iframe src='comp/23/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 23000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_24" ).append( "<iframe src='comp/24/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("3 / 9");

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
            //cambiar según el número de slides
            var numOfSlides = 36;
            
            if (slideCount <= 1){ 
            sym.setVariable("slideCount", 1);
            sym.$('bt_back').hide();
            }
            sym.getSymbol("slide_"+slideCount).play(0);
            //sym.getComposition().getStage().stop("slide_"+slideCount);
            
            sym.showSlide = function (slideDirection){
            	$("video").trigger("pause");
            	$("audio").trigger("pause");
            	slideCount = slideCount + slideDirection;
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
         $( "#Stage_slide_30" ).append( "<iframe src='comp/30/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Unidad 2");
         $(sym.lookupSelector("textCount")).html("9 / 9");

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

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 40000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 41000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         $( "#Stage_slide_2" ).append( "<iframe src='comp/02/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Bienvenida");
         $(sym.lookupSelector("textCount")).html("2 / 3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
        $( "#Stage_slide_3" ).append( "<iframe src='comp/03/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
        //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("txt_unid")).html("Mapa de Aprendizajes");
        $(sym.lookupSelector("textCount")).html("3 / 3");
        

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
        //$( "#Stage_slide_4" ).append( "<iframe src='comp/04/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
        //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("txt_unid")).html("Mapa de Navegación");
        $(sym.lookupSelector("textCount")).html("1 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 44000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_5" ).append( "<iframe src='comp/05/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Guía de Navegación");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 45000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
      $( "#Stage_slide_6" ).append( "<iframe src='comp/06/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
      
      
      
      //textos
      $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
      //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
      //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
      $(sym.lookupSelector("txt_unid")).html("Título");
      $(sym.lookupSelector("textCount")).html("3 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_7" ).append( "<iframe src='comp/07/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Ejemplos");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 47000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_8" ).append( "<iframe src='comp/08/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Ejemplos");
         $(sym.lookupSelector("textCount")).html("5 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 48000, function(sym, e) {
         sym.stop();
         
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_9" ).append( "<iframe src='comp/09/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_10" ).append( "<iframe src='comp/10/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 50000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_11" ).append( "<iframe src='comp/11/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_12" ).append( "<iframe src='comp/12/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("9 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52000, function(sym, e) {
          sym.stop();
          //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          
         //$( "#Stage_slide_13" ).append( "<iframe src='comp/13/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Mapa de Navegación");
         $(sym.lookupSelector("textCount")).html("1 / 9");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 53000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_14" ).append( "<iframe src='comp/14/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_15" ).append( "<iframe src='comp/15/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("3 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_16" ).append( "<iframe src='comp/16/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 56000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_17" ).append( "<iframe src='comp/17/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_18" ).append( "<iframe src='comp/18/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_19" ).append( "<iframe src='comp/19/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 59000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_20" ).append( "<iframe src='comp/20/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_21" ).append( "<iframe src='comp/21/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("9 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 61000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_22" ).append( "<iframe src='comp/22/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("1 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 62000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_23" ).append( "<iframe src='comp/23/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 63000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_24" ).append( "<iframe src='comp/24/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("3 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_25" ).append( "<iframe src='comp/25/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 65000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_26" ).append( "<iframe src='comp/26/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("5 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 66000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_27" ).append( "<iframe src='comp/27/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_28" ).append( "<iframe src='comp/28/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 68000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_29" ).append( "<iframe src='comp/29/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 3");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_30" ).append( "<iframe src='comp/30/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Cierre");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Situaciones");
         $(sym.lookupSelector("textCount")).html("9 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 70000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_31" ).append( "<iframe src='comp/31/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Cierre");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Cierre metacognitivo");
         $(sym.lookupSelector("textCount")).html("1 / 1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_32" ).append( "<iframe src='comp/32/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("32 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
          //$( "#Stage_slide_33" ).append( "<iframe src='comp/33/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("33 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 73000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_34" ).append( "<iframe src='comp/34/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("34 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 74000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
           //$( "#Stage_slide_35" ).append( "<iframe src='comp/35/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("35 / **");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 76000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 79000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 80000, function(sym, e) {
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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 81000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
         $( "#Stage_slide_2" ).append( "<iframe src='comp/02/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Bienvenida");
         $(sym.lookupSelector("textCount")).html("2 / 3");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 82000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
        $( "#Stage_slide_3" ).append( "<iframe src='comp/03/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        //$(sym.lookupSelector("miga_momento")).html("Desarrollo");
        //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("txt_unid")).html("Mapa de Aprendizajes");
        $(sym.lookupSelector("textCount")).html("3 / 3");
        

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 83000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         
        //$( "#Stage_slide_4" ).append( "<iframe src='comp/04/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
        
        
        //textos
        $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
        //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
        //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
        $(sym.lookupSelector("txt_unid")).html("Mapa de Navegación");
        $(sym.lookupSelector("textCount")).html("1 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_5" ).append( "<iframe src='comp/05/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Guía de Navegación");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 85000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
      $( "#Stage_slide_6" ).append( "<iframe src='comp/06/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
      
      
      
      //textos
      $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
      //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
      //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
      $(sym.lookupSelector("txt_unid")).html("Título");
      $(sym.lookupSelector("textCount")).html("3 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 86000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_7" ).append( "<iframe src='comp/07/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Ejemplos");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 87000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_8" ).append( "<iframe src='comp/08/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Ejemplos");
         $(sym.lookupSelector("textCount")).html("5 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88000, function(sym, e) {
         sym.stop();
         
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_9" ).append( "<iframe src='comp/09/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_10" ).append( "<iframe src='comp/10/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_11" ).append( "<iframe src='comp/11/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_12" ).append( "<iframe src='comp/12/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 1");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("9 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 92000, function(sym, e) {
          sym.stop();
          //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          
         //$( "#Stage_slide_13" ).append( "<iframe src='comp/13/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Mapa de Navegación");
         $(sym.lookupSelector("textCount")).html("1 / 9");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 93000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_14" ).append( "<iframe src='comp/14/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("2 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 94000, function(sym, e) {
         ym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_15" ).append( "<iframe src='comp/15/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("3 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 95000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_16" ).append( "<iframe src='comp/16/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("4 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 96000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_17" ).append( "<iframe src='comp/17/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         //$(sym.lookupSelector("txt_unid")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 97000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_18" ).append( "<iframe src='comp/18/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("6 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 98000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_19" ).append( "<iframe src='comp/19/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("7 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 99000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
          $( "#Stage_slide_20" ).append( "<iframe src='comp/20/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("8 / 9");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100000, function(sym, e) {
         sym.stop();
         //cargar actividad-reemplazar la carpeta según el código - cambiar el simbolo de acuerdo a donde carga
         $( "#Stage_slide_21" ).append( "<iframe src='comp/21/index.html' width='980px' height='580px' frameborder='0' scrolling='no'></iframe>" );
         
         
         //textos
         $(sym.lookupSelector("miga_nivel")).html("Mapa - Parte 2");
         //$(sym.lookupSelector("txt_sub_t")).html("Actividad 1");
         //$(sym.lookupSelector("instruccion")).html("Lorem ipsum dolor sit amet, consectetur");
         $(sym.lookupSelector("txt_unid")).html("Actividades");
         $(sym.lookupSelector("textCount")).html("9 / 9");

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

      })("slide_6");
   //Edge symbol end:'slide_6'

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

      })("slide_9");
   //Edge symbol end:'slide_9'

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
   
   //Edge symbol: 'slide_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

      

         })("slide_12");
   //Edge symbol end:'slide_12'

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
   
   //Edge symbol: 'slide_15'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_15");
   //Edge symbol end:'slide_15'

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
   
   //Edge symbol: 'slide_18'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_18");
   //Edge symbol end:'slide_18'

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
   
   //Edge symbol: 'slide_21'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_21");
   //Edge symbol end:'slide_21'

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
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

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
   
   //Edge symbol: 'slide_50'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_50");
   //Edge symbol end:'slide_50'

   //=========================================================
   
   //Edge symbol: 'slide_51'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_51");
   //Edge symbol end:'slide_51'

   //=========================================================
   
   //Edge symbol: 'slide_52'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_52");
   //Edge symbol end:'slide_52'

   //=========================================================
   
   //Edge symbol: 'slide_53'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_53");
   //Edge symbol end:'slide_53'

   //=========================================================
   
   //Edge symbol: 'slide_54'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_54");
   //Edge symbol end:'slide_54'

   //=========================================================
   
   //Edge symbol: 'slide_55'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_55");
   //Edge symbol end:'slide_55'

   //=========================================================
   
   //Edge symbol: 'slide_56'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_56");
   //Edge symbol end:'slide_56'

   //=========================================================
   
   //Edge symbol: 'slide_57'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_57");
   //Edge symbol end:'slide_57'

   //=========================================================
   
   //Edge symbol: 'slide_58'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_58");
   //Edge symbol end:'slide_58'

   //=========================================================
   
   //Edge symbol: 'slide_59'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_59");
   //Edge symbol end:'slide_59'

   //=========================================================
   
   //Edge symbol: 'slide_60'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_60");
   //Edge symbol end:'slide_60'

   //=========================================================
   
   //Edge symbol: 'slide_61'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_61");
   //Edge symbol end:'slide_61'

   //=========================================================
   
   //Edge symbol: 'slide_62'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_62");
   //Edge symbol end:'slide_62'

   //=========================================================
   
   //Edge symbol: 'slide_63'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_63");
   //Edge symbol end:'slide_63'

   //=========================================================
   
   //Edge symbol: 'slide_64'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_64");
   //Edge symbol end:'slide_64'

   //=========================================================
   
   //Edge symbol: 'slide_65'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_65");
   //Edge symbol end:'slide_65'

   //=========================================================
   
   //Edge symbol: 'slide_66'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_66");
   //Edge symbol end:'slide_66'

   //=========================================================
   
   //Edge symbol: 'slide_67'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_67");
   //Edge symbol end:'slide_67'

   //=========================================================
   
   //Edge symbol: 'slide_68'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_68");
   //Edge symbol end:'slide_68'

   //=========================================================
   
   //Edge symbol: 'slide_69'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
                  //Edge binding end

               })("slide_69");
   //Edge symbol end:'slide_69'

   //=========================================================
   
   //Edge symbol: 'slide_70'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_70");
   //Edge symbol end:'slide_70'

   //=========================================================
   
   //Edge symbol: 'slide_71'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_71");
   //Edge symbol end:'slide_71'

   //=========================================================
   
   //Edge symbol: 'slide_72'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_72");
   //Edge symbol end:'slide_72'

   //=========================================================
   
   //Edge symbol: 'slide_73'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_73");
   //Edge symbol end:'slide_73'

   //=========================================================
   
   //Edge symbol: 'slide_74'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_74");
   //Edge symbol end:'slide_74'

   //=========================================================
   
   //Edge symbol: 'slide_75'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_75");
   //Edge symbol end:'slide_75'

   //=========================================================
   
   //Edge symbol: 'slide_76'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_76");
   //Edge symbol end:'slide_76'

   //=========================================================
   
   //Edge symbol: 'slide_77'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_77");
   //Edge symbol end:'slide_77'

   //=========================================================
   
   //Edge symbol: 'slide_78'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_78");
   //Edge symbol end:'slide_78'

   //=========================================================
   
   //Edge symbol: 'slide_79'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_79");
   //Edge symbol end:'slide_79'

   //=========================================================
   
   //Edge symbol: 'slide_80'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_80");
   //Edge symbol end:'slide_80'

   //=========================================================
   
   //Edge symbol: 'slide_81'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_81");
   //Edge symbol end:'slide_81'

   //=========================================================
   
   //Edge symbol: 'slide_82'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_82");
   //Edge symbol end:'slide_82'

   //=========================================================
   
   //Edge symbol: 'slide_83'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_83");
   //Edge symbol end:'slide_83'

   //=========================================================
   
   //Edge symbol: 'slide_84'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_84");
   //Edge symbol end:'slide_84'

   //=========================================================
   
   //Edge symbol: 'slide_85'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_85");
   //Edge symbol end:'slide_85'

   //=========================================================
   
   //Edge symbol: 'slide_86'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_86");
   //Edge symbol end:'slide_86'

   //=========================================================
   
   //Edge symbol: 'slide_87'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_87");
   //Edge symbol end:'slide_87'

   //=========================================================
   
   //Edge symbol: 'slide_88'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_88");
   //Edge symbol end:'slide_88'

   //=========================================================
   
   //Edge symbol: 'slide_89'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_89");
   //Edge symbol end:'slide_89'

   //=========================================================
   
   //Edge symbol: 'slide_90'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_90");
   //Edge symbol end:'slide_90'

   //=========================================================
   
   //Edge symbol: 'slide_91'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_91");
   //Edge symbol end:'slide_91'

   //=========================================================
   
   //Edge symbol: 'slide_92'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_92");
   //Edge symbol end:'slide_92'

   //=========================================================
   
   //Edge symbol: 'slide_93'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_93");
   //Edge symbol end:'slide_93'

   //=========================================================
   
   //Edge symbol: 'slide_94'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_94");
   //Edge symbol end:'slide_94'

   //=========================================================
   
   //Edge symbol: 'slide_95'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_95");
   //Edge symbol end:'slide_95'

   //=========================================================
   
   //Edge symbol: 'slide_96'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_96");
   //Edge symbol end:'slide_96'

   //=========================================================
   
   //Edge symbol: 'slide_97'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_97");
   //Edge symbol end:'slide_97'

   //=========================================================
   
   //Edge symbol: 'slide_98'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_98");
   //Edge symbol end:'slide_98'

   //=========================================================
   
   //Edge symbol: 'slide_99'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_99");
   //Edge symbol end:'slide_99'

   //=========================================================
   
   //Edge symbol: 'slide_100'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_100");
   //Edge symbol end:'slide_100'

   //=========================================================
   
   //Edge symbol: 'slide_101'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
            //Edge binding end

         })("slide_101");
   //Edge symbol end:'slide_101'

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

   })("slide_1");
   //Edge symbol end:'slide_1'

   //=========================================================
   
   //Edge symbol: 'btnac1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle6}", "mouseover", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Rectangle6}", "mouseout", function(sym, e) {
         sym.stop(111);

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

})(jQuery, AdobeEdge, "EDGE-5531445");