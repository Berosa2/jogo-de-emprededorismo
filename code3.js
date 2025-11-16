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

gdjs.telaCode.eventsList0(runtimeScene);
gdjs.telaCode.GDNewSpriteObjects1.length = 0;
gdjs.telaCode.GDNewSpriteObjects2.length = 0;
gdjs.telaCode.GDNewTextObjects1.length = 0;
gdjs.telaCode.GDNewTextObjects2.length = 0;
gdjs.telaCode.GDNewSprite2Objects1.length = 0;
gdjs.telaCode.GDNewSprite2Objects2.length = 0;
gdjs.telaCode.GDiNICIARObjects1.length = 0;
gdjs.telaCode.GDiNICIARObjects2.length = 0;


return;

}

gdjs['telaCode'] = gdjs.telaCode;
