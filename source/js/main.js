window.addEventListener('orientationchange', () => {
        window.location.reload()
})


let number_of_multiply;
let window_width = window. innerWidth;

if (window_width < 768) {
    number_of_multiply = 4;    
} else {
    number_of_multiply = 3
}



let sixth_slider_css_left = document.getElementById("sixth_slider");
let now_position = window.getComputedStyle(sixth_slider_css_left);
now_position = now_position.getPropertyValue("left");
now_position = now_position.substring(0, now_position.length - 2);
now_position = Number(now_position);

let sixth_img = document.getElementById("sixth_slide_img_1");
let sixth_img_width = window.getComputedStyle(sixth_img);
sixth_img_width = sixth_img_width.getPropertyValue("width");
sixth_img_width = sixth_img_width.substring(0, sixth_img_width.length - 2);
let size_transform = Number(sixth_img_width);
sixth_img_width = Number(sixth_img_width*-1);

document.getElementById('six_arrow_left').addEventListener('click',() => {
    if (now_position != 0) {
        document.getElementById("sixth_slider").style.left = now_position + size_transform + "px";
        now_position = now_position + size_transform;   
    }})

document.getElementById('six_arrow_right').addEventListener('click',() => {
    if(now_position == sixth_img_width*7) {
        document.getElementById("sixth_slider").style.left = "0px";
        now_position = 0;
    } else {
        document.getElementById("sixth_slider").style.left = now_position - size_transform + "px";
        now_position = now_position - size_transform;
    }
})



let seven_slider_css_left = document.getElementById("seven_slide_block");
let seven_now_position = window.getComputedStyle(sixth_slider_css_left);
seven_now_position = seven_now_position.getPropertyValue("left");
seven_now_position = seven_now_position.substring(0, seven_now_position.length - 2);
seven_now_position = Number(seven_now_position);
document.getElementsByClassName("select_block")[0].style.height
let seven_fon_block = document.getElementsByClassName("seven_fon_slide")[0];
// console.log(seven_fon_block);
let seven_img_width = window.getComputedStyle(seven_fon_block);
seven_img_width = seven_img_width.getPropertyValue("width");
seven_img_width = seven_img_width.substring(0, seven_img_width.length - 2);
let seven_size_transform = Number(seven_img_width);
seven_img_width = Number(seven_img_width*-1);

document.getElementById('seven_btn_left').addEventListener('click',() => {
    if (seven_now_position != 0) {
        document.getElementById("seven_slide_block").style.left = seven_now_position + seven_size_transform + "px";
        seven_now_position = seven_now_position + seven_size_transform;   
    }})

document.getElementById('seven_btn_right').addEventListener('click',() => {
    console.log(seven_now_position);
    console.log(seven_size_transform);
    if(seven_now_position == seven_img_width*number_of_multiply) {
        document.getElementById("seven_slide_block").style.left = "0px";
        seven_now_position = 0;
    } else {
        document.getElementById("seven_slide_block").style.left = seven_now_position - seven_size_transform + "px";
        seven_now_position = seven_now_position - seven_size_transform;
    }
})





let com_metod = {
    0: {
        name: 'tg',
        metod: 'Телеграм',
        img_path: '/img/form_tg.svg',
        placeholder: 'Ваш ник или номер телефона'
    },
    1: {
        name: 'wts',
        metod: 'WhatsApp',
        img_path: '/img/form_wts.svg',
        placeholder: 'Ваш номер телефона'
    },
    2: {
        name: 'viber',
        metod: 'Viber',
        img_path: '/img/form_viber.svg',
        placeholder: 'Ваш номер телефона'
    },
    3: {
        name: 'mail',
        metod: 'Почта',
        img_path: '/img/form_mail.svg',
        placeholder: 'Ваша почта'
    }
}
let element_now = document.getElementById('tg');

let height_com_block_title = document.getElementsByClassName("select_block_title")[0];
height_com_block_title = window.getComputedStyle(height_com_block_title);
height_com_block_title = height_com_block_title.getPropertyValue("height");
height_com_block_title = height_com_block_title.substring(0, height_com_block_title.length - 2);
height_com_block_title = Number(height_com_block_title);

let height_com_block_com_metod = document.getElementById("tg");
height_com_block_com_metod = window.getComputedStyle(height_com_block_com_metod);
height_com_block_com_metod = height_com_block_com_metod.getPropertyValue("height");
height_com_block_com_metod = height_com_block_com_metod.substring(0, height_com_block_com_metod.length - 2);
height_com_block_com_metod = Number(height_com_block_com_metod);


function open_menu() {
    document.getElementsByClassName("select_block")[0].style.height = height_com_block_title + height_com_block_com_metod*4 + "px";
    document.getElementsByClassName("form_arrow")[0].style.rotate = "180deg";
    
    document.getElementsByClassName("input")[0].style.background = "#a7a7a7";
    document.getElementsByClassName("input")[1].style.background = "#a7a7a7";

    for (let i = 0; i < Object.keys(com_metod).length; i++) {
        if (com_metod[i]['name'] == element_now.id) {
            continue;
        }
        let new_div = document.createElement("div");
        new_div.id = com_metod[i]['name'];
        new_div.innerHTML = '<img class="form_icon" src="' + com_metod[i]['img_path'] + '" alt=""><span class="com_metod_text">' + com_metod[i]['metod'] + '</span>';
        document.getElementsByClassName('select_block')[0].appendChild(new_div);
        document.getElementById(com_metod[i]['name']).addEventListener('click',choose);
    }
    document.getElementById(element_now.id).removeEventListener('click',open_menu);
    
    document.getElementsByClassName('form_arrow')[0].removeEventListener('click', open_menu);
    document.getElementsByClassName('form_arrow')[0].addEventListener('click', close_menu);
    element_now.addEventListener('click',close_menu);
}

function close_menu() {
    document.getElementsByClassName("select_block")[0].style.height = height_com_block_title + height_com_block_com_metod + "px";
    document.getElementsByClassName("form_arrow")[0].style.rotate = "0deg";
        
    document.getElementsByClassName("input")[0].style.background = "#FFFFFF";
    document.getElementsByClassName("input")[1].style.background = "#FFFFFF";
    
    for (let i = 0; i < Object.keys(com_metod).length; i++) {
        if (com_metod[i]['name'] == element_now.id) {
            continue;
        }
        let new_div = document.getElementById(com_metod[i]['name']);
        new_div.remove();
    }
    document.getElementById(element_now.id).removeEventListener('click',close_menu)
    
    document.getElementsByClassName('form_arrow')[0].removeEventListener('click', close_menu);
    document.getElementsByClassName('form_arrow')[0].addEventListener('click', open_menu);
    element_now.addEventListener('click', open_menu);
}

function choose() {
    document.getElementsByClassName('select_block_title')[0].after(this);
    element_now = this;
    for (let i = 0; i < Object.keys(com_metod).length; i++) {
        document.getElementById(com_metod[i]['name']).removeEventListener('click',choose);
        document.getElementById(com_metod[i]['name']).removeEventListener('click',close_menu);
    }
    close_menu();
    for (let i = 0; i < Object.keys(com_metod).length; i++) {
        if (com_metod[i]['name'] == element_now.id) {          
            let new_div = document.createElement("div");
            new_div.className = 'label2';
            new_div.innerHTML = ' <input class="input" type="text" placeholder="' + com_metod[i]['placeholder'] + '"><img class="input_phone" src="/img/input_phone.svg" alt="">';
            document.getElementsByClassName('form')[0].replaceChild(new_div,document.getElementsByClassName('label2')[0])
            console.log(element_now.id);
        }        
    }
}

element_now.addEventListener('click', open_menu);
document.getElementsByClassName('form_arrow')[0].addEventListener('click', open_menu);

let btn = document.getElementById('btn');
btn.addEventListener('click',() => {
    let content_input_1 = document.getElementsByClassName('input')[0];
    let content_input_2 = document.getElementsByClassName('input')[1];
    let errors =[];
    if (content_input_1.value.length < 1) {
        morganie(content_input_1);
        errors.push('ошибка в первом блоке, он пустой');
    }
    if (content_input_2.value.length < 1) {
        morganie(content_input_2);
        errors.push('ошибка во второс блоке, он пустой');
    }
    if (errors.length > 0) {
        setTimeout(() => {
            btn.style.left = "6px";
        }, 60);
        setTimeout(() => {
            btn.style.left = "-6px";
        }, 120);
        setTimeout(() => {
            btn.style.left = "6px";
        }, 180);
        setTimeout(() => {
            btn.style.left = "-6px";
        }, 240);
        setTimeout(() => {
            btn.style.left = "6px";
        }, 300);
        setTimeout(() => {
            btn.style.left = "-6px";
        }, 360);
        setTimeout(() => {
            btn.style.left = "0px";
        }, 420);
    } else {
        let comunication_succsess_bacground = document.createElement("div")
        comunication_succsess_bacground.id = 'comunication_succsess_bacground'
        document.body.prepend(comunication_succsess_bacground);
        let mail_block = document.createElement("div")
        mail_block.className = 'mail_block'
        comunication_succsess_bacground.append(mail_block);
        let img = document.createElement('img')
        img.className = 's_img'
        img.src="/img/sucsess.svg"
        comunication_succsess_bacground.append(img);
        let img2 = document.createElement('img')
        img2.className = 's_galocha'
        img2.src="/img/galocha.svg"
        comunication_succsess_bacground.append(img2);
        let img3 = document.createElement('img')
        img3.id = 's_close'
        img3.src="/img/close.svg"
        comunication_succsess_bacground.append(img3);
        let s_text1 = document.createElement("span")
        s_text1.className = 's_text1'
        s_text1.innerHTML = 'Ваша заявка отправлена!<br/>'
        comunication_succsess_bacground.append(s_text1);
        let s_text2 = document.createElement("span")
        s_text2.className = 's_text2'
        s_text2.innerHTML = 'В самое ближайшее время мы свяжемся с <br/>Вами'
        comunication_succsess_bacground.append(s_text2);


        img3.addEventListener('click', () => {
            comunication_succsess_bacground.remove()
        })
    }
})


function morganie(block) {
    setTimeout(() => {
        block.style.background = "rgb(195, 4, 4)";
    }, 200);
    setTimeout(() => {
        block.style.background = "#ffffff";
    }, 400);
    setTimeout(() => {
        block.style.background = "rgb(195, 4, 4)";
    }, 600);
    setTimeout(() => {
        block.style.background = "#ffffff";
    }, 800); 
    setTimeout(() => {
        block.style.background = "rgb(195, 4, 4)";
    }, 1000);
    setTimeout(() => {
        block.style.background = "#ffffff";
    }, 1200); 
}



// Функция, которая выводит дату

const inner_date = document.getElementById('floting_date')
let date = new Date().getFullYear()
inner_date.innerHTML = date
