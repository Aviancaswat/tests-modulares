const userNamesData: Array<string> = [
    "john doe",
    "jane smith",
    "alexander wilson",
    "maria gomez",
    "roberto perez",
    "lucia martinez",
    "david hernandez",
    "carla jones",
    "luis vega",
    "susan brown"
];

const lastNamesData: Array<string> = [
    "Doe",
    "Smith",
    "Wilson",
    "Gomez",
    "Perez",
    "Martinez",
    "Hernandez",
    "Jones",
    "Vega",
    "Brown"
];

const emailsData: Array<string> = [
    "monitoreo.digital@avianca.com"
];

const phoneNumbersData: Array<string> = [
    "123456",
    "987654",
    "654321",
    "321654",
    "987123",
    "456789",
    "102938",
    "112233",
    "778899",
    "334455"
];

const getDataRandom = (data: Array<string> = []): string => {
    return data[Math.floor(Math.random() * data.length)];
}

const getValueElement = (element: HTMLInputElement): string => {
    let value: string | null = null;
    if (element.name === "email") {
        value = getDataRandom(emailsData);
    }
    else if (element.name === "phone_phoneNumberId") {
        value = getDataRandom(phoneNumbersData);
    }
    else if (element.id.includes("IdFirstName")) {
        value = getDataRandom(userNamesData);
    }
    else {
        value = getDataRandom(lastNamesData);
    }
    return value;
}

export { emailsData, lastNamesData, phoneNumbersData, getDataRandom, getValueElement, userNamesData };