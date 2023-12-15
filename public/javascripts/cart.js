function deleteProductInCart(id){ 
    fetch(`http://localhost:8080/api/cart/${id}`, {
        method: 'DELETE',
        // body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      Swal.fire({
        icon: 'success',
        title: 'Product deleted'
      })

      location.reload();
return false;
}

//Function to each product
const deleteBtnProductCart = document.querySelectorAll(".deleteProductBtn"); 
deleteBtnProductCart.forEach(btn=> { 
    btn.addEventListener("click", (e)=> { 
        deleteProductInCart(e.target.id)
    })
    
})

