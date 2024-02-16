$(document).ready(function () {
    // Fetch product data from XML using XMLHttpRequest
    var productXhr = new XMLHttpRequest();

    productXhr.open("GET","../xml/product.xml", true);

    productXhr.onreadystatechange = function () {
        if (productXhr.readyState === 4  && productXhr.status === 200) {
                var xmlDoc = productXhr.responseXML;
                var products = parseProductData(xmlDoc);
                appendProductData(products);     
        } else {
          console.error("Error fetching XML. Status:", productXhr.status);
      }
    };
    productXhr.send();
});

function parseProductData(xmlDoc) {
    var products = [];
    var productNodes = xmlDoc.querySelectorAll("product");
    
    productNodes.forEach(function (productNode) {
        var product = {
            image: productNode.querySelector("image").textContent,
            description: productNode.querySelector("description").textContent,
            buttonLink: productNode.querySelector("buttonLink").textContent,
        };
        products.push(product);
    });

    return products;
}

function appendProductData(products) {
    const productContainer = $(".pro-c");
    products.forEach(function (product) {
        const productHtml = `
            <div class="box">
                <img src="${product.image}" alt="Product Image">
                <div class="box-c">
                    <h3>${product.description}</h3>
                    <a href="${product.buttonLink}" onclick="getData('${product.image}')" class="btn" >Buy Now</a>
                </div>
            </div>
        `;
        productContainer.append(productHtml);
    });
    console.table(products);
}

function getData(product) {
    // Fetch user data using XMLHttpRequest
    var userXhr = new XMLHttpRequest();

    userXhr.open("GET", "../json/user.json", true);

    userXhr.onreadystatechange = function () {
        if (userXhr.readyState === 4 && userXhr.status === 200) {
                var userData = JSON.parse(userXhr.responseText);
                add(userData.user, product);
        }else {
          console.error("Error fetching JSON. Status:", userXhr.status);
      }
    };
    userXhr.send();
}

function add(user, productdes) {
    const data = localStorage.getItem('user');
    const data1 = JSON.parse(data);
    console.log(data1.email);
    user.forEach((userdata) => {
        if (userdata.email === data1.email) {
            console.log(userdata);
            console.log(userdata.email, productdes);
            const orderdataString = localStorage.getItem("orderdata");
            const orderdata = {
                Email: "",
                pimage: [],
            };
            orderdata.Email = userdata.email;
            orderdata.pimage.push({
                image: productdes,
            });
            if (orderdataString) {
                const existingOrderData = JSON.parse(orderdataString);
                orderdata.pimage = existingOrderData.pimage.concat(orderdata.pimage);
            }
            const orderdataStringUpdated = JSON.stringify(orderdata);
            localStorage.setItem("orderdata", orderdataStringUpdated);
            console.log("Order Data:", orderdata);
        }
    });
}


