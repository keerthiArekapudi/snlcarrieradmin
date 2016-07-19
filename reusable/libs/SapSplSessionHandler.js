/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.declare("splReusable.libs.SapSplSessionHandler");jQuery.sap.require("splReusable.libs.Utils");(function(w,d,q){$(d).ready(function(){function r(){sap.m.MessageBox.show(oSapSplUtils.getBundle().getText("MESSAGE_FOR_SESSION_TIMEOUT_REFRESH"),sap.m.MessageBox.Icon.WARNING,oSapSplUtils.getBundle().getText("SPL_ERROR_WARNING_DIALOG_HEADER"),[sap.m.MessageBox.Action.OK],function(s){if(s==="OK"){oSapSplUtils.sLO4S="app";w.location.reload();}});}w.onerror=function(e,R,l,c,E){var a=["Reason: NetworkError","Failed to execute \'send\' on \'XMLHttpRequest\'","could not be loaded from"];var i=false;if(E){if(E.hasOwnProperty("statusCode")){if(E["statusCode"]===0){r();}}}else{for(var _ in a){if(new RegExp("\\b"+_+"\\b").test(e)){i=true;break;}}if(i){r();}}};$(d).ajaxComplete(function(e,j,o){if(j.getResponseHeader("com.sap.cloud.security.login")){r();}else{if(oSapSplUtils.getInitializerDetails()){var i,u,x,U,a,l;i=oSapSplUtils.getInitializerDetails()["isSAML"];u=o.url;x=/sap\/spl\/xs/i;U=/sap\/spl\/ui/i;a=/.\//;l=/Required/;if(i!==undefined&&i!==null){if(i===true){if(j.status===0){if(x.test(u)){r();}else if(a.test(u)){r();}}else if(j.status===302){if(j.getResponseHeader("location")){if(x.test(u)){r();}}}else if(j.status===403){if(j.getResponseHeader("x-csrf-token")==="Required"){r(true);}}else if(j.status===408){r();}}else{if(j.status===200){if(j.getResponseHeader("x-sap-origin-location")&&j.getResponseHeader("x-sap-login-page")){if(U.test(j.getResponseHeader("x-sap-origin-location"))||x.test(j.getResponseHeader("x-sap-origin-location"))){r();}}}else if(j.status===403){if(j.getResponseHeader("x-csrf-token")&&l.test(j.getResponseHeader("x-csrf-token"))){r();}}else if(j.status===408){r();}}}}}});});}(window,document,jQuery));