/*
 * Copyright (C) 2009-2015 SAP SE or an SAP affiliate company. All rights reserved.
 */
sap.ui.controller("splController.dialogs.SplNewFreightItem",{onInit:function(){this.oViewData=this.getView().getViewData();var m=$.extend(true,{},this.oViewData);this.oSplAddFreightItemModel=new sap.ui.model.json.JSONModel();this.oSplAddFreightItemModel.setData(m);this.getView().setModel(this.oSplAddFreightItemModel);this.fnDefineControlLabelsFromLocalizationBundle();this.selectRadioButton();this.selectRadioButtonLength();if(this.oSplAddFreightItemModel.getData().isEdit){this.saveIndexOfModelOnEdit();}this.saveDirtyFlag=oSapSplUtils.getIsDirty();oSapSplUtils.setIsDirty(false);},selectRadioButton:function(){if(this.oSplAddFreightItemModel.getData().Type==="B"){this.byId("SapSplFreightItemTypeRadioButton_2").setSelected(true);this.byId("SapSplFreightItemTypeRadioButton_2").fireSelect({selected:true});}else{this.byId("SapSplFreightItemTypeRadioButton_1").setSelected(true);this.byId("SapSplFreightItemTypeRadioButton_1").fireSelect({selected:true});}},selectRadioButtonLength:function(){if(this.oSplAddFreightItemModel.getData().ContainerType&&this.oSplAddFreightItemModel.getData().ContainerType!==null&&this.oSplAddFreightItemModel.getData().ContainerType!==""){if(this.oSplAddFreightItemModel.getData().ContainerType==="40ft"){this.byId("SapSplFreightItemLengthButton_2").setSelected(true);this.byId("SapSplFreightItemCustomLengthInput_3").setEnabled(false);}else if(this.oSplAddFreightItemModel.getData().ContainerType==="20ft"){this.byId("SapSplFreightItemLengthButton_1").setSelected(true);this.byId("SapSplFreightItemCustomLengthInput_3").setEnabled(false);}else{this.byId("SapSplFreightItemLengthButton_3").setSelected(true);this.byId("SapSplFreightItemCustomLengthInput_3").setValue(this.oSplAddFreightItemModel.getData().ContainerType);this.byId("SapSplFreightItemCustomLengthInput_3").setEnabled(true);}}},fnDefineControlLabelsFromLocalizationBundle:function(){this.byId("SapSplNewFreightItemFormFreightItemTypeLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_TYPE_LABEL"));this.byId("SapSplNewFreightItemFormContainerIdLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_CONTAINER_ID_LABEL"));this.byId("SapSplNewFreightItemFormContainerTypeLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_CONTAINER_TYPE_LABEL"));this.byId("SapSplNewFreightItemFormContainerLengthLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_CONTAINER_LENGTH_LABEL"));this.byId("SapSplNewFreightItemFormQuantityLabel").setText(oSapSplUtils.getBundle().getText("QUANTITY"));this.byId("SapSplNewFreightItemFormContainerWeightLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_WEIGHT_LABEL"));this.byId("SapSplNewFreightItemFormContainerVolumeLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_VOLUME_LABEL"));this.byId("SapSplNewFreightItemFormContainerDangerClassLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_DANGER_CLASS_LABEL"));this.byId("SapSplFreightItemTypeRadioButton_1").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_TYPE_CONTAINER"));this.byId("SapSplFreightItemTypeRadioButton_2").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_TYPE_BREAK_BULK"));this.byId("SapSplFreightItemLengthButton_1").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_LENGTH","20"));this.byId("SapSplFreightItemLengthButton_2").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_LENGTH","40"));this.byId("SapSplFreightItemCustomLengthInput_3").setPlaceholder(oSapSplUtils.getBundle().getText("CUSTOM"));},onAfterRendering:function(){},fnHandleToggleOfRadioButtons:function(e){var m=$.extend(true,{},this.oSplAddFreightItemModel.getData());if(e.getParameters().selected===true){if(e.getSource().sId.indexOf("SapSplFreightItemTypeRadioButton_1")!==-1){m.Type="C";this.byId("SapSplNewFreightItemFormContainerIdLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_CONTAINER_ID_LABEL"));m.Type="C";if(m.ContainerType===""){this.byId("SapSplFreightItemLengthButton_1").setSelected(true);this.byId("SapSplFreightItemCustomLengthInput_3").setEnabled(false);m.ContainerType="20ft";}}else{this.byId("SapSplNewFreightItemFormContainerIdLabel").setText(oSapSplUtils.getBundle().getText("FREIGHT_ITEM_IDENTIFIER_LABEL"));m.Type="B";}this.oSplAddFreightItemModel.setData(m);if(e.getSource().sId.indexOf("SapSplFreightItemTypeRadioButton_2")!==-1){this.byId("SapSplFreightItemCustomLengthInput_3").setValueState("None");}}},setParentDialogInstance:function(p){this.oParentDialogInstance=p;this.setButtonForDialog();},setButtonForDialog:function(){this.oSapSplNewfreightOkButton=new sap.m.Button({press:jQuery.proxy(this.fnHandlePressOfNewfreightDialogOk,this)});this.oSapSplNewfreightCancelButton=new sap.m.Button({press:jQuery.proxy(this.fnHandlePressOfNewfreightDialogCancel,this)});this.oSapSplNewfreightOkButton.setText(oSapSplUtils.getBundle().getText("OK_BUTTON_TEXT"));this.oSapSplNewfreightCancelButton.setText(oSapSplUtils.getBundle().getText("CANCEL"));this.oParentDialogInstance.setBeginButton(this.oSapSplNewfreightOkButton);this.oParentDialogInstance.setEndButton(this.oSapSplNewfreightCancelButton);},fnRegExCheckForNumberAndUnit:function(v){if(/^\d+(\.\d+)?\s*[a-zA-Z]+$/i.test(v)){return true;}else{return false;}},fnRegExCheckForNumberAndUnitForQuantity:function(v){if(/^\d+(\.\d+)?\s*[a-zA-Z]+$/i.test(v)||(/^\d+(\.\d+)?\s*$/i.test(v))){return true;}else{return false;}},fnHandlePressOfNewfreightDialogOk:function(){var m=$.extend(true,{},sap.ui.getCore().getModel("SplCreateNewTourModel").getData()),d;var i,a,I,D,u=oSapSplUtils.getUUID(),E,P,f=1;var b=$.extend(true,{},this.oSplAddFreightItemModel.getData());if(b.Type==="C"){if(this.byId("SapSplFreightItemLengthButton_3").getSelected()){b.ContainerType=this.byId("SapSplFreightItemCustomLengthInput_3").getValue();if(b.ContainerType.length===0){f=0;this.byId("SapSplFreightItemCustomLengthInput_3").setValueState("Error");this.byId("SapSplFreightItemCustomLengthInput_3").setValueStateText(oSapSplUtils.getBundle().getText("EMPTY_ERROR_MESSAGE"));}else{this.byId("SapSplFreightItemCustomLengthInput_3").setValueState("None");}}}else{if(this.byId("SapSplNewFreightItemFormQuantityInput").getValue().length===0||this.fnRegExCheckForNumberAndUnitForQuantity(this.byId("SapSplNewFreightItemFormQuantityInput").getValue().trim())){this.byId("SapSplNewFreightItemFormQuantityInput").setValueState("None");if(this.byId("SapSplNewFreightItemFormQuantityInput").getValue().length===0){b.Quantity_Value="";b.Quantity_Unit="";}else{b.Quantity_Value=parseInt(this.byId("SapSplNewFreightItemFormQuantityInput").getValue(),10).toString();b.Quantity_Unit=this.byId("SapSplNewFreightItemFormQuantityInput").getValue().replace(/\d+(\.\d+)?\s*/,"").length===0?oSapSplUtils.getBundle().getText("DEFAULT_QUANTITY"):this.byId("SapSplNewFreightItemFormQuantityInput").getValue().replace(/\d+(\.\d+)?\s*/,"");}}else{f=0;this.byId("SapSplNewFreightItemFormQuantityInput").setValueState("Error");this.byId("SapSplNewFreightItemFormQuantityInput").setValueStateText(oSapSplUtils.getBundle().getText("WRONG_FORMAT_ERROR_MESSAGE"));}if(this.byId("SapSplNewFreightItemFormContainerWeightInput").getValue().length===0||this.fnRegExCheckForNumberAndUnit(this.byId("SapSplNewFreightItemFormContainerWeightInput").getValue().trim())){this.byId("SapSplNewFreightItemFormContainerWeightInput").setValueState("None");if(this.byId("SapSplNewFreightItemFormContainerWeightInput").getValue().length===0){b.Weight_Value="";b.Weight_Unit="";}else{b.Weight_Value=parseInt(this.byId("SapSplNewFreightItemFormContainerWeightInput").getValue(),10).toString();b.Weight_Unit=this.byId("SapSplNewFreightItemFormContainerWeightInput").getValue().replace(/\d+(\.\d+)?\s*/,"");}}else{f=0;this.byId("SapSplNewFreightItemFormContainerWeightInput").setValueState("Error");this.byId("SapSplNewFreightItemFormContainerWeightInput").setValueStateText(oSapSplUtils.getBundle().getText("WRONG_FORMAT_ERROR_MESSAGE"));}if(this.byId("SapSplNewFreightItemFormContainerVolumeInput").getValue().length===0||this.fnRegExCheckForNumberAndUnit(this.byId("SapSplNewFreightItemFormContainerVolumeInput").getValue().trim())){this.byId("SapSplNewFreightItemFormContainerVolumeInput").setValueState("None");if(this.byId("SapSplNewFreightItemFormContainerVolumeInput").getValue().length===0){b.Volume_Value="";b.Volume_Unit="";}else{b.Volume_Value=parseInt(this.byId("SapSplNewFreightItemFormContainerVolumeInput").getValue(),10).toString();b.Volume_Unit=this.byId("SapSplNewFreightItemFormContainerVolumeInput").getValue().replace(/\d+(\.\d+)?\s*/,"");}}else{f=0;this.byId("SapSplNewFreightItemFormContainerVolumeInput").setValueState("Error");this.byId("SapSplNewFreightItemFormContainerVolumeInput").setValueStateText(oSapSplUtils.getBundle().getText("WRONG_FORMAT_ERROR_MESSAGE"));}}if(b.ItemID.length!==0&&f){if(!b.isEdit){var c=m.Items.length;m.Items[c]={};m.Items[c].ItemID=b.ItemID;m.Items[c].Type=b.Type;if(b.Type==="C"){m.Items[c].ContainerType=b.ContainerType;m.Items[c].Description=b.Description;m.Items[c].Volume_Unit="";m.Items[c].Volume_Value="";m.Items[c].Weight_Unit="";m.Items[c].Weight_Value="";m.Items[c].Quantity_Unit="";m.Items[c].Quantity_Value="";m.Items[c].DangerGoodsClass="";}else{m.Items[c].Volume_Unit=b.Volume_Unit;m.Items[c].Volume_Value=b.Volume_Value;m.Items[c].Weight_Unit=b.Weight_Unit;m.Items[c].Weight_Value=b.Weight_Value;m.Items[c].Quantity_Unit=b.Quantity_Unit;m.Items[c].Quantity_Value=b.Quantity_Value;m.Items[c].ContainerType="";m.Items[c].Description="";m.Items[c].DangerGoodsClass=this.byId("SapSplNewFreightItemFormContainerDangerClassInput").getValue();}d=$.extend(true,{},m.Items[c]);m.Items[c].UUID=u;m.Items[c].pickActionHappened="N";m.Items[c].dropActionHappened="N";m.Items[c].pickStopIndex=-1;m.Items[c].dropStopIndex=-1;for(i=0;i<m.stopsRow.length;i++){I=m.stopsRow[i].items.length;m.stopsRow[i].items[I]=$.extend(true,{},d);m.stopsRow[i].items[I]["Action"]="N";m.stopsRow[i].items[I]["IsDeleted"]="0";m.stopsRow[i].items[I]["ItemUUID"]=u;m.stopsRow[i].items[I]["PartnerOrderID"]=null;m.stopsRow[i].items[I]["ExternalStopDestination"]=null;}}else{m.Items[this.editIndex].ItemID=b.ItemID;m.Items[this.editIndex].Type=b.Type;m.Items[this.editIndex].DangerGoodsClass=this.byId("SapSplNewFreightItemFormContainerDangerClassInput").getValue();if(b.Type==="C"){m.Items[this.editIndex].ContainerType=b.ContainerType;m.Items[this.editIndex].Description=b.Description;m.Items[this.editIndex].DangerGoodsClass="";m.Items[this.editIndex].Volume_Unit="";m.Items[this.editIndex].Volume_Value="";m.Items[this.editIndex].Weight_Unit="";m.Items[this.editIndex].Weight_Value="";m.Items[this.editIndex].Quantity_Unit="";m.Items[this.editIndex].Quantity_Value="";}else{m.Items[this.editIndex].Volume_Unit=b.Volume_Unit;m.Items[this.editIndex].Volume_Value=b.Volume_Value;m.Items[this.editIndex].Weight_Unit=b.Weight_Unit;m.Items[this.editIndex].Weight_Value=b.Weight_Value;m.Items[this.editIndex].Quantity_Unit=b.Quantity_Unit;m.Items[this.editIndex].Quantity_Value=b.Quantity_Value;m.Items[this.editIndex].ContainerType="";m.Items[this.editIndex].Description="";m.Items[this.editIndex].DangerGoodsClass=this.byId("SapSplNewFreightItemFormContainerDangerClassInput").getValue();}for(i=0;i<m.stopsRow.length;i++){for(I=0;I<m.stopsRow[i].items.length;I++){if(m.Items[this.editIndex].UUID===m.stopsRow[i].items[I].ItemUUID){a=m.stopsRow[i].items[I].Action;D=m.stopsRow[i].items[I].IsDeleted;u=m.stopsRow[i].items[I].ItemUUID;P=m.stopsRow[i].items[I].PartnerOrderID;E=m.stopsRow[i].items[I].ExternalStopDestination;if(b.Type==="C"){m.stopsRow[i].items[I].ContainerType=b.ContainerType;m.stopsRow[i].items[I].Description=b.Description;m.stopsRow[i].items[I].Volume_Unit="";m.stopsRow[i].items[I].Volume_Value="";m.stopsRow[i].items[I].Weight_Unit="";m.stopsRow[i].items[I].Weight_Value="";m.stopsRow[i].items[I].Quantity_Unit="";m.stopsRow[i].items[I].Quantity_Value="";}else{m.stopsRow[i].items[I].Volume_Unit=b.Volume_Unit;m.stopsRow[i].items[I].Volume_Value=b.Volume_Value;m.stopsRow[i].items[I].Weight_Unit=b.Weight_Unit;m.stopsRow[i].items[I].Weight_Value=b.Weight_Value;m.stopsRow[i].items[I].Quantity_Unit=b.Quantity_Unit;m.stopsRow[i].items[I].Quantity_Value=b.Quantity_Value;m.stopsRow[i].items[I].ContainerType="";m.stopsRow[i].items[I].Description="";m.stopsRow[i].items[I].DangerGoodsClass=this.byId("SapSplNewFreightItemFormContainerDangerClassInput").getValue();}m.stopsRow[i].items[I]["ItemID"]=b.ItemID;m.stopsRow[i].items[I]["Type"]=b.Type;m.stopsRow[i].items[I]["Action"]=a;m.stopsRow[i].items[I]["IsDeleted"]=D;m.stopsRow[i].items[I]["ItemUUID"]=u;m.stopsRow[i].items[I]["PartnerOrderID"]=P;m.stopsRow[i].items[I]["ExternalStopDestination"]=E;}}}}sap.ui.getCore().getModel("SplCreateNewTourModel").setData(m);this.fnToCaptureLiveChangeToSetFlag();this.getView().getParent().close();}else{if(b.ItemID.length===0){this.byId("SapSplNewFreightItemFormContainerIdInput").setValueStateText(oSapSplUtils.getBundle().getText("EMPTY_ERROR_MESSAGE"));this.byId("SapSplNewFreightItemFormContainerIdInput").setValueState("Error");}else{this.byId("SapSplNewFreightItemFormContainerIdInput").setValueState("None");}}},fnToCaptureLiveChangeToSetFlag:function(){if(!oSapSplUtils.getIsDirty()){oSapSplUtils.setIsDirty(true);}},fnHandlePressOfNewfreightDialogCancel:function(){var t=this;if(oSapSplUtils.getIsDirty()){sap.m.MessageBox.show(oSapSplUtils.getBundle().getText("DATA_LOSS_WARNING_TEXT"),sap.m.MessageBox.Icon.WARNING,oSapSplUtils.getBundle().getText("WARNING"),[sap.m.MessageBox.Action.YES,sap.m.MessageBox.Action.CANCEL],function(s){if(s==="YES"){t.getView().getParent().close();oSapSplUtils.setIsDirty(t.saveDirtyFlag);}});}else{t.getView().getParent().close();oSapSplUtils.setIsDirty(t.saveDirtyFlag);}},fnHandelLengthRadioButton:function(e){var m=this.oSplAddFreightItemModel.getData();if(e.getSource().getId().indexOf("SapSplFreightItemLengthButton_1")>0){m.ContainerType="20ft";this.byId("SapSplFreightItemCustomLengthInput_3").setEnabled(false);this.byId("SapSplFreightItemCustomLengthInput_3").setValueState("None");}else if(e.getSource().getId().indexOf("SapSplFreightItemLengthButton_2")>0){m.ContainerType="40ft";this.byId("SapSplFreightItemCustomLengthInput_3").setEnabled(false);this.byId("SapSplFreightItemCustomLengthInput_3").setValueState("None");}else{this.byId("SapSplFreightItemCustomLengthInput_3").setEnabled(true);}this.oSplAddFreightItemModel.setData(m);},saveIndexOfModelOnEdit:function(){var i,m=sap.ui.getCore().getModel("SplCreateNewTourModel").getData();for(i=0;i<m.Items.length;i++){if(m.Items[i].ItemID===this.oSplAddFreightItemModel.getData().ItemID){this.editIndex=i;break;}}}});