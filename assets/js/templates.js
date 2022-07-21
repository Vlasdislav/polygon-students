function tmp_slide_description({ title, description }) { 
    return (`
        <h2 class="animate__animated animate__flipInX">${title}</h2>
        <h3 class="animate__animated animate__flipInX">${description}</h3>
    `)
}

function tmp_slide_image({ img_name, alt_img }) {
    return (`
        <img class="img-${img_name} animate__animated animate__fadeInRight" src="./assets/images/${img_name}" alt="${alt_img}" draggable="false">
    `)
}

function tmp_faq_card_open({ title, content }, id, id_click) {
    return (`
        <div class="card-open">
            <div class="card-title click" id="card-${id}">
                <img class="minus" src="./assets/images/icons/minus.svg" alt="-" draggable="false">
                <h3>${title}</h3>
            </div>
            <div class="card-content ${id == id_click && 'animate__animated animate__fadeIn'}">
               <p>${content}</p>
            </div>
        </div>
    `)
}

function tmp_faq_card_close({ title }, id) {
    return (`
        <div class="card-close">
            <div class="card-title click" id="card-${id}">
                <img class="plus" src="./assets/images/icons/plus.svg" alt="+" draggable="false">
                <h3>${title}</h3>
            </div>
        </div>
    `)
}

function create_card(card, id, id_click, is_open) {
    return (`
        <div class="card">
            ${is_open && tmp_faq_card_open(card, id, id_click) || tmp_faq_card_close(card, id)}
        </div>
    `)
}

function tmp_company_logo({ company_name }) {
    return (`
        <div class="company"><img src="./assets/images/company-logos/${company_name}.svg" alt="${company_name}"></div>
    `)
}

export { tmp_slide_description, tmp_slide_image, tmp_faq_card_open, tmp_faq_card_close, create_card, tmp_company_logo };