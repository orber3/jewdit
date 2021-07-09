import  _ from 'lodash'


 const useDivideCat = (products) => { 
const mainDish=[]
const firstDish=[]
const lastDish=[]
console.log(products)
if(products) { 
for (var i=0;i<products.length;i++){

 const product = _.get(products, `${[i]}.catagory`);
  if (product=="mainDish") {

    mainDish.push(products[i]);
  }
  else if(product=="firstDish")
   {
    firstDish.push(products[i]);
  }
  else if(product==='lastDish')
  {
    lastDish.push(products[i]);
 }

  else {
    console.log(products[i].catagory)
  }
}




}
return {mainDish , firstDish , lastDish}

}
export default useDivideCat