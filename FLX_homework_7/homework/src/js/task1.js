let date = new Date().getHours();
let login = prompt('Your login:');
if (!login) alert('Canceled.');
else {
    if (login.length < 4)
        alert('I don`t know any users having name length less than 4 symbols');
    else if (login === 'Admin') {
        let password = prompt('Your password:');
        if (!password) alert('Canceled.');
        if (password === 'RootPass') {
            if (date < 20) alert('Good day, dear Admin!');
            else alert('Good evening, dear Admin!');
            
        } else alert('Wrong password');

    } else if (login === 'User') {
        let password = prompt('Your password:');
        if (!password) alert('Canceled.');
        if (password === 'UserPass') {
            if (date < 20) alert('Good day, dear User!');
            else alert('Good evening, dear User!');

        } else alert('Wrong password');

    } else if (login !== 'Admin') alert('I don`t know you');
    else if (login !== 'User') alert('I don`t know you');
}