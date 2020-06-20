const actions = {

    CHANGE_THEME: "CHANGE_THEME",

    changeTheme: (themeId) => ({
        type: actions.CHANGE_THEME,
        id: themeId,
    }),
}

export default actions;