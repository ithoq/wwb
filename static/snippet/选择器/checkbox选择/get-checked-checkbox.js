/**
 * [numChecked description]
 * @type {Number}
 * @template
        <form id = "vehicleGroup">
        <input type = "checkbox" name = "vehicles"
        value = "car" /> Car
        <input type = "checkbox" name = "vehicles"
        value = "truck" /> Truck
        <input type = "checkbox" name = "vehicles"
        value = "bike" /> Bike
        </form>
 */
var numChecked = 0;
var dom = document.getElementById("vehicleGroup");
for (index = 0; index < dom.vehicles.length; index++)
if (dom.vehicles[index].checked) {
    numChecked++;
}
