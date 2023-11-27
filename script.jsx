const jsonFile = "facade.json";

fetch(jsonFile, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})
    .then(function (response) {
        // console.log(response); // Відповідь
        if (response.status !== 200 && response.statusText !== "OK") {
            alert('ERROR');
        } else {
            return response.json();
        }
    })
    .then(function (myJson) {
        // myJson - масив з обєктами [{...}, {...}, {...}, {...}]
        // console.log(myJson);

        function Header() {
            return (
                <nav className="navbar">
                    <div className="logo">
                        <i className="fa-solid fa-font-awesome"></i>
                        <a href="#" className="logo_style">Віталік Фасад</a>
                    </div>
                    <div className="menu">
                        <div className="menu-links">
                            <a href="tel:+380980521402">+38098 052 14 02</a>
                            <button className="log-in">ціни</button>
                        </div>
                    </div>
                </nav>
            );
        }

        function Content() {
            return (
                <div className="content_grid">
                    {myJson.map(element => (
                        <div key={element.id} className="card">
                            <h2 className="content_name">
                                {element.dekor}
                            </h2>
                            <img className="content_image" src={element.image} alt={element.dekor} />
                            <p className="content_type">
                                тип: {element.dekor}<br />
                                колір: {element.color}<br />
                                ізоляція :{element.insulation}<br />
                            </p>
                        </div>
                    ))}
                </div>
            );
        }


        function Footer() {
            return (
                <footer>

                </footer>
            );
        }

        ReactDOM.render(
            <div>
                <Header />
                <Content />
                <Footer />
            </div>,
            document.getElementById('root')
        );
    })
    .catch(function (error) {
        console.error('Помилка при завантаженні JSON:', error);
    });
