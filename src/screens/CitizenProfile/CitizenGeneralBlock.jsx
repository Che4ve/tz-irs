import {useEffect, useState} from "react";

import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const CitizenGeneralBlock = (props) => {

    const {citizen} = props;
    // const [citizen, setCitizen] = useState(props?.citizen ?? null);

    useEffect(() => {
        console.log(citizen);
    }, []);

    return (
        <div className={"citizen-profile-page general"}>
            <div className={"citizen-profile-page__left-section"}>
                <div className={"general-info__container"}>
                    <h2>Общая информация</h2>
                    {citizen &&
                        <ul>
                            <li><span>Возраст </span> <span>{citizen.age ?? "Не указано"}</span></li>
                            <li><span>Дата рождения </span> <span>{citizen.dateOfBirth ?? "Не указано"}</span></li>
                            <li><span>Пол </span> <span>{citizen.gender ?? "Не указано"}</span></li>
                            <li><span>Дата постановки на воинский учёт </span>
                                <span>{citizen.registrationDate ?? "Не указано"}</span></li>
                            <li><span>Категория годности </span>
                                <span>{citizen.fitnessCategory ?? "Не указано"}</span></li>
                            <li><span>Адрес проживания </span> <span>{citizen.address ?? "Не указано"}</span></li>
                        </ul>
                    }
                    <h2>Паспортные данные</h2>
                    {citizen && citizen.passportDetails &&
                        <ul>
                            <li><span>Серия </span> <span>{citizen.passportDetails.series ?? "Не указано"}</span></li>
                            <li><span>Номер </span> <span>{citizen.passportDetails.number ?? "Не указано"}</span></li>
                            <li><span>Выдан </span> <span>{citizen.passportDetails.issuedBy ?? "Не указано"}</span></li>
                            <li><span>Дата выдачи </span>
                                <span>{citizen.passportDetails.issueDate ?? "Не указано"}</span></li>
                        </ul>
                    }
                </div>
            </div>
            <div className={"citizen-profile-page__right-section"}>
                <div className={"photo-container"}>
                    <FaUser/>
                </div>
                <div className={"data-container category"}>
                    <div><p>{citizen.fitnessCategory}</p></div>
                    <span>Категория годности</span>
                </div>
                <div className={"data-container phone"}>
                    <div><FaPhone/></div>
                    <span>{citizen.contactDetails?.phone}</span>
                </div>
                <div className={"data-container email"}>
                    <div><MdOutlineAlternateEmail/></div>
                    <span>{citizen.contactDetails?.email}</span>
                </div>
            </div>
        </div>
    )
}