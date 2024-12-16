import React, {useEffect, useState} from "react";
import {Button, Table} from "antd";
import {fetchData} from "../data/CitizensData";
import {Link, useNavigate} from "react-router-dom";

const columns = [
    {
        title: "ФИО",
        label: "ФИО",
        dataIndex: "fullName",
        key: "fullName",
        render: (_, record) =>
            `${record.lastName} ${record.firstName} ${record.middleName}`,
        align: "center",
        width: "200px",
    },
    {
        title: "Возраст",
        dataIndex: "age",
        key: "age",
        sorter: (a, b) => a.age - b.age,

        width: "100px",
        align: "center",
    },
    {
        title: "Дата регистр.",
        dataIndex: "registrationDate",
        key: "registrationDate",
        sorter: (a, b) => new Date(a.registrationDate) - new Date(b.registrationDate),
        sortDirections: ['descend'],
        defaultSortOrder: "ascend",

        width: "125px",
        align: "center",
    },
    {
        title: "Кат. годн.",
        dataIndex: "fitnessCategory",
        key: "fitnessCategory",
        sorter: (a, b) => a.fitnessCategory > b.fitnessCategory,

        filters: [
            {
                text: "А",
                value: "А",
            },
            {
                text: "Б",
                value: "Б",
            },
            {
                text: "В",
                value: "В",
            },
            {
                text: "Г",
                value: "Г",
            },
            {
                text: "Д",
                value: "Д",
            },
        ],
        onFilter: (value, record) => {
            return record.fitnessCategory.indexOf(value) === 0;
        },

        width: "100px",
        align: "center",
    },
    {
        title: "ВУС",
        dataIndex: "militarySpecialty",
        key: "militarySpecialty",
        width: "50px",
        align: "left",
    },
];

export const CitizenTable = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([])

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 20,
        total: 50,
    });

    useEffect(() => {
        fetchData(pagination.current, pagination.pageSize).then((result) => {
            setData(result.data);
        });
    }, []);

    const handleRowClick = (record, index) => {
        return navigate(`/citizens/${record.id}`)
    }

    return (
        <div className={"citizens-table__container"}>
            <div className={"citizens-table__header"}>
                <h2>Поставленные на {`\n`}
                    <Link to={"/citizens"}>
                        <a>учёт</a>
                    </Link>
                    {`\n`} недавно</h2>
            </div>
            <div className={"citizens-table__table-container"}>
                <Table
                    className={"citizens-table"}
                    dataSource={data}
                    columns={columns}
                    sticky={true}
                    pagination={false}
                    tableLayout={"auto"}
                    size={"small"}
                    onRow={(record, index) => ({
                        onClick: () => handleRowClick(record, index),
                    })}
                />
            </div>
        </div>
    );
};
