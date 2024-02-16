function displayOrderData() {
    const orderdataString = localStorage.getItem('orderdata');
    const userdata = localStorage.getItem('user');
    // console.log(orderdataString);
    if (orderdataString) {
      const orderdata = JSON.parse(orderdataString);
      const user = JSON.parse(userdata);
      const tableBody = document.getElementById('employee_data');
      tableBody.innerHTML = '';
      orderdata.pimage.forEach((product) => {
        if(orderdata.Email === user.email)
        {const newRow = tableBody.insertRow();
        const imageCell = newRow.insertCell(0);
        const emailCell = newRow.insertCell(1);
        
        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        imageElement.alt = 'Product Image';
        imageElement.style.width = '100px'; 
        imageElement.style.height = '100px';
        
        imageCell.appendChild(imageElement);
        emailCell.textContent = orderdata.Email;
      }
    });
      document.querySelector('.loading').style.display = 'none';
    } else {
      console.log('No order data found in local storage');
      document.querySelector('.loading').textContent = 'No order data found';
    }
  }
  document.addEventListener('DOMContentLoaded', displayOrderData);
  
