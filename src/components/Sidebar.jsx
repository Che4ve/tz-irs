import '../styles/sidebar.scss';

import React, {useEffect, useRef} from "react";
import {SidebarData} from "../data/SidebarData";
import {Link, useLocation} from "react-router-dom";

import { TbNumber48Small } from "react-icons/tb";
import {getFirstUrlSegment} from "../configs/default";

export const Sidebar = () => {
    const location = useLocation();

    // STATES
    const ref = useRef(null);
    const [expanded, setExpanded] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [locationSegment, setLocationSegment] = React.useState(getFirstUrlSegment(location.pathname));
    // -----

    // EFFECTS
    useEffect(() => {
        document.addEventListener('click', handleMouseClick);

        return () => {
            document.removeEventListener('click', handleMouseClick);
        }
    }, []);

    useEffect(() => {
        changeSelectedElement(location.pathname);
    }, [location.pathname]);
    // -----

    // HANDLERS
    const handleToggle = () => {
        setExpanded(!expanded);
    }

    const handleMouseClick = (event) => {
        const {target: eventTarget} = event;
        if (!ref.current.contains(eventTarget)) {
            setExpanded(false);
        }
    }

    const changeSelectedElement = (locationPath) => {
        if (!SidebarData.at(0) || !ref) {
            return;
        }
        const firstSegment = getFirstUrlSegment(locationPath);
        console.log(firstSegment)
        const className = SidebarData.at(0).className;
        const foundIndex = SidebarData.findIndex((item) => {
            return item.path === "/" + firstSegment;
        })
        ref.current.querySelectorAll(`.${className}`).forEach(item => {
            item.classList.toggle("selected", false);
        })
        if (foundIndex === -1) {
            return;
        }
        const selected = ref.current.querySelector(`#${className}-${foundIndex}`)
        selected.classList.toggle("selected", true);
        setSelectedIndex(foundIndex);
        setLocationSegment(getFirstUrlSegment(location.pathname));
    }

    // -----

    return (
        <nav className={`sidebar${expanded ? ' expanded' : ''}`} ref={ref}>
            <div className={`sidebar__header`}>
                <TbNumber48Small/>
                <h1></h1>
            </div>
            <input className="sidebar__toggle" type="checkbox" onClick={() => {
                handleToggle()
            }}></input>
            <ul className={'sidebar__items'}>
                { SidebarData && SidebarData.map((item, index) => {
                    return (
                        <Link to={`${item.path ?? '/'}`} key={index}>
                            <li className={`${item.className} ${item.addCLass}`} id={`${item.className}-${index}`} key={index} >
                                {item.icon ?? <></>}
                                <span>{item.title ?? ""}</span>
                            </li>
                        </Link>
                    )
                }) }
            </ul>
        </nav>
    )
}