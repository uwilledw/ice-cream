console.log("whats up");

const iceCream = [{
    name: 'Mint Chocolate Chip',
    image: 'https://images.unsplash.com/photo-1534706936160-d5ee67737249?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWludCUyMGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
}]



function addMint() {
    console.log('added mint');
    let mint = iceCream[0]
    mint.quantity++
    console.log(mint.name, mint.quantity);

}

function addIceCream(name) {
    const icecream = iceCream.find(ice => ice.name == name)
    icecream.quantity++
    console.log(icecream.name, icecream.quantity)

    drawIceCream()
}





function drawIceCream() {
    let total = 0
    let template = ''
    iceCream.forEach(ice => {
        total += ice.price * ice.quantity
        if (ice.quantity) {
            template += `<div class="d-flex justify-content-around align-items-center py-4"> <b>${ice.name}</b>
            <p class="m-0">${ice.quantity}</p>
            <p  class="m-0">$${ice.price * ice.quantity}</p>
        </div>`

        }
    })

    document.getElementById('name').innerHTML = template
    document.getElementById('total').innerText = total
}

function addToppings(name) {
    const topping = toppings.find(top => top.name == name)
    topping.quantity++
    console.log(topping.name, topping.quantity);

    drawToppings()

}

function drawToppings() {
    let total = 0
    let template = ''
    toppings.forEach(top => {
        total += top.price * top.quantity
        if (top.quantity) {

            template += ` <div class="d-flex justify-content-around align-items-center py-4">
            <b>${top.name}</b>
            <p class="m-0">${top.quantity}</p>
            <p class="m-0">$${top.price}</p>
            </div>
            `
        }
    })
    document.getElementById('toppingName').innerHTML = template
    document.getElementById('toppingTotal').innerText = total
}


function addContainer(name) {
    const container = containers.find(con => con.name == name)
    container.quantity++
    console.log(container.name, container.quantity)


    drawContainer()
}


function drawContainer() {
    let total = 0
    let template = 0
    containers.forEach(con => {
        total += con.quantity * con.price
        if (con.quantity) {
            template += ` <div class="d-flex justify-content-around align-items-center py-4">
            <b>${con.name}</b><p class="m-0">${con.quantity}</p><p class="m-0">$${con.price}</p></div>`
        }

    })
    document.getElementById('conTotal').innerText = total
    document.getElementById('conName').innerHTML = template
}