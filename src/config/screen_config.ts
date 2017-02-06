import ICONS from "./icons";

const LOGIN_CONFIG: any = {
    screen: {
        screen: "screen.Counter",
        title: "Start",
        navigatorStyle: {
            navBarHidden: true
        },
    },
    drawer: {
        left: {
            screen: "navigation.SideDrawer"
        },
        disableOpenGesture: false
    }
};

const TAB_CONFIG: any = {
    tabs: [
         {
            label: "Todos",
            screen: "screen.TodoList",
            icon: ICONS.BULLET_LIST,
            selectedIcon: ICONS.BULLET_LIST,
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
    tabsStyle: {
        tabBarBackgroundColor: "#000000"
    }
};

export { LOGIN_CONFIG, TAB_CONFIG }