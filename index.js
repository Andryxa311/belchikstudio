const express = require('express')
const cors = require('cors')

const app = express()

const TelegramBot = require('node-telegram-bot-api');
const token = '6681738989:AAFNhCWDYoVwIelUFUD1zR6GhQb-olVPp_M';
const bot = new TelegramBot(token, { polling: true });

let zayavki = 0
let metod
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/api', (request, response) => {
    zayavki++
    console.log(request.body['com_metod']);

    if (request.body['com_metod'] == 'tg') {
        metod = "Телеграмм"
    } else if (request.body['com_metod'] == 'wts') {
        metod = "Вотсапп"
    } else if (request.body['com_metod'] == 'viber') {
        metod = "Вибер"
    } else if (request.body['com_metod'] == 'mail') {
        metod = "Почта"
    }
    bot.sendMessage(530751804,`Заявка: ${zayavki}\n\nИмя клиента: ${request.body['name']}\nТелефон клиента: ${request.body['phone']}\n  Способ связи: ${metod}`)
    .catch(err => {
        console.log(err.code);
        console.log(err.response.body);
    })
    response.status(201)
    response.end()
})
app.listen(3000)


bot.sendMessage(530751804, 'Сервер перезагрузился, проверь на всякий случай.\n\n У тебя большой член!')
.catch(err => {
    console.log(err.code);
    console.log(err.response.body);
})










// app.get('/api', (req,res) => {
//     res.status(201).json(jsson)
// })
// app.get('*', (request, response) => {
//     response.status(200)
//     bot.sendMessage(530751804,"Сообщение дурака").catch(err => {
//         console.log(err.code);
//         console.log(err.response.body);
//     })
// })