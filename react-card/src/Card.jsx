import dpImg from "./assets/qk.jpg"
function Card() {

    return (
        <>
            <div className="card">
                <img className="dpImage" src={dpImg} alt="" />
                <h3 className="card-title">Al amin</h3>
                <p className="card-text">I work as a lecturer and love to watch movies</p>
            </div>
        </>
    );
}
export default Card