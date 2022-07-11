let koalaContainer = <div className="ui itmes">{ koalaCard }</div>

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div className="item" style={{ cursor: 'pointer' }}> { imageContainer } { koalaContent } </div>

    // Koala Card Image
    let imageContainer = <div className='image'></div>
    let koalaImage = <img src="{ koala.image }" alt="koala thing " />

    // Koala Card Content
    let koalaContent = <div className="content"> { header } {descriptionContainer } </div>

    let header = <div className="header">{ koala.name }</div>

    let descriptionParagraph = <p>{ koala.description }</p>

    let descriptionContainer = <div className="description">{ descriptionParagraph }</div>

})

document.body.append(koalaContainer)