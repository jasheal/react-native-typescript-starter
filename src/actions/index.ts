import ACTION_TYPES from "../constants";
import * as globalActions from "./global_actions";
import combineActionsGroups from "../utils/combine_actions";


export default combineActionsGroups(
    globalActions
);
