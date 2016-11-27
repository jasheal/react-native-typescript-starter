import ICONS from "./icons";

const LOGIN_CONFIG: any = {
    screen: {
        screen: "screen.Login",
        title: "Start",
        navigatorStyle: {
            navBarHidden: true,
            screenBackgroundColor: "#f00"
        },
    },
    drawer: {
        left: {
            screen: "navigation.SideDrawer"
        },
        disableOpenGesture: false,
        passProps: {
            title: "Hello from SideMenu"
        }
    }
};

const TAB_CONFIG: any = {
    tabs: [
         {
            label: "Todos",
            screen: "screen.TodoList",
            icon: ICONS.FAVOURITE,
            selectedIcon: ICONS.FAVOURITE_SELECTED,
            title: "Todo List",
            navigatorStyle: {}
        },
        {
            label: "Counter",
            screen: "screen.Counter",
            icon: ICONS.FAVOURITE,
            selectedIcon: ICONS.FAVOURITE_SELECTED,
            title: "Counter",
            overrideBackPress: true,
            navigatorStyle: {}
        }
    ],
    animationType: "slide-down",
    title: "Redux Example",
    appStyle: {
        bottomTabBadgeTextColor: "#ffffff",
        bottomTabBadgeBackgroundColor: "#ff0000"
    }
};

export { LOGIN_CONFIG, TAB_CONFIG }