/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.require("sap.ui.test.Opa5");jQuery.sap.require("sap.ui.test.matchers.PropertyStrictEquals");new sap.ui.test.Opa5.extend("opa5.Actions.actions_geofence",{iclickonTrafficStatusTile:function(){return this.waitFor({id:this.getContext().oUIAppsObject.liveApp.sId,check:function(u){return u.getState()==="Loaded";},success:function(t){t.firePress();ok(t,"Traffic Status tile is loaded and fired press"+t);},errorMessage:"The Traffic Status tile did not load",});},iClickOnEntitiesButton:function(){return this.waitFor({controlType:"sap.m.Button",success:function(b){b[1].firePress();ok(b,"Clicked on Entities button"+b[1]);},errorMessage:"Could not find entities button",});},iClickOnGeofenceIcon:function(){return this.waitFor({controlType:"sap.m.IconTabBar",success:function(i){i[0].setSelectedItem(i[0].getItems()[0]);ok(i,"Clicked on the geofence icon in the icon tab bar"+i[0].getItems()[0]);},errorMessage:"Did not click on the geofence icon in the icon tab bar"});},iClickOnGroupbyButton:function(){return this.waitFor({controlType:"sap.m.Button",success:function(b){b[12].firePress();ok(b,"Clicked on group by button"+b[12]);},errorMessage:"Could not find group by button",});},iClickOnCompany:function(){return this.waitFor({controlType:"sap.m.List",success:function(l){l[1].getItems()[1].$().trigger("tap");ok(l,"Clicked on company radio button"+l[1].getItems()[1]);},errorMessage:"Did not click on company radio button",});},iClickOnOKButton:function(){return this.waitFor({controlType:"sap.m.Button",success:function(b){b[2].firePress();ok(b,"Clicked on OK button"+b[2]);},errorMessage:"Did not click on OK button",});},iSeeGeofencelist:function(){return this.waitFor({controlType:"sap.m.List",check:function(o){return o[2].getItems();},success:function(l){ok(l,"I see the list for geofence"+l[2]);},errorMessage:"Did not load the list for geofence",});},iClickOnSharing:function(){return this.waitFor({controlType:"sap.m.List",success:function(l){l[1].getItems()[0].$().trigger("tap");ok(l,"Clicked on sharing radio button"+l[1].getItems()[0]);},errorMessage:"Did not click on sharing radio button",});},iClickOnFilterbyButton:function(){return this.waitFor({controlType:"sap.m.Button",success:function(b){b[13].firePress();ok(b,"Clicked on filter by button"+b[13]);},errorMessage:"Could not find filter by button",});},iClickOnFilterIcon:function(){return this.waitFor({controlType:"sap.ui.core.Icon",success:function(i){i[0].$().trigger("tap");ok(i,"Clicked on filter icon"+i[0]);},errorMessage:"Did not click on filter icon",});},iClickOnType:function(){return this.waitFor({controlType:"sap.m.List",success:function(l){l[0].getItems()[0].$().trigger("tap");ok(l,"Clicked on type list item"+l[0].getItems()[0]);},errorMessage:"Did not click on type list item",});},iClickOnGeofence:function(){return this.waitFor({controlType:"sap.m.List",success:function(l){l[0].getItems()[0].$().trigger("tap");ok(l,"Clicked on geofence radio button"+l[0].getItems()[0]);},errorMessage:"Did not click on geofence radio button",});},iClickOnRadar:function(){return this.waitFor({controlType:"sap.m.List",success:function(l){l[0].getItems()[1].$().trigger("tap");ok(l,"Clicked on radar radio button"+l[0].getItems()[1]);},errorMessage:"Did not click on radar radio button",});},});
