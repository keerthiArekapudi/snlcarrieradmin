/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.declare("opa5.Assertions.assertions");jQuery.sap.require("sap.ui.test.Opa5");jQuery.sap.require("sap.ui.test.matchers.PropertyStrictEquals");new sap.ui.test.Opa5.extend("opa5.Assertions.assertions",{iShouldSeeTiles:function(){return this.waitFor({id:"masterTileContainerPage",viewName:"splView.tileContainer.MasterTileContainer",check:function(){return this.getContext().oAppsPage&&this.getContext().oAppsPage.getContent().length>0;},success:function(p){this.getContext().oShell=p.getParent().getParent().getParent().getParent();var P=this.getContext().oAppsPage.getContent();var o={};for(var i=0;i<P.length;i++){o[P[i].getBindingContext().getProperty().AppID]=P[i];}this.getContext().oUIAppsObject=o;console.log(o);ok(p,"Found the apps tiles : "+this.getContext().oAppsPage.getContent().length+" tiles");},errorMessage:"The apps tiles did not contain entries",});},saveShellInstance:function(){return this.waitFor({id:"sapSplBaseUnifiedShell",success:function(s){this.getContext().oShellGInstance=s;ok(true,"shell instance saved!");},errorMessage:"Failed!"});},iShouldNavigateToUsersApp:function(){return this;},iClickOnUsersTile:function(){return this.waitFor({id:"MyContactsMaster--MyContactsMasterPage-title",success:function(l){ok(true,"The users page is displayed"+l);},errorMessage:"The users page didnt load"});},isAddDriverOptionClicked:function(){return this.waitFor({id:"NewContactRegistrationDetail--NewContactRegistrationDetailPage-title",success:function(){ok(true,"Add driver button clicked");},errorMessage:"did not find the button"});},iseeSuccessToastMessage:function(t){return this.waitFor({"class":"sapMMessageToast",success:function(){ok(true,t+" added successfully");},errorMessage:"Error in adding"+t});},iAmLoggedOutFromTheApp:function(){return this.waitFor({check:function(){alert($("#sapSplSelfRegAppContainer").length);if($("#sapSplSelfRegAppContainer").length>0){return true;}else{return false;}},success:function(p){var o=p.getContent()[0].getContent()[0].getContent()[0].getText();if(p.getContent()[0].getContent()[0].getContent()[0].isActive()){ok(true,"Found the text "+o);}},errorMessage:"Logout unsuccessful"});},incidentsTileIsLoaded:function(){return this.waitFor({id:"IncidentsDetails--SapSplIncidentsDetailPage-title",success:function(){ok(true,"Incidents tile is opened");},errorMessage:"Incidents Tile not loaded"});},pdfLoaded:function(){return this.waitFor({id:"splView.help.Help--sapSplHelpPage-title",success:function(l){ok(true,"The users page is displayed"+l);},errorMessage:"The users page didnt load"});},iclickonTSTile:function(){var t=$(".trafficStatusTitle").attr("id");return this.waitFor({id:t,success:function(l){ok(true,"The live app page is displayed"+l);},errorMessage:"The live app page didn't load!"});},iclickonBPDialog:function(){var t=$(".splSendMessageBusinessPartnerDialog").attr("id");return this.waitFor({id:t,success:function(){ok(true,"dialog has been opened!"+t);},errorMessage:"The dialog hasn't appeared!"});},iclickonF4HelpList:function(){var s=$(".sendMessageBusinessPartnerDialogContainerView").attr("id");var a=sap.ui.getCore().byId(s);return this.waitFor({id:a,success:function(){ok(true,"The view has been opened!");},errorMessage:"The view could not be opened!"});},iSeeCarrierDialog:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(d){var l=d[0].getContent()[0].getContent()[0].getContent()[0].getCurrentPage().getCustomHeader().getContentMiddle()[0].getText();ok(true,"The carrier page has opened! "+l);},errorMessage:"The carrier page didn't open!"});},iSeeBPDialog:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(d){var l=d[0].getContent()[0].getContent()[0].getContent()[0].getCurrentPage().getTitle();ok(true,"BP Dialog back again "+l);},errorMessage:"BP Dialog couldn't be loaded!"});},iSeeToastMessage:function(){return this.waitFor({"class":"sapMMessageToast",success:function(m){ok(true,"Message Toast Successfully displayed!");},errorMessage:"Toast Message was not displayed!"});},helpPDFLoaded:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(d){var a=d[0].getTitle();ok(true,"pdf loaded! The dialog title is "+a);},errorMessage:"PDF didn't load!"});},iSeeAPopover:function(){return this.waitFor({controlType:"sap.m.Popover",success:function(){ok(true,"Popover appears!");},errorMessage:"Popover doesn't appear!"});},iSeeAddHubDialog:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(d){var h=d[0].getTitle();ok(true,"title is "+h);},errorMessage:"Dialog wasn't found!"});},iseeConfirmationDialog:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(d){var D=d[1].getTitle();ok(true,"Edit dialog has been opened : "+D);},errorMessage:"Edit Dialog could not be opened!"});},iSeeLogOutDialog:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(d){var t=d[0].getTitle();ok(true,"Logout alert has been opened!"+t);},errorMessage:"Logout Alert could not be opened!"});},iSeeLogOutPage:function(){return this.waitFor({controlType:"sap.m.Panel",success:function(){ok(true,"Found the text ");},errorMessage:"Logout unsuccessful"});},iSeeDeregistrationDialog:function(){return this.waitFor({controlType:"sap.m.Dialog",success:function(d){var D=d[1].getTitle();ok(true,"Deregistration Dialog appeared : "+D);},errorMessage:"Deregistration Dialog isn't appearing!"});},iSeeComLogTileLoaded:function(){return this.waitFor({id:"splView.communicationLog.communicationLog--sapSplCommunicationLogPage-title",success:function(){ok(true,"The Communication Log app page is displayed");this.iSeeFocus();},errorMessage:"The  Communication Log app page didn't load!"});},iSelectDataFromComboBox:function(){return this.waitFor({controlType:"sap.m.MultiComboBox",success:function(e){e[0].setSelectedItems([e[0].getItems()[0]]);ok(true,"Option Selected from Response Code");},errorMessage:"Option not selected from response Code"});},iClickonGo:function(){return this.waitFor({controlType:"sap.m.Button",matchers:new sap.ui.test.matchers.PropertyStrictEquals({name:"text",value:"Go"}),success:function(b){b[0].$().trigger("tap");ok(true,"Go button pressed");},errorMessage:"Button not found"});},iSeeTheResults:function(){var d=null;return this.waitFor({id:"splView.communicationLog.communicationLog--SapSplCommunicationLogTable",success:function(t){d=t.getItems().length;if(d>0){this.iSelectDataFromComboBox().and.iClickonGo();ok(true,"Records found "+d);}else ok(true,"Record  not found ");},});},iSeeResultsSortedOrGrouped:function(){return this.waitFor({id:"splView.communicationLog.communicationLog--SapSplCommunicationLogTable",success:function(t){var a=t.getBinding("items");var d=a.aSorters[0].bDescending;if(d){ok(true,"Sorted by "+a.aSorters[0].sPath+"in Descending Order");}else{ok(true,"Sorted by "+a.aSorters[0].sPath+"in Ascending Order");}},error:"Not Sorted",});},iSeeFocus:function(){return this.waitFor({id:"splView.communicationLog.communicationLog--timeHorizonSelect",check:function(i){return sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId()==='splView.communicationLog.communicationLog--timeHorizonSelect';},success:function(i){ok(sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId()==='splView.communicationLog.communicationLog--timeHorizonSelect',"Focus is on the right input element"+sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId());},errorMessage:"Focus on the wrong input "+sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId()});},});
