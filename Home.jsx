
function Home() {
    return (
        <section className="home" id="home">

            <ul>
                <li>Enterprise IT solution</li>
            </ul>

            <div className="container">

                <div className="text">

                    <h1 className="ll">
                        Empowering Your Business<br />
                        with
                        <b className="smart"> smart</b>
                        <b className="Tecnology"> Technology</b>
                        solution
                    </h1>

                    <p className="p">
                        We deliver scalable IT consulting, custom software, cloud<br />
                        infrastructure and AI-driven automation to help<br />
                        your business grow faster and smarter
                    </p>

                </div>

                <img src="/Home.png" alt="Home" />

            </div>

            <div className="home-actions">

                <button className="getfree">
                    Get free Consultation
                </button>

                <button className="explore">
                    Explore service
                </button>

            </div>

        </section>
    );
}

export default Home;
