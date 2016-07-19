/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.require("sap.m.Slider");jQuery.sap.declare("splReusable.libs.SapSplTourTruckChart");sap.ui.core.Control.extend("splReusable.libs.SapSplTourTruckChart",{metadata:{properties:{stops:"object[]",width:"string",height:"string",registration:"string",truckiconsrc:"string",size:{type:"sap.ui.core.CSSSize",defaultValue:"100%"}},aggregations:{}},init:function(){var t=this;$(window).resize(function(){t.rerender();});},onAfterRendering:function(){if($("#"+this.getParent().getParent().getParent().getId()).height()!==0){this.setHeight(585);this.setWidth($("#"+this.getParent().getParent().getParent().getId()).width()/2);}else{this.setHeight(585);this.setWidth(780);}},renderer:function(r,c){try{var I=sap.ui.getCore().getConfiguration().getRTL();var X=0,Y=100,s="",l=0,L=null,a=false,S,f,b,E,d,t=0,T=null,g=false;var h;X=!I?90:c.getWidth()-90;if(c.getStops().length<2){X=100;}r.write("<svg xmlns=\"http://www.w3.org/2000/svg\"xmlns:xlink=\"http://www.w3.org/1999/xlink\"  style=\"width: 100%;font-size:0.75rem;padding-top:1.5%; \"");r.writeControlData(c);r.addStyle("width","100%");r.write(">");if(c.getStops().length!==0){S=c.getWidth()/c.getStops().length;if(I){S=S*-1;s="class=\"SapSplTruckIconMirror\"";}f=c.getHeight()/4;X=X-S;d=c.getStops().length-1;for(var i=0;i<c.getStops().length;i++){X=X+S;if(isNaN(X)||isNaN(S)){return;}if(c.getStops()[i-1]&&c.getStops()[i-1].Planned_DepartureTime){if(c.getStops()[i]&&c.getStops()[i].ETA&&c.getStops()[i].Status==="A"){if(c.getStops()[i].ETA<c.getStops()[i].Planned_ArrivalTime){E="#347335";}else{E="#F26B22";}r.write(" <text  id =\"text1\" x=\""+(X-S/8)+"\" y=\""+(Y*0.47)+"\" style=\" fill: #969392\">"+splReusable.libs.SapSplModelFormatters.encodeHTML(splReusable.libs.SapSplModelFormatters.returnTimeValue(c.getStops()[i-1].Planned_DepartureTime))+"<tspan style=\" fill:"+E+" \";\"> ("+splReusable.libs.SapSplModelFormatters.returnTimeValue(c.getStops()[i].ETA)+")  </tspan>"+"</text>");}else{r.write(" <text  id =\"text1\" x=\""+(X-S/8)+"\" y=\""+(Y*0.47)+"\" style=\" fill: #969392\">"+splReusable.libs.SapSplModelFormatters.encodeHTML(splReusable.libs.SapSplModelFormatters.returnTimeValue(c.getStops()[i-1].Planned_DepartureTime))+"</text>");}}if(c.getStops()[i+1]&&(c.getStops()[i+1]["Status"]==="C"||c.getStops()[i+1]["LastReportedEvent"]==="com.sap.spl.ArrivedAtDestination")){l=f/60;L="#009de0";b=15;}else{l=f/130;L="#6D6F73";b=20;}if(!a&&!(c.getStops()[i+1]&&(c.getStops()[i+1]["Status"]==="C"))){if(c.getStops()[i+1]&&c.getStops()[i+1]["LastReportedEvent"]==="com.sap.spl.ArrivedAtDestination"){h=X+S;}else if(!(c.getStops()[i+1]&&c.getStops()[i+1]["LastReportedEvent"]==="com.sap.spl.ApproachingDestination")&&c.getStops()[i]["LastReportedEvent"]==="com.sap.spl.Departure"){h=X+S*0.2;t=0.2;T="#FC690D";g=true;}else if(c.getStops()[i+1]&&c.getStops()[i+1]["LastReportedEvent"]==="com.sap.spl.ApproachingDestination"){h=X+S*0.7;t=0.7;T="#FC690D";g=true;}else{h=X;}r.write("<image "+s+" x=\""+(h)+"\" y=\""+Y*0.001+"\" width=\""+c.getWidth()/30+"\" height=\""+c.getWidth()/35+"\" xlink:href=\""+splReusable.libs.SapSplModelFormatters.encodeHTML(c.getTruckiconsrc())+"\" />");if(c.getRegistration()){r.write(" <text x=\""+(h)+"\" y=\""+(Y*0.33)+"\" style=\"stroke: #009de0; fill: #009de0\">"+splReusable.libs.SapSplModelFormatters.encodeHTML(c.getRegistration())+"</text>");}a=true;}r.write("<g>");if(i!==d){if(!g){r.write("<line x1=\""+(X)+"\" y1=\""+(Y/2+(f/20))+"\" x2=\""+(X+S)+"\" y2=\""+(Y/2+(f/20))+"\" style=\"stroke:"+L+" ;  stroke-width:"+l+"\"/>");r.write("<g transform=\"rotate(40,"+X+","+Y/2+")\">  <rect x=\""+X+"\" y=\""+Y/2+"\" height=\""+f/b+"\" width=\""+f/b+"\"style=\"stroke: #"+L+"; fill: "+L+"\"/> </g>");}else{r.write("<g transform=\"rotate(40,"+X+","+Y/2+")\">  <rect x=\""+X+"\" y=\""+Y/2+"\" height=\""+(f/b)*1.33+"\" width=\""+(f/b)*1.33+"\"style=\"stroke: #"+T+"; fill: "+T+"\"/> </g>");r.write("<line x1=\""+(X)+"\" y1=\""+(Y/2+(f/20))+"\" x2=\""+(X+S*t)+"\" y2=\""+(Y/2+(f/20))+"\" style=\"stroke:"+T+" ;  stroke-width:"+l*2+"\"/>");r.write("<line x1=\""+(X+S*t)+"\" y1=\""+(Y/2+(f/20))+"\" x2=\""+(X+S)+"\" y2=\""+(Y/2+(f/21))+"\" style=\"stroke:"+L+" ;  stroke-width:"+l+"\"/>");g=null;}}else{r.write("<g transform=\"rotate(40,"+X+","+Y/2+")\">  <rect x=\""+X+"\" y=\""+Y/2+"\" height=\""+f/b+"\" width=\""+f/b+"\"style=\"stroke: #"+L+"; fill: "+L+"\"/> </g>");}r.write(" <text  text-anchor=\"middle\" x=\""+(X)+"\" y=\""+((0.2*Y)+(f/20)+(0.48*Y))+"\" style=\" fill: #0C0C0D\">"+splReusable.libs.SapSplModelFormatters.encodeHTML(c.getStops()[i].Name)+"</text>");r.write(" <text x=\""+(X)+"\" y=\""+((Y*0.2)+(f/20)+(Y*0.62))+"\" style=\"  fill: #969392\">"+splReusable.libs.SapSplModelFormatters.encodeHTML(splReusable.libs.SapSplModelFormatters.returnTimeValue(c.getStops()[i].Planned_ArrivalTime))+"</text>");r.write("</g>");}X=X+S;}}catch(e){}}});
