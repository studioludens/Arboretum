/**
 * Created by rulkens on 12/03/15.
 */
export interface IPlugin {
    init: Function;
    exports: Function;
    sceneExports: Function;
    update: Function;
}