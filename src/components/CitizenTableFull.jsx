

import React, {useEffect, useState} from "react";
import {Table, Pagination, Dropdown, Button, Checkbox, Flex} from "antd";
import {citizensRegistry, fetchAllData, fetchData} from "../data/CitizensData";
import { TfiLayoutColumn3 } from "react-icons/tfi";
import {useNavigate} from "react-router-dom";

const columns = [
    {
        title: "ФИО",
        label: "ФИО",
        dataIndex: "fullName",
        key: "fullName",
        render: (_, record) =>
            `${record.lastName} ${record.firstName} ${record.middleName}`,
        fixed: "left",
        // width: "200px",
        align: "center",
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
        title: "Дата рожд.",
        dataIndex: "dateOfBirth",
        key: "dateOfBirth",
        sorter: (a, b) => new Date(a.dateOfBirth) - new Date(b.dateOfBirth),

        width: "125px",
        align: "center",
    },
    {
        title: "Пол",
        dataIndex: "gender",
        key: "gender",
        filters: [
            {
                text: "Мужской",
                value: "Мужской",
            },
            {
                text: "Женский",
                value: "Женский",
            },
        ],
        onFilter: (value, record) => {
            return record.gender.indexOf(value) === 0;
        },
        width: "100px",
        align: "left",
    },
    {
        title: "Дата регистр.",
        dataIndex: "registrationDate",
        key: "registrationDate",
        sorter: (a, b) => new Date(a.registrationDate) - new Date(b.registrationDate),
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
        title: "Сем. полож.",
        dataIndex: "maritalStatus",
        key: "maritalStatus",
        width: "125px",
        align: "center",
    },
    {
        title: "Трудовая деят.",
        dataIndex: "employmentType",
        key: "employmentType",
    },
    {
        title: "Паспорт. данные",
        dataIndex: "passportDetails",
        key: "passportDetails",
        render: (_, record) =>
            `${record.passportDetails.series} ${record.passportDetails.number}`,

        width: "125px",
        align: "left",
    },
    {
        title: "ВУС",
        dataIndex: "militarySpecialty",
        key: "militarySpecialty",
        width: "75px",
        align: "left",
    },
    {
        title: "Адрес прож.",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Контактные данные",
        dataIndex: "contactDetails",
        key: "contactDetails",
        render: (_, record) =>
            <>
                <a>{record.contactDetails.phone}, </a>
                <a>{record.contactDetails.email}</a>
            </>,
        // width: "200px",
        align: "left",
    },
];

export const CitizenTableFull = () => {

    const navigate = useNavigate();

    const [selectedColumns, setSelectedColumns] = useState(
        columns.reduce((dict, column) => {
            dict[column.key] = true;
            return dict;
        }, {})
    );

    const [filteredColumns, setFilteredColumns] = useState(columns)

    const [data, setData] = useState([]);

    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
        total: 50,
    });

    useEffect(() => {
        receiveData(pagination, []);
    }, []);

    useEffect(() => {
        setFilteredColumns((prev) => columns.filter((col) => selectedColumns[col.key]))
    }, [JSON.stringify(selectedColumns)])

    const receiveData = (pagination, filters, sorter) => {
        const { current, pageSize } = pagination;
        const activeFilters = Object.entries(filters).map(([key, value]) => ({ key, value }));

        fetchData(current, pageSize, activeFilters, sorter).then((result) => {
            setData(result.data);
            setPagination(result.pagination);
        });
    }

    const handleTableChange = (pagination, filters, sorter) => {
        receiveData(pagination, filters);
    };

    const handleRowClick = (record, index) => {
        return navigate(`/citizens/${record.id}`)
    }

    const handleColumnCheck = (event, key) => {
        const checked = event.target.checked;
        setSelectedColumns((prev) => ({
            ...prev,
            [key]: checked,
        }))
    }

    return (
        <div className={"citizens-table__container"}>
            <div className={"citizen-table__control-block"}>

                {selectedColumns &&
                    <div className={"column-control"}>
                        <Dropdown
                            destroyPopupOnHide={true}
                            className={"columns-dropdown"}
                            placement="bottomLeft"
                            dropdownRender={(menu) => (
                                <Flex vertical={true} align={"left"}
                                      style={{height: 'fit-content', weight: '200px', background: 'white'}}>
                                    {columns.map((col) => (
                                        col.key !== "fullName" ?
                                            <Checkbox defaultChecked={selectedColumns[col.key]} onChange={(event) => {
                                                handleColumnCheck(event, col.key)
                                            }}>
                                                {col.title}
                                            </Checkbox>
                                            : <></>
                                    ))}
                                </Flex>
                            )}
                        >
                            <Button className={"columns-dropdown__button"}><TfiLayoutColumn3/></Button>
                        </Dropdown>
                        <span>Столбцы</span>
                    </div>
                }
                <span>Записей в картотеке: {pagination.total}</span>
            </div>
            {filteredColumns &&
                <Table
                    className={"citizens-table"}
                dataSource={data}
                columns={filteredColumns}
                sticky={true}
                size={"middle"}
                pagination={{
                    ...pagination,
                    // simple: true,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    position: ["topRight"],
                }}
                onRow={(record, index) => ({
                    onClick: () => handleRowClick(record, index),
                })}
                onChange={handleTableChange}
                // tableLayout={"auto"}
            >
                {/*<Column title={"HUI"} key={"age"} dataIndex={"age"} hidden={!selectedColumns["age"]} />*/}
            </Table>
            }
        </div>
    );
};
