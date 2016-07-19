/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.controller("splDemoController.SPLDemoAppMapKMLUpload",{onInit:function(){this.oODataModel=new sap.ui.model.odata.ODataModel(oSapSplUtils.getFQServiceUrl("sap/spl/xs/demoSetup/services/demo.xsodata"),true);this.oODataModel.setSizeLimit(1000);this.getView().oOrgSelect.setModel(this.oODataModel);this.selectedOrg=null;},fnHandleChangeEventOfOrgSelect:function(e){this.selectedOrg=e.getParameters().selectedItem.getBindingContext().getObject()["UUID"];},fnHandleUploadAction:function(){var o={UUID:this.selectedOrg,kmlContent:this.getView().oTextArea.getValue()};if(this.getView().oTextArea.getValue().length>0){$.ajax({url:oSapSplUtils.getFQServiceUrl("/sap/spl/xs/demoSetup/services/locationsAndPathsFromKML.xsjs"),type:"POST",contentType:"json; charset=UTF-8",async:false,beforeSend:function(){},data:JSON.stringify({data:o}),success:function(d,s,m){if(d.constructor===String){d=JSON.parse(d);}if(m["status"]===200&&d["Error"].length===0){sap.m.MessageToast.show("Upload Done");}},error:function(){sap.m.MessageToast.show("Upload Error");},complete:function(){}});}},onAfterRendering:function(){},onBeforeRendering:function(){},onBeforeShow:function(){}});
