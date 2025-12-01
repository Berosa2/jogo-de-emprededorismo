gdjs.telaCode = {};
gdjs.telaCode.localVariables = [];
gdjs.telaCode.idToCallbackMap = new Map();
gdjs.telaCode.GDNewSpriteObjects1= [];
gdjs.telaCode.GDNewSpriteObjects2= [];
gdjs.telaCode.GDNewTextObjects1= [];
gdjs.telaCode.GDNewTextObjects2= [];
gdjs.telaCode.GDNewSprite2Objects1= [];
gdjs.telaCode.GDNewSprite2Objects2= [];
gdjs.telaCode.GDiNICIARObjects1= [];
gdjs.telaCode.GDiNICIARObjects2= [];
gdjs.telaCode.GDwoodObjects1= [];
gdjs.telaCode.GDwoodObjects2= [];
gdjs.telaCode.GDconfigura_95231_95245esObjects1= [];
gdjs.telaCode.GDconfigura_95231_95245esObjects2= [];
gdjs.telaCode.GDNewTextInputObjects1= [];
gdjs.telaCode.GDNewTextInputObjects2= [];
gdjs.telaCode.GDiNICIAR2Objects1= [];
gdjs.telaCode.GDiNICIAR2Objects2= [];
gdjs.telaCode.GDname2Objects1= [];
gdjs.telaCode.GDname2Objects2= [];
gdjs.telaCode.GDconquisqtasObjects1= [];
gdjs.telaCode.GDconquisqtasObjects2= [];
gdjs.telaCode.GDpainel3Objects1= [];
gdjs.telaCode.GDpainel3Objects2= [];


gdjs.telaCode.mapOfGDgdjs_9546telaCode_9546GDwoodObjects1Objects = Hashtable.newFrom({"wood": gdjs.telaCode.GDwoodObjects1});
gdjs.telaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("iNICIAR"), gdjs.telaCode.GDiNICIARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.telaCode.GDiNICIARObjects1.length;i<l;++i) {
    if ( gdjs.telaCode.GDiNICIARObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.telaCode.GDiNICIARObjects1[k] = gdjs.telaCode.GDiNICIARObjects1[i];
        ++k;
    }
}
gdjs.telaCode.GDiNICIARObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ItemPickup.wav", false, 100, 1);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Incio");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("wood"), gdjs.telaCode.GDwoodObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.telaCode.GDwoodObjects1.length;i<l;++i) {
    if ( gdjs.telaCode.GDwoodObjects1[i].getY() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.telaCode.GDwoodObjects1[k] = gdjs.telaCode.GDwoodObjects1[i];
        ++k;
    }
}
gdjs.telaCode.GDwoodObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.telaCode.GDwoodObjects1 */
{for(var i = 0, len = gdjs.telaCode.GDwoodObjects1.length ;i < len;++i) {
    gdjs.telaCode.GDwoodObjects1[i].setY(-(161));
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.telaCode.mapOfGDgdjs_9546telaCode_9546GDwoodObjects1Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), -(161), "");
}
{for(var i = 0, len = gdjs.telaCode.GDwoodObjects1.length ;i < len;++i) {
    gdjs.telaCode.GDwoodObjects1[i].setZOrder(0);
}
}
{for(var i = 0, len = gdjs.telaCode.GDwoodObjects1.length ;i < len;++i) {
    gdjs.telaCode.GDwoodObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.random(1));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("name2"), gdjs.telaCode.GDname2Objects1);
gdjs.copyArray(runtimeScene.getObjects("wood"), gdjs.telaCode.GDwoodObjects1);
{for(var i = 0, len = gdjs.telaCode.GDwoodObjects1.length ;i < len;++i) {
    gdjs.telaCode.GDwoodObjects1[i].setY(gdjs.telaCode.GDwoodObjects1[i].getY() + (gdjs.randomInRange(1, 10)));
}
}
{for(var i = 0, len = gdjs.telaCode.GDname2Objects1.length ;i < len;++i) {
    gdjs.telaCode.GDname2Objects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.telaCode.GDNewTextInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("iNICIAR2"), gdjs.telaCode.GDiNICIAR2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.telaCode.GDiNICIAR2Objects1.length;i<l;++i) {
    if ( gdjs.telaCode.GDiNICIAR2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.telaCode.GDiNICIAR2Objects1[k] = gdjs.telaCode.GDiNICIAR2Objects1[i];
        ++k;
    }
}
gdjs.telaCode.GDiNICIAR2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.telaCode.GDNewTextInputObjects1.length;i<l;++i) {
    if ( gdjs.telaCode.GDNewTextInputObjects1[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.telaCode.GDNewTextInputObjects1[k] = gdjs.telaCode.GDNewTextInputObjects1[i];
        ++k;
    }
}
gdjs.telaCode.GDNewTextInputObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.telaCode.GDNewTextInputObjects1 */
{gdjs.evtTools.camera.hideLayer(runtimeScene, "first time");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "inicial classic");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setString((( gdjs.telaCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.telaCode.GDNewTextInputObjects1[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("nome").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("nome").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "first time");
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "inicial classic");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("nome").setString(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}

}


{



}


};

gdjs.telaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.telaCode.GDNewSpriteObjects1.length = 0;
gdjs.telaCode.GDNewSpriteObjects2.length = 0;
gdjs.telaCode.GDNewTextObjects1.length = 0;
gdjs.telaCode.GDNewTextObjects2.length = 0;
gdjs.telaCode.GDNewSprite2Objects1.length = 0;
gdjs.telaCode.GDNewSprite2Objects2.length = 0;
gdjs.telaCode.GDiNICIARObjects1.length = 0;
gdjs.telaCode.GDiNICIARObjects2.length = 0;
gdjs.telaCode.GDwoodObjects1.length = 0;
gdjs.telaCode.GDwoodObjects2.length = 0;
gdjs.telaCode.GDconfigura_95231_95245esObjects1.length = 0;
gdjs.telaCode.GDconfigura_95231_95245esObjects2.length = 0;
gdjs.telaCode.GDNewTextInputObjects1.length = 0;
gdjs.telaCode.GDNewTextInputObjects2.length = 0;
gdjs.telaCode.GDiNICIAR2Objects1.length = 0;
gdjs.telaCode.GDiNICIAR2Objects2.length = 0;
gdjs.telaCode.GDname2Objects1.length = 0;
gdjs.telaCode.GDname2Objects2.length = 0;
gdjs.telaCode.GDconquisqtasObjects1.length = 0;
gdjs.telaCode.GDconquisqtasObjects2.length = 0;
gdjs.telaCode.GDpainel3Objects1.length = 0;
gdjs.telaCode.GDpainel3Objects2.length = 0;

gdjs.telaCode.eventsList0(runtimeScene);
gdjs.telaCode.GDNewSpriteObjects1.length = 0;
gdjs.telaCode.GDNewSpriteObjects2.length = 0;
gdjs.telaCode.GDNewTextObjects1.length = 0;
gdjs.telaCode.GDNewTextObjects2.length = 0;
gdjs.telaCode.GDNewSprite2Objects1.length = 0;
gdjs.telaCode.GDNewSprite2Objects2.length = 0;
gdjs.telaCode.GDiNICIARObjects1.length = 0;
gdjs.telaCode.GDiNICIARObjects2.length = 0;
gdjs.telaCode.GDwoodObjects1.length = 0;
gdjs.telaCode.GDwoodObjects2.length = 0;
gdjs.telaCode.GDconfigura_95231_95245esObjects1.length = 0;
gdjs.telaCode.GDconfigura_95231_95245esObjects2.length = 0;
gdjs.telaCode.GDNewTextInputObjects1.length = 0;
gdjs.telaCode.GDNewTextInputObjects2.length = 0;
gdjs.telaCode.GDiNICIAR2Objects1.length = 0;
gdjs.telaCode.GDiNICIAR2Objects2.length = 0;
gdjs.telaCode.GDname2Objects1.length = 0;
gdjs.telaCode.GDname2Objects2.length = 0;
gdjs.telaCode.GDconquisqtasObjects1.length = 0;
gdjs.telaCode.GDconquisqtasObjects2.length = 0;
gdjs.telaCode.GDpainel3Objects1.length = 0;
gdjs.telaCode.GDpainel3Objects2.length = 0;


return;

}

gdjs['telaCode'] = gdjs.telaCode;
