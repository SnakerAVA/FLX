function discountFunction(money, discount) {
    money = +prompt('Insert money', '');
    discount = +prompt('Insert your discount', '');
    if (money < 0 || money > 9999999 || discount < 0 || discount > 99) {
        return console.log('Invalid input data')
    }
    money.toFixed(2)
    discount.toFixed(2)
    let priceWithDiscount = (money - money * discount / 100).toFixed(2)
    let savedMoney = (money * discount / 100).toFixed(2)
    console.log(`Price without discount: ${money} ` +
        `\nDiscount: ${discount}%` +
        `\nPrice with discount: ${priceWithDiscount}` +
        `\nSaved: ${savedMoney}`)
}
discountFunction()