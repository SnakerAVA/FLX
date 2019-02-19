function userCard(index) {
    let key = index;
    const minKey = 1;
    const maxKey = 3;
    if (index < minKey) {
        key = minKey;
    }
    if (index > maxKey) {
        key = maxKey;
    }

    const historyLogs = [];
    let transactionLimit = 100;
    let balance = 100;

    const logging = (operationType, credits, date) => {
        const pad = '00';
        const day = (pad + date.getDate()).slice(-pad.length);
        const month = (pad + date.getMonth()).slice(-pad.length);
        const year = date.getFullYear();
        const timeStartSymbol = 0;
        const timeFinishSymbol = 8;
        const time = date.toTimeString().substr(timeStartSymbol, timeFinishSymbol);
        historyLogs.push({
            credits,
            operationType,
            operationTime: `${day}/${month}/${year}, ${time}`
        });
    };

    const getCardOption = () => {
        return {
            key,
            transactionLimit,
            balance,
            historyLogs
        }
    };

    const putCredits = (amountOfCredits) => {
        let operationType = 'Received credits';
        balance += amountOfCredits;
        logging(operationType, amountOfCredits, new Date());
    };

    const takeCredits = (amountOfCredits) => {
        if (transactionLimit > amountOfCredits &&
            balance > amountOfCredits) {
            let operationType = 'Withdrawal of credits';
            balance -= amountOfCredits;
            logging(operationType, amountOfCredits, new Date());
        } else {
            console.error('Your transaction limit and remaining balance should ' +
                'be greater than credits you want to take');
        }
    };

    const transferCredits = (creditsToTransfer, recipientCard) => {
        const taxes = 0.005;
        const creditsToTransferWithTaxes = creditsToTransfer + creditsToTransfer * taxes;
        if (transactionLimit > creditsToTransferWithTaxes &&
            balance > creditsToTransferWithTaxes) {
            takeCredits(creditsToTransferWithTaxes);
            recipientCard.putCredits(creditsToTransfer);
        } else {
            console.error('Your transaction limit and remaining balance should ' +
                'be greater than credits you want to take');
        }
    };

    const setTransactionLimit = (currentTransactionLimit) => {
        let operationType = 'Transaction limit change';
        transactionLimit = currentTransactionLimit;
        logging(operationType, currentTransactionLimit, new Date());
    };

    return {
        getCardOption,
        setTransactionLimit,
        transferCredits,
        putCredits,
        takeCredits,
    }
}

class UserAccount {
    constructor(name) {
        this.cards = [];
        this.name = name;
    }

    addCard() {
        const maxCardsAmount = 3;
        if (this.cards.length < maxCardsAmount) {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }

    getCardByKey(index) {
        return this.cards[index].getCardOption();
    }
}