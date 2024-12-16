import React, { useEffect } from "react";
import {Form, Input, Button, DatePicker, Row, Col, Space, Radio, Upload} from "antd";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import {FaUser} from "react-icons/fa";

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

export const CitizenEditBlock = (props) => {

    const { citizen } = props;

    const [formGeneral] = Form.useForm();
    const [formPassport] = Form.useForm();
    const [formFamily] = Form.useForm();
    const [formMilitary] = Form.useForm();

    const valuesGeneral = Form.useWatch([], formGeneral);

    useEffect(() => {
        if (citizen) {
            formGeneral.setFieldsValue({
                firstName: citizen.firstName,
                lastName: citizen.lastName,
                middleName: citizen.middleName,
                // yearOfBirth: citizen.dateOfBirth,
                address: citizen.address,
            });

            if (citizen.passportDetails) {
                formPassport.setFieldsValue({
                    passportSeries: citizen.passportDetails?.series,
                    passportNumber: citizen.passportDetails?.number,
                    issuedBy: citizen.passportDetails?.issuedBy,
                    // issueDate: citizen.passportDetails?.issueDate,
                });
            }

            formMilitary.setFieldsValue({
                militarySpecialty: citizen.militarySpecialty,
                fitnessCategory: citizen.fitnessCategory,
            });
        }
    }, [citizen]);

    const handleSubmitGeneral = (values) => {
        console.log("General Form Values:", values);
    };

    const handleSubmitPassport = (values) => {
        console.log("Passport Form Values:", values);
    };

    const handleSubmitFamily = (values) => {
        console.log("Family Form Values:", values);
    };

    const handleSubmitMilitary = (values) => {
        console.log("Military Form Values:", values);
    };

    return (
        <div className="citizen-profile-page edit">
            <div className="citizen-profile-page__left-section">
                <h2>Редактирование карточки</h2>
                <h3>Общие данные</h3>
                {/* General Form */}
                <Form
                    form={formGeneral}
                    onFinish={handleSubmitGeneral}
                    layout="vertical"
                    variant={"filled"}
                >
                    <Row gutter={18}>
                        <Col span={6}>
                            <Form.Item
                                name="firstName"
                                label="Имя"
                                rules={[{required: true, message: "Введите имя"}]}
                            >
                                <Input placeholder="Введите имя"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="lastName"
                                label="Фамилия"
                                rules={[{required: true, message: "Введите фамилию"}]}
                            >
                                <Input placeholder="Введите фамилию"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="middleName"
                                label="Отчество"
                                rules={[{required: false}]}
                            >
                                <Input placeholder="Введите отчество"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={18}>
                        <Col span={6}>
                            <Form.Item
                                name="dateOfBirth"
                                label="Год рождения"
                                rules={[{required: true, message: "Введите год рождения"}]}
                            >
                                <DatePicker placeholder="Выберите год рождения"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="address"
                                label="Адрес проживания"
                                rules={[{required: true, message: "Введите адрес"}]}
                            >
                                <Input placeholder="Введите адрес"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Сохранить общие данные
                    </Button>
                </Form>
                <h3>Паспортные данные</h3>
                {/* Passport Form */}
                <Form form={formPassport} onFinish={handleSubmitPassport} layout="vertical" variant={"filled"}>
                    <Row gutter={18}>
                        <Col span={6}>
                            <Form.Item
                                name="passportSeries"
                                label="Серия"
                                rules={[{required: true, message: "Введите серию паспорта"}, {
                                    len: 4,
                                    message: "Серия паспорта должна включать 4 цифры"
                                }, {type: "string", required: true, message: "Только цифры"}]}
                            >
                                <Input.OTP length={4} placeholder="Введите серию паспорта"/>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                name="passportNumber"
                                label="Номер"
                                rules={[{required: true, message: "Введите номер паспорта"}, {
                                    len: 6,
                                    message: "Номер паспорта должен включать 6 цифр"
                                }, {type: "string", required: true, message: "Только цифры"}]}
                            >
                                <Input.OTP length={6} placeholder="Введите номер паспорта"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name="issueDate"
                                label="Дата выдачи"
                                rules={[{required: true, message: "Введите дату выдачи"}]}
                            >
                                <DatePicker placeholder="Выберите дату выдачи"/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="issuedBy"
                                label="Кем выдан"
                                rules={[{required: true, message: "Введите орган выдачи паспорта"}]}
                            >
                                <Input placeholder="Введите кем выдан паспорт"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Сохранить паспортные данные
                    </Button>
                </Form>
                <h3>Данные о семье</h3>
                {/* Family Form */}
                <Form
                    name="formFamily"
                    form={formFamily}
                    onFinish={handleSubmitPassport} layout="vertical" variant={"filled"}
                >
                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <>
                                    <Row gutter={18}>
                                        <Col span={6}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'role']}
                                                rules={[
                                                    {
                                                        required: false,
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Роль (жена, сын...)" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={12}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'phone']}
                                                rules={[
                                                    {
                                                        required: false,
                                                    },
                                                ]}
                                                initialValues={{
                                                    prefix: '+7',
                                                }}
                                            >
                                                <Input
                                                    addonBefore={"+7"}
                                                    placeholder="Контактный телефон" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row gutter={18}>
                                        <Col span={6}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'last']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Введите фамилию',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Фамилия" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'first']}
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Введите имя',
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Имя" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item
                                                {...restField}
                                                name={[name, 'middle']}
                                                rules={[
                                                    {
                                                        required: false,
                                                    },
                                                ]}
                                            >
                                                <Input placeholder="Отчество" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                        <Row gutter={18}>
                                            <Col span={9}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'work']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Сведения о работе" />
                                                </Form.Item>
                                            </Col>
                                            <Col span={9}>
                                                <Form.Item
                                                    {...restField}
                                                    name={[name, 'education']}
                                                    rules={[
                                                        {
                                                            required: false,
                                                        },
                                                    ]}
                                                >
                                                    <Input placeholder="Образование" />
                                                </Form.Item>
                                            </Col>
                                            <Button style={{border: "none", boxShadow: "none", opacity: "0.5"}}
                                                    icon={<IoIosRemoveCircleOutline size={"80%"} />}
                                                    onClick={() => remove(name)}
                                            />
                                        </Row>
                                    </>
                                ))}
                                <Row gutter={18}>
                                    <Col span={18}>
                                        <Form.Item>
                                            <Button type={"dashed"} block
                                                    icon={<IoMdAdd/>}
                                                    onClick={() => add()}
                                            >
                                                Добавить члена семьи
                                            </Button >
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </>
                        )}
                    </Form.List>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Сохранить данные о семье
                        </Button>
                    </Form.Item>
                </Form>
                <h3>Данные о воинском учёте</h3>
                {/* Military Form */}
                <Form form={formMilitary} onFinish={handleSubmitPassport} layout="vertical" variant={"filled"}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Form.Item
                                name="militarySpecialty"
                                label="ВУС"
                                rules={[{required: true, message: "Введите ВУС"}]}
                            >
                                <Input placeholder="Введите ВУС"/>
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item
                                name="registrationDate"
                                label="Дата постановки на учёт"
                                rules={[{required: true, message: "Выберите дату"}]}
                            >
                                <DatePicker placeholder="Выберите дату"/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={16}>
                            <Form.Item
                                name="fitnessCategory"
                                label="Категория годности"
                                rules={[{required: true, message: "Введите номер паспорта"}]}
                            >
                                <Radio.Group>
                                    <Radio value="А">А</Radio>
                                    <Radio value="Б">Б</Radio>
                                    <Radio value="В">В</Radio>
                                    <Radio value="Г">Г</Radio>
                                    <Radio value="Д">Д</Radio>
                                </Radio.Group>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">
                        Сохранить данные о воинском учёте
                    </Button>
                </Form>
            </div>

            <div className="citizen-profile-page__right-section">
                <div className={"photo-container"}>
                    <FaUser/>
                </div>
                <div className={"upload-container"}>
                    <Upload.Dragger style={{opacity: "0.6"}} className={"photo-upload"} name="files">
                        <MdOutlineAddPhotoAlternate size={"50%"}/>
                        <p style={{fontSize: "0.8rem"}} className="ant-upload-text">Нажмите или перенесите файл, чтобы
                            загрузить фото</p>
                    </Upload.Dragger>
                </div>

            </div>
        </div>
    );
};
