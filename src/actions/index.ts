import { combineActionsGroups } from "../utils";
import * as global from "./global_actions";
import * as counter from "./counter_actions";
import * as todo from "./todo_actions";

export default combineActionsGroups(
    global,
    counter,
    todo
);
