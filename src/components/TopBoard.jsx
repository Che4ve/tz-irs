import "../styles/topboard.scss";
import { FaSearch } from "react-icons/fa";

export const TopBoard = () => {

    const handleNotificationClick = () => {

    }

    const handleProfileClick = () => {

    }

    return (
        <div className={'top-board'}>
            <div className={"top-board__control-section"}>
                <div className={'search-container'}>
                    <FaSearch />
                    <input placeholder={"Поиск"}/>
                </div>
                <button className={"notification-button"} onClick={handleNotificationClick}></button>
                <button className={"profile-button"} onClick={handleProfileClick}></button>
            </div>
        </div>
    )
}