import Image from "next/image"

const CarouselData=[
    {id:1,name:'Samsung Universe 9',img:'https://img.youtube.com/vi/09hZjt9aP0g/maxresdefault.jpg'},
    {id:2,name:'Huawei P30',img:'https://www.91-cdn.com/hub/wp-content/uploads/2019/03/Huawei-P30-Pro-unboxing_featured.jpeg'},
    {id:3,name:'MacBook Pro',img:'https://www.cnet.com/a/img/resize/c55c6e326fb3b056fdd91232d41d3bbd1ddecc1c/hub/2021/10/23/3f7efb9e-d587-45ff-a0a8-056d81bc102e/macbook-pro-2021-cnet-review-21.jpg?auto=webp&fit=crop&height=675&width=1200'},

]
const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    {
        CarouselData.map((item)=><div key={item.id}style={{width: '100%', height: '85vh'}} className="carousel-item active" data-bs-interval="10000">
        <Image src={item.img} className="d-block w-100"fill alt=""/>
        <div className="carousel-caption d-none d-md-block">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </div>
      </div>)
    }
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel