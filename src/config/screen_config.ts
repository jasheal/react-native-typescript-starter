import ICONS from "./icons";

const LOGIN_CONFIG: any = {
    screen: {
        screen: "screen.Login",
        title: "Start",
        navigatorStyle: {
            navBarHidden: true
        }
    }
};

const TAB_CONFIG: any = {
    tabs: [
        {
            label: "One",
            screen: "screen.Counter",
            icon: ICONS.HOME,
            selectedIcon: ICONS.HOME_SELECTED,
            title: "Screen One",
            overrideBackPress: true,
            navigatorStyle: {}
        },
        {
            label: "Two",
            screen: "screen.Counter2",
            icon: ICONS.FAVOURITE,
            selectedIcon: ICONS.FAVOURITE_SELECTED,
            title: "Screen Two",
            navigatorStyle: {}
        }
    ],
    passProps: {
    str: "This is a prop passed in \"startTabBasedApp\"!",
    obj: {
        str: "This is a prop passed in an object!",
        arr: [
            {
                str: "This is a prop in an object in an array in an object!"
            }
        ]
    },
        num: 1234
    },
    animationType: "slide-down",
    title: "Redux Example",
    drawer: {
    left: {
        screen: "navigation.SideDrawer"
    },
    disableOpenGesture: false,
    passProps: {
        title: "Hello from SideMenu"
    }
    },
    appStyle: {
    bottomTabBadgeTextColor: "#ffffff",
    bottomTabBadgeBackgroundColor: "#ff0000"
    }
};

export { LOGIN_CONFIG, TAB_CONFIG }