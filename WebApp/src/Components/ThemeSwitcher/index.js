import  React from 'react';
import ThemeSwitcherWrapper from "./style";
import {useDispatch} from "react-redux";
import actions from "../../Redux/ThemeSwitcher/actions";
import themes from "./ThemeStore";

export default function (props) {
    const dispatch = useDispatch();

    return (
        <ThemeSwitcherWrapper>
            <p onClick={() => dispatch(actions.changeTheme(themes.dark))}>DARK</p>
            <p onClick={() => dispatch(actions.changeTheme(themes.light))}>LIGHT</p>
        </ThemeSwitcherWrapper>
    )

}