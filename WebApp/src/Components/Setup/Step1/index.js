import React, {useState} from "react";
import Step1Wrapper from "./style";
import {Button, Input, Select} from "antd";
import {useDispatch} from "react-redux";
import actions from "../../../Redux/Setup/action";

const {Option} = Select;
let host, port, user, pass, database, prefix;

export default function (props) {
    const dispatch = useDispatch();
    const [sql, setSQL] = useState("MYSQL");

    return (
        <Step1Wrapper>
            <div className="page-container">
                <label>
                    Below you should enter your connection details. If you're not sure about these, contact your system admin.
                </label>
                <div className="st-form">
                    <table>
                        <tr>
                            <th>
                                <label>Database server</label>
                            </th>
                            <th className="st-input">
                                <Select className="db-selector" defaultValue="MYSQL" onChange={(value) => setSQL(value)}>
                                    <Option value="MYSQL">MySQL</Option>
                                    <Option value="MSSQL">SQL Server</Option>
                                    <Option value="SQLITE">Sqlite</Option>
                                </Select>
                            </th>
                            <th>
                            </th>
                        </tr>
                        {sqls[sql].map((option, index) => (
                            <tr>
                                <th className="st-label">
                                    {option.label}
                                </th>
                                <th className="st-input">
                                    {option.input}
                                </th>
                                <th className="st-description">
                                    {option.description}
                                </th>
                            </tr>
                        ))}
                    </table>
                    <div className="st-controller">
                        <Button onClick={() => dispatch(actions.nextStep())}>Submit</Button>
                    </div>
                </div>
            </div>
        </Step1Wrapper>
    )
}

const sqls = {
    MYSQL: [
        {
            label: "Database",
            input: <Input onChange={(evt) => database = evt.target.value}></Input>,
            description: "The name of the database you want to use with QLHS."
        },
        {
            label: "Username",
            input: <Input onChange={(evt) => user = evt.target.value}></Input>,
            description: "Your database username."
        },
        {
            label: "Password",
            input: <Input onChange={(evt) => pass = evt.target.value}></Input>,
            description: "Your database password."
        },
        {
            label: "Hostname",
            input: <Input onChange={(evt) => host = evt.target.value} value="localhost"></Input>,
            description: "You should be able to get this info from your system administrator, if localhost doesn't work."
        },
        {
            label: "Port",
            input: <Input onChange={(evt) => port = evt.target.value} value={3306}></Input>,
            description: "If you want to use custom port for your MySQL server, change this."
        },
        {
            label: "Table prefix",
            input: <Input onChange={(evt) => prefix = evt.target.value} value="qlhs_"></Input>,
            description: "If you want to run multiple QLHS installation in a single database, change this."
        }
    ],
    MSSQL: [
        {
            label: "Database",
            input: <Input onChange={(evt) => database = evt.target.value}></Input>,
            description: "The name of the database you want to use with QLHS."
        },
        {
            label: "Username",
            input: <Input onChange={(evt) => user = evt.target.value}></Input>,
            description: "Your database username."
        },
        {
            label: "Password",
            input: <Input onChange={(evt) => pass = evt.target.value}></Input>,
            description: "Your database password."
        },
        {
            label: "Hostname",
            input: <Input onChange={(evt) => host = evt.target.value} value="localhost"></Input>,
            description: "You should be able to get this info from your system administrator, if localhost doesn't work."
        },
        {
            label: "Port",
            input: <Input onChange={(evt) => port = evt.target.value} value={1433}></Input>,
            description: "If you want to use custom port for your SQL Server, change this."
        },
        {
            label: "Table prefix",
            input: <Input onChange={(evt) => prefix = evt.target.value} value="qlhs_"></Input>,
            description: "If you want to run multiple QLHS installation in a single database, change this."
        }
    ],
    SQLITE: [

    ]
}
