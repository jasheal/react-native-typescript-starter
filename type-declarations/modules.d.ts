// The following modules do not have type declarations available. We can add declarations in here as we need them.

declare module "react-native-navigation" {
    export var Navigation: any;
}

declare module "redux-persist/constants" {
    export var REHYDRATE: any;
}

declare module "redux-persist" {
    export var persistStore: any;
}

declare module "remote-redux-devtools" {
     var devTools: any;
     export default devTools;
}