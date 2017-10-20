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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         sym.play();
         
         //CAMBIAR SEGÚN EL NÚMERO DE RESPUESTAS CORRECTAS O CHECKEADAS
                  TotalCheckBox = 4;
         //RESPUESTAS CAMBIAR POR false O true
                  sym.setVariable("Respuesta_1", true);
                  sym.setVariable("Respuesta_2", true);
                  sym.setVariable("Respuesta_3", false);
                  sym.setVariable("Respuesta_4", true);
                  sym.setVariable("Respuesta_5", false);
                  sym.setVariable("Respuesta_6", false);
                  sym.setVariable("Respuesta_7", false);
                  sym.setVariable("Respuesta_8", false);
                  sym.setVariable("Respuesta_9", false);
                  sym.setVariable("Respuesta_10", false);
                  sym.setVariable("Respuesta_11", false);
                  sym.setVariable("Respuesta_12", false);
                  sym.setVariable("Respuesta_13", false);
                  sym.setVariable("Respuesta_14", false);
                  sym.setVariable("Respuesta_15", false);
                  sym.setVariable("Respuesta_16", false);
                  sym.setVariable("Respuesta_17", false);
                  sym.setVariable("Respuesta_18", false);
                  sym.setVariable("Respuesta_19", false);
                  sym.setVariable("Respuesta_20", false);
                  sym.setVariable("Respuesta_21", false);
                  sym.setVariable("Respuesta_22", false);
                  sym.setVariable("Respuesta_23", false);
                  sym.setVariable("Respuesta_24", false);
                  sym.setVariable("Respuesta_25", false);
                  sym.setVariable("Respuesta_26", false);
                  sym.setVariable("Respuesta_27", false);
                  sym.setVariable("Respuesta_28", false);
                  sym.setVariable("Respuesta_29", false);
                  sym.setVariable("Respuesta_30", false);
                  sym.setVariable("Respuesta_31", false);
                  sym.setVariable("Respuesta_32", false);
                  sym.setVariable("Respuesta_33", false);
                  sym.setVariable("Respuesta_34", false);
                  sym.setVariable("Respuesta_35", false);
                  sym.setVariable("Respuesta_36", false);
                  sym.setVariable("Respuesta_37", false);
                  sym.setVariable("Respuesta_38", false);
                  sym.setVariable("Respuesta_39", false);
                  sym.setVariable("Respuesta_40", false);
                  sym.setVariable("Respuesta_41", false);
                  sym.setVariable("Respuesta_42", false);
                  sym.setVariable("Respuesta_43", false);
                  sym.setVariable("Respuesta_44", false);
                  sym.setVariable("Respuesta_45", false);
                  sym.setVariable("Respuesta_46", false);
                  sym.setVariable("Respuesta_47", false);
                  sym.setVariable("Respuesta_48", false);
                  sym.setVariable("Respuesta_49", false);
                  sym.setVariable("Respuesta_50", false);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_resp_incorrecta}", "click", function(sym, e) {
         sym.$("resp_incorrecta").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_resp_correcta}", "click", function(sym, e) {
         sym.$("resp_correcta").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_bt_validar}", "click", function(sym, e) {
         // insert code for mouse click here
         
      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ok'
   (function(symbolName) {   
   
   })("ok");
   //Edge symbol end:'ok'

   //=========================================================
   
   //Edge symbol: 'bad'
   (function(symbolName) {   
   
   })("bad");
   //Edge symbol end:'bad'

   //=========================================================
   
   //Edge symbol: 'bt_validar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_validar");
   //Edge symbol end:'bt_validar'

   //=========================================================
   
   //Edge symbol: 'bt_solucion'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_solucion");
   //Edge symbol end:'bt_solucion'

   //=========================================================
   
   //Edge symbol: 'bt_reiniciar'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_reiniciar");
   //Edge symbol end:'bt_reiniciar'

   //=========================================================
   
   //Edge symbol: 'bt_ayuda'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

   })("bt_ayuda");
   //Edge symbol end:'bt_ayuda'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'slide1'
   (function(symbolName) {   
   
   })("slide1");
   //Edge symbol end:'slide1'

})(jQuery, AdobeEdge, "EDGE-7842101");