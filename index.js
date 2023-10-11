const express = require('express')
const cors = require('cors')

const app = express()

const TelegramBot = require('node-telegram-bot-api');
const token = '6681738989:AAFNhCWDYoVwIelUFUD1zR6GhQb-olVPp_M';
const bot = new TelegramBot(token, { polling: true });


// app.get('/api', (req,res) => {
//     res.status(201).json(jsson)
// })

app.use(cors());
// app.get('*', (request, response) => {
//     response.status(200)
//     bot.sendMessage(530751804,"Сообщение дурака").catch(err => {
//         console.log(err.code);
//         console.log(err.response.body);
//     })
// })
app.post('*', cors(), (request, response) => {
    response.status(200)
    bot.sendMessage(530751804,"Сообщение дурака").catch(err => {
        console.log(err.code);
        console.log(err.response.body);
    })
})
app.listen(3000)

// bot.on('message', async massage => {
//     const text = massage.text;
//     const chatID = massage.from.id;
//     const is_bot = massage.from.is_bot;
//     const user_name = massage.from.username;
//     const date = massage.date;
//     const massageID = massage.message_id;
    
//     console.log(text);
//     console.log(chatID);
//     console.log(is_bot);
//     console.log(user_name);
//     console.log(date);
//     console.log(massageID);

//     bot.sendMessage(chatID,"Ну че здарова ебать").catch(err => {
//         console.log(err.code);
//         console.log(err.response.body);
//     })
// })
// bot.sendMessage(530751804,"Ну че здарова ебать").catch(err => {
//     console.log(err.code);
//     console.log(err.response.body);
// })