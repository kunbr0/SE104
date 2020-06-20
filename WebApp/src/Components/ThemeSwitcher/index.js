import  React from 'react';
import ThemeSwitcherWrapper from "./style";
import {useDispatch} from "react-redux";
import actions from "../../Redux/ThemeSwitcher/actions";

export default function (props) {
    const dispatch = useDispatch();

    return (
        <ThemeSwitcherWrapper>
            <p onClick={() => dispatch(actions.changeTheme('dark'))}>DARK</p>
            <p onClick={() => dispatch(actions.changeTheme('light'))}>LIGHT</p>
        </ThemeSwitcherWrapper>
    )

}