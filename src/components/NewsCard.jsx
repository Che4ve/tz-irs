import "../styles/newsCard.scss";

import React, {useState} from "react";
import {Card, Button, Typography, Badge} from "antd";

const { Title, Text } = Typography;

export const NewsCard = ({ newsItem }) => {

    const [checked, setChecked] = useState(true);

    return (
        <div className="news-card__container">
            <Badge style={{scale: "2"}} dot={checked} size={"default"}>
            <Card
                aria-disabled={true}
                // hoverable
                className="news-card"
                bordered={true}
                style={{
                    marginBottom: 16,
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div className="news-card__header">
                    <Title level={4} style={{ margin: 0 }}>
                        {newsItem.title}
                    </Title>
                    <Text type="secondary">{newsItem.date}</Text>
                </div>

                <div className="news-card__content">
                    <Text>{newsItem.description}</Text>
                </div>

                <div className="news-card__actions" style={{ marginTop: 16 }}>
                    <Button type="primary" onClick={() => console.log("Opening details")}>
                        Подробнее
                    </Button>
                    { checked &&
                    <Button disabled={!checked} type="link" danger onClick={() => setChecked(false)}>
                        Пометить как прочитанное
                    </Button>
                    }
                </div>
            </Card>
            </Badge>
        </div>
    );
};
