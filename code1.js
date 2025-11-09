gdjs.IncioCode = {};
gdjs.IncioCode.localVariables = [];
gdjs.IncioCode.idToCallbackMap = new Map();
gdjs.IncioCode.GDBaixaObjects1= [];
gdjs.IncioCode.GDBaixaObjects2= [];
gdjs.IncioCode.GDMediaObjects1= [];
gdjs.IncioCode.GDMediaObjects2= [];
gdjs.IncioCode.GDAltaObjects1= [];
gdjs.IncioCode.GDAltaObjects2= [];
gdjs.IncioCode.GDNewSpriteObjects1= [];
gdjs.IncioCode.GDNewSpriteObjects2= [];
gdjs.IncioCode.GDFolderObjects1= [];
gdjs.IncioCode.GDFolderObjects2= [];
gdjs.IncioCode.GDTXTObjects1= [];
gdjs.IncioCode.GDTXTObjects2= [];
gdjs.IncioCode.GDPinObjects1= [];
gdjs.IncioCode.GDPinObjects2= [];


gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.IncioCode.GDNewSpriteObjects1});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDBaixaObjects1Objects = Hashtable.newFrom({"Baixa": gdjs.IncioCode.GDBaixaObjects1});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.IncioCode.GDNewSpriteObjects1});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDMediaObjects1Objects = Hashtable.newFrom({"Media": gdjs.IncioCode.GDMediaObjects1});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.IncioCode.GDNewSpriteObjects1});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDAltaObjects1Objects = Hashtable.newFrom({"Alta": gdjs.IncioCode.GDAltaObjects1});
gdjs.IncioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Alta"), gdjs.IncioCode.GDAltaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Baixa"), gdjs.IncioCode.GDBaixaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Media"), gdjs.IncioCode.GDMediaObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IncioCode.GDNewSpriteObjects1);
{gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.func(runtimeScene, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects1Objects, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDBaixaObjects1Objects, 1, 10, 80, 0, "", 0, 0, false, null);
}
{gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.func(runtimeScene, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects1Objects, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDMediaObjects1Objects, 1, 12, 220, 0, "", 0, 0, false, null);
}
{gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.func(runtimeScene, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects1Objects, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDAltaObjects1Objects, 1, 14, 320, 0, "", 0, 0, false, null);
}
{for(var i = 0, len = gdjs.IncioCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.IncioCode.GDNewSpriteObjects1[i].setAngle(gdjs.IncioCode.GDNewSpriteObjects1[i].getAngle() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Baixa"), gdjs.IncioCode.GDBaixaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDBaixaObjects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDBaixaObjects1[i].IsFocused(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDBaixaObjects1[k] = gdjs.IncioCode.GDBaixaObjects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDBaixaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT"), gdjs.IncioCode.GDTXTObjects1);
{for(var i = 0, len = gdjs.IncioCode.GDTXTObjects1.length ;i < len;++i) {
    gdjs.IncioCode.GDTXTObjects1[i].getBehavior("Text").setText("Baixa\nMais Empreendedor\nMais QI\nMenos Dinheiro\nMenos Vida");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Media"), gdjs.IncioCode.GDMediaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDMediaObjects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDMediaObjects1[i].IsFocused(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDMediaObjects1[k] = gdjs.IncioCode.GDMediaObjects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDMediaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT"), gdjs.IncioCode.GDTXTObjects1);
{for(var i = 0, len = gdjs.IncioCode.GDTXTObjects1.length ;i < len;++i) {
    gdjs.IncioCode.GDTXTObjects1[i].getBehavior("Text").setText("Media\nMais Saude\nMais QI\nMenos Empreendedorismo\nMenos Dificuldade");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alta"), gdjs.IncioCode.GDAltaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDAltaObjects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDAltaObjects1[i].IsFocused(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDAltaObjects1[k] = gdjs.IncioCode.GDAltaObjects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDAltaObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT"), gdjs.IncioCode.GDTXTObjects1);
{for(var i = 0, len = gdjs.IncioCode.GDTXTObjects1.length ;i < len;++i) {
    gdjs.IncioCode.GDTXTObjects1[i].getBehavior("Text").setText("Alta\nMais Dinheiro\nMais Trabalho\nMenos Empredeedorismo\nMenos QI");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Baixa"), gdjs.IncioCode.GDBaixaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDBaixaObjects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDBaixaObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDBaixaObjects1[k] = gdjs.IncioCode.GDBaixaObjects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDBaixaObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Classe").setNumber(1);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cena sem título");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("QI").setNumber(120);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Empredeodrismo").setNumber(20);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Media"), gdjs.IncioCode.GDMediaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDMediaObjects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDMediaObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDMediaObjects1[k] = gdjs.IncioCode.GDMediaObjects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDMediaObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Classe").setNumber(2);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cena sem título");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("QI").setNumber(100);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Alta"), gdjs.IncioCode.GDAltaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDAltaObjects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDAltaObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDAltaObjects1[k] = gdjs.IncioCode.GDAltaObjects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDAltaObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Classe").setNumber(3);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cena sem título");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("QI").setNumber(60);
}
}

}


};

gdjs.IncioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IncioCode.GDBaixaObjects1.length = 0;
gdjs.IncioCode.GDBaixaObjects2.length = 0;
gdjs.IncioCode.GDMediaObjects1.length = 0;
gdjs.IncioCode.GDMediaObjects2.length = 0;
gdjs.IncioCode.GDAltaObjects1.length = 0;
gdjs.IncioCode.GDAltaObjects2.length = 0;
gdjs.IncioCode.GDNewSpriteObjects1.length = 0;
gdjs.IncioCode.GDNewSpriteObjects2.length = 0;
gdjs.IncioCode.GDFolderObjects1.length = 0;
gdjs.IncioCode.GDFolderObjects2.length = 0;
gdjs.IncioCode.GDTXTObjects1.length = 0;
gdjs.IncioCode.GDTXTObjects2.length = 0;
gdjs.IncioCode.GDPinObjects1.length = 0;
gdjs.IncioCode.GDPinObjects2.length = 0;

gdjs.IncioCode.eventsList0(runtimeScene);
gdjs.IncioCode.GDBaixaObjects1.length = 0;
gdjs.IncioCode.GDBaixaObjects2.length = 0;
gdjs.IncioCode.GDMediaObjects1.length = 0;
gdjs.IncioCode.GDMediaObjects2.length = 0;
gdjs.IncioCode.GDAltaObjects1.length = 0;
gdjs.IncioCode.GDAltaObjects2.length = 0;
gdjs.IncioCode.GDNewSpriteObjects1.length = 0;
gdjs.IncioCode.GDNewSpriteObjects2.length = 0;
gdjs.IncioCode.GDFolderObjects1.length = 0;
gdjs.IncioCode.GDFolderObjects2.length = 0;
gdjs.IncioCode.GDTXTObjects1.length = 0;
gdjs.IncioCode.GDTXTObjects2.length = 0;
gdjs.IncioCode.GDPinObjects1.length = 0;
gdjs.IncioCode.GDPinObjects2.length = 0;


return;

}

gdjs['IncioCode'] = gdjs.IncioCode;
