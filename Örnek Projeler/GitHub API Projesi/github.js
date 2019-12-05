class GitHub{

    static async getUserData(userName) {
        const responseUserInfo = await fetch(`https://api.github.com/users/${userName}`);
        const responseUserRepos = await fetch(`https://api.github.com/users/${userName}/repos`);

        const userInfo = await responseUserInfo.json();
        const userRepos = await responseUserRepos.json();

        return {
            userInfo: userInfo,
            userRepos: userRepos
        }
    }
}