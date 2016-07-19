/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.controller("splController.profile.DeregisterCompanyDetails",{oSourceInstance:null,companyModel:null,onInit:function(){sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oSapSplUtils.getCompanyDetails()),"sapSplCompanyDetailsModel");},onBeforeRendering:function(){},onAfterRendering:function(){},onExit:function(){},onBeforeShow:function(){var t=this;sap.ui.getCore().getModel("sapSplCompanyDetailsModel").refresh();function _(a){var b={truckData:function(){var i=a;sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({}),"compDeregSharedTrucksModel");oSapSplAjaxFactory.fireAjaxCall({url:oSapSplUtils.getFQServiceUrl("/sap/spl/xs/app/services/appl.xsodata/SharedList?$format=json&$filter=isShared eq 1"),method:"GET",async:true,success:jQuery.proxy(function(r){sap.ui.getCore().getModel("compDeregSharedTrucksModel").setData(r.d);sap.ui.getCore().getModel("compDeregSharedTrucksModel").refresh();this.byId("sapSplTruckAndTourDataTable").setBusy(false);},i),error:jQuery.proxy(function(){this.byId("sapSplTruckAndTourDataTable").setBusy(false);},i)});},truckCount:function(){var i=a;oSapSplAjaxFactory.fireAjaxCall({url:oSapSplUtils.getFQServiceUrl("/sap/spl/xs/app/services/appl.xsodata/MyTrackableObjects/$count/?$filter=(OwnerID eq X'"+oSapSplUtils.base64ToHex(oSapSplUtils.getCompanyDetails()["UUID"])+"' and isDeleted eq '0')"),method:"GET",async:true,success:jQuery.proxy(function(r){this.byId("sapSplTotalTruckTerminationText").setText(r);this.byId("sapSplTotalTruckTerminationText").setBusy(false);},i),error:jQuery.proxy(function(){this.byId("sapSplTotalTruckTerminationText").setBusy(false);},i)});},tourCount:function(){var i=a;oSapSplAjaxFactory.fireAjaxCall({url:oSapSplUtils.getFQServiceUrl("/sap/spl/xs/app/services/appl.xsodata/Tours/$count/?$filter=(OwnerID eq X'"+oSapSplUtils.base64ToHex(oSapSplUtils.getCompanyDetails()["UUID"])+"' and isDeleted eq '0')"),method:"GET",async:true,success:jQuery.proxy(function(r){this.byId("sapSplTotalTourTerminationText").setText(r);this.byId("sapSplTotalTourTerminationText").setBusy(false);},i),error:jQuery.proxy(function(){this.byId("sapSplTotalTourTerminationText").setBusy(false);},i)});},locationObjects:function(){var i=a;var r=[{name:oSapSplUtils.getBundle().getText("GEOFENCE_LIST_DEREG_COMPANY"),value:0},{name:oSapSplUtils.getBundle().getText("POI_LIST_DEREG_COMPANY"),value:0}];sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel({results:r}),"compDeregLocationObjectModel");oSapSplAjaxFactory.fireAjaxCall({url:oSapSplUtils.getFQServiceUrl("/sap/spl/xs/app/services/appl.xsodata/MyLocations/$count/?$filter=(Type eq 'L00002')"),method:"GET",async:true,success:jQuery.proxy(function(R){r[0]["value"]=R;sap.ui.getCore().getModel("compDeregLocationObjectModel").getData()["results"]=r;sap.ui.getCore().getModel("compDeregLocationObjectModel").refresh();},i),error:jQuery.proxy(function(){this.byId("sapSplTotalTourTerminationText").setBusy(false);},i)});oSapSplAjaxFactory.fireAjaxCall({url:oSapSplUtils.getFQServiceUrl("/sap/spl/xs/app/services/appl.xsodata/MyLocations/$count/?$filter=(Type eq 'L00001')"),method:"GET",async:true,success:jQuery.proxy(function(R){r[1]["value"]=R;sap.ui.getCore().getModel("compDeregLocationObjectModel").getData()["results"]=r;sap.ui.getCore().getModel("compDeregLocationObjectModel").refresh();},i),error:jQuery.proxy(function(){this.byId("sapSplTotalTourTerminationText").setBusy(false);},i)});},buPaConnections:function(){var i=a;oSapSplAjaxFactory.fireAjaxCall({url:oSapSplUtils.getFQServiceUrl("/sap/spl/xs/app/services/appl.xsodata/MyBusinessPartners/$count/?$filter=(isOwner eq 0)"),method:"GET",async:true,success:jQuery.proxy(function(r){this.byId("sapSplCompDeregBupaConnectionCountText").setText(r);this.byId("sapSplCompDeregBupaConnectionCountText").setBusy(false);},i),error:jQuery.proxy(function(){this.byId("sapSplCompDeregBupaConnectionCountText").setBusy(false);},i)});}};for(var k in b){if(b.hasOwnProperty(k)){b[k]();}}}_(t);}});