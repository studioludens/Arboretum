// describe an environment factor
module Environment {
    export interface IEnvironmentFactor {
        init?: Function;
        tick?: Function;
    }

    export class EnvironmentFactor implements IEnvironmentFactor {
        init(){
            console.log('[EnvironmentFactor init]');
        }

        tick(){
            console.log('[EnvironmentFactor tick]');
        }
    }
}
