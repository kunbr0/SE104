import React from "react";
import {ConfigProvider} from "antd";
import enUS from 'antd/es/locale/en_US';
import {ThemeProvider} from "styled-components";
import {IntlProvider} from "react-intl";
import themes from "./config/themes";
import AppLocale from "./config/languagues";

const currentLocale = AppLocale['en'];
const currentTheme = themes['defaultTheme'];

export default function AppProvider({children}) {
    return (
        <ConfigProvider locale={currentLocale.antd}>
            <IntlProvider locale={currentLocale.locale} messages={currentLocale.messages}>
                <ThemeProvider theme={currentTheme}>
                    {children}
                </ThemeProvider>
            </IntlProvider>
        </ConfigProvider>
    );
}