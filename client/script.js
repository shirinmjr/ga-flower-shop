//import { flowers } from './mockdata/flowers.js';
const BASE_URL = "http://localhost:3001";
const flowerInventory = document.getElementById("flower-container");
const createArrangmentForm = document.getElementById("create-arrangment-form");
let flowerInventoryStr = "";
function onLoad() {

    console.log("Welcome");
    inventoryPopulate();

}

onLoad();

async function inventoryPopulate() {
    console.log("display flowers inventory");

    let flowers = await axios.get(`${BASE_URL}/flowers`);;
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
                <input type="checkbox" id="check-flower" name="${flower._id}" value="${flower._id}">
                </td>
            </tr>
            </th>
        </table>`;
    });
    flowerInventory.innerHTML = flowerInventoryStr;
};

createArrangmentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const stems =[];

});