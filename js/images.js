
/*Creates default image*/
let img = document.createElement("img");
img.src = "";


//DYNAMIC IMAGES=============================================================================
//This section points to the elements in the file that will have an image appended as a child.

/*Page elements*/
//Current time of day and general condition
const currentGeneralConditions = document.getElementById("current-general-conditions");

/*Images Sources*/
//Day Clear
const dayClear = "../img/daytimeClear.png";

//Default
const neutralDefault = "../img/blackHole.png";

//Image Functions============================================================================
//Set Image
export function SetImage(newImage) {

    switch (newImage) {

        case 1:
            img.src = dayClear;
            img.style.width = "10rem";
            break;

        case 2:
            img.src = dayCloudy;

            break;

        case 3:
            img.src = dayRainy;
            break;

        default:
            img.src = neutralDefault;
            img.style.width = "10rem";
            break;

    }

    currentGeneralConditions.appendChild(img);

}