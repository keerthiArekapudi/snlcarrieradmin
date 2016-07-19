/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.declare("opa5.Actions.psp_notification");jQuery.sap.require("sap.ui.test.Opa5");new sap.ui.test.Opa5.extend("opa5.Actions.actions",{iClickNotificationTile:function(){return this.waitFor({id:this.getContext().oUIAppsObject.userNotification.sId,check:function(u){return u.getState()==="Loaded";},success:function(t){t.firePress();ok(t,"userNotification tile is loaded and fired press");},errorMessage:"The userNotification tile did not load",});},iClickAddNotification:function(){return this.waitFor({id:"MaintenanceNotifierMaster--SapSplAddNotificationsButton",success:function(b){b.firePress();ok(true,"Add notifications button pressed");},errorMessage:"Button Not found"});},iEnterMessage:function(){return this.waitFor({controlType:"sap.m.TextArea",success:function(t){t[0].setValue("DB Upgrade");ok(true,"Message entered");},errorMessage:"Message field not found"});},iSelectType:function(){return this.waitFor({id:"MaintenanceNotifierAddNotificationDetail--sapSplAddNotificationType",success:function(s){s.setSelectedItem(s.getItems()[2]);s.fireChange({selectedItem:s.getItems()[2]});ok(true,"Message type selected");},errorMessage:"Select control not found"});},iEnterDates:function(){return this.waitFor({controlType:"sap.m.DatePicker",success:function(D){var d=D[0].getDateValue();d.setDate(d.getDate()+2);D[1].setDateValue(d);ok(true,"Date entered");},errorMessage:"Date Fields not found"});},iEnterTime:function(){return this.waitFor({controlType:"sap.m.DateTimeInput",success:function(t){var d=t[0].getDateValue();t[0].setDateValue(new Date());d.setHours(d.getHours()+1);t[1].setDateValue(d);ok(true,"Time entered");},errorMessage:"Time field not found"});},iClickSave:function(){return this.waitFor({controlType:"sap.m.Button",success:function(b){b[4].firePress();},errorMessage:"Save button not found"});},iSeeFocus:function(i){return this.waitFor({id:i,check:function(I){return sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId()===i;},success:function(I){ok(sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId()===i,"Focus is on the right input element"+sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId());},errorMessage:"Focus on the wrong input "+sap.ui.test.Opa5.getWindow().sap.ui.getCore().getCurrentFocusedControlId()});},iClickGroupBy:function(){return this.waitFor({controlType:"sap.m.Button",success:function(b){b[1].firePress();ok(true,"Group By button selected");},errorMessage:"GroupBy Button not present"});},GroupByNone:function(){return this.waitFor({id:"none",success:function(r){r.setSelected(true);ok(true,"Group By none selected");},errorMessage:"None Option not found"});},iClickFilterBy:function(){return this.waitFor({controlType:"sap.m.Button",success:function(b){b[2].firePress();ok(true,"Group By button selected");},errorMessage:"GroupBy Button not present"});},iClickOk:function(){return this.waitFor({controlType:"sap.m.Button",matchers:new sap.ui.test.matchers.PropertyStrictEquals({name:"text",value:"Ok"}),success:function(b){b[0].$().trigger("tap");ok(true,"Go button pressed");},errorMessage:"Button not found"});},iClickEditNotification:function(){return this.waitFor({id:"MaintenanceNotifierDetail--sapSplMaintenanceNotifierDetailEdit",success:function(b){b.firePress();ok(true,"Edit button clicked!");},errorMessage:"Button not find"});},iClickCancel:function(){return this.waitFor({id:"MaintenanceNotifierAddNotificationDetail--sapSplAddNotificationCancel",success:function(b){b.firePress();ok(true,"Cancel Button Clicked");},errorMessage:"Cancel Button not found"});}});
