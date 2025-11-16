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
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("wood"), gdjs.telaCode.GDwoodObjects1);
{for(var i = 0, len = gdjs.telaCode.GDwoodObjects1.length ;i < len;++i) {
    gdjs.telaCode.GDwoodObjects1[i].setY(gdjs.telaCode.GDwoodObjects1[i].getY() + (gdjs.randomInRange(1, 5)));
}
}
}

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


return;

}

gdjs['telaCode'] = gdjs.telaCode;
