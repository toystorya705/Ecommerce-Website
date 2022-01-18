
let image_name = "";// variable for image name store
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".image_drop");

    dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
    });

    inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
    });

    ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove("drop-zone--over");
        });
    });

    dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
    });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }

    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
    }

    thumbnailElement.dataset.label = file.name;

    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        image_name = file.name;
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
    } else {
        thumbnailElement.style.backgroundImage = null;
    }
}
function product_add() {
    let heading = document.getElementById("product_heading").value;
    let price = parseInt(document.getElementById("detail1").value);
    let stock = parseInt(document.getElementById("product_stock").value);
    let description = document.getElementById("add_product_description").value;
    let product_style = document.getElementById("product_style").value;
    let search_keyword = document.getElementById("search_keyword").value;
//extracting data from data fields
// confirming all the fields are filled
    if (heading == "" || price == "" || stock == "" || description == "" || image_name == "" || search_keyword == "" || product_style == "") {
        document.getElementById("Result").innerHTML = "Please enter the fields";
        document.getElementById("Result").style.display = "block";
        setTimeout(function () {
            document.getElementById("Result").style.display = "none";
        }, 1000);// Time interval for display message box


    }
    else {

        let productObject = {}
        productObject.product_id = "" + (Math.random() + Math.random() + Math.random() + Math.random()) * 10;// creating product id
        productObject.heading = heading;
        productObject.price = price;
        productObject.stock = stock;
        productObject.description = description;
        productObject.image_name = image_name;
        productObject.product_style = product_style;
        productObject.search_keyword = search_keyword;


        senddata().catch(error => {
            console.error(error);
        });

        async function senddata() {
            const response = await fetch('add_product_json.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' //json
                },
                body: (JSON.stringify(productObject))
            });
            const data = await response.text();
            let checkstore = data.includes("Product added.");
            if (checkstore == true) {
                document.getElementById("Result").innerHTML = "<b>Product Added Successful.</b>";
                setTimeout(function () {
                    document.getElementById("Result").style.display = "none";
                     window.location.replace("dashboardstaff.php");
                }, 1000);// Time interval for display message box

            }

        }


    }
}

function reset_data() {// reseting product form

    document.getElementById("product_heading").value = "";
    document.getElementById("detail1").value = "";
    document.getElementById("add_product_description").value = "";
    document.getElementById("product_stock").value = "";
    document.getElementById("product_style").value = "";
    document.getElementById("search_keyword").value = "";

}


