export const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

export const fearturing = (store) => (next) => (actionInfo) => {
    const featured = [{name:'jacashira'},...actionInfo.action.payload]
    const updateActionInfo = {
        ...actionInfo,
        action: {...actionInfo.action, payload:featured },
    }
    next(updateActionInfo)
}