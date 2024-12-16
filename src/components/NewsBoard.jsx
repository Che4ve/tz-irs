import React from "react";
import { NewsCard } from "./NewsCard";

const newsList = [
    {
        title: "Новый приказ по обеспечению",
        date: "15.12.2024",
        description: "Всем сотрудникам ознакомиться с новым приказом об изменении условий службы.",
    },
    {
        title: "Объявление о собрании",
        date: "14.12.2024",
        description: "Собрание сотрудников состоится 16 декабря в 10:00 в конференц-зале.",
    },
];

export const NewsBoard = () => {
    return (
        <div className="news-board__container" style={{ padding: "16px" }}>
            {/*<h2>Объявления/Приказы</h2>*/}
            {newsList.map((newsItem, index) => (
                <NewsCard key={index} newsItem={newsItem} />
            ))}
        </div>
    );
};
