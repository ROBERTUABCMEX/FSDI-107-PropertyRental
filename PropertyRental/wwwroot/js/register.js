function Property(title, bedrooms, bathrooms, price, area, imageUrl, description, parking){
    this.title = title;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.price = price;
    this.area = area;
    this.imageUrl = imageUrl;
    this.description = description;
    this.parking = parking;
  }
  
function saveProperty(){
    // get values into vars

    var title = $("#txtTitle").val();
    var beds  = parseInt($("#txtBedrooms").val());
    var baths = parseInt($("#txtBathrooms").val());
    var Price = parseFloat($("#txtPrice").val());
    var area = parseInt($("#txtArea").val());
    var imageUrl = $("#txtImage").val();
    var description = $("#txtDescription").val();
    var parking = $("#radio_0").is(":checked"); //  true or false

    // data validations
    if(!price) { //if the price is: Empty, 0, false, NaN
        alert("Error, verify the price");
        return;
    }
    
    
    // create an objetcs

    var prop = new Property (title, beds, baths, Price, area, imageUrl, description, parking);
    console.log(prop);

     
   // send the objetc to BE
   $.ajax({
     url: "/catalog/saveProperty",
     type: "POST",
     data: JSON.stringify(prop),
     contentType: "application/json",
     success: (res) => {
         console.log(res);

         // clear the form
   $(".form-control").val('');
    

         // show a message
     },
     error: (details) =>{
         console.log("Error", details);
     }
   });



}



function init(){
    console.log("Register Page");
    
    // events
    $("#btnSave").click(saveProperty);
}


window.onload = init;

//Git
//Vs code git extension
