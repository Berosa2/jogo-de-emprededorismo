gdjs.WINCode = {};
gdjs.WINCode.localVariables = [];
gdjs.WINCode.idToCallbackMap = new Map();
gdjs.WINCode.GDportalObjects1= [];
gdjs.WINCode.GDportalObjects2= [];
gdjs.WINCode.GDNewSpriteObjects1= [];
gdjs.WINCode.GDNewSpriteObjects2= [];
gdjs.WINCode.GDResultadosObjects1= [];
gdjs.WINCode.GDResultadosObjects2= [];
gdjs.WINCode.GDpainel3Objects1= [];
gdjs.WINCode.GDpainel3Objects2= [];


gdjs.WINCode.asyncCallback16743676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.WINCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "tela");
}
gdjs.WINCode.localVariables.length = 0;
}
gdjs.WINCode.idToCallbackMap.set(16743676, gdjs.WINCode.asyncCallback16743676);
gdjs.WINCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.WINCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.WINCode.asyncCallback16743676(runtimeScene, asyncObjectsList)), 16743676, asyncObjectsList);
}
}

}


};gdjs.WINCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Resultados"), gdjs.WINCode.GDResultadosObjects1);
{for(var i = 0, len = gdjs.WINCode.GDResultadosObjects1.length ;i < len;++i) {
    gdjs.WINCode.GDResultadosObjects1[i].getBehavior("Text").setText("Reais: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pontos").getAsString() + "\nQi: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("QI").getAsString() + "\nPersonagem: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Tipo").getAsString() + "\nEstudou: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Estudou").getAsString() + "\nEmpreendedorismo: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Empredeodrismo").getAsString() + "\nAcertos: \n\nTotal: " + gdjs.evtTools.common.toString((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pontos").getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("QI").getAsNumber() / 2) + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Tipo").getAsNumber() * 2) + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Empredeodrismo").getAsNumber() * 2)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "370802c5-e0ea-400d-bb30-eda514037d4f", (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pontos").getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("QI").getAsNumber() / 2) + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Tipo").getAsNumber() * 2) + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Empredeodrismo").getAsNumber() * 2), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("nome").getAsString());
}

{ //Subevents
gdjs.WINCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "x");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "370802c5-e0ea-400d-bb30-eda514037d4f", true);
}
}

}


};

gdjs.WINCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WINCode.GDportalObjects1.length = 0;
gdjs.WINCode.GDportalObjects2.length = 0;
gdjs.WINCode.GDNewSpriteObjects1.length = 0;
gdjs.WINCode.GDNewSpriteObjects2.length = 0;
gdjs.WINCode.GDResultadosObjects1.length = 0;
gdjs.WINCode.GDResultadosObjects2.length = 0;
gdjs.WINCode.GDpainel3Objects1.length = 0;
gdjs.WINCode.GDpainel3Objects2.length = 0;

gdjs.WINCode.eventsList1(runtimeScene);
gdjs.WINCode.GDportalObjects1.length = 0;
gdjs.WINCode.GDportalObjects2.length = 0;
gdjs.WINCode.GDNewSpriteObjects1.length = 0;
gdjs.WINCode.GDNewSpriteObjects2.length = 0;
gdjs.WINCode.GDResultadosObjects1.length = 0;
gdjs.WINCode.GDResultadosObjects2.length = 0;
gdjs.WINCode.GDpainel3Objects1.length = 0;
gdjs.WINCode.GDpainel3Objects2.length = 0;


return;

}

gdjs['WINCode'] = gdjs.WINCode;
