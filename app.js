const github = new Github
const ui = new UI


// get input for search user
const searchUser = document.getElementById('searchUser')

//search input event listener
searchUser.addEventListener('keyup', (event) => {
    //user input
    const queryString = event.target.value

    if (queryString) {
        //make http call
        github.getUser(queryString).then((resp) => {
            if (resp.status === 404) {
                ui.showAlert(resp.profile.message)
                ui.clearProfile()
            } else {
                ui.showProfile(resp.profile)
                ui.showRepos(resp.repos)
            }
        })
    } else {
        ui.clearProfile()
    }
})