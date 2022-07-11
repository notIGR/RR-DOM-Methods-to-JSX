let koalaContainer = <div className="ui itmes"></div>

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div className="item" style={{ cursor: 'pointer' }}></div>

    // Koala Card Image
    let imageContainer = <div className='image'></div>
    let koalaImage = <img src="{ koala.image }" alt="koala thing " />

    // Koala Card Content
    let koalaContent = <div className="content"></div>

    let header = <div className="header">{ koala.name }</div>

    let descriptionParagraph = <p>{ koala.description }</p>

    let descriptionContainer = <div className="description">{ descriptionParagraph }</div>

    koalaContent.append(
        header,
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)