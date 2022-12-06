const MongoClient = require ('mongodb').MongoClient

const url = "mongodb://localhost:27017/product"

MongoClient.connect(url, (error, database)=>{
    if(error) throw error;
    
    //database.close()
    const dbo = database.db("product")
    dbo.createCollection("product",(error, result)=>{
        if(error) throw error
        console.log("created the product collection for shoes")
        database.close()
    })

    //create
    dbo.collection("product").insertOne(
    {prodID: 1, image: "Images/DISNEY FORUM 84 LOW SHOES.png", shoes: "Disney Forum84 Low Shoes", brand: "Adidas", price: 5300, categoryID: "WCA1"},
    (error, result)=>{
        if(error) throw error
        console.log("inserted the shoes")
        database.close()
    })
    
    //create
    const shoes = [
        {prodID: 2, image: "Images/Jordan Why Not .5 PF.png", shoes: "Jordan Why Not .5 PF", brand: "Nike", price: 7095, categoryID: "MSN1"},
        {prodID: 3, image: "Images/Nike Air Force 1 '07.png", shoes: "Nike Air Force", brand: "Nike", price: 7095, categoryID: "MCN1" },
        {prodID: 4, image: "Images/Nike Air Huarache SE.png", shoes:"Nike Air Huarache SE", brand: "Nike", price: 7095, categoryID: "WCN1" },
        {prodID: 5, image: "Images/TRAE YOUNG 1 SHOES.png", shoes: "Trae Young 1 Shoes", brand: "Adidas", price: 6500, categoryID: "MSA1" },
        {prodID: 6, image: "Images/ZX 8000 LEGO® SHOES.png", shoes: "ZX 8000 Lego Shoes", brand: "Adidas", price: 7000, categoryID: "WSA1" },
    ];
        
        dbo.collection("product").insertMany(shoes, function (error, result) {
            if(error) throw error
            console.log("inserted the shoes")
            /*database.close()*/
        
        //read
        dbo.collection("product").find({})
        .toArray((error, result) =>{
            if(error) throw error
            console.log(result)
        })
        
            //update    
            const shoes = {shoes: "Disney Forum84 Low Shoes" };
            const newshoes = { $set: { shoes: "Disney Forum 84 Low Shoes" } };
            dbo.collection("product").updateOne(shoes, newshoes, function(err, res) {
        
            
            //delete
            dbo.collection("product").deleteOne(
            {prodID: 6},
            (error, result)=>{
                if(error) throw error
                console.log("deleted one shoe")
            })
                
        

        })
    })
})


