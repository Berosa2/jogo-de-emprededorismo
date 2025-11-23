gdjs.animationCode = {};
gdjs.animationCode.localVariables = [];
gdjs.animationCode.idToCallbackMap = new Map();
gdjs.animationCode.GDintroObjects1= [];
gdjs.animationCode.GDintroObjects2= [];
gdjs.animationCode.GDintroObjects3= [];
gdjs.animationCode.GDbuttonObjects1= [];
gdjs.animationCode.GDbuttonObjects2= [];
gdjs.animationCode.GDbuttonObjects3= [];
gdjs.animationCode.GDtextObjects1= [];
gdjs.animationCode.GDtextObjects2= [];
gdjs.animationCode.GDtextObjects3= [];
gdjs.animationCode.GDitemsObjects1= [];
gdjs.animationCode.GDitemsObjects2= [];
gdjs.animationCode.GDitemsObjects3= [];
gdjs.animationCode.GDitems2Objects1= [];
gdjs.animationCode.GDitems2Objects2= [];
gdjs.animationCode.GDitems2Objects3= [];
gdjs.animationCode.GDlegendaObjects1= [];
gdjs.animationCode.GDlegendaObjects2= [];
gdjs.animationCode.GDlegendaObjects3= [];
gdjs.animationCode.GDpassObjects1= [];
gdjs.animationCode.GDpassObjects2= [];
gdjs.animationCode.GDpassObjects3= [];
gdjs.animationCode.GDlegenda2Objects1= [];
gdjs.animationCode.GDlegenda2Objects2= [];
gdjs.animationCode.GDlegenda2Objects3= [];
gdjs.animationCode.GDpainel3Objects1= [];
gdjs.animationCode.GDpainel3Objects2= [];
gdjs.animationCode.GDpainel3Objects3= [];


gdjs.animationCode.mapOfGDgdjs_9546animationCode_9546GDitemsObjects1Objects = Hashtable.newFrom({"items": gdjs.animationCode.GDitemsObjects1});
gdjs.animationCode.mapOfGDgdjs_9546animationCode_9546GDitems2Objects1Objects = Hashtable.newFrom({"items2": gdjs.animationCode.GDitems2Objects1});
gdjs.animationCode.asyncCallback16792092 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.animationCode.localVariables);
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "tela");
}
gdjs.animationCode.localVariables.length = 0;
}
gdjs.animationCode.idToCallbackMap.set(16792092, gdjs.animationCode.asyncCallback16792092);
gdjs.animationCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.animationCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(10), (runtimeScene) => (gdjs.animationCode.asyncCallback16792092(runtimeScene, asyncObjectsList)), 16792092, asyncObjectsList);
}
}

}


};gdjs.animationCode.asyncCallback16790948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.animationCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("legenda"), gdjs.animationCode.GDlegendaObjects2);
{for(var i = 0, len = gdjs.animationCode.GDlegendaObjects2.length ;i < len;++i) {
    gdjs.animationCode.GDlegendaObjects2[i].getBehavior("Text").setText("Reais: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pontos").getAsString() + "\nQi: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("QI").getAsString() + "\nPersonagem: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Tipo").getAsString() + "\nEstudou: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Estudou").getAsString() + "\nEmpreendedorismo: " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Empredeodrismo").getAsString() + "\nAcertos: \n\nTotal: " + gdjs.evtTools.common.toString((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pontos").getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("QI").getAsNumber() / 2) + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Tipo").getAsNumber() * 2) + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Empredeodrismo").getAsNumber() * 2)));
}
}
{for(var i = 0, len = gdjs.animationCode.GDlegendaObjects2.length ;i < len;++i) {
    gdjs.animationCode.GDlegendaObjects2[i].hide(false);
}
}

{ //Subevents
gdjs.animationCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.animationCode.localVariables.length = 0;
}
gdjs.animationCode.idToCallbackMap.set(16790948, gdjs.animationCode.asyncCallback16790948);
gdjs.animationCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.animationCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(35), (runtimeScene) => (gdjs.animationCode.asyncCallback16790948(runtimeScene, asyncObjectsList)), 16790948, asyncObjectsList);
}
}

}


};gdjs.animationCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.animationCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.animationCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.animationCode.GDbuttonObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.animationCode.GDbuttonObjects1[k] = gdjs.animationCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.animationCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 1);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Schoolhouse Trouble_ - Baldi's Basics Classic Remastered Original Soundtrack [PaoFEp9kP68].mp3", false, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + 5, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.animationCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("intro"), gdjs.animationCode.GDintroObjects1);
gdjs.copyArray(runtimeScene.getObjects("items"), gdjs.animationCode.GDitemsObjects1);
gdjs.copyArray(runtimeScene.getObjects("text"), gdjs.animationCode.GDtextObjects1);
{for(var i = 0, len = gdjs.animationCode.GDitemsObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDitemsObjects1[i].rotate(8, runtimeScene);
}
}
{for(var i = 0, len = gdjs.animationCode.GDitemsObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDitemsObjects1[i].setY(gdjs.animationCode.GDitemsObjects1[i].getY() + (gdjs.randomInRange(1, 10)));
}
}
{for(var i = 0, len = gdjs.animationCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDbuttonObjects1[i].setY(gdjs.animationCode.GDbuttonObjects1[i].getY() + (20));
}
}
{for(var i = 0, len = gdjs.animationCode.GDtextObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDtextObjects1[i].setY(gdjs.animationCode.GDtextObjects1[i].getY() + (20));
}
}
{for(var i = 0, len = gdjs.animationCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDbuttonObjects1[i].rotate(80, runtimeScene);
}
}
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.sound.getGlobalVolume(runtimeScene) + (0.3));
}
{for(var i = 0, len = gdjs.animationCode.GDintroObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDintroObjects1[i].getBehavior("Scale").setScale(gdjs.animationCode.GDintroObjects1[i].getBehavior("Scale").getScale() + (0.02));
}
}
{for(var i = 0, len = gdjs.animationCode.GDintroObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDintroObjects1[i].setPosition(gdjs.animationCode.GDintroObjects1[i].getX() -(3),gdjs.animationCode.GDintroObjects1[i].getY() -(3));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("items2"), gdjs.animationCode.GDitems2Objects1);
{for(var i = 0, len = gdjs.animationCode.GDitems2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDitems2Objects1[i].rotate(80, runtimeScene);
}
}
{for(var i = 0, len = gdjs.animationCode.GDitems2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDitems2Objects1[i].setY(gdjs.animationCode.GDitems2Objects1[i].getY() - (gdjs.randomInRange(1, 10)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("items"), gdjs.animationCode.GDitemsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.animationCode.GDitemsObjects1.length;i<l;++i) {
    if ( gdjs.animationCode.GDitemsObjects1[i].getY() > 800 ) {
        isConditionTrue_0 = true;
        gdjs.animationCode.GDitemsObjects1[k] = gdjs.animationCode.GDitemsObjects1[i];
        ++k;
    }
}
gdjs.animationCode.GDitemsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.animationCode.GDitemsObjects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.animationCode.mapOfGDgdjs_9546animationCode_9546GDitemsObjects1Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), gdjs.randomInRange(-(114), -(239)), "fundo");
}
{for(var i = 0, len = gdjs.animationCode.GDitemsObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDitemsObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 29));
}
}
{for(var i = 0, len = gdjs.animationCode.GDitemsObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDitemsObjects1[i].setPosition(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)),gdjs.randomInRange(-(114), -(239)));
}
}
{for(var i = 0, len = gdjs.animationCode.GDitemsObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDitemsObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 29));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("items2"), gdjs.animationCode.GDitems2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.animationCode.GDitems2Objects1.length;i<l;++i) {
    if ( gdjs.animationCode.GDitems2Objects1[i].getY() < -(99) ) {
        isConditionTrue_0 = true;
        gdjs.animationCode.GDitems2Objects1[k] = gdjs.animationCode.GDitems2Objects1[i];
        ++k;
    }
}
gdjs.animationCode.GDitems2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.animationCode.GDitems2Objects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.animationCode.mapOfGDgdjs_9546animationCode_9546GDitems2Objects1Objects, gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)), gdjs.randomInRange(800, 900), "fundo");
}
{for(var i = 0, len = gdjs.animationCode.GDitems2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDitems2Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 29));
}
}
{for(var i = 0, len = gdjs.animationCode.GDitems2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDitems2Objects1[i].setPosition(gdjs.random(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene)),gdjs.randomInRange(800, 900));
}
}
{for(var i = 0, len = gdjs.animationCode.GDitems2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDitems2Objects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(1, 29));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("legenda"), gdjs.animationCode.GDlegendaObjects1);
gdjs.copyArray(runtimeScene.getObjects("legenda2"), gdjs.animationCode.GDlegenda2Objects1);
gdjs.copyArray(runtimeScene.getObjects("painel3"), gdjs.animationCode.GDpainel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("pass"), gdjs.animationCode.GDpassObjects1);
{gdjs.evtTools.sound.preloadMusic(runtimeScene, "Schoolhouse Trouble_ - Baldi's Basics Classic Remastered Original Soundtrack [PaoFEp9kP68].mp3");
}
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "370802c5-e0ea-400d-bb30-eda514037d4f", (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Pontos").getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("QI").getAsNumber() / 2) + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Tipo").getAsNumber() * 2) + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Empredeodrismo").getAsNumber() * 2), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("nome").getAsString());
}
{for(var i = 0, len = gdjs.animationCode.GDlegenda2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDlegenda2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.animationCode.GDlegendaObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDlegendaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.animationCode.GDpainel3Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDpainel3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.animationCode.GDpassObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDpassObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.animationCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("items2"), gdjs.animationCode.GDitems2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.animationCode.GDitems2Objects1.length;i<l;++i) {
    if ( gdjs.animationCode.GDitems2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.animationCode.GDitems2Objects1[k] = gdjs.animationCode.GDitems2Objects1[i];
        ++k;
    }
}
gdjs.animationCode.GDitems2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.animationCode.GDitems2Objects1.length;i<l;++i) {
    if ( gdjs.animationCode.GDitems2Objects1[i].getBehavior("Animation").getAnimationName() == "BusPassIcon_Small" ) {
        isConditionTrue_0 = true;
        gdjs.animationCode.GDitems2Objects1[k] = gdjs.animationCode.GDitems2Objects1[i];
        ++k;
    }
}
gdjs.animationCode.GDitems2Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.animationCode.GDitems2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("legenda2"), gdjs.animationCode.GDlegenda2Objects1);
gdjs.copyArray(runtimeScene.getObjects("painel3"), gdjs.animationCode.GDpainel3Objects1);
gdjs.copyArray(runtimeScene.getObjects("pass"), gdjs.animationCode.GDpassObjects1);
{for(var i = 0, len = gdjs.animationCode.GDitems2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDitems2Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.animationCode.GDpainel3Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDpainel3Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.animationCode.GDpassObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDpassObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.animationCode.GDlegenda2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDlegenda2Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("items"), gdjs.animationCode.GDitemsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.animationCode.GDitemsObjects1.length;i<l;++i) {
    if ( gdjs.animationCode.GDitemsObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.animationCode.GDitemsObjects1[k] = gdjs.animationCode.GDitemsObjects1[i];
        ++k;
    }
}
gdjs.animationCode.GDitemsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.animationCode.GDitemsObjects1.length;i<l;++i) {
    if ( gdjs.animationCode.GDitemsObjects1[i].getBehavior("Animation").getAnimationName() == "BusPassIcon_Small" ) {
        isConditionTrue_0 = true;
        gdjs.animationCode.GDitemsObjects1[k] = gdjs.animationCode.GDitemsObjects1[i];
        ++k;
    }
}
gdjs.animationCode.GDitemsObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.animationCode.GDitemsObjects1 */
gdjs.copyArray(runtimeScene.getObjects("legenda2"), gdjs.animationCode.GDlegenda2Objects1);
gdjs.copyArray(runtimeScene.getObjects("painel3"), gdjs.animationCode.GDpainel3Objects1);
{for(var i = 0, len = gdjs.animationCode.GDitemsObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDitemsObjects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{for(var i = 0, len = gdjs.animationCode.GDlegenda2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDlegenda2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.animationCode.GDpainel3Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDpainel3Objects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("items"), gdjs.animationCode.GDitemsObjects1);
gdjs.copyArray(runtimeScene.getObjects("items2"), gdjs.animationCode.GDitems2Objects1);
gdjs.copyArray(runtimeScene.getObjects("legenda2"), gdjs.animationCode.GDlegenda2Objects1);
{for(var i = 0, len = gdjs.animationCode.GDlegenda2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDlegenda2Objects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.animationCode.GDitems2Objects1.length ;i < len;++i) {
    gdjs.animationCode.GDitems2Objects1[i].getBehavior("Resizable").setSize(64, 64);
}
}
{for(var i = 0, len = gdjs.animationCode.GDitemsObjects1.length ;i < len;++i) {
    gdjs.animationCode.GDitemsObjects1[i].getBehavior("Resizable").setSize(64, 64);
}
}
}

}


};

gdjs.animationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.animationCode.GDintroObjects1.length = 0;
gdjs.animationCode.GDintroObjects2.length = 0;
gdjs.animationCode.GDintroObjects3.length = 0;
gdjs.animationCode.GDbuttonObjects1.length = 0;
gdjs.animationCode.GDbuttonObjects2.length = 0;
gdjs.animationCode.GDbuttonObjects3.length = 0;
gdjs.animationCode.GDtextObjects1.length = 0;
gdjs.animationCode.GDtextObjects2.length = 0;
gdjs.animationCode.GDtextObjects3.length = 0;
gdjs.animationCode.GDitemsObjects1.length = 0;
gdjs.animationCode.GDitemsObjects2.length = 0;
gdjs.animationCode.GDitemsObjects3.length = 0;
gdjs.animationCode.GDitems2Objects1.length = 0;
gdjs.animationCode.GDitems2Objects2.length = 0;
gdjs.animationCode.GDitems2Objects3.length = 0;
gdjs.animationCode.GDlegendaObjects1.length = 0;
gdjs.animationCode.GDlegendaObjects2.length = 0;
gdjs.animationCode.GDlegendaObjects3.length = 0;
gdjs.animationCode.GDpassObjects1.length = 0;
gdjs.animationCode.GDpassObjects2.length = 0;
gdjs.animationCode.GDpassObjects3.length = 0;
gdjs.animationCode.GDlegenda2Objects1.length = 0;
gdjs.animationCode.GDlegenda2Objects2.length = 0;
gdjs.animationCode.GDlegenda2Objects3.length = 0;
gdjs.animationCode.GDpainel3Objects1.length = 0;
gdjs.animationCode.GDpainel3Objects2.length = 0;
gdjs.animationCode.GDpainel3Objects3.length = 0;

gdjs.animationCode.eventsList2(runtimeScene);
gdjs.animationCode.GDintroObjects1.length = 0;
gdjs.animationCode.GDintroObjects2.length = 0;
gdjs.animationCode.GDintroObjects3.length = 0;
gdjs.animationCode.GDbuttonObjects1.length = 0;
gdjs.animationCode.GDbuttonObjects2.length = 0;
gdjs.animationCode.GDbuttonObjects3.length = 0;
gdjs.animationCode.GDtextObjects1.length = 0;
gdjs.animationCode.GDtextObjects2.length = 0;
gdjs.animationCode.GDtextObjects3.length = 0;
gdjs.animationCode.GDitemsObjects1.length = 0;
gdjs.animationCode.GDitemsObjects2.length = 0;
gdjs.animationCode.GDitemsObjects3.length = 0;
gdjs.animationCode.GDitems2Objects1.length = 0;
gdjs.animationCode.GDitems2Objects2.length = 0;
gdjs.animationCode.GDitems2Objects3.length = 0;
gdjs.animationCode.GDlegendaObjects1.length = 0;
gdjs.animationCode.GDlegendaObjects2.length = 0;
gdjs.animationCode.GDlegendaObjects3.length = 0;
gdjs.animationCode.GDpassObjects1.length = 0;
gdjs.animationCode.GDpassObjects2.length = 0;
gdjs.animationCode.GDpassObjects3.length = 0;
gdjs.animationCode.GDlegenda2Objects1.length = 0;
gdjs.animationCode.GDlegenda2Objects2.length = 0;
gdjs.animationCode.GDlegenda2Objects3.length = 0;
gdjs.animationCode.GDpainel3Objects1.length = 0;
gdjs.animationCode.GDpainel3Objects2.length = 0;
gdjs.animationCode.GDpainel3Objects3.length = 0;


return;

}

gdjs['animationCode'] = gdjs.animationCode;
