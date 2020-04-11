class Github {
    constructor() {
        this.client_id = '5a78e820d97f2f4da4b9'
        this.client_secret = 'ff3fc269f53ca1e5a4381f4000fadf91104d0c06'
        this.repos_count = 5
        this.respos_sort = 'created asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.respos_sort}&?client_id=${this.client_id}&client_secret=${this.client_secret}`)


        const profile = await profileResponse.json()
        const repos = await reposResponse.json()

        return {
            status: profileResponse.status,
            repos,
            profile
        }

    }
}