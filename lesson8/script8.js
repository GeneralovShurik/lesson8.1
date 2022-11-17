// создание элемента
//сздание элемента != его добавлению на страницу
const a = document.createElement('a');
a.href = 'http://google.com';
a.innerText = 'click me';

// добавление в HTML
document.body.appendChild(a);
//append(<1>,<2>,<3>) - добавление нескольких элементов;

const div = document.createElement('div');
div.innerText = 'Hello!';

//перед тегом 'а'
document.body.insertBefore(div, a);

/* <td class="avatar">
                <img src="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-1.jpg">
            </td>
            <td>Artem</td>
            <td><a href="mailto:fake@gmail.com">fake@gmail.com</a></td> */
const users = [
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDk41w14p-LTsGTWoD8CFM8PK2MDjW03TAnQ&usqp=CAU',
        name: 'Lev',
        email: 'lev@gmail.com',
    },
    {
        avatar: 'https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-1.jpg',
        name: 'Volk',
        email:'Volk@gmail.com',
    },
    {
        avatar: 'https://bipbap.ru/wp-content/uploads/2017/10/117003_530c63ceb769d530c63ceb76d4-640x432.jpeg',
        name: 'Yshasty',
        email: 'Yshasty@gmail.com',
    },
    {
        avatar: 'https://vjoy.cc/wp-content/uploads/2019/07/1-29.jpg',
        name: 'Belka',
        email: 'Belka@gmail.com',
    },
    {
        avatar: 'https://i.artfile.ru/2048x1365_913564_[www.ArtFile.ru].jpg',
        name: 'Barsuk',
        email: 'Barsuk@gmail.com',
    },
    {
        avatar: 'https://avatarko.ru/img/kartinka/2/zhivotnye_igra_kot_1816.jpg',
        name: 'Cat',
        email: 'ProdamSkafandr@gmail.com',
    },
    {
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOr256dBYvGtAJ5PT8ok3I8RNpevruUYUzQ&usqp=CAU',
        name: 'Nuh',
        email: 'Nuh-bazuka@gmail.com',
    },
] 
const tbody = document.getElementById('users');
for (let user of users) {
    const tr = document.createElement('tr');
    const tdAvatar = document.createElement('td');
    tdAvatar.classList.add('avatar');
    const img = document.createElement('img');
    img.src = user.avatar;
    tdAvatar.appendChild(img);

    const tdName = document.createElement('td');
    tdName.innerText = user.name;
    const tdEmail = document.createElement('td');
    const a = document.createElement('a');
    a.innerText = user.email;
    a.href = `mailto:${user.email}`;
    tdEmail.appendChild(a);

    tr.append(tdAvatar, tdName, tdEmail);
    tbody.appendChild(tr);
}       



/////////////////////////
//внутренние хранилища
// key + value

localStorage.setItem('test','value');
localStorage.setItem('test2','value2');
localStorage.setItem('test','test_value');//перепишет то что было

const d = localStorage.getItem('test');
console.log(d);
localStorage.removeItem('test2');

//
//sessionStorage.setItem('pass','1234');