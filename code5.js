gdjs.achivementCode = {};
gdjs.achivementCode.localVariables = [];
gdjs.achivementCode.idToCallbackMap = new Map();
gdjs.achivementCode.GDboarderObjects1= [];
gdjs.achivementCode.GDboarderObjects2= [];
gdjs.achivementCode.GDTinyRedButtonObjects1= [];
gdjs.achivementCode.GDTinyRedButtonObjects2= [];
gdjs.achivementCode.GDexitObjects1= [];
gdjs.achivementCode.GDexitObjects2= [];
gdjs.achivementCode.GDpointsObjects1= [];
gdjs.achivementCode.GDpointsObjects2= [];
gdjs.achivementCode.GDoutObjects1= [];
gdjs.achivementCode.GDoutObjects2= [];
gdjs.achivementCode.GDNewTextObjects1= [];
gdjs.achivementCode.GDNewTextObjects2= [];
gdjs.achivementCode.GDpainel3Objects1= [];
gdjs.achivementCode.GDpainel3Objects2= [];


gdjs.achivementCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.achivementCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.achivementCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.achivementCode.GDexitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.achivementCode.GDexitObjects1[k] = gdjs.achivementCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.achivementCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() != "Nresgatado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.achivementCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.achivementCode.GDTinyRedButtonObjects1);
{for(var i = 0, len = gdjs.achivementCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDNewTextObjects1[i].getBehavior("Text").setText("Você ganou...?\nVocê fez o timer chegar a 0 e ganhar, mais acho que tenha que se esforçar mais\n10 points");
}
}
{for(var i = 0, len = gdjs.achivementCode.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDTinyRedButtonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("points"), gdjs.achivementCode.GDpointsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.achivementCode.GDpointsObjects1.length;i<l;++i) {
    if ( gdjs.achivementCode.GDpointsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.achivementCode.GDpointsObjects1[k] = gdjs.achivementCode.GDpointsObjects1[i];
        ++k;
    }
}
gdjs.achivementCode.GDpointsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() != "Nresgatado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.achivementCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.achivementCode.GDTinyRedButtonObjects1);
{for(var i = 0, len = gdjs.achivementCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDNewTextObjects1[i].getBehavior("Text").setText("Você ganhou agora!\nVocê fez o timer chegar a 0 e ganhar, e ainda fez a sua pontuação final chegar assima de 2.000! \n30 points");
}
}
{for(var i = 0, len = gdjs.achivementCode.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDTinyRedButtonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("out"), gdjs.achivementCode.GDoutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.achivementCode.GDoutObjects1.length;i<l;++i) {
    if ( gdjs.achivementCode.GDoutObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.achivementCode.GDoutObjects1[k] = gdjs.achivementCode.GDoutObjects1[i];
        ++k;
    }
}
gdjs.achivementCode.GDoutObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() != "Nresgatado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.achivementCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.achivementCode.GDTinyRedButtonObjects1);
{for(var i = 0, len = gdjs.achivementCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDNewTextObjects1[i].getBehavior("Text").setText("Escuridão\nBem você trabalhou demais que fez a luz acabar, agora não podera ver seu score nem trabalhar em certos empregos\n5 points");
}
}
{for(var i = 0, len = gdjs.achivementCode.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDTinyRedButtonObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("exit"), gdjs.achivementCode.GDexitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.achivementCode.GDexitObjects1.length;i<l;++i) {
    if ( gdjs.achivementCode.GDexitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.achivementCode.GDexitObjects1[k] = gdjs.achivementCode.GDexitObjects1[i];
        ++k;
    }
}
gdjs.achivementCode.GDexitObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Nresgatado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.achivementCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.achivementCode.GDTinyRedButtonObjects1);
{for(var i = 0, len = gdjs.achivementCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDNewTextObjects1[i].getBehavior("Text").setText("Você ganou...?\nVocê fez o timer chegar a 0 e ganhar, mais acho que tenha que se esforçar mais\n10 points");
}
}
{for(var i = 0, len = gdjs.achivementCode.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDTinyRedButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("points"), gdjs.achivementCode.GDpointsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.achivementCode.GDpointsObjects1.length;i<l;++i) {
    if ( gdjs.achivementCode.GDpointsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.achivementCode.GDpointsObjects1[k] = gdjs.achivementCode.GDpointsObjects1[i];
        ++k;
    }
}
gdjs.achivementCode.GDpointsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "Nresgatado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.achivementCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.achivementCode.GDTinyRedButtonObjects1);
{for(var i = 0, len = gdjs.achivementCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDNewTextObjects1[i].getBehavior("Text").setText("Você ganhou agora!\nVocê fez o timer chegar a 0 e ganhar, e ainda fez a sua pontuação final chegar assima de 2.000! \n30 points");
}
}
{for(var i = 0, len = gdjs.achivementCode.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDTinyRedButtonObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("out"), gdjs.achivementCode.GDoutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.achivementCode.GDoutObjects1.length;i<l;++i) {
    if ( gdjs.achivementCode.GDoutObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.achivementCode.GDoutObjects1[k] = gdjs.achivementCode.GDoutObjects1[i];
        ++k;
    }
}
gdjs.achivementCode.GDoutObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "Nresgatado");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.achivementCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("TinyRedButton"), gdjs.achivementCode.GDTinyRedButtonObjects1);
{for(var i = 0, len = gdjs.achivementCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDNewTextObjects1[i].getBehavior("Text").setText("Escuridão\nBem você trabalhou demais que fez a luz acabar, agora não podera ver seu score nem trabalhar em certos empregos\n5 points");
}
}
{for(var i = 0, len = gdjs.achivementCode.GDTinyRedButtonObjects1.length ;i < len;++i) {
    gdjs.achivementCode.GDTinyRedButtonObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EG_C1", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EG_C2", runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.VariablesContainer.badVariable);
}
{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "EG_C3", runtimeScene.getScene().getVariables().getFromIndex(2), gdjs.VariablesContainer.badVariable);
}
}

}


};

gdjs.achivementCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.achivementCode.GDboarderObjects1.length = 0;
gdjs.achivementCode.GDboarderObjects2.length = 0;
gdjs.achivementCode.GDTinyRedButtonObjects1.length = 0;
gdjs.achivementCode.GDTinyRedButtonObjects2.length = 0;
gdjs.achivementCode.GDexitObjects1.length = 0;
gdjs.achivementCode.GDexitObjects2.length = 0;
gdjs.achivementCode.GDpointsObjects1.length = 0;
gdjs.achivementCode.GDpointsObjects2.length = 0;
gdjs.achivementCode.GDoutObjects1.length = 0;
gdjs.achivementCode.GDoutObjects2.length = 0;
gdjs.achivementCode.GDNewTextObjects1.length = 0;
gdjs.achivementCode.GDNewTextObjects2.length = 0;
gdjs.achivementCode.GDpainel3Objects1.length = 0;
gdjs.achivementCode.GDpainel3Objects2.length = 0;

gdjs.achivementCode.eventsList0(runtimeScene);
gdjs.achivementCode.GDboarderObjects1.length = 0;
gdjs.achivementCode.GDboarderObjects2.length = 0;
gdjs.achivementCode.GDTinyRedButtonObjects1.length = 0;
gdjs.achivementCode.GDTinyRedButtonObjects2.length = 0;
gdjs.achivementCode.GDexitObjects1.length = 0;
gdjs.achivementCode.GDexitObjects2.length = 0;
gdjs.achivementCode.GDpointsObjects1.length = 0;
gdjs.achivementCode.GDpointsObjects2.length = 0;
gdjs.achivementCode.GDoutObjects1.length = 0;
gdjs.achivementCode.GDoutObjects2.length = 0;
gdjs.achivementCode.GDNewTextObjects1.length = 0;
gdjs.achivementCode.GDNewTextObjects2.length = 0;
gdjs.achivementCode.GDpainel3Objects1.length = 0;
gdjs.achivementCode.GDpainel3Objects2.length = 0;


return;

}

gdjs['achivementCode'] = gdjs.achivementCode;
