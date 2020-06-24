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
                    aaaaaaaaaaa<br/>abacsdcldskcdsl
                </label>
                <div className="st-form">
                    <table>
                        <tr>
                            <th>
                                <label>Chọn csdl</label>
                            </th>
                            <th>
                                <Select className="db-selector" defaultValue="MYSQL" onChange={(value) => setSQL(value)}>
                                    <Option value="MYSQL">MySQL</Option>
                                    <Option value="MSSQL">SQL Server</Option>
                                    <Option value="SQLITE">Sqlite</Option>
                                </Select>
                            </th>
                        </tr>
                        {sqls[sql].map((option, index) => (
                            <tr>
                                <th>
                                    {option.label}
                                </th>
                                <th>
                                    {option.input}
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
            label: "Hostname",
            input: <Input onChange={(evt) => host = evt.target.value} value="localhost"></Input>
        },
        {
            label: "Port",
            input: <Input onChange={(evt) => port = evt.target.value} value={3306}></Input>
        },
        {
            label: "Username",
            input: <Input onChange={(evt) => user = evt.target.value}></Input>
        },
        {
            label: "Password",
            input: <Input onChange={(evt) => pass = evt.target.value}></Input>
        },
        {
            label: "Database",
            input: <Input onChange={(evt) => database = evt.target.value}></Input>
        },
        {
            label: "Table prefix",
            input: <Input onChange={(evt) => prefix = evt.target.value} value="qlhs_"></Input>
        }
    ],
    MSSQL: [
        {
            label: "Hostname",
            input: <Input onChange={(evt) => host = evt.target.value} value="localhost"></Input>
        },
        {
            label: "Port",
            input: <Input onChange={(evt) => port = evt.target.value} value={1433}></Input>
        },
        {
            label: "Username",
            input: <Input onChange={(evt) => user = evt.target.value}></Input>
        },
        {
            label: "Password",
            input: <Input onChange={(evt) => pass = evt.target.value}></Input>
        },
        {
            label: "Database",
            input: <Input onChange={(evt) => database = evt.target.value}></Input>
        },
        {
            label: "Table prefix",
            input: <Input onChange={(evt) => prefix = evt.target.value} value="qlhs_"></Input>
        }
    ],
    SQLITE: [

    ]
}
