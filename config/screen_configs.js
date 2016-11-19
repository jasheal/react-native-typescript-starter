const LOGIN_CONFIG = { 
    screen: {
        screen: "screen.Login",
        title: "Start",
        navigatorStyle: {
            navBarHidden: true
        }
    }
}

const TAB_CONFIG = { 
    tabs: [
        {
            label: "One",
            screen: "screen.Counter",
            icon: require("../img/one.png"),
            selectedIcon: require("../img/one_selected.png"),
            title: "Screen One",
            overrideBackPress: true,
            navigatorStyle: {}
        },
        {
            label: "Two",
            screen: "screen.Counter2",
            icon: require("../img/two.png"),
            selectedIcon: require("../img/two_selected.png"),
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
}

export { LOGIN_CONFIG, TAB_CONFIG }