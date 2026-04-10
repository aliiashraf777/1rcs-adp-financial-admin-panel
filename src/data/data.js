import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";


export const navigationLinks = [
    {
        id: 1,
        title: 'Home',
        image: iconsImgs.home
    },
    {
        id: 2,
        title: 'Budget',
        image: iconsImgs.budget
    },
    {
        id: 3,
        title: 'Transactions',
        image: iconsImgs.plane
    },
    {
        id: 4,
        title: 'Subscriptions',
        image: iconsImgs.wallet
    },
    {
        id: 5,
        title: 'Loans',
        image: iconsImgs.bills
    },
    {
        id: 6,
        title: 'Reports',
        image: iconsImgs.report
    },
    {
        id: 7,
        title: 'Savings',
        image: iconsImgs.wallet
    },
    {
        id: 8,
        title: 'Financial Advice',
        image: iconsImgs.wealth
    },
    {
        id: 9,
        title: 'Account',
        image: iconsImgs.user
    },
    {
        id: 10,
        title: 'Settings',
        image: iconsImgs.gears
    }
];


export const transactions = [
    {
        id: 11,
        image: personsImgs.person_four,
        name: 'Sarah Parker',
        date: '23/12/04',
        amount: '22,000'
    },
    {
        id: 12,
        image: personsImgs.person_three,
        name: 'Kristine Carter',
        date: '23/07/21',
        amount: '20,000'
    },
    {
        id: 13,
        image: personsImgs.person_two,
        name: 'Irene Doe',
        date: '23/08/25',
        amount: '30,000'
    }
];


export const reportData = [
    {
        id: 14,
        month: 'Jan',
        // value1: 45,
        valMonth: 45,
        // value2: null
        valReport: null
    },
    {
        id: 15,
        month: 'Feb',
        valMonth: 45,
        valReport: 60
    },
    {
        id: 16,
        month: 'Mar',
        valMonth: 45,
        valReport: null
    },
    {
        id: 17,
        month: 'Apr',
        valMonth: 45,
        valReport: null
    },
    {
        id: 18,
        month: 'May',
        valMonth: 45,
        valReport: null,
    }
];


export const budget = [
    {
        id: 19,
        title: 'Subscriptions',
        type: 'Automated',
        amount: 22000
    },
    {
        id: 20,
        title: 'Loan Payment',
        type: 'Automated',
        amount: 16000
    },
    {
        id: 21,
        title: 'Foodstuff',
        type: 'Automated',
        amount: 20000
    },
    {
        id: 22,
        title: 'Subscriptions',
        type: null,
        amount: 10000
    },
    {
        id: 23,
        title: 'Subscriptions',
        type: null,
        amount: 40000
    }
];


export const subscriptions = [
    {
        id: 24,
        title: 'LinkedIn',
        due_date: '23/12/04',
        amount: '20,000'
    },
    {
        id: 25,
        title: 'Netflix',
        due_date: '23/12/10',
        amount: '5,000'
    },
    {
        id: 26,
        title: 'DSTV',
        due_date: '23/12/22',
        amount: '2,000'
    }
];
 

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        title: 'Pay kid bros fees',
        savings_amount: 250000,
        date_taken: '23/12/22',
        amount_left: 40000
    }
];