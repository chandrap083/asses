const mongoose = require('mongoose');
const Transaction = require('./model/transaction');

const transactions = [
    {
        "id": "1",
        "date": 1639502071000,
        "sender": {
            "firstName": "John",
            "lastName": "Smith",
            "dateOfBirth": "1970-01-23",
            "IDNumber": "100001"
        },
        "recipient": {
            "firstName": "Jane",
            "lastName": "doe",
            "email": "janedoe@company.com",
            "accountNumber": "200001",
            "bank": "TD"
        },
        "amount": 100.00,
        "currencyCd": "CAD",
        "comments": "Utility bill",
        "status": "COMPLETED"
    },
    {
        "id": "2",
        "date": 1639486575000,
        "sender": {
            "firstName": "John2",
            "lastName": "Smith",
            "dateOfBirth": "1970-02-23",
            "IDNumber": "100001"
        },
        "recipient": {
            "firstName": "Jane2",
            "lastName": "doe",
            "email": "janedoe@company2.com",
            "accountNumber": "200001",
            "bank": "TD"
        },
        "amount": 100.00,
        "currencyCd": "USD",
        "comments": "Rent",
        "status": "PENDING"
    },
    {
        "id": "3",
        "date": 1639478930000,
        "sender": {
            "firstName": "John3",
            "lastName": "Smith",
            "dateOfBirth": "1970-03-23",
            "IDNumber": "100001"
        },
        "recipient": {
            "firstName": "Jane3",
            "lastName": "doe",
            "email": "janedoe@company3.com",
            "accountNumber": "200001",
            "bank": "CIBC"
        },
        "amount": 300.00,
        "currencyCd": "USD",
        "comments": "Insurance Premium",
        "status": "IN PROGRESS"
    },
    {
        "id": "4",
        "date": 1638997755000,
        "sender": {
            "firstName": "John4",
            "lastName": "Smith",
            "dateOfBirth": "1970-04-23",
            "IDNumber": "100001"
        },
        "recipient": {
            "firstName": "Jane4",
            "lastName": "doe",
            "email": "janedoe@company4.com",
            "accountNumber": "200001",
            "bank": "RBC"
        },
        "amount": 200.00,
        "currencyCd": "CAD",
        "comments": "Cash Transfer",
        "status": "REJECTED"
    }
];

mongoose.connect('mongodb://localhost:27017/local', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    Transaction.insertMany(transactions)
        .then(() => {
            console.log('Data loaded');
            mongoose.disconnect();
        })
        .catch(err => {
            console.error('Error loading data', err);
        });
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});