function combineActionsGroups(...actionGroups: any[]) {
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

export default combineActionsGroups;