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
                        <a href="#" className="logo_style">Facade of Lviv
                        </a>
                    </div>
                    <div className="menu">
                        <div className="menu-links">
                            <a href="tel:+380980521402">+380980521402</a>
                        </div>
                    </div>
                </nav>
            );
        }

        function Content() {
            const handleOrderClick = (element) => {
                Swal.fire({
                    title: '<div class="tel_style"><a href="tel:+380980521402">+38098 052 14 02 <br/><span class="Swal_name">Віталік<span/></a></div>',
                    html: `<p class="Swal_info">Тип: ${element.dekor}<br/>Ізоляція: ${element.insulation}<br/>Ціна: ${element.price} м2</p>`,
                    imageUrl: element.image,
                    imageWidth: 300,
                    imageHeight: 'auto',
                    imageAlt: "Custom image"
                })
            }

            return (
                <div className="content_grid">
                    {myJson.map(element => (
                        <div key={element.id} className="card">
                            <h2 className="content_name">
                                {element.dekor}<br />
                                {element.street}
                            </h2>
                            <img className="content_image" src={element.image} alt={element.dekor} />
                            <p className="content_style">
                                тип: {element.dekor}<br />
                                колір: {element.color}<br />
                                ізоляція: {element.insulation}<br />
                                ціна: {element.price} м2<br /><br />
                            </p>
                            <div className="button_container">
                                <button className="log_in" onClick={() => handleOrderClick(element)}>Замовити </button>
                            </div>
                            <div className="app_style">
                                <a href="viber://chat?number=+380980521402" className="viber_style" rel="nofollow" target="_blank">Viber</a>
                                <a href="https://t.me/Vitaliy_Polovinchak" rel="nofollow" target="_blank">Telegram</a><hr />
                            </div>
                        </div>
                    ))}
                </div>
            )
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
