function Card (props){
    
    return(
       <div class="card col-4 m-1 w-20 h-20  ">
        <img class="cars-img-top  p-1 " src={props.obj.thumbnail} alt="logo"/>
        <div class="card-body">
            <h1>{props.obj.title}</h1>
            <h2>{props.obj.text}</h2>
            <button className="add">Add to cart</button>
            <button className="buy">buy now</button>
        </div>
       </div>
    )

}
export default Card