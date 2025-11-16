gdjs.IncioCode = {};
gdjs.IncioCode.localVariables = [];
gdjs.IncioCode.idToCallbackMap = new Map();
gdjs.IncioCode.GDBaixaObjects1= [];
gdjs.IncioCode.GDBaixaObjects2= [];
gdjs.IncioCode.GDBaixaObjects3= [];
gdjs.IncioCode.GDMediaObjects1= [];
gdjs.IncioCode.GDMediaObjects2= [];
gdjs.IncioCode.GDMediaObjects3= [];
gdjs.IncioCode.GDAltaObjects1= [];
gdjs.IncioCode.GDAltaObjects2= [];
gdjs.IncioCode.GDAltaObjects3= [];
gdjs.IncioCode.GDNewSpriteObjects1= [];
gdjs.IncioCode.GDNewSpriteObjects2= [];
gdjs.IncioCode.GDNewSpriteObjects3= [];
gdjs.IncioCode.GDFolderObjects1= [];
gdjs.IncioCode.GDFolderObjects2= [];
gdjs.IncioCode.GDFolderObjects3= [];
gdjs.IncioCode.GDTXTObjects1= [];
gdjs.IncioCode.GDTXTObjects2= [];
gdjs.IncioCode.GDTXTObjects3= [];
gdjs.IncioCode.GDPinObjects1= [];
gdjs.IncioCode.GDPinObjects2= [];
gdjs.IncioCode.GDPinObjects3= [];
gdjs.IncioCode.GDPessoa_95951Objects1= [];
gdjs.IncioCode.GDPessoa_95951Objects2= [];
gdjs.IncioCode.GDPessoa_95951Objects3= [];
gdjs.IncioCode.GDPessoa_95952Objects1= [];
gdjs.IncioCode.GDPessoa_95952Objects2= [];
gdjs.IncioCode.GDPessoa_95952Objects3= [];
gdjs.IncioCode.GDNewTextInputObjects1= [];
gdjs.IncioCode.GDNewTextInputObjects2= [];
gdjs.IncioCode.GDNewTextInputObjects3= [];
gdjs.IncioCode.GDFolder2Objects1= [];
gdjs.IncioCode.GDFolder2Objects2= [];
gdjs.IncioCode.GDFolder2Objects3= [];


gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.IncioCode.GDNewSpriteObjects2});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDBaixaObjects2Objects = Hashtable.newFrom({"Baixa": gdjs.IncioCode.GDBaixaObjects2});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.IncioCode.GDNewSpriteObjects2});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDMediaObjects2Objects = Hashtable.newFrom({"Media": gdjs.IncioCode.GDMediaObjects2});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.IncioCode.GDNewSpriteObjects2});
gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDAltaObjects2Objects = Hashtable.newFrom({"Alta": gdjs.IncioCode.GDAltaObjects2});
gdjs.IncioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Alta"), gdjs.IncioCode.GDAltaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Baixa"), gdjs.IncioCode.GDBaixaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Media"), gdjs.IncioCode.GDMediaObjects2);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IncioCode.GDNewSpriteObjects2);
{gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.func(runtimeScene, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects2Objects, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDBaixaObjects2Objects, 1, 10, 80, 0, "", 0, 0, false, null);
}
{gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.func(runtimeScene, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects2Objects, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDMediaObjects2Objects, 1, 12, 220, 0, "", 0, 0, false, null);
}
{gdjs.evtsExt__OrbitingObjects__AnimateOrbitingObjects.func(runtimeScene, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDNewSpriteObjects2Objects, gdjs.IncioCode.mapOfGDgdjs_9546IncioCode_9546GDAltaObjects2Objects, 1, 14, 320, 0, "", 0, 0, false, null);
}
{for(var i = 0, len = gdjs.IncioCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.IncioCode.GDNewSpriteObjects2[i].setAngle(gdjs.IncioCode.GDNewSpriteObjects2[i].getAngle() + (1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Baixa"), gdjs.IncioCode.GDBaixaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDBaixaObjects2.length;i<l;++i) {
    if ( gdjs.IncioCode.GDBaixaObjects2[i].IsFocused(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDBaixaObjects2[k] = gdjs.IncioCode.GDBaixaObjects2[i];
        ++k;
    }
}
gdjs.IncioCode.GDBaixaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT"), gdjs.IncioCode.GDTXTObjects2);
{for(var i = 0, len = gdjs.IncioCode.GDTXTObjects2.length ;i < len;++i) {
    gdjs.IncioCode.GDTXTObjects2[i].getBehavior("Text").setText("Baixa\nMais Empreendedor\nMais QI\nMenos Dinheiro\nMenos Vida");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Media"), gdjs.IncioCode.GDMediaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDMediaObjects2.length;i<l;++i) {
    if ( gdjs.IncioCode.GDMediaObjects2[i].IsFocused(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDMediaObjects2[k] = gdjs.IncioCode.GDMediaObjects2[i];
        ++k;
    }
}
gdjs.IncioCode.GDMediaObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT"), gdjs.IncioCode.GDTXTObjects2);
{for(var i = 0, len = gdjs.IncioCode.GDTXTObjects2.length ;i < len;++i) {
    gdjs.IncioCode.GDTXTObjects2[i].getBehavior("Text").setText("Media\nMais Saude\nMais QI\nMenos Empreendedorismo\nMenos Dificuldade");
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


};gdjs.IncioCode.eventsList1 = function(runtimeScene) {

{


gdjs.IncioCode.eventsList0(runtimeScene);
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
gdjs.copyArray(runtimeScene.getObjects("NewTextInput"), gdjs.IncioCode.GDNewTextInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Classe").setNumber(1);
}
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Cena sem título");
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("QI").setNumber(120);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Empredeodrismo").setNumber(20);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("nome").setString((( gdjs.IncioCode.GDNewTextInputObjects1.length === 0 ) ? "" :gdjs.IncioCode.GDNewTextInputObjects1[0].getBehavior("Text").getText()));
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
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("QI").setNumber(70);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pessoa_1"), gdjs.IncioCode.GDPessoa_95951Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDPessoa_95951Objects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDPessoa_95951Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDPessoa_95951Objects1[k] = gdjs.IncioCode.GDPessoa_95951Objects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDPessoa_95951Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Tipo").setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pessoa_2"), gdjs.IncioCode.GDPessoa_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IncioCode.GDPessoa_95952Objects1.length;i<l;++i) {
    if ( gdjs.IncioCode.GDPessoa_95952Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.IncioCode.GDPessoa_95952Objects1[k] = gdjs.IncioCode.GDPessoa_95952Objects1[i];
        ++k;
    }
}
gdjs.IncioCode.GDPessoa_95952Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).getChild("Tipo").setNumber(2);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.IncioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IncioCode.GDBaixaObjects1.length = 0;
gdjs.IncioCode.GDBaixaObjects2.length = 0;
gdjs.IncioCode.GDBaixaObjects3.length = 0;
gdjs.IncioCode.GDMediaObjects1.length = 0;
gdjs.IncioCode.GDMediaObjects2.length = 0;
gdjs.IncioCode.GDMediaObjects3.length = 0;
gdjs.IncioCode.GDAltaObjects1.length = 0;
gdjs.IncioCode.GDAltaObjects2.length = 0;
gdjs.IncioCode.GDAltaObjects3.length = 0;
gdjs.IncioCode.GDNewSpriteObjects1.length = 0;
gdjs.IncioCode.GDNewSpriteObjects2.length = 0;
gdjs.IncioCode.GDNewSpriteObjects3.length = 0;
gdjs.IncioCode.GDFolderObjects1.length = 0;
gdjs.IncioCode.GDFolderObjects2.length = 0;
gdjs.IncioCode.GDFolderObjects3.length = 0;
gdjs.IncioCode.GDTXTObjects1.length = 0;
gdjs.IncioCode.GDTXTObjects2.length = 0;
gdjs.IncioCode.GDTXTObjects3.length = 0;
gdjs.IncioCode.GDPinObjects1.length = 0;
gdjs.IncioCode.GDPinObjects2.length = 0;
gdjs.IncioCode.GDPinObjects3.length = 0;
gdjs.IncioCode.GDPessoa_95951Objects1.length = 0;
gdjs.IncioCode.GDPessoa_95951Objects2.length = 0;
gdjs.IncioCode.GDPessoa_95951Objects3.length = 0;
gdjs.IncioCode.GDPessoa_95952Objects1.length = 0;
gdjs.IncioCode.GDPessoa_95952Objects2.length = 0;
gdjs.IncioCode.GDPessoa_95952Objects3.length = 0;
gdjs.IncioCode.GDNewTextInputObjects1.length = 0;
gdjs.IncioCode.GDNewTextInputObjects2.length = 0;
gdjs.IncioCode.GDNewTextInputObjects3.length = 0;
gdjs.IncioCode.GDFolder2Objects1.length = 0;
gdjs.IncioCode.GDFolder2Objects2.length = 0;
gdjs.IncioCode.GDFolder2Objects3.length = 0;

gdjs.IncioCode.eventsList1(runtimeScene);
gdjs.IncioCode.GDBaixaObjects1.length = 0;
gdjs.IncioCode.GDBaixaObjects2.length = 0;
gdjs.IncioCode.GDBaixaObjects3.length = 0;
gdjs.IncioCode.GDMediaObjects1.length = 0;
gdjs.IncioCode.GDMediaObjects2.length = 0;
gdjs.IncioCode.GDMediaObjects3.length = 0;
gdjs.IncioCode.GDAltaObjects1.length = 0;
gdjs.IncioCode.GDAltaObjects2.length = 0;
gdjs.IncioCode.GDAltaObjects3.length = 0;
gdjs.IncioCode.GDNewSpriteObjects1.length = 0;
gdjs.IncioCode.GDNewSpriteObjects2.length = 0;
gdjs.IncioCode.GDNewSpriteObjects3.length = 0;
gdjs.IncioCode.GDFolderObjects1.length = 0;
gdjs.IncioCode.GDFolderObjects2.length = 0;
gdjs.IncioCode.GDFolderObjects3.length = 0;
gdjs.IncioCode.GDTXTObjects1.length = 0;
gdjs.IncioCode.GDTXTObjects2.length = 0;
gdjs.IncioCode.GDTXTObjects3.length = 0;
gdjs.IncioCode.GDPinObjects1.length = 0;
gdjs.IncioCode.GDPinObjects2.length = 0;
gdjs.IncioCode.GDPinObjects3.length = 0;
gdjs.IncioCode.GDPessoa_95951Objects1.length = 0;
gdjs.IncioCode.GDPessoa_95951Objects2.length = 0;
gdjs.IncioCode.GDPessoa_95951Objects3.length = 0;
gdjs.IncioCode.GDPessoa_95952Objects1.length = 0;
gdjs.IncioCode.GDPessoa_95952Objects2.length = 0;
gdjs.IncioCode.GDPessoa_95952Objects3.length = 0;
gdjs.IncioCode.GDNewTextInputObjects1.length = 0;
gdjs.IncioCode.GDNewTextInputObjects2.length = 0;
gdjs.IncioCode.GDNewTextInputObjects3.length = 0;
gdjs.IncioCode.GDFolder2Objects1.length = 0;
gdjs.IncioCode.GDFolder2Objects2.length = 0;
gdjs.IncioCode.GDFolder2Objects3.length = 0;


return;

}

gdjs['IncioCode'] = gdjs.IncioCode;
