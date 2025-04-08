import Image from "next/image"

import "../css/product.css"


const Service = () => {

  return (
   <>
     
   <h1 id="trending"> Pick Your Smartphone Brand</h1> 

 
        <div className="productShowcase">


          <Image className="image" src="/images/vivo.jpg" height={300} width={300} />
          <Image   className="image" src="/images/apple.jpg"  height={300} width={300} />
          <Image  className="image" src="/images/nothing.jpg"  height={300} width={300} />
          <Image  className="image" src="/images/oneplus.jpg"  height={300} width={300} />
        </div>
   
   </>
  )
}

export default Service