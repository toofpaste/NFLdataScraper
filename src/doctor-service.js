//let apiKey = "87ba8f96382f5e689a7ae52826597cea";
//let geoKey = "ypc9xVgSwr5BYgsuAKhfheVA4wqBgSrI";
//1st month :
export class DoctorService {
    getFantasy(){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            //let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;
            let url = `https://api.sportsdata.io/v3/nfl/scores/json/Players`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.setRequestHeader('Ocp-Apim-Subscription-Key', '2730ac2a3b8e4cd48369e26cc7cdeffa');
            request.send();
        });
    }
    getSeasonProj(year, playerID){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            //let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;
            let url = `https://api.sportsdata.io/v3/nfl/projections/json/PlayerSeasonProjectionStats/2019`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.setRequestHeader('Ocp-Apim-Subscription-Key', 'b0f437fab04f4813be2d992be943048a');
            request.send();
        });
    }
    getList(year, week){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            //let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;
            let url = `http://www.nfl.com/ajax/scorestrip?season=${year}&seasonType=REG&week=${week}`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.send();
        });
    }
    specificGame(game){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            //let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;
            let url = `http://www.nfl.com/liveupdate/game-center/${game}/${game}_gtd.json`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
    }

            request.open("GET", url, true);
            request.send();
        });
    }
    test(){
        return new Promise(function(resolve, reject) {
            let request = new XMLHttpRequest();
            //let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${apiKey}`;
            let url = `https://raw.githubusercontent.com/derek-adair/nflgame/master/nflgame/players.json`;

            request.onload = function() {
                if (this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }

            request.open("GET", url, true);
            request.send();
        });
    }

}
