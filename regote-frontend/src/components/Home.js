import Notebook from './../images/ainotebook.webp'

const Home = () => {
    return(
        <>
            <div className="has-text-centered">
                <h2>This is for doing some note takin!</h2>
                <hr />
                <img src={Notebook} alt="notebook"></img>
            </div>
        </>
    )
}

export default Home;