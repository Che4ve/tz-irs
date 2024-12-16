import {Space, Timeline} from "antd";


export const CitizenEducationBlock = () => {

    return (
        <div className={"citizen-profile-page education"}>
            <div className="citizen-profile-page__left-section">
                <h2>Уровень образования</h2>
                <span>Высшее (бакалавриат)</span>
                <h2>Хронология обучения</h2>
                <Space style={{marginTop: "20px"}}>
                    <Timeline
                        mode={'left'}
                        items={[
                            {
                                color: "gray",
                                label: '20**-**-**',
                                children: 'Начал обучение в МБОУ СОШ №**',
                            },
                            {
                                color: "green",
                                label: '20**-**-**',
                                children: 'Закончил обучение в МБОУ СОШ №**',
                            },
                            {
                                color: "gray",
                                label: '20**-**-**',
                                children: 'Начал обучение в ВУЗе ...',
                            },
                            {
                                color: "gray",
                                label: '20**-**-**',
                                children: 'Вышел в академический отпуск',
                            },
                            {
                                color: "gray",
                                label: '20**-**-**',
                                children: 'Вышел из академического отпуска',
                            },
                            {
                                color: "green",
                                label: '20**-**-**',
                                children: 'Закончил обучение в ВУЗе ...',
                            },
                        ]}
                    />
                </Space>
            </div>
            <div className={"citizen-profile-page__right-section"}>
                <h2>Высшее образование</h2>
                <span>Специальность: Прикладная математика и информатика</span>
                <br/>
                <span>...</span>
            </div>
        </div>
    )
}