//import { flowers } from './mockdata/flowers.js';
const BASE_URL = "http://localhost:3001";
const flowerInventory = document.getElementById("flower-container");
const createArrangmentForm = document.getElementById("create-arrangment-form");

let flowerInventoryStr = "";
let checkedFlower;

function onLoad() {

    console.log("Welcome");
    inventoryPopulate();

}

onLoad();


async function inventoryPopulate() {
    checkedFlower = [];
    console.log("display flowers inventory");

    let flowers = await axios.get(`${BASE_URL}/flowers`);
    console.log(flowers);
    flowers.data.forEach(flower => {
        console.log(flower);
        flowerInventoryStr +=
            `<table class="flower-content">
            <th>${flower.name}</th>
            <th>
            <tr>
            <td><img src="./assets/rose.png" width=100></td>
        </tr>
            <tr>
                <td>${flower.color}</td>
            </tr>
            <tr>
                <td>$${flower.price}</td>
            </tr>
            <tr>
                <td>
                <input type="checkbox" class="check-flower" value="${flower._id}">
                </td>
            </tr>
            </th>
        </table>`;
    });
    flowerInventory.innerHTML = flowerInventoryStr;
    document.querySelectorAll('.check-flower').forEach(flowerBox => {
        flowerBox.addEventListener('click', (e) => {
            checkedFlower.push(flowerBox.value);
            console.log(checkedFlower);
        });
    });


};

createArrangmentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let arrangment = await axios.post(`${BASE_URL}/arrangements`,
        {
            "flowers": checkedFlower,
            "price": 6000
        }
    );
    console.log(arrangment);

});

//onclick="flowersForArrangment()

// function flowersForArrangment() {

//     console.log("flower picked!");
// };
//value="${flower._id}"