import { AbsoluteMotor } from "./absolutemotor.js";

import { IDeviceInterface } from "../interfaces.js";

import * as Consts from "../consts.js";

/**
 * @class TechnicMediumAngularMotor
 * @extends AbsoluteMotor
 */
export class TechnicMediumAngularMotor extends AbsoluteMotor {

    constructor (hub: IDeviceInterface, portId: number, modeMap: {[event: string]: number} = {}, type: Consts.DeviceType = Consts.DeviceType.TECHNIC_MEDIUM_ANGULAR_MOTOR) {
        super(hub, portId, {}, type);
    }

}
