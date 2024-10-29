export var HubType;
(function (HubType) {
    HubType[HubType["UNKNOWN"] = 0] = "UNKNOWN";
    HubType[HubType["WEDO2_SMART_HUB"] = 1] = "WEDO2_SMART_HUB";
    HubType[HubType["MOVE_HUB"] = 2] = "MOVE_HUB";
    HubType[HubType["HUB"] = 3] = "HUB";
    HubType[HubType["REMOTE_CONTROL"] = 4] = "REMOTE_CONTROL";
    HubType[HubType["DUPLO_TRAIN_BASE"] = 5] = "DUPLO_TRAIN_BASE";
    HubType[HubType["TECHNIC_MEDIUM_HUB"] = 6] = "TECHNIC_MEDIUM_HUB";
    HubType[HubType["MARIO"] = 7] = "MARIO";
    HubType[HubType["TECHNIC_SMALL_HUB"] = 8] = "TECHNIC_SMALL_HUB";
})(HubType || (HubType = {}));
export const HubTypeNames = HubType;
export var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["UNKNOWN"] = 0] = "UNKNOWN";
    DeviceType[DeviceType["SIMPLE_MEDIUM_LINEAR_MOTOR"] = 1] = "SIMPLE_MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["TRAIN_MOTOR"] = 2] = "TRAIN_MOTOR";
    DeviceType[DeviceType["LIGHT"] = 8] = "LIGHT";
    DeviceType[DeviceType["VOLTAGE_SENSOR"] = 20] = "VOLTAGE_SENSOR";
    DeviceType[DeviceType["CURRENT_SENSOR"] = 21] = "CURRENT_SENSOR";
    DeviceType[DeviceType["PIEZO_BUZZER"] = 22] = "PIEZO_BUZZER";
    DeviceType[DeviceType["HUB_LED"] = 23] = "HUB_LED";
    DeviceType[DeviceType["TILT_SENSOR"] = 34] = "TILT_SENSOR";
    DeviceType[DeviceType["MOTION_SENSOR"] = 35] = "MOTION_SENSOR";
    DeviceType[DeviceType["COLOR_DISTANCE_SENSOR"] = 37] = "COLOR_DISTANCE_SENSOR";
    DeviceType[DeviceType["MEDIUM_LINEAR_MOTOR"] = 38] = "MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["MOVE_HUB_MEDIUM_LINEAR_MOTOR"] = 39] = "MOVE_HUB_MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["MOVE_HUB_TILT_SENSOR"] = 40] = "MOVE_HUB_TILT_SENSOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_MOTOR"] = 41] = "DUPLO_TRAIN_BASE_MOTOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_SPEAKER"] = 42] = "DUPLO_TRAIN_BASE_SPEAKER";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_COLOR_SENSOR"] = 43] = "DUPLO_TRAIN_BASE_COLOR_SENSOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_SPEEDOMETER"] = 44] = "DUPLO_TRAIN_BASE_SPEEDOMETER";
    DeviceType[DeviceType["TECHNIC_LARGE_LINEAR_MOTOR"] = 46] = "TECHNIC_LARGE_LINEAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_XLARGE_LINEAR_MOTOR"] = 47] = "TECHNIC_XLARGE_LINEAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_ANGULAR_MOTOR"] = 48] = "TECHNIC_MEDIUM_ANGULAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_LARGE_ANGULAR_MOTOR"] = 49] = "TECHNIC_LARGE_ANGULAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_GEST_SENSOR"] = 54] = "TECHNIC_MEDIUM_HUB_GEST_SENSOR";
    DeviceType[DeviceType["REMOTE_CONTROL_BUTTON"] = 55] = "REMOTE_CONTROL_BUTTON";
    DeviceType[DeviceType["REMOTE_CONTROL_RSSI"] = 56] = "REMOTE_CONTROL_RSSI";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_ACCELEROMETER"] = 57] = "TECHNIC_MEDIUM_HUB_ACCELEROMETER";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_GYRO_SENSOR"] = 58] = "TECHNIC_MEDIUM_HUB_GYRO_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_TILT_SENSOR"] = 59] = "TECHNIC_MEDIUM_HUB_TILT_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_TEMPERATURE_SENSOR"] = 60] = "TECHNIC_MEDIUM_HUB_TEMPERATURE_SENSOR";
    DeviceType[DeviceType["TECHNIC_COLOR_SENSOR"] = 61] = "TECHNIC_COLOR_SENSOR";
    DeviceType[DeviceType["TECHNIC_DISTANCE_SENSOR"] = 62] = "TECHNIC_DISTANCE_SENSOR";
    DeviceType[DeviceType["TECHNIC_FORCE_SENSOR"] = 63] = "TECHNIC_FORCE_SENSOR";
    DeviceType[DeviceType["TECHNIC_3X3_COLOR_LIGHT_MATRIX"] = 64] = "TECHNIC_3X3_COLOR_LIGHT_MATRIX";
    DeviceType[DeviceType["TECHNIC_SMALL_ANGULAR_MOTOR"] = 65] = "TECHNIC_SMALL_ANGULAR_MOTOR";
    DeviceType[DeviceType["MARIO_ACCELEROMETER"] = 71] = "MARIO_ACCELEROMETER";
    DeviceType[DeviceType["MARIO_BARCODE_SENSOR"] = 73] = "MARIO_BARCODE_SENSOR";
    DeviceType[DeviceType["MARIO_PANTS_SENSOR"] = 74] = "MARIO_PANTS_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_ANGULAR_MOTOR_GREY"] = 75] = "TECHNIC_MEDIUM_ANGULAR_MOTOR_GREY";
    DeviceType[DeviceType["TECHNIC_LARGE_ANGULAR_MOTOR_GREY"] = 76] = "TECHNIC_LARGE_ANGULAR_MOTOR_GREY";
})(DeviceType || (DeviceType = {}));
export const DeviceTypeNames = DeviceType;
export var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["PINK"] = 1] = "PINK";
    Color[Color["PURPLE"] = 2] = "PURPLE";
    Color[Color["BLUE"] = 3] = "BLUE";
    Color[Color["LIGHT_BLUE"] = 4] = "LIGHT_BLUE";
    Color[Color["CYAN"] = 5] = "CYAN";
    Color[Color["GREEN"] = 6] = "GREEN";
    Color[Color["YELLOW"] = 7] = "YELLOW";
    Color[Color["ORANGE"] = 8] = "ORANGE";
    Color[Color["RED"] = 9] = "RED";
    Color[Color["WHITE"] = 10] = "WHITE";
    Color[Color["NONE"] = 255] = "NONE";
})(Color || (Color = {}));
export const ColorNames = Color;
export var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["PRESSED"] = 2] = "PRESSED";
    ButtonState[ButtonState["RELEASED"] = 0] = "RELEASED";
    ButtonState[ButtonState["UP"] = 1] = "UP";
    ButtonState[ButtonState["DOWN"] = 255] = "DOWN";
    ButtonState[ButtonState["STOP"] = 127] = "STOP";
})(ButtonState || (ButtonState = {}));
export var BrakingStyle;
(function (BrakingStyle) {
    BrakingStyle[BrakingStyle["FLOAT"] = 0] = "FLOAT";
    BrakingStyle[BrakingStyle["HOLD"] = 126] = "HOLD";
    BrakingStyle[BrakingStyle["BRAKE"] = 127] = "BRAKE";
})(BrakingStyle || (BrakingStyle = {}));
export var DuploTrainBaseSound;
(function (DuploTrainBaseSound) {
    DuploTrainBaseSound[DuploTrainBaseSound["BRAKE"] = 3] = "BRAKE";
    DuploTrainBaseSound[DuploTrainBaseSound["STATION_DEPARTURE"] = 5] = "STATION_DEPARTURE";
    DuploTrainBaseSound[DuploTrainBaseSound["WATER_REFILL"] = 7] = "WATER_REFILL";
    DuploTrainBaseSound[DuploTrainBaseSound["HORN"] = 9] = "HORN";
    DuploTrainBaseSound[DuploTrainBaseSound["STEAM"] = 10] = "STEAM";
})(DuploTrainBaseSound || (DuploTrainBaseSound = {}));
export var BLEManufacturerData;
(function (BLEManufacturerData) {
    BLEManufacturerData[BLEManufacturerData["DUPLO_TRAIN_BASE_ID"] = 32] = "DUPLO_TRAIN_BASE_ID";
    BLEManufacturerData[BLEManufacturerData["MOVE_HUB_ID"] = 64] = "MOVE_HUB_ID";
    BLEManufacturerData[BLEManufacturerData["HUB_ID"] = 65] = "HUB_ID";
    BLEManufacturerData[BLEManufacturerData["REMOTE_CONTROL_ID"] = 66] = "REMOTE_CONTROL_ID";
    BLEManufacturerData[BLEManufacturerData["MARIO_ID"] = 67] = "MARIO_ID";
    BLEManufacturerData[BLEManufacturerData["TECHNIC_MEDIUM_HUB_ID"] = 128] = "TECHNIC_MEDIUM_HUB_ID";
    BLEManufacturerData[BLEManufacturerData["TECHNIC_SMALL_HUB_ID"] = 131] = "TECHNIC_SMALL_HUB_ID";
})(BLEManufacturerData || (BLEManufacturerData = {}));
export var BLEService;
(function (BLEService) {
    BLEService["WEDO2_SMART_HUB"] = "00001523-1212-efde-1523-785feabcd123";
    BLEService["WEDO2_SMART_HUB_2"] = "00004f0e-1212-efde-1523-785feabcd123";
    BLEService["WEDO2_SMART_HUB_3"] = "2a19";
    BLEService["WEDO2_SMART_HUB_4"] = "180f";
    BLEService["WEDO2_SMART_HUB_5"] = "180a";
    BLEService["LPF2_HUB"] = "00001623-1212-efde-1623-785feabcd123";
})(BLEService || (BLEService = {}));
export var BLECharacteristic;
(function (BLECharacteristic) {
    BLECharacteristic["WEDO2_BATTERY"] = "2a19";
    BLECharacteristic["WEDO2_FIRMWARE_REVISION"] = "2a26";
    BLECharacteristic["WEDO2_BUTTON"] = "00001526-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_PORT_TYPE"] = "00001527-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_LOW_VOLTAGE_ALERT"] = "00001528-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_HIGH_CURRENT_ALERT"] = "00001529-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_LOW_SIGNAL_ALERT"] = "0000152a-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_DISCONNECT"] = "0000152b-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_SENSOR_VALUE"] = "00001560-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_VALUE_FORMAT"] = "00001561-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_PORT_TYPE_WRITE"] = "00001563-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_MOTOR_VALUE_WRITE"] = "00001565-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_NAME_ID"] = "00001524-1212-efde-1523-785feabcd123";
    BLECharacteristic["LPF2_ALL"] = "00001624-1212-efde-1623-785feabcd123";
})(BLECharacteristic || (BLECharacteristic = {}));
export var MessageType;
(function (MessageType) {
    MessageType[MessageType["HUB_PROPERTIES"] = 1] = "HUB_PROPERTIES";
    MessageType[MessageType["HUB_ACTIONS"] = 2] = "HUB_ACTIONS";
    MessageType[MessageType["HUB_ALERTS"] = 3] = "HUB_ALERTS";
    MessageType[MessageType["HUB_ATTACHED_IO"] = 4] = "HUB_ATTACHED_IO";
    MessageType[MessageType["GENERIC_ERROR_MESSAGES"] = 5] = "GENERIC_ERROR_MESSAGES";
    MessageType[MessageType["HW_NETWORK_COMMANDS"] = 8] = "HW_NETWORK_COMMANDS";
    MessageType[MessageType["FW_UPDATE_GO_INTO_BOOT_MODE"] = 16] = "FW_UPDATE_GO_INTO_BOOT_MODE";
    MessageType[MessageType["FW_UPDATE_LOCK_MEMORY"] = 17] = "FW_UPDATE_LOCK_MEMORY";
    MessageType[MessageType["FW_UPDATE_LOCK_STATUS_REQUEST"] = 18] = "FW_UPDATE_LOCK_STATUS_REQUEST";
    MessageType[MessageType["FW_LOCK_STATUS"] = 19] = "FW_LOCK_STATUS";
    MessageType[MessageType["PORT_INFORMATION_REQUEST"] = 33] = "PORT_INFORMATION_REQUEST";
    MessageType[MessageType["PORT_MODE_INFORMATION_REQUEST"] = 34] = "PORT_MODE_INFORMATION_REQUEST";
    MessageType[MessageType["PORT_INPUT_FORMAT_SETUP_SINGLE"] = 65] = "PORT_INPUT_FORMAT_SETUP_SINGLE";
    MessageType[MessageType["PORT_INPUT_FORMAT_SETUP_COMBINEDMODE"] = 66] = "PORT_INPUT_FORMAT_SETUP_COMBINEDMODE";
    MessageType[MessageType["PORT_INFORMATION"] = 67] = "PORT_INFORMATION";
    MessageType[MessageType["PORT_MODE_INFORMATION"] = 68] = "PORT_MODE_INFORMATION";
    MessageType[MessageType["PORT_VALUE_SINGLE"] = 69] = "PORT_VALUE_SINGLE";
    MessageType[MessageType["PORT_VALUE_COMBINEDMODE"] = 70] = "PORT_VALUE_COMBINEDMODE";
    MessageType[MessageType["PORT_INPUT_FORMAT_SINGLE"] = 71] = "PORT_INPUT_FORMAT_SINGLE";
    MessageType[MessageType["PORT_INPUT_FORMAT_COMBINEDMODE"] = 72] = "PORT_INPUT_FORMAT_COMBINEDMODE";
    MessageType[MessageType["VIRTUAL_PORT_SETUP"] = 97] = "VIRTUAL_PORT_SETUP";
    MessageType[MessageType["PORT_OUTPUT_COMMAND"] = 129] = "PORT_OUTPUT_COMMAND";
    MessageType[MessageType["PORT_OUTPUT_COMMAND_FEEDBACK"] = 130] = "PORT_OUTPUT_COMMAND_FEEDBACK";
})(MessageType || (MessageType = {}));
export var HubPropertyReference;
(function (HubPropertyReference) {
    HubPropertyReference[HubPropertyReference["ADVERTISING_NAME"] = 1] = "ADVERTISING_NAME";
    HubPropertyReference[HubPropertyReference["BUTTON"] = 2] = "BUTTON";
    HubPropertyReference[HubPropertyReference["FW_VERSION"] = 3] = "FW_VERSION";
    HubPropertyReference[HubPropertyReference["HW_VERSION"] = 4] = "HW_VERSION";
    HubPropertyReference[HubPropertyReference["RSSI"] = 5] = "RSSI";
    HubPropertyReference[HubPropertyReference["BATTERY_VOLTAGE"] = 6] = "BATTERY_VOLTAGE";
    HubPropertyReference[HubPropertyReference["BATTERY_TYPE"] = 7] = "BATTERY_TYPE";
    HubPropertyReference[HubPropertyReference["MANUFACTURER_NAME"] = 8] = "MANUFACTURER_NAME";
    HubPropertyReference[HubPropertyReference["RADIO_FIRMWARE_VERSION"] = 9] = "RADIO_FIRMWARE_VERSION";
    HubPropertyReference[HubPropertyReference["LEGO_WIRELESS_PROTOCOL_VERSION"] = 10] = "LEGO_WIRELESS_PROTOCOL_VERSION";
    HubPropertyReference[HubPropertyReference["SYSTEM_TYPE_ID"] = 11] = "SYSTEM_TYPE_ID";
    HubPropertyReference[HubPropertyReference["HW_NETWORK_ID"] = 12] = "HW_NETWORK_ID";
    HubPropertyReference[HubPropertyReference["PRIMARY_MAC_ADDRESS"] = 13] = "PRIMARY_MAC_ADDRESS";
    HubPropertyReference[HubPropertyReference["SECONDARY_MAC_ADDRESS"] = 14] = "SECONDARY_MAC_ADDRESS";
    HubPropertyReference[HubPropertyReference["HARDWARE_NETWORK_FAMILY"] = 15] = "HARDWARE_NETWORK_FAMILY";
})(HubPropertyReference || (HubPropertyReference = {}));
export var HubPropertyOperation;
(function (HubPropertyOperation) {
    HubPropertyOperation[HubPropertyOperation["SET_DOWNSTREAM"] = 1] = "SET_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["ENABLE_UPDATES_DOWNSTREAM"] = 2] = "ENABLE_UPDATES_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["DISABLE_UPDATES_DOWNSTREAM"] = 3] = "DISABLE_UPDATES_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["RESET_DOWNSTREAM"] = 4] = "RESET_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["REQUEST_UPDATE_DOWNSTREAM"] = 5] = "REQUEST_UPDATE_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["UPDATE_UPSTREAM"] = 6] = "UPDATE_UPSTREAM";
})(HubPropertyOperation || (HubPropertyOperation = {}));
export var HubPropertyPayload;
(function (HubPropertyPayload) {
    HubPropertyPayload[HubPropertyPayload["ADVERTISING_NAME"] = 1] = "ADVERTISING_NAME";
    HubPropertyPayload[HubPropertyPayload["BUTTON_STATE"] = 2] = "BUTTON_STATE";
    HubPropertyPayload[HubPropertyPayload["FW_VERSION"] = 3] = "FW_VERSION";
    HubPropertyPayload[HubPropertyPayload["HW_VERSION"] = 4] = "HW_VERSION";
    HubPropertyPayload[HubPropertyPayload["RSSI"] = 5] = "RSSI";
    HubPropertyPayload[HubPropertyPayload["BATTERY_VOLTAGE"] = 6] = "BATTERY_VOLTAGE";
    HubPropertyPayload[HubPropertyPayload["BATTERY_TYPE"] = 7] = "BATTERY_TYPE";
    HubPropertyPayload[HubPropertyPayload["MANUFACTURER_NAME"] = 8] = "MANUFACTURER_NAME";
    HubPropertyPayload[HubPropertyPayload["RADIO_FIRMWARE_VERSION"] = 9] = "RADIO_FIRMWARE_VERSION";
    HubPropertyPayload[HubPropertyPayload["LWP_PROTOCOL_VERSION"] = 10] = "LWP_PROTOCOL_VERSION";
    HubPropertyPayload[HubPropertyPayload["SYSTEM_TYPE_ID"] = 11] = "SYSTEM_TYPE_ID";
    HubPropertyPayload[HubPropertyPayload["HW_NETWORK_ID"] = 12] = "HW_NETWORK_ID";
    HubPropertyPayload[HubPropertyPayload["PRIMARY_MAC_ADDRESS"] = 13] = "PRIMARY_MAC_ADDRESS";
    HubPropertyPayload[HubPropertyPayload["SECONDARY_MAC_ADDRESS"] = 14] = "SECONDARY_MAC_ADDRESS";
    HubPropertyPayload[HubPropertyPayload["HW_NETWORK_FAMILY"] = 15] = "HW_NETWORK_FAMILY";
})(HubPropertyPayload || (HubPropertyPayload = {}));
export var ActionType;
(function (ActionType) {
    ActionType[ActionType["SWITCH_OFF_HUB"] = 1] = "SWITCH_OFF_HUB";
    ActionType[ActionType["DISCONNECT"] = 2] = "DISCONNECT";
    ActionType[ActionType["VCC_PORT_CONTROL_ON"] = 3] = "VCC_PORT_CONTROL_ON";
    ActionType[ActionType["VCC_PORT_CONTROL_OFF"] = 4] = "VCC_PORT_CONTROL_OFF";
    ActionType[ActionType["ACTIVATE_BUSY_INDICATION"] = 5] = "ACTIVATE_BUSY_INDICATION";
    ActionType[ActionType["RESET_BUSY_INDICATION"] = 6] = "RESET_BUSY_INDICATION";
    ActionType[ActionType["SHUTDOWN"] = 47] = "SHUTDOWN";
    ActionType[ActionType["HUB_WILL_SWITCH_OFF"] = 48] = "HUB_WILL_SWITCH_OFF";
    ActionType[ActionType["HUB_WILL_DISCONNECT"] = 49] = "HUB_WILL_DISCONNECT";
    ActionType[ActionType["HUB_WILL_GO_INTO_BOOT_MODE"] = 50] = "HUB_WILL_GO_INTO_BOOT_MODE";
})(ActionType || (ActionType = {}));
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["LOW_VOLTAGE"] = 1] = "LOW_VOLTAGE";
    AlertType[AlertType["HIGH_CURRENT"] = 2] = "HIGH_CURRENT";
    AlertType[AlertType["LOW_SIGNAL_STRENGTH"] = 3] = "LOW_SIGNAL_STRENGTH";
    AlertType[AlertType["OVER_POWER_CONDITION"] = 4] = "OVER_POWER_CONDITION";
})(AlertType || (AlertType = {}));
export var AlertOperation;
(function (AlertOperation) {
    AlertOperation[AlertOperation["LOW_VOLTAGE"] = 1] = "LOW_VOLTAGE";
    AlertOperation[AlertOperation["HIGH_CURRENT"] = 2] = "HIGH_CURRENT";
    AlertOperation[AlertOperation["LOW_SIGNAL_STRENGTH"] = 3] = "LOW_SIGNAL_STRENGTH";
    AlertOperation[AlertOperation["OVER_POWER_CONDITION"] = 4] = "OVER_POWER_CONDITION";
})(AlertOperation || (AlertOperation = {}));
export var AlertPayload;
(function (AlertPayload) {
    AlertPayload[AlertPayload["STATUS_OK"] = 0] = "STATUS_OK";
    AlertPayload[AlertPayload["ALERT"] = 255] = "ALERT";
})(AlertPayload || (AlertPayload = {}));
export var Event;
(function (Event) {
    Event[Event["DETACHED_IO"] = 0] = "DETACHED_IO";
    Event[Event["ATTACHED_IO"] = 1] = "ATTACHED_IO";
    Event[Event["ATTACHED_VIRTUAL_IO"] = 2] = "ATTACHED_VIRTUAL_IO";
})(Event || (Event = {}));
export var IOTypeID;
(function (IOTypeID) {
    IOTypeID[IOTypeID["MOTOR"] = 1] = "MOTOR";
    IOTypeID[IOTypeID["SYSTEM_TRAIN_MOTOR"] = 2] = "SYSTEM_TRAIN_MOTOR";
    IOTypeID[IOTypeID["BUTTON"] = 5] = "BUTTON";
    IOTypeID[IOTypeID["LED_LIGHT"] = 8] = "LED_LIGHT";
    IOTypeID[IOTypeID["VOLTAGE"] = 20] = "VOLTAGE";
    IOTypeID[IOTypeID["CURRENT"] = 21] = "CURRENT";
    IOTypeID[IOTypeID["PIEZO_TONE_SOUND"] = 22] = "PIEZO_TONE_SOUND";
    IOTypeID[IOTypeID["RGB_LIGHT"] = 23] = "RGB_LIGHT";
    IOTypeID[IOTypeID["EXTERNAL_TILT_SENSOR"] = 34] = "EXTERNAL_TILT_SENSOR";
    IOTypeID[IOTypeID["MOTION_SENSOR"] = 35] = "MOTION_SENSOR";
    IOTypeID[IOTypeID["VISION_SENSOR"] = 37] = "VISION_SENSOR";
    IOTypeID[IOTypeID["EXTERNAL_MOTOR"] = 38] = "EXTERNAL_MOTOR";
    IOTypeID[IOTypeID["INTERNAL_MOTOR"] = 39] = "INTERNAL_MOTOR";
    IOTypeID[IOTypeID["INTERNAL_TILT"] = 40] = "INTERNAL_TILT";
})(IOTypeID || (IOTypeID = {}));
export var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["ACK"] = 1] = "ACK";
    ErrorCode[ErrorCode["MACK"] = 2] = "MACK";
    ErrorCode[ErrorCode["BUFFER_OVERFLOW"] = 3] = "BUFFER_OVERFLOW";
    ErrorCode[ErrorCode["TIMEOUT"] = 4] = "TIMEOUT";
    ErrorCode[ErrorCode["COMMAND_NOT_RECOGNIZED"] = 5] = "COMMAND_NOT_RECOGNIZED";
    ErrorCode[ErrorCode["INVALID_USE"] = 6] = "INVALID_USE";
    ErrorCode[ErrorCode["OVERCURRENT"] = 7] = "OVERCURRENT";
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 8] = "INTERNAL_ERROR";
})(ErrorCode || (ErrorCode = {}));
export var HWNetWorkCommandType;
(function (HWNetWorkCommandType) {
    HWNetWorkCommandType[HWNetWorkCommandType["CONNECTION_REQUEST"] = 2] = "CONNECTION_REQUEST";
    HWNetWorkCommandType[HWNetWorkCommandType["FAMILY_REQUEST"] = 3] = "FAMILY_REQUEST";
    HWNetWorkCommandType[HWNetWorkCommandType["FAMILY_SET"] = 4] = "FAMILY_SET";
    HWNetWorkCommandType[HWNetWorkCommandType["JOIN_DENIED"] = 5] = "JOIN_DENIED";
    HWNetWorkCommandType[HWNetWorkCommandType["GET_FAMILY"] = 6] = "GET_FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["FAMILY"] = 7] = "FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["GET_SUBFAMILY"] = 8] = "GET_SUBFAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["SUBFAMILY"] = 9] = "SUBFAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["SUBFAMILY_SET"] = 10] = "SUBFAMILY_SET";
    HWNetWorkCommandType[HWNetWorkCommandType["GET_EXTENDED_FAMILY"] = 11] = "GET_EXTENDED_FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["EXTENDED_FAMILY"] = 12] = "EXTENDED_FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["EXTENDED_FAMILY_SET"] = 13] = "EXTENDED_FAMILY_SET";
    HWNetWorkCommandType[HWNetWorkCommandType["RESET_LONG_PRESS_TIMING"] = 14] = "RESET_LONG_PRESS_TIMING";
})(HWNetWorkCommandType || (HWNetWorkCommandType = {}));
export var HWNetworkFamily;
(function (HWNetworkFamily) {
    HWNetworkFamily[HWNetworkFamily["GREEN"] = 1] = "GREEN";
    HWNetworkFamily[HWNetworkFamily["YELLOW"] = 2] = "YELLOW";
    HWNetworkFamily[HWNetworkFamily["RED"] = 3] = "RED";
    HWNetworkFamily[HWNetworkFamily["BLUE"] = 4] = "BLUE";
    HWNetworkFamily[HWNetworkFamily["PURPLE"] = 5] = "PURPLE";
    HWNetworkFamily[HWNetworkFamily["LIGHT_BLUE"] = 6] = "LIGHT_BLUE";
    HWNetworkFamily[HWNetworkFamily["TEAL"] = 7] = "TEAL";
    HWNetworkFamily[HWNetworkFamily["PINK"] = 8] = "PINK";
    HWNetworkFamily[HWNetworkFamily["WHITE"] = 0] = "WHITE";
})(HWNetworkFamily || (HWNetworkFamily = {}));
export var HWNetworkSubFamily;
(function (HWNetworkSubFamily) {
    HWNetworkSubFamily[HWNetworkSubFamily["ONE_FLASH"] = 1] = "ONE_FLASH";
    HWNetworkSubFamily[HWNetworkSubFamily["TWO_FLASHES"] = 2] = "TWO_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["THREE_FLASHES"] = 3] = "THREE_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["FOUR_FLASHES"] = 4] = "FOUR_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["FIVE_FLASHES"] = 5] = "FIVE_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["SIX_FLASHES"] = 6] = "SIX_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["SEVEN_FLASHES"] = 7] = "SEVEN_FLASHES";
})(HWNetworkSubFamily || (HWNetworkSubFamily = {}));
export var ModeInformationType;
(function (ModeInformationType) {
    ModeInformationType[ModeInformationType["NAME"] = 0] = "NAME";
    ModeInformationType[ModeInformationType["RAW"] = 1] = "RAW";
    ModeInformationType[ModeInformationType["PCT"] = 2] = "PCT";
    ModeInformationType[ModeInformationType["SI"] = 3] = "SI";
    ModeInformationType[ModeInformationType["SYMBOL"] = 4] = "SYMBOL";
    ModeInformationType[ModeInformationType["MAPPING"] = 5] = "MAPPING";
    ModeInformationType[ModeInformationType["USED_INTERNALLY"] = 6] = "USED_INTERNALLY";
    ModeInformationType[ModeInformationType["MOTOR_BIAS"] = 7] = "MOTOR_BIAS";
    ModeInformationType[ModeInformationType["CAPABILITY_BITS"] = 8] = "CAPABILITY_BITS";
    ModeInformationType[ModeInformationType["VALUE_FORMAT"] = 128] = "VALUE_FORMAT";
})(ModeInformationType || (ModeInformationType = {}));
export var PortInputFormatSetupSubCommand;
(function (PortInputFormatSetupSubCommand) {
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["SET_MODEANDDATASET_COMBINATIONS"] = 1] = "SET_MODEANDDATASET_COMBINATIONS";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["LOCK_LPF2_DEVICE_FOR_SETUP"] = 2] = "LOCK_LPF2_DEVICE_FOR_SETUP";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["UNLOCKANDSTARTWITHMULTIUPDATEENABLED"] = 3] = "UNLOCKANDSTARTWITHMULTIUPDATEENABLED";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["UNLOCKANDSTARTWITHMULTIUPDATEDISABLED"] = 4] = "UNLOCKANDSTARTWITHMULTIUPDATEDISABLED";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["NOT_USED"] = 5] = "NOT_USED";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["RESET_SENSOR"] = 6] = "RESET_SENSOR";
})(PortInputFormatSetupSubCommand || (PortInputFormatSetupSubCommand = {}));
export var MarioPantsType;
(function (MarioPantsType) {
    MarioPantsType[MarioPantsType["NONE"] = 0] = "NONE";
    MarioPantsType[MarioPantsType["PROPELLER"] = 6] = "PROPELLER";
    MarioPantsType[MarioPantsType["CAT"] = 17] = "CAT";
    MarioPantsType[MarioPantsType["FIRE"] = 18] = "FIRE";
    MarioPantsType[MarioPantsType["NORMAL"] = 33] = "NORMAL";
    MarioPantsType[MarioPantsType["BUILDER"] = 34] = "BUILDER";
})(MarioPantsType || (MarioPantsType = {}));
export var MarioColor;
(function (MarioColor) {
    MarioColor[MarioColor["WHITE"] = 4864] = "WHITE";
    MarioColor[MarioColor["RED"] = 5376] = "RED";
    MarioColor[MarioColor["BLUE"] = 5888] = "BLUE";
    MarioColor[MarioColor["YELLOW"] = 6144] = "YELLOW";
    MarioColor[MarioColor["BLACK"] = 6656] = "BLACK";
    MarioColor[MarioColor["GREEN"] = 9472] = "GREEN";
    MarioColor[MarioColor["BROWN"] = 27136] = "BROWN";
    MarioColor[MarioColor["CYAN"] = 16897] = "CYAN";
})(MarioColor || (MarioColor = {}));
