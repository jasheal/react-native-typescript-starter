// The following modules do not have type declarations available. We can add declarations in here as we need them.

declare module "react-native-navigation" {
    export var Navigation: any;
}

declare module "redux-persist/constants" {
    export const REHYDRATE: any;
}

declare module "redux-persist" {
    export var persistStore: any;
    export var purgeStoredState: any;
}

declare module "remote-redux-devtools" {
    var devTools: any;
    export default devTools;
}

declare module "react-native-vector-icons/Ionicons" {
    var Icon: any;
    export default Icon; 
}
