
// ФУНКЦИИ fetch В САМОМ НИЗУ

export const citizensRegistry = [
    {
        id: 1,
        firstName: "Иван",
        lastName: "Иванов",
        middleName: "Иванович",
        dateOfBirth: "1995-03-15",
        age: 28,
        gender: "Мужской",
        registrationDate: "2023-01-10",
        fitnessCategory: "А",
        maritalStatus: "Не женат",
        employmentType: "Инженер",
        passportDetails: {
            series: "4501",
            number: "123456",
            issuedBy: "ГУ МВД г. Москва",
            issueDate: "2015-05-10",
        },
        militarySpecialty: "102 — Командир подразделения",
        address: "Москва, ул. Тверская, д. 12, кв. 34",
        contactDetails: {
            phone: "+7-910-123-4567",
            email: "ivanov@gmail.com",
        },
    },
    {
        id: 2,
        firstName: "Анна",
        lastName: "Смирнова",
        middleName: "Петровна",
        dateOfBirth: "1998-07-22",
        age: 25,
        gender: "Женский",
        registrationDate: "2023-03-12",
        fitnessCategory: "Б",
        maritalStatus: "Замужем",
        employmentType: "Учитель",
        passportDetails: {
            series: "5602",
            number: "654321",
            issuedBy: "ГУ МВД г. Санкт-Петербург",
            issueDate: "2016-07-18",
        },
        militarySpecialty: "Нет",
        address: "Санкт-Петербург, ул. Невский проспект, д. 25, кв. 56",
        contactDetails: {
            phone: "+7-911-987-6543",
            email: "anna.smirnova@mail.ru",
        },
    },
    {
        id: 3,
        firstName: "Петр",
        lastName: "Петров",
        middleName: "Алексеевич",
        dateOfBirth: "1990-01-05",
        age: 33,
        gender: "Мужской",
        registrationDate: "2023-06-22",
        fitnessCategory: "В",
        maritalStatus: "Женат",
        employmentType: "Программист",
        passportDetails: {
            series: "4805",
            number: "789123",
            issuedBy: "ГУ МВД г. Казань",
            issueDate: "2014-02-14",
        },
        militarySpecialty: "201 — Системный администратор",
        address: "Казань, ул. Баумана, д. 5, кв. 17",
        contactDetails: {
            phone: "+7-903-345-6789",
            email: "petrov.p@gmail.com",
        },
    },
    {
        id: 4,
        firstName: "Мария",
        lastName: "Кузнецова",
        middleName: "Ивановна",
        dateOfBirth: "1999-11-30",
        age: 24,
        gender: "Женский",
        registrationDate: "2023-09-01",
        fitnessCategory: "Д",
        maritalStatus: "Не замужем",
        employmentType: "Студентка",
        passportDetails: {
            series: "4703",
            number: "456987",
            issuedBy: "ГУ МВД г. Екатеринбург",
            issueDate: "2018-11-01",
        },
        militarySpecialty: "Нет",
        address: "Екатеринбург, ул. Ленина, д. 15, кв. 4",
        contactDetails: {
            phone: "+7-912-654-3210",
            email: "masha.kuznetsova@mail.ru",
        },
    },
    {
        id: 5,
        firstName: "Алексей",
        lastName: "Сидоров",
        middleName: "Владимирович",
        dateOfBirth: "1992-06-10",
        age: 31,
        gender: "Мужской",
        registrationDate: "2023-04-15",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Инженер",
        passportDetails: {
            series: "4001",
            number: "654321",
            issuedBy: "ГУ МВД г. Самара",
            issueDate: "2013-06-20",
        },
        militarySpecialty: "301 — Строитель",
        address: "Самара, ул. Куйбышева, д. 10, кв. 2",
        contactDetails: {
            phone: "+7-912-345-9876",
            email: "alex.sidorov@mail.ru",
        },
    },
    {
        id: 6,
        firstName: "Виктория",
        lastName: "Зайцева",
        middleName: "Николаевна",
        dateOfBirth: "1996-09-15",
        age: 27,
        gender: "Женский",
        registrationDate: "2023-05-10",
        fitnessCategory: "Б",
        maritalStatus: "Замужем",
        employmentType: "Юрист",
        passportDetails: {
            series: "4508",
            number: "123789",
            issuedBy: "ГУ МВД г. Ростов-на-Дону",
            issueDate: "2015-09-15",
        },
        militarySpecialty: "Нет",
        address: "Ростов-на-Дону, ул. Ленина, д. 8, кв. 12",
        contactDetails: {
            phone: "+7-909-678-3456",
            email: "v.zaytseva@mail.ru",
        },
    },
    {
        id: 7,
        firstName: "Сергей",
        lastName: "Крылов",
        middleName: "Иванович",
        dateOfBirth: "1988-12-30",
        age: 35,
        gender: "Мужской",
        registrationDate: "2023-02-01",
        fitnessCategory: "В",
        maritalStatus: "Женат",
        employmentType: "Водитель",
        passportDetails: {
            series: "4803",
            number: "987654",
            issuedBy: "ГУ МВД г. Воронеж",
            issueDate: "2012-01-15",
        },
        militarySpecialty: "401 — Механик",
        address: "Воронеж, ул. Пушкина, д. 18, кв. 5",
        contactDetails: {
            phone: "+7-901-234-5678",
            email: "sergey.krylov@gmail.com",
        },
    },
    {
        id: 8,
        firstName: "Елена",
        lastName: "Морозова",
        middleName: "Павловна",
        dateOfBirth: "1994-03-22",
        age: 29,
        gender: "Женский",
        registrationDate: "2023-07-18",
        fitnessCategory: "Д",
        maritalStatus: "Не замужем",
        employmentType: "Фармацевт",
        passportDetails: {
            series: "5302",
            number: "456123",
            issuedBy: "ГУ МВД г. Новосибирск",
            issueDate: "2014-07-12",
        },
        militarySpecialty: "Нет",
        address: "Новосибирск, ул. Дзержинского, д. 30, кв. 7",
        contactDetails: {
            phone: "+7-913-567-8910",
            email: "e.morozova@yandex.ru",
        },
    },
    {
        id: 9,
        firstName: "Дмитрий",
        lastName: "Алексеев",
        middleName: "Сергеевич",
        dateOfBirth: "1993-11-11",
        age: 30,
        gender: "Мужской",
        registrationDate: "2023-08-03",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Предприниматель",
        passportDetails: {
            series: "4106",
            number: "789654",
            issuedBy: "ГУ МВД г. Казань",
            issueDate: "2015-11-15",
        },
        militarySpecialty: "501 — Логист",
        address: "Казань, ул. Кремлевская, д. 15, кв. 9",
        contactDetails: {
            phone: "+7-915-234-5678",
            email: "d.alekseev@mail.ru",
        },
    },
    {
        id: 10,
        firstName: "Ольга",
        lastName: "Волкова",
        middleName: "Андреевна",
        dateOfBirth: "1999-02-14",
        age: 24,
        gender: "Женский",
        registrationDate: "2023-09-10",
        fitnessCategory: "Г",
        maritalStatus: "Не замужем",
        employmentType: "Студентка",
        passportDetails: {
            series: "5203",
            number: "234567",
            issuedBy: "ГУ МВД г. Екатеринбург",
            issueDate: "2018-02-20",
        },
        militarySpecialty: "Нет",
        address: "Екатеринбург, ул. Победы, д. 5, кв. 3",
        contactDetails: {
            phone: "+7-908-456-7890",
            email: "olga.volkova@mail.ru",
        },
    },
    {
        id: 11,
        firstName: "Александр",
        lastName: "Васильев",
        middleName: "Петрович",
        dateOfBirth: "1989-10-20",
        age: 34,
        gender: "Мужской",
        registrationDate: "2023-03-15",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Электрик",
        passportDetails: {
            series: "4506",
            number: "654321",
            issuedBy: "ГУ МВД г. Омск",
            issueDate: "2012-05-18",
        },
        militarySpecialty: "302 — Электрик",
        address: "Омск, ул. Гагарина, д. 12, кв. 3",
        contactDetails: {
            phone: "+7-912-456-7890",
            email: "a.vasilyev@mail.ru",
        },
    },
    {
        id: 12,
        firstName: "Максим",
        lastName: "Семенов",
        middleName: "Викторович",
        dateOfBirth: "1991-07-10",
        age: 32,
        gender: "Мужской",
        registrationDate: "2023-04-22",
        fitnessCategory: "Б",
        maritalStatus: "Женат",
        employmentType: "Архитектор",
        passportDetails: {
            series: "4601",
            number: "987654",
            issuedBy: "ГУ МВД г. Краснодар",
            issueDate: "2013-07-14",
        },
        militarySpecialty: "303 — Архитектор",
        address: "Краснодар, ул. Победы, д. 15, кв. 7",
        contactDetails: {
            phone: "+7-913-234-5678",
            email: "max.semenov@gmail.com",
        },
    },
    {
        id: 13,
        firstName: "Владимир",
        lastName: "Михайлов",
        middleName: "Сергеевич",
        dateOfBirth: "1995-12-05",
        age: 28,
        gender: "Мужской",
        registrationDate: "2023-05-10",
        fitnessCategory: "А",
        maritalStatus: "Не женат",
        employmentType: "Инженер",
        passportDetails: {
            series: "4708",
            number: "654123",
            issuedBy: "ГУ МВД г. Тюмень",
            issueDate: "2015-12-18",
        },
        militarySpecialty: "304 — Инженер",
        address: "Тюмень, ул. Ленина, д. 30, кв. 5",
        contactDetails: {
            phone: "+7-915-678-2345",
            email: "v.mikhailov@yandex.ru",
        },
    },
    {
        id: 14,
        firstName: "Игорь",
        lastName: "Кузьмин",
        middleName: "Олегович",
        dateOfBirth: "1987-03-14",
        age: 36,
        gender: "Мужской",
        registrationDate: "2023-06-01",
        fitnessCategory: "В",
        maritalStatus: "Женат",
        employmentType: "Механик",
        passportDetails: {
            series: "4509",
            number: "321654",
            issuedBy: "ГУ МВД г. Челябинск",
            issueDate: "2010-03-20",
        },
        militarySpecialty: "401 — Механик",
        address: "Челябинск, ул. Дзержинского, д. 18, кв. 8",
        contactDetails: {
            phone: "+7-916-234-5678",
            email: "igor.kuzmin@mail.ru",
        },
    },
    {
        id: 15,
        firstName: "Николай",
        lastName: "Федоров",
        middleName: "Алексеевич",
        dateOfBirth: "1990-09-18",
        age: 33,
        gender: "Мужской",
        registrationDate: "2023-07-12",
        fitnessCategory: "Г",
        maritalStatus: "Женат",
        employmentType: "Учитель",
        passportDetails: {
            series: "4602",
            number: "654789",
            issuedBy: "ГУ МВД г. Уфа",
            issueDate: "2011-09-22",
        },
        militarySpecialty: "501 — Учитель",
        address: "Уфа, ул. Ленина, д. 25, кв. 12",
        contactDetails: {
            phone: "+7-908-123-4567",
            email: "nikolai.fedorov@mail.ru",
        },
    },
    {
        id: 16,
        firstName: "Антон",
        lastName: "Григорьев",
        middleName: "Владимирович",
        dateOfBirth: "1992-11-11",
        age: 31,
        gender: "Мужской",
        registrationDate: "2023-02-05",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Менеджер",
        passportDetails: {
            series: "4503",
            number: "345789",
            issuedBy: "ГУ МВД г. Пермь",
            issueDate: "2014-11-15",
        },
        militarySpecialty: "203 — Менеджер",
        address: "Пермь, ул. Куйбышева, д. 10, кв. 7",
        contactDetails: {
            phone: "+7-903-456-7890",
            email: "anton.grigoryev@mail.ru",
        },
    },
    {
        id: 17,
        firstName: "Василий",
        lastName: "Николаев",
        middleName: "Дмитриевич",
        dateOfBirth: "1994-05-01",
        age: 29,
        gender: "Мужской",
        registrationDate: "2023-03-25",
        fitnessCategory: "Б",
        maritalStatus: "Не женат",
        employmentType: "Программист",
        passportDetails: {
            series: "4605",
            number: "456123",
            issuedBy: "ГУ МВД г. Волгоград",
            issueDate: "2016-05-10",
        },
        militarySpecialty: "102 — Программист",
        address: "Волгоград, ул. Пушкина, д. 5, кв. 9",
        contactDetails: {
            phone: "+7-909-789-3456",
            email: "vasiliy.nikolaev@mail.ru",
        },
    },
    {
        id: 18,
        firstName: "Георгий",
        lastName: "Тихонов",
        middleName: "Андреевич",
        dateOfBirth: "1997-02-14",
        age: 26,
        gender: "Мужской",
        registrationDate: "2023-09-18",
        fitnessCategory: "Г",
        maritalStatus: "Не женат",
        employmentType: "Студент",
        passportDetails: {
            series: "5204",
            number: "123987",
            issuedBy: "ГУ МВД г. Саратов",
            issueDate: "2018-02-14",
        },
        militarySpecialty: "Нет",
        address: "Саратов, ул. Победы, д. 12, кв. 4",
        contactDetails: {
            phone: "+7-914-345-6789",
            email: "georgiy.tikhonov@mail.ru",
        },
    },
    {
        id: 19,
        firstName: "Владислав",
        lastName: "Попов",
        middleName: "Иванович",
        dateOfBirth: "1999-04-20",
        age: 24,
        gender: "Мужской",
        registrationDate: "2023-08-10",
        fitnessCategory: "А",
        maritalStatus: "Не женат",
        employmentType: "Дизайнер",
        passportDetails: {
            series: "4802",
            number: "987321",
            issuedBy: "ГУ МВД г. Иркутск",
            issueDate: "2019-04-25",
        },
        militarySpecialty: "303 — Дизайнер",
        address: "Иркутск, ул. Карла Маркса, д. 8, кв. 2",
        contactDetails: {
            phone: "+7-917-456-9876",
            email: "vladislav.popov@mail.ru",
        },
    },
    {
        id: 20,
        firstName: "Александр",
        lastName: "Васильев",
        middleName: "Петрович",
        dateOfBirth: "1989-10-20",
        age: 34,
        gender: "Мужской",
        registrationDate: "2023-03-15",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Электрик",
        passportDetails: {
            series: "4506",
            number: "654321",
            issuedBy: "ГУ МВД г. Омск",
            issueDate: "2012-05-18",
        },
        militarySpecialty: "302 — Электрик",
        address: "Омск, ул. Гагарина, д. 12, кв. 3",
        contactDetails: {
            phone: "+7-912-456-7890",
            email: "a.vasilyev@mail.ru",
        },
    },
    {
        id: 21,
        firstName: "Максим",
        lastName: "Семенов",
        middleName: "Викторович",
        dateOfBirth: "1991-07-10",
        age: 32,
        gender: "Мужской",
        registrationDate: "2023-04-22",
        fitnessCategory: "Б",
        maritalStatus: "Женат",
        employmentType: "Архитектор",
        passportDetails: {
            series: "4601",
            number: "987654",
            issuedBy: "ГУ МВД г. Краснодар",
            issueDate: "2013-07-14",
        },
        militarySpecialty: "303 — Архитектор",
        address: "Краснодар, ул. Победы, д. 15, кв. 7",
        contactDetails: {
            phone: "+7-913-234-5678",
            email: "max.semenov@gmail.com",
        },
    },
    {
        id: 22,
        firstName: "Владимир",
        lastName: "Михайлов",
        middleName: "Сергеевич",
        dateOfBirth: "1995-12-05",
        age: 28,
        gender: "Мужской",
        registrationDate: "2023-05-10",
        fitnessCategory: "А",
        maritalStatus: "Не женат",
        employmentType: "Инженер",
        passportDetails: {
            series: "4708",
            number: "654123",
            issuedBy: "ГУ МВД г. Тюмень",
            issueDate: "2015-12-18",
        },
        militarySpecialty: "304 — Инженер",
        address: "Тюмень, ул. Ленина, д. 30, кв. 5",
        contactDetails: {
            phone: "+7-915-678-2345",
            email: "v.mikhailov@yandex.ru",
        },
    },
    {
        id: 23,
        firstName: "Игорь",
        lastName: "Кузьмин",
        middleName: "Олегович",
        dateOfBirth: "1987-03-14",
        age: 36,
        gender: "Мужской",
        registrationDate: "2023-06-01",
        fitnessCategory: "В",
        maritalStatus: "Женат",
        employmentType: "Механик",
        passportDetails: {
            series: "4509",
            number: "321654",
            issuedBy: "ГУ МВД г. Челябинск",
            issueDate: "2010-03-20",
        },
        militarySpecialty: "401 — Механик",
        address: "Челябинск, ул. Дзержинского, д. 18, кв. 8",
        contactDetails: {
            phone: "+7-916-234-5678",
            email: "igor.kuzmin@mail.ru",
        },
    },
    {
        id: 24,
        firstName: "Николай",
        lastName: "Федоров",
        middleName: "Алексеевич",
        dateOfBirth: "1990-09-18",
        age: 33,
        gender: "Мужской",
        registrationDate: "2023-07-12",
        fitnessCategory: "Г",
        maritalStatus: "Женат",
        employmentType: "Учитель",
        passportDetails: {
            series: "4602",
            number: "654789",
            issuedBy: "ГУ МВД г. Уфа",
            issueDate: "2011-09-22",
        },
        militarySpecialty: "501 — Учитель",
        address: "Уфа, ул. Ленина, д. 25, кв. 12",
        contactDetails: {
            phone: "+7-908-123-4567",
            email: "nikolai.fedorov@mail.ru",
        },
    },
    {
        id: 25,
        firstName: "Антон",
        lastName: "Григорьев",
        middleName: "Владимирович",
        dateOfBirth: "1992-11-11",
        age: 31,
        gender: "Мужской",
        registrationDate: "2023-02-05",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Менеджер",
        passportDetails: {
            series: "4503",
            number: "345789",
            issuedBy: "ГУ МВД г. Пермь",
            issueDate: "2014-11-15",
        },
        militarySpecialty: "203 — Менеджер",
        address: "Пермь, ул. Куйбышева, д. 10, кв. 7",
        contactDetails: {
            phone: "+7-903-456-7890",
            email: "anton.grigoryev@mail.ru",
        },
    },
    {
        id: 26,
        firstName: "Василий",
        lastName: "Николаев",
        middleName: "Дмитриевич",
        dateOfBirth: "1994-05-01",
        age: 29,
        gender: "Мужской",
        registrationDate: "2023-03-25",
        fitnessCategory: "Б",
        maritalStatus: "Не женат",
        employmentType: "Программист",
        passportDetails: {
            series: "4605",
            number: "456123",
            issuedBy: "ГУ МВД г. Волгоград",
            issueDate: "2016-05-10",
        },
        militarySpecialty: "102 — Программист",
        address: "Волгоград, ул. Пушкина, д. 5, кв. 9",
        contactDetails: {
            phone: "+7-909-789-3456",
            email: "vasiliy.nikolaev@mail.ru",
        },
    },
    {
        id: 27,
        firstName: "Георгий",
        lastName: "Тихонов",
        middleName: "Андреевич",
        dateOfBirth: "1997-02-14",
        age: 26,
        gender: "Мужской",
        registrationDate: "2023-09-18",
        fitnessCategory: "Г",
        maritalStatus: "Не женат",
        employmentType: "Студент",
        passportDetails: {
            series: "5204",
            number: "123987",
            issuedBy: "ГУ МВД г. Саратов",
            issueDate: "2018-02-14",
        },
        militarySpecialty: "Нет",
        address: "Саратов, ул. Победы, д. 12, кв. 4",
        contactDetails: {
            phone: "+7-914-345-6789",
            email: "georgiy.tikhonov@mail.ru",
        },
    },
    {
        id: 28,
        firstName: "Владислав",
        lastName: "Попов",
        middleName: "Иванович",
        dateOfBirth: "1999-04-20",
        age: 24,
        gender: "Мужской",
        registrationDate: "2023-08-10",
        fitnessCategory: "А",
        maritalStatus: "Не женат",
        employmentType: "Дизайнер",
        passportDetails: {
            series: "4802",
            number: "987321",
            issuedBy: "ГУ МВД г. Иркутск",
            issueDate: "2019-04-25",
        },
        militarySpecialty: "303 — Дизайнер",
        address: "Иркутск, ул. Карла Маркса, д. 8, кв. 2",
        contactDetails: {
            phone: "+7-917-456-9876",
            email: "vladislav.popov@mail.ru",
        },
    },
    {
        id: 29,
        firstName: "Александр",
        lastName: "Васильев",
        middleName: "Петрович",
        dateOfBirth: "1989-10-20",
        age: 34,
        gender: "Мужской",
        registrationDate: "2023-03-15",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Электрик",
        passportDetails: {
            series: "4506",
            number: "654321",
            issuedBy: "ГУ МВД г. Омск",
            issueDate: "2012-05-18",
        },
        militarySpecialty: "302 — Электрик",
        address: "Омск, ул. Гагарина, д. 12, кв. 3",
        contactDetails: {
            phone: "+7-912-456-7890",
            email: "a.vasilyev@mail.ru",
        },
    },
    {
        id: 30,
        firstName: "Максим",
        lastName: "Семенов",
        middleName: "Викторович",
        dateOfBirth: "1991-07-10",
        age: 32,
        gender: "Мужской",
        registrationDate: "2023-04-22",
        fitnessCategory: "Б",
        maritalStatus: "Женат",
        employmentType: "Архитектор",
        passportDetails: {
            series: "4601",
            number: "987654",
            issuedBy: "ГУ МВД г. Краснодар",
            issueDate: "2013-07-14",
        },
        militarySpecialty: "303 — Архитектор",
        address: "Краснодар, ул. Победы, д. 15, кв. 7",
        contactDetails: {
            phone: "+7-913-234-5678",
            email: "max.semenov@gmail.com",
        },
    },
    {
        id: 31,
        firstName: "Владимир",
        lastName: "Михайлов",
        middleName: "Сергеевич",
        dateOfBirth: "2005-12-05",
        age: 18,
        gender: "Мужской",
        registrationDate: "2023-05-10",
        fitnessCategory: "А",
        maritalStatus: "Не женат",
        employmentType: "Инженер",
        passportDetails: {
            series: "4708",
            number: "654123",
            issuedBy: "ГУ МВД г. Тюмень",
            issueDate: "2024-12-18",
        },
        militarySpecialty: "304 — Инженер",
        address: "Тюмень, ул. Ленина, д. 30, кв. 5",
        contactDetails: {
            phone: "+7-915-678-2345",
            email: "v.mikhailov@yandex.ru",
        },
    },
    {
        id: 32,
        firstName: "Игорь",
        lastName: "Кузьмин",
        middleName: "Олегович",
        dateOfBirth: "1987-03-14",
        age: 36,
        gender: "Мужской",
        registrationDate: "2023-06-01",
        fitnessCategory: "В",
        maritalStatus: "Женат",
        employmentType: "Механик",
        passportDetails: {
            series: "4509",
            number: "321654",
            issuedBy: "ГУ МВД г. Челябинск",
            issueDate: "2010-03-20",
        },
        militarySpecialty: "401 — Механик",
        address: "Челябинск, ул. Дзержинского, д. 18, кв. 8",
        contactDetails: {
            phone: "+7-916-234-5678",
            email: "igor.kuzmin@mail.ru",
        },
    },
    {
        id: 33,
        firstName: "Николай",
        lastName: "Федоров",
        middleName: "Алексеевич",
        dateOfBirth: "1990-09-18",
        age: 33,
        gender: "Мужской",
        registrationDate: "2023-07-12",
        fitnessCategory: "Г",
        maritalStatus: "Женат",
        employmentType: "Учитель",
        passportDetails: {
            series: "4602",
            number: "654789",
            issuedBy: "ГУ МВД г. Уфа",
            issueDate: "2011-09-22",
        },
        militarySpecialty: "501 — Учитель",
        address: "Уфа, ул. Ленина, д. 25, кв. 12",
        contactDetails: {
            phone: "+7-908-123-4567",
            email: "nikolai.fedorov@mail.ru",
        },
    },
    {
        id: 34,
        firstName: "Антон",
        lastName: "Григорьев",
        middleName: "Владимирович",
        dateOfBirth: "1962-11-11",
        age: 61,
        gender: "Мужской",
        registrationDate: "2023-02-05",
        fitnessCategory: "А",
        maritalStatus: "Женат",
        employmentType: "Менеджер",
        passportDetails: {
            series: "4503",
            number: "345789",
            issuedBy: "ГУ МВД г. Пермь",
            issueDate: "1984-11-15",
        },
        militarySpecialty: "203 — Менеджер",
        address: "Пермь, ул. Куйбышева, д. 10, кв. 7",
        contactDetails: {
            phone: "+7-903-456-7890",
            email: "anton.grigoryev@mail.ru",
        },
    },
    {
        id: 35,
        firstName: "Василий",
        lastName: "Николаев",
        middleName: "Дмитриевич",
        dateOfBirth: "1974-05-01",
        age: 49,
        gender: "Мужской",
        registrationDate: "2023-03-25",
        fitnessCategory: "Б",
        maritalStatus: "Не женат",
        employmentType: "Программист",
        passportDetails: {
            series: "4605",
            number: "456123",
            issuedBy: "ГУ МВД г. Волгоград",
            issueDate: "1996-05-10",
        },
        militarySpecialty: "102 — Программист",
        address: "Волгоград, ул. Пушкина, д. 5, кв. 9",
        contactDetails: {
            phone: "+7-909-789-3456",
            email: "vasiliy.nikolaev@mail.ru",
        },
    },
    {
        id: 36,
        firstName: "Георгий",
        lastName: "Тихонов",
        middleName: "Андреевич",
        dateOfBirth: "1977-02-14",
        age: 46,
        gender: "Мужской",
        registrationDate: "2023-09-18",
        fitnessCategory: "Г",
        maritalStatus: "Не женат",
        employmentType: "Студент",
        passportDetails: {
            series: "5204",
            number: "123987",
            issuedBy: "ГУ МВД г. Саратов",
            issueDate: "1998-02-14",
        },
        militarySpecialty: "Нет",
        address: "Саратов, ул. Победы, д. 12, кв. 4",
        contactDetails: {
            phone: "+7-914-345-6789",
            email: "georgiy.tikhonov@mail.ru",
        },
    },
    {
        id: 37,
        firstName: "Владислав",
        lastName: "Попов",
        middleName: "Иванович",
        dateOfBirth: "1969-04-20",
        age: 54,
        gender: "Мужской",
        registrationDate: "2023-08-10",
        fitnessCategory: "А",
        maritalStatus: "Не женат",
        employmentType: "Дизайнер",
        passportDetails: {
            series: "4802",
            number: "987321",
            issuedBy: "ГУ МВД г. Иркутск",
            issueDate: "1989-04-25",
        },
        militarySpecialty: "303 — Дизайнер",
        address: "Иркутск, ул. Карла Маркса, д. 8, кв. 2",
        contactDetails: {
            phone: "+7-917-456-9876",
            email: "vladislav.popov@mail.ru",
        },
    },
];

function randomIndex() {
    return Math.floor(Math.random() * (citizensRegistry.length - 1));
}

const mockData = Array.from({ length: 100000 }, (_, id) => {
    const randomPerson = citizensRegistry.at(randomIndex());

    return {
        // id: Math.floor(Math.random() * (100000)) + 1,
        id: id + 1,
        firstName: randomPerson.firstName,
        lastName: randomPerson.lastName,
        middleName: randomPerson.middleName,
        dateOfBirth: randomPerson.dateOfBirth,
        age: randomPerson.age,
        gender: randomPerson.gender,
        registrationDate: citizensRegistry.at(randomIndex()).registrationDate,
        fitnessCategory: citizensRegistry.at(randomIndex()).fitnessCategory,
        maritalStatus: randomPerson.maritalStatus,
        employmentType: citizensRegistry.at(randomIndex()).employmentType,
        passportDetails: {
            series: `${Math.floor(Math.random() * 9999)}`,
            number: `${Math.floor(Math.random() * 900000) + 100000}`,
            issuedBy: citizensRegistry.at(randomIndex()).passportDetails.issuedBy,
            issueDate: new Date(
                Date.now() - Math.floor(Math.random() * 100000000000)
            ).toISOString().split("T")[0],
        },
        militarySpecialty: citizensRegistry.at(randomIndex()).militarySpecialty,
        address: citizensRegistry.at(randomIndex()).address,
        contactDetails: {
            phone: `+7-922-${Math.floor(Math.random() * 900)}-12${Math.floor(Math.random() * 10)}`,
            email: citizensRegistry.at(randomIndex()).contactDetails.email,
        },
    }
});

export const fetchData = (page, pageSize, filters = [], sorter) => {
    const total = mockData.length;

    const filteredData = mockData.filter((item) => {
        return filters.every(({ key, value }) => {
            if (value === null) {
                return true;
            }
            if (Array.isArray(value)) {
                return value.includes(item[key]);
            }
            return item[key]?.toString().toLowerCase().includes(value.toString().toLowerCase());
        });
    });

    const sortedData = [...filteredData];
    if (sorter && sorter.field && sorter.order) {
        const { field, order } = sorter;
        sortedData.sort((a, b) => {
            const valA = a[field];
            const valB = b[field];

            if (order === "ascend") {
                return valA > valB ? 1 : valA < valB ? -1 : 0;
            } else if (order === "descend") {
                return valA < valB ? 1 : valA > valB ? -1 : 0;
            }
            return 0;
        });
    }

    const totalFiltered = filteredData.length;

    const paginatedData = filteredData.slice((page - 1) * pageSize, page * pageSize);

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: paginatedData,
                pagination: {
                    current: page,
                    pageSize,
                    total: totalFiltered,
                },
            });
        }, Math.floor(Math.random() * (500 - 100 + 1)) + 100);
    });
};

export const fetchAllData = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: mockData,
            });
        }, Math.floor(Math.random() * (3000 - 900 + 1)) + 900);
    });
};

export const fetchDataById = (id) => {
    if (!mockData || mockData.length === 0) {
        console.error("mockData is empty or undefined");
    }
    const numericId = Number(id);

    const found = mockData.find((value) => value.id === numericId);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (found) {
                resolve({
                    data: found,
                });
            } else {
                reject(new Error(`Citizen with id ${id} not found`));
            }
        }, Math.floor(Math.random() * (300 - 100 + 1)) + 100); // Random delay between 100-300ms
    });
};
