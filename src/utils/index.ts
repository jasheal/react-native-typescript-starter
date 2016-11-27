export function combineActionsGroups(...actionGroups: any[]) {
  let mixing: any = {};
  actionGroups.forEach((actionGroup: any) => {
    Object.keys(actionGroup).forEach((key: string) => {
      if (mixing[key] !== undefined) {
        throw new Error("Mixing cannot be applied due to duplicated key!");
      } else {
        mixing[key] = actionGroup[key];
      }
    });
  });
  return mixing;
}

export function makeActionCreator(type: string, ...argNames: string[]) {
  return function(...args: any[]) {
    let action: any = { type : type };
    argNames.forEach((arg, index) => {
        let argName: string = argNames[index];
        let argValue: any = args[index];
        action[argName] = argValue;
    });
    return action;
  };
}

export function makeIndexedActionCreator(type: string, ...argNames: string[]) {
  return function(id: string, ...args: any[]) {
    let action: any = { type : type + "_" + id };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}