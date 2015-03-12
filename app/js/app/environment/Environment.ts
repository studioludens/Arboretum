/**
 * Created by rulkens on 12/03/15.
 */
/// <reference path="EnvironmentFactor.ts" />

module Environment {
    export class Environment {
        constructor(private factors:Array<EnvironmentFactor>){
            this.factors.map(f => f);
        }
    }
}