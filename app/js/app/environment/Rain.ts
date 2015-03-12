/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />

module Environment {
    export class Rain implements IEnvironmentFactor {
        tick(){
            console.log('[Rain].tick');
        }
    }
}