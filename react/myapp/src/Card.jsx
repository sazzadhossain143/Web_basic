import myimg from './assets/images/me.jpeg'

function Card(){
    return(
        <div className="card">
            <img src={myimg} alt="image" />
            <h1>Sazzad Hossain</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum perferendis laboriosam tenetur. Eaque, quaerat laborum? Itaque, corporis inventore rerum quisquam ad et facilis qui earum iusto, iste non fuga consequuntur!</p>
        </div>
    );
}

export default Card