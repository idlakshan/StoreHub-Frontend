export const getAllProducts = async () => {

        const res = await fetch("http://localhost:8000/api/products", {
            method: "GET"
        });
   
        const products = await res.json();
        return products.payload;
  
       
   
};
