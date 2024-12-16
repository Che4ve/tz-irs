import "../../styles/citizenProfile.scss";

import {useEffect, useState} from "react";
import {fetchDataById} from "../../data/CitizensData";
import {useParams} from "react-router-dom";
import {CitizenGeneralBlock} from "./CitizenGeneralBlock";
import {CitizenEducationBlock} from "./CitizenEducationBlock";
import {CitizenFamilyBlock} from "./CitizenFamilyBlock";
import {CitizenEditBlock} from "./CitizenEditBlock";

const selectorOptions = [
    {
        key: "general",
        title: "Общее",
        pageComponent: (citizen) => <CitizenGeneralBlock citizen={citizen} />,
    },
    {
        key: "family",
        title: "Семья",
        pageComponent: (citizen) => <CitizenFamilyBlock citizen={citizen} />,
    },
    {
        key: "education",
        title: "Образование",
        pageComponent: (citizen) => <CitizenEducationBlock citizen={citizen} />,
    },
    {
        key: "edit",
        title: "Редактировать",
        pageComponent: (citizen) => <CitizenEditBlock citizen={citizen} />,
    },
]

export const CitizenProfile = () => {
    const { id } = useParams();

    const [citizen, setCitizen] = useState({});
    const [currentOption, setCurrentOption] = useState(selectorOptions[0]);

    useEffect(() => {
        console.log(id)
        fetchDataById(id)
            .then(response => {
                setCitizen(response.data);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    useEffect(() => {
        console.log(citizen);
    }, [citizen]);

    const handleSelectorClick = (option) => {
        setCurrentOption(option);
    }

    return (
        <div className={"citizen-profile__container"}>
            <div className={"citizen-profile__header"}>
                <h1>{`${citizen.lastName} ${citizen.firstName} ${citizen.middleName}`}</h1>
            </div>
            <div className={"citizen-profile__content"}>
                <nav className={"citizen-profile__selector"}>
                    {selectorOptions.map((option, index) => (
                        <button
                            className={"selector-button"}
                            key={option.key}
                            disabled={option.key === currentOption.key}
                            onClick={(e) => handleSelectorClick(option)}>{option.title}
                        </button>
                    ))}
                </nav>
                {currentOption.pageComponent(citizen)}
            </div>
        </div>
    )
}