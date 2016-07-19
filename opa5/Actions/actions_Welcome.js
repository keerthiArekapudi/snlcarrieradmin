/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
jQuery.sap.require("sap.ui.test.Opa5");jQuery.sap.require("sap.ui.test.matchers.PropertyStrictEquals");new sap.ui.test.Opa5.extend("opa5.Actions.actions_Welcome",{getRandomText:function(){var a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];var t="";for(var i=0;i<Math.ceil(Math.random()*8);i++){t+=a[Math.ceil(Math.random()*26)];}console.log(t);return t;},LoadWelcomePage:function(){return this.waitFor({id:"baseForm--Layout",viewName:"views.WelcomePage",success:function(p){ok(p,"Loaded the Welcome page : "+p);},errorMessage:"Error in loading the Welcome page",});},iEnterUserDetails:function(){return this.waitFor({id:"views.WelcomePage--baseRegistrationFragmentContainer",success:function(i){i.getContent()[0].getContent()[1].setValue(this.getRandomText());i.getContent()[0].getContent()[3].setValue(this.getRandomText());i.getContent()[0].getContent()[5].setValue(this.getRandomText());i.getContent()[0].getContent()[7].setValue(this.getRandomText()+"@yopmail.com");ok(i,"Entered the user details! ");},errorMessage:"Did not find input fields!"});},iSelectUserDetails:function(){return this.waitFor({controlType:"sap.m.Select",success:function(s){s[0].$().trigger("tap");s[0].getItems()[1].$().trigger("tap");s[0].setSelectedItem(s[0].getItems()[1]);s[1].$().trigger("tap");s[1].getItems()[1].$().trigger("tap");s[1].setSelectedItem(s[1].getItems()[1]);s[2].$().trigger("tap");s[2].getItems()[1].$().trigger("tap");s[2].setSelectedItem(s[2].getItems()[1]);ok(s,"Selected the user details! ");},errorMessage:"Did not find select controls!"});},iClickOnRegisterButton:function(){return this.waitFor({controlType:"sap.m.Panel",success:function(p){p[0].getContent()[2].getContentRight()[0].firePress();ok(p,"clicked on the register button: "+p[0].getContent()[2].getContentRight()[0]);},errorMessage:"Register button not found"});},});