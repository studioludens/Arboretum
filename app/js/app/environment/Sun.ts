/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />

module Environment {
    export class Sun implements IEnvironmentFactor {
        tick(){
            console.log('[Sun].tick');
        }
    }
}