// Started with https://foundryvtt.wiki/en/development/guides/SD-tutorial/SD05-Creating-your-main-JS-file

// Import Modules
import { SpireActor } from "./module/actor/actor.js";
import { SpireActorSheet } from "./module/actor/actor-sheet.js";
// TODO uncomment when item are done
//import { SpireItem } from "./module/item/item.js";
//import { SpireItemSheet } from "./module/item/item-sheet.js";

Hooks.once('init', async function() {

    // Place our classes in their own namespace for later reference.
    game.SpireFoundry = {
      SpireActor
      // TODO uncomment when item are done
      //SpireItem
    };
  
    // Define custom Entity classes. This will override the default Actor and
    // Item classes to instead use our extended versions.
    CONFIG.Actor.entityClass = SpireActor;
    // TODO uncomment when item are done
    //CONFIG.Item.entityClass = SpireItem;
  
    // Register sheet application classes. This will stop using the core sheets and
    // instead use our customized versions.
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("SpireFoundry", SpireActorSheet, { makeDefault: true });
    // TODO uncomment when item are done
    //Items.unregisterSheet("core", ItemSheet);
    //Items.registerSheet("SpireFoundry", SpireItemSheet, { makeDefault: true });
  
    // Handlebars helpers
    Handlebars.registerHelper('concat', function() {
      var outStr = '';
      for (var arg in arguments) {
        if (typeof arguments[arg] != 'object') {
          outStr += arguments[arg];
        }
      }
      return outStr;
    });
  
    Handlebars.registerHelper('toLowerCase', function(str) {
      return str.toLowerCase();
    });

    Handlebars.registerHelper('toUpperCase', function(str) {
        return str.toUpperCase();
      });
  });