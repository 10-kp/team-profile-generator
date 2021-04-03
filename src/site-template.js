const generateCards = teamData => {
 
    const manager = teamData.manager.map(function(role) {
        let managerHtml = `
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                
                <div class="column">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left"></div>
                            <div class="media-content">
                                <p class="title is-4">${data.name}</p>
                                <p class="subtitle is-6">${data.role}</p>
                            </div>
                        </div>
                
                        <div class="content">
                            <p><span class="has-text-weight-bold">ID:</span>${data.id}<br />
                            <span class="has-text-weight-bold">Email:</span><a href="${data.email}" class="has-text-primary">${data.email}</a><br/>
                            <span class="has-text-weight-bold">Office Number:</span>${data.officeNumber}</p>
                        </div>
                    </div>
                </div>
                </div>

            </div>
        </main>`

        return managerHtml
    });

    const engineer = teamData.engineer.map(function(role) {
        let engineerHtml = `
        <main class="m-6">
        <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
        <div class="column">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left"></div>
                    <div class="media-content">
                        <p class="title is-4">${data.name}</p>
                        <p class="subtitle is-6">${data.role}</p>
                    </div>
                </div>
        
                <div class="content">
                    <p><span class="has-text-weight-bold">ID:</span> ${data.id}<br />
                    <span class="has-text-weight-bold">Email:</span> <a href="${data.email}" class="has-text-primary">${data.email}</a><br />
                    <span class="has-text-weight-bold">GitHub:</span> <a href="${data.github}" target="_blank" class="has-text-primary">${data.github}</a></p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </main>`

        return engineerHtml
    })

    const intern = teamData.intern.map(function(role) {
        let interHtml = `
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                                    
            <div class="column">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left"></div>
                        <div class="media-content">
                            <p class="title is-4">${data.name}</p>
                            <p class="subtitle is-6">${data.role}</p>
                        </div>
                    </div>
            
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span>${data.id}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="${data.email}" class="has-text-primary">${data.email}</a><br />
                        <span class="has-text-weight-bold">School:</span> ${data.school}</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </main>`

        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
       <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css">
    </head>
    <body>
        <main class="m-6"><section class="hero is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">My Team</h1>
                </div>
            </div>
            </section>
        </main>
            ${generateCards(templateData)}
    </body>
    </html>    
        `
}
