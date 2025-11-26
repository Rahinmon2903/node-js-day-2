const products=[
    {id:1,name:"iphone",price:4000},
     {id:2,name:"iphone",price:5000},
      {id:3,name:"iphone",price:6000},
       {id:4,name:"iphone",price:7000},
        {id:5,name:"iphone",price:8000}
]

//get all data
export const getdata=(req,res)=>{
    try {
        res.status(200).json({message:"data  retireved success",data:products})


        
    } catch (error) {
        
        res.status(504).json({message:"data not retireved"})
    }
}
//get by id
export const getdataById=(req,res)=>{


    try {
        const productId=req.params.id;
        const idOutput= products.find((ele)=> ele.id == productId)
        if(!idOutput){
            return res.status(404).json({message:"product not found"})

        }
        return res.status(200).json({message:"data  retireved success",data:idOutput})


        
    } catch (error) {
        
        res.status(504).json({message:"Id not found"})
    }
}
export const createProduct=(req,res)=>{


    try {
        const {name,price}=req.body;
        const newproduct={
            id:products.length+1,
            name:name,
            price:price
        }

       
        return res.status(200).json({message:"created success",data:newproduct})


        
    } catch (error) {
        
        res.status(504).json({message:"product not found"})
    }
}