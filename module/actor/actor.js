// Get from https://foundryvtt.wiki/en/development/guides/SD-tutorial/SD06-Extending-the-Actor-class

/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
 export class SpireActor extends Actor {

    /**
     * Augment the basic actor data with additional dynamic data.
     */
    prepareData() {
      super.prepareData();
  
      const actorData = this.data;
      const data = actorData.data;
      const flags = actorData.flags;
      // Make separate methods for each Actor type (character, npc, etc.) to keep
      // things organized.
      if (actorData.type === 'player') this._prepareCharacterData(actorData);
    }
  
    /**
     * Prepare Character type specific data
     */
    _prepareCharacterData(actorData) {
        const data = actorData.data;
    
        // Make modifications to data here. For example:
        // Stress calculation
        var totalStress = 0;
        for (let [key, stressName] of Object.entries(data.Stress.Resistance)) {
          totalStress += stressName.CurrentStress;
        }
        data.Stress.TotalStress = totalStress;
    }
  
  }
