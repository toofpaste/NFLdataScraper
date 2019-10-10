import {DoctorService} from "./doctor-service";
//import {PlayerNames} from "./playerNames";

  // nfl: {
  //   version: 'nfl/v2',
  //   key: '2730ac2a3b8e4cd48369e26cc7cdeffa' // <-- Pass in your nfl key here
  // },

import {Players} from "./players";
import './styles.css';

//
// let holdOD = new Odell1();
// let odell = holdOD.justShowMeThis();

// let qbIDs = ['00-0029263', '00-0034796', '00-0026498', '00-0029668', '00-0033119', '00-0026143', '00-0022803', '00-0027688', '00-0034343', '00-0022942', '00-0020531', '00-0033869', '00-0033106', '00-0033077', '00-0027973', '00-0032436', '00-0027939', '00-0034857', '00-0021206', '00-0032950', '00-0031503', '00-0028986', '00-0029604', '00-0033537', '00-0029567', '00-0026158', '00-0029701', '00-0028118', '00-0019596', '00-0027854', '00-0023459', '00-0031280', '00-0034869', '00-0022924', '00-0023682', '00-0031345', '00-0034855', '00-0033873', '00-0032268'];

// let holdQB = [];
// let yards = [];
 //let game = [];
//  let year = 2014;
//  let week = 1;
// let game = [];
// let c = 0;
//let list = [];
let player = new Players();
let allInfo = player.getPlayers();
let playedGames = player.getPlayers();
//let docService = new DoctorService();
//
// let qbStats = [{}];
let clicked = 0;
let clickedQBs = [];
let clickedRBs = [];
let clickedWRs = [];
let clickedK = [];
$(document).ready(function() {

 // console.log(playedGames);

  sortDraftPOS();

  function sortDraftPOS() {
    let holdPlayers = playedGames;
    let count = 0;
    let check = false;
    let holdRBs = [];
    let holdQBs = [];

    let holdKickers = [];
    let holdWRs = [];
    const hold = [];
    while (!check) {
      check = true;
      for (var i = 0; i < holdPlayers.length - 1; i++) {
        if ((holdPlayers[i].avgDraftPos + holdPlayers[i].projAvgDraft) > (holdPlayers[i].avgDraftPos + holdPlayers[i].projAvgDraft)) {
          hold.push(holdPlayers[i]);
          hold.push(holdPlayers[i + 1]);
          holdPlayers[i] = hold[1];
          holdPlayers[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
          console.log(holdPlayers[i].position)
        }
        if (holdPlayers[i].position === "RB") {
          holdRBs.push(holdPlayers[i]);
        }
        if (holdPlayers[i].position === "QB") {
          holdQBs.push(holdPlayers[i]);
        }
        if (holdPlayers[i].position === "WR" || holdPlayers[i].position === "TE") {
          holdWRs.push(holdPlayers[i]);
        }
        if (holdPlayers[i].position === "K") {
          holdKickers.push(holdPlayers[i]);
        }
      }
    }
    holdQBs = projPoints(holdQBs);
    holdWRs = projPoints(holdWRs);
    holdRBs = projPoints(holdRBs);
    holdQBs = smartSort(holdQBs);
    holdWRs = smartSort(holdWRs);
    holdRBs = smartSort(holdRBs);
    // holdQBs = sortByPoints(holdQBs);
    // holdRBs = sortByPoints(holdRBs);
    // holdWRs = sortByPoints(holdWRs);
    // setTimeout(function () {
    //   test(holdQBs);
    // }, 1000)
    printRBbyDraftPOS(holdRBs);
    printQBbyDraftPOS(holdQBs);
    printKbyDraftPOS(holdKickers);
    printWRbyDraftPOS(holdWRs);
    addClick(holdRBs);
    addClick(holdQBs);
    addClick(holdWRs);
    addClick(holdKickers);
    // $("#sortProjAdjustedPoints").click(function () {
    //   alert("started Proj Adjusted Points")
    //   for(var b = 0; b < holdRBs.length; b++){
    //     $(`#A${b}`).empty();
    //     $(`#A${b}`).removeClass("colorRed");
    //     $(`#A${b}`).removeClass("colorGreen");
    //     $(`#A${b}`).removeClass("permRed");
    //   }
    //   for(var q = 0; q < holdQBs.length; q++){
    //     $(`#AA${q}`).empty();
    //     $(`#AA${q}`).removeClass("colorRed");
    //     $(`#AA${q}`).removeClass("colorGreen");
    //     $(`#AA${q}`).removeClass("permRed");
    //   }
    //   for(var w = 0; w < holdWRs.length; w++){
    //     $(`#AAAA${w}`).empty();
    //     $(`#AAAA${w}`).removeClass("colorRed");
    //     $(`#AAAA${w}`).removeClass("colorGreen");
    //     $(`#AAAA${w}`).removeClass("permRed");
    //   }
    //
    //   holdRBs = sortByPoints(holdRBs);
    //   holdWRs = sortByPoints(holdWRs);
    //   holdQBs = sortByPoints(holdQBs);
    //   printRBbyDraftPOS(holdRBs);
    //   printQBbyDraftPOS(holdQBs);
    //   printKbyDraftPOS(holdKickers);
    //   printWRbyDraftPOS(holdWRs);
    //   addClick(holdRBs);
    //   addClick(holdQBs);
    //   addClick(holdWRs);
    //   alert("ended Proj Adjusted Points")
    // })
    // $("#sortAvgDraftPos").click(function () {
    //   alert("started Avg Draft POS")
    //   for(var b = 0; b < holdRBs.length; b++){
    //     $(`#A${b}`).empty();
    //     $(`#A${b}`).removeClass("colorRed");
    //     $(`#A${b}`).removeClass("colorGreen");
    //     $(`#A${b}`).removeClass("permRed");
    //   }
    //   for(var q = 0; q < holdQBs.length; q++){
    //     $(`#AA${q}`).empty();
    //     $(`#AA${q}`).removeClass("colorRed");
    //     $(`#AA${q}`).removeClass("colorGreen");
    //     $(`#AA${q}`).removeClass("permRed");
    //   }
    //   for(var w = 0; w < holdWRs.length; w++){
    //     $(`#AAAA${w}`).empty();
    //     $(`#AAAA${w}`).removeClass("colorRed");
    //     $(`#AAAA${w}`).removeClass("colorGreen");
    //     $(`#AAAA${w}`).removeClass("permRed");
    //   }
    //
    //   holdRBs = sortByDPOS(holdRBs);
    //   holdWRs = sortByDPOS(holdWRs);
    //   holdQBs = sortByDPOS(holdQBs);
    //   printRBbyDraftPOS(holdRBs);
    //   printQBbyDraftPOS(holdQBs);
    //   printKbyDraftPOS(holdKickers);
    //   printWRbyDraftPOS(holdWRs);
    //   addClick(holdRBs);
    //   addClick(holdQBs);
    //   addClick(holdWRs);
    //   alert("ended Avg Draft POS")
    // })
    // $("#sortSmartSort").click(function () {
    //   alert("started Smart Sort")
    //   for(var b = 0; b < holdRBs.length; b++){
    //     $(`#A${b}`).empty();
    //     $(`#A${b}`).removeClass("colorRed");
    //     $(`#A${b}`).removeClass("colorGreen");
    //     $(`#A${b}`).removeClass("permRed");
    //   }
    //   for(var q = 0; q < holdQBs.length; q++){
    //     $(`#AA${q}`).empty();
    //     $(`#AA${q}`).removeClass("colorRed");
    //     $(`#AA${q}`).removeClass("colorGreen");
    //     $(`#AA${q}`).removeClass("permRed");
    //   }
    //   for(var w = 0; w < holdWRs.length; w++){
    //     $(`#AAAA${w}`).empty();
    //     $(`#AAAA${w}`).removeClass("colorRed");
    //     $(`#AAAA${w}`).removeClass("colorGreen");
    //     $(`#AAAA${w}`).removeClass("permRed");
    //   }
    //
    //   holdQBs = smartSort(holdQBs);
    //   holdWRs = smartSort(holdWRs);
    //   holdRBs = smartSort(holdRBs);
    //   printRBbyDraftPOS(holdRBs);
    //   printQBbyDraftPOS(holdQBs);
    //   printKbyDraftPOS(holdKickers);
    //   printWRbyDraftPOS(holdWRs);
    //   addClick(holdRBs);
    //   addClick(holdQBs);
    //   addClick(holdWRs);
    //   alert("ended Smart Sort")
    // })
    // $("#sortProjPassYards").click(function () {
    //   alert("started Proj Passing Yards")
    //   for(var q = 0; q < holdQBs.length; q++){
    //     $(`#AA${q}`).empty();
    //     $(`#AA${q}`).removeClass("colorRed");
    //     $(`#AA${q}`).removeClass("colorGreen");
    //     $(`#AA${q}`).removeClass("permRed");
    //   }
    //
    //   holdQBs = sortProjPassingYards(holdQBs);
    //   printQBbyDraftPOS(holdQBs);
    //   addClick(holdQBs);
    //   alert("ended  Proj Passing Yards")
    // })



  }

  function sortByDPOS(tempArray) {
    let holdPlayers = tempArray;
    let check = false;
    const hold = [];
    while (!check) {
      check = true;
      for (var i = 0; i < holdPlayers.length - 1; i++) {
        if (holdPlayers[i].avgDraftPos > holdPlayers[i+1].avgDraftPos) {
          hold.push(holdPlayers[i]);
          hold.push(holdPlayers[i + 1]);
          holdPlayers[i] = hold[1];
          holdPlayers[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }
    }
    return holdPlayers;
  }
  function sortProjPassingYards(tempArray) {
    let holdPlayers = tempArray;
    let check = false;
    const hold = [];
    while (!check) {
      check = true;
      for (var i = 0; i < holdPlayers.length - 1; i++) {
        if (holdPlayers[i].projPassingYards > holdPlayers[i+1].projPassingYards) {
          hold.push(holdPlayers[i]);
          hold.push(holdPlayers[i + 1]);
          holdPlayers[i] = hold[1];
          holdPlayers[i + 1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
        }
      }
    }
    holdPlayers.reverse();
    return holdPlayers;
  }
  function addClick(holdArr){
    //console.log(holdArr[0].position === "RB");
    let colors = ["colorRed", "colorGreen", "colorWhite"];
    let clickRB = 0;
    let clickQB = 0;
    let clickWR = 0;
    let clickK = 0;

    let holdPos = holdArr[0].position;

    for(var s = 0; s < holdArr.length; s++) {
      let notSkip = true;
        if(holdPos == "RB") {
         // console.log(holdArr);
          //console.log(clickedRBs);
          if (holdArr[s].playerName == "Derrick Henry" || holdArr[s].playerName == "Aaron Jones" || holdArr[s].playerName == "Kerryon Johnson" || holdArr[s].playerName == "Patrick Mahomes" || holdArr[s].playerName == "James Conner" || holdArr[s].playerName == "Nick Chubb" || holdArr[s].playerName == "Julian Edelman" || holdArr[s].playerName == "Sony Michel" || holdArr[s].playerName == "Duke Johnson" || holdArr[s].playerName == "Calvin Ridley" || holdArr[s].playerName == "D.J Moore" || holdArr[s].playerName == "Kenny Golladay" || holdArr[s].playerName == "Baker Mayfield" || holdArr[s].playerName == "Dante Pettis" || clickedRBs.includes(holdArr[s].playerName)) {
            $(`#A${s}`).addClass("permRed");
          }else {
            $(`#A${s}`).click(function () {
              let n = document.getElementById(`#${this.id}S`);
              clickedRBs.push(String(n.textContent));
            if (clickRB === 0) {
              $(`#${this.id}`).removeClass(colors[1]);
              $(`#${this.id}`).removeClass(colors[2]);
              $(`#${this.id}`).addClass(colors[clickRB]);
              clickRB++;
            } else if (clickRB === 1) {
              $(`#${this.id}`).removeClass(colors[0]);
              $(`#${this.id}`).removeClass(colors[2]);
              $(`#${this.id}`).addClass(colors[clickRB]);
              clickRB++;
            } else if (clickRB === 2) {
              $(`#${this.id}`).removeClass(colors[1]);
              $(`#${this.id}`).removeClass(colors[0]);
              clickRB = 0;
            }
          })
        }
      }else if (holdPos == "QB") {
          if (holdArr[s].playerName == "Derrick Henry" || holdArr[s].playerName == "Aaron Jones" || holdArr[s].playerName == "Kerryon Johnson" || holdArr[s].playerName == "Patrick Mahomes" || holdArr[s].playerName == "James Connor" || holdArr[s].playerName == "Nick Chubb" || holdArr[s].playerName == "Julian Edelman" || holdArr[s].playerName == "Sony Michel" || holdArr[s].playerName == "Duke Johnson" || holdArr[s].playerName == "Calvin Ridley" || holdArr[s].playerName == "D.J Moore" || holdArr[s].playerName == "Kenny Golloday" || holdArr[s].playerName == "Baker Mayfield" || holdArr[s].playerName == "Dante Pettis" || clickedQBs.includes(holdArr[s].playerName)) {
            $(`#AA${s}`).addClass("permRed");
          } else {
            $(`#AA${s}`).click(function () {
              let n = document.getElementById(`#${this.id}S`);
              clickedQBs.push(String(n.textContent));
              if (clickQB === 0) {
                $(`#${this.id}`).removeClass(colors[1]);
                $(`#${this.id}`).removeClass(colors[2]);
                $(`#${this.id}`).addClass(colors[clickQB]);
                clickQB++;
              } else if (clickQB === 1) {
                $(`#${this.id}`).removeClass(colors[0]);
                $(`#${this.id}`).removeClass(colors[2]);
                $(`#${this.id}`).addClass(colors[clickQB]);
                clickQB++;
              } else if (clickQB === 2) {
                $(`#${this.id}`).removeClass(colors[1]);
                $(`#${this.id}`).removeClass(colors[0]);
                clickQB = 0;
              }
            })
        }

      }else if(holdPos == "WR"){
          if(holdArr[s].playerName == "Derrick Henry" || holdArr[s].playerName == "Aaron Jones" || holdArr[s].playerName == "Kerryon Johnson" || holdArr[s].playerName == "Patrick Mahomes" || holdArr[s].playerName == "James Connor" || holdArr[s].playerName == "Nick Chubb" || holdArr[s].playerName == "Julian Edelman" || holdArr[s].playerName == "Sony Michel" || holdArr[s].playerName == "Duke Johnson" || holdArr[s].playerName == "Calvin Ridley" || holdArr[s].playerName == "D.J. Moore" || holdArr[s].playerName == "Kenny Golladay" || holdArr[s].playerName == "Baker Mayfield" || holdArr[s].playerName == "Dante Pettis" || holdArr[s].playerName == "Tyler Lockett" || clickedWRs.includes(holdArr[s].playerName)){
            $(`#AAAA${s}`).addClass("permRed");
          }else {

            $(`#AAAA${s}`).click(function () {
              let n = document.getElementById(`#${this.id}S`);
              clickedWRs.push(String(n.textContent));

              if (clickWR === 0) {
                $(`#${this.id}`).removeClass(colors[1]);
                $(`#${this.id}`).removeClass(colors[2]);
                $(`#${this.id}`).addClass(colors[clickWR]);
                clickWR++;
              } else if (clickWR === 1) {
                $(`#${this.id}`).removeClass(colors[0]);
                $(`#${this.id}`).removeClass(colors[2]);
                $(`#${this.id}`).addClass(colors[clickWR]);
                clickWR++;
              } else if (clickWR === 2) {
                $(`#${this.id}`).removeClass(colors[1]);
                $(`#${this.id}`).removeClass(colors[0]);
                clickWR = 0;
              }
            })
          }

      }else if(holdPos == "K"){
            $(`#AAA${s}`).click(function () {
              let n = document.getElementById(`#${this.id}S`);
              clickedK.push(String(n.textContent));

              if (clickK === 0) {
                $(`#${this.id}`).removeClass(colors[1]);
                $(`#${this.id}`).removeClass(colors[2]);
                $(`#${this.id}`).addClass(colors[clickK]);
                clickK++;
              } else if (clickK === 1) {
                $(`#${this.id}`).removeClass(colors[0]);
                $(`#${this.id}`).removeClass(colors[2]);
                $(`#${this.id}`).addClass(colors[clickK]);
                clickK++;
              } else if (clickRB === 2) {
                $(`#${this.id}`).removeClass(colors[1]);
                $(`#${this.id}`).removeClass(colors[0]);
                clickK = 0;
              }
            })
      }
    }
  }
  function printRBbyDraftPOS(holdRBs){
    for(var p = 0; p < holdRBs.length; p++) {
      var top = `<tr id="A${p}"></tr>`
      $("#rbTable tbody").append(top);
      var markup = `<td>info</td>`;
      $(`#A${p}`).append(`<td>${p + 1}</td>`);
      $(`#A${p}`).append(`<td id="#A${p}S">${holdRBs[p].playerName}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].avgDraftPos}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].projGamesStarted}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].projFP}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].projRushingYards}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].projRushingTDs}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].projTD}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].fRushPoints}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD10}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD20}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD30}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD40}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD50}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD60}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD70}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD80}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].rushingLongTD90}</td>`);
      $(`#A${p}`).append(`<td>${holdRBs[p].pointsOffBigPlays}</td>`);



    }
  }

  function printQBbyDraftPOS(holdQBs){
    for(var p = 0; p < holdQBs.length; p++) {
      var top = `<tr id="AA${p}"></tr>`
      $("#qbTable tbody").append(top);
      var markup = `<td>info</td>`;
      $(`#AA${p}`).append(`<td>${p + 1}</td>`);
      $(`#AA${p}`).append(`<td id="#AA${p}S">${holdQBs[p].playerName}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].avgDraftPos}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].projGamesStarted}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].projFP}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].projPassingYards}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].projPassingTDs}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].projTD}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].fPassPoints}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].projPassingATT}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].projPassingYardsPerATT}</td>`);
      $(`#AA${p}`).append(`<td>${holdQBs[p].pointsOffBigPlays}</td>`);

    }
  }
  function printWRbyDraftPOS(holdWRs){
    for(var p = 0; p < holdWRs.length; p++) {
      var top = `<tr id="AAAA${p}"></tr>`
      $("#wrTable tbody").append(top);
      $(`#AAAA${p}`).append(`<td>${p + 1}</td>`);
      $(`#AAAA${p}`).append(`<td id="#AAAA${p}S">${holdWRs[p].playerName}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].avgDraftPos}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].projGamesStarted}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].projFP}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].projReceivingTD}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].projReceivingYards}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].projRecepTargs}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].fReceivingPoints}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD10}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD20}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD30}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD40}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD50}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD60}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD70}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD80}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].receivingLongTD90}</td>`);
      $(`#AAAA${p}`).append(`<td>${holdWRs[p].pointsOffBigPlays}</td>`);
      }
  }
  function printKbyDraftPOS(holdKickers){
    for(var p = 0; p < holdKickers.length; p++) {
      var top = `<tr id="AAA${p}"></tr>`
      $("#kTable tbody").append(top);
      $(`#AAA${p}`).append(`<td>${p + 1}</td>`);
      $(`#AAA${p}`).append(`<td <td id="#AAA${p}S">${holdKickers[p].playerName}</td>`);
      $(`#AAA${p}`).append(`<td>${holdKickers[p].avgDraftPos}</td>`);
      $(`#AAA${p}`).append(`<td>${holdKickers[p].projGamesStarted}</td>`);
      $(`#AAA${p}`).append(`<td>${holdKickers[p].projFP}</td>`);
      $(`#AAA${p}`).append(`<td>${holdKickers[p].projExtraPoints}</td>`);
      $(`#AAA${p}`).append(`<td>${holdKickers[p].projFGMade}</td>`);
      $(`#AAA${p}`).append(`<td>${holdKickers[p].FieldGoalYards}</td>`);
    }
  }


  //let docService = new DoctorService();
  //test();
  //find();
  //update();
  function update(){
    console.log("started");
    let fant = new DoctorService();
    fant.getFantasy()
    .then(function (response2) {
      let body = JSON.parse(response2);
      for(var p = 0; p < body.length; p++){
        let ind = allInfo.findIndex(x => x.playerName === body[p].Name);
        if(ind !== -1) {
        allInfo[ind].sportsDataID = body[p].PlayerID;
      }

      }
      console.log(allInfo);
      test();
    });
  }


  //bySeason();

  function bySeason(){
    let f = new DoctorService();
        f.getSeasonProj()
          .then(function (response) {
            let body = JSON.parse(response);
            getProj(body);
          })
  }
  function getProj(body){
    for(var p = 0; p < body.length; p++) {
      let ind = allInfo.findIndex(x => x.sportsDataID === body[p].PlayerID);
      if(ind !== -1) {
        allInfo[ind].projAvgDraft = body[p].AverageDraftPosition;
        allInfo[ind].projDraftKingsFP = body[p].FantasyPointsDraftKings;
        allInfo[ind].projExtraPoints = body[p].ExtraPointsMade;
        allInfo[ind].projFDFP = body[p].FantasyPointsFantasyDraft;
        allInfo[ind].projFGMade = body[p].FieldGoalsMade;
        allInfo[ind].projFP = body[p].FantasyPoints;
        allInfo[ind].projFanDuelFP = body[p].FantasyPointsFanDuel;
        allInfo[ind].projGames = body[p].Activated;
        allInfo[ind].projGamesStarted = body[p].Started;
        allInfo[ind].projPPRFP = body[p].FantasyPointsPPR;
        allInfo[ind].projPassingATT = body[p].PassingAttempts;
        allInfo[ind].projPassingTDs = body[p].PassingTouchdowns;
        allInfo[ind].projPassingYards = body[p].PassingYards;
        allInfo[ind].projPassingYardsPerATT = body[p].PassingYardsPerAttempt;
        allInfo[ind].projReceivingTD = body[p].ReceivingTouchdowns;
        allInfo[ind].projReceivingYards = body[p].ReceivingYards;
        allInfo[ind].projReceivingYardsPerRecep = body[p].ReceivingYardsPerReception;
        allInfo[ind].projRecepPercent = body[p].ReceptionPercentage;
        allInfo[ind].projRecepTargs = body[p].ReceivingTargets;
        allInfo[ind].projReceptions = body[p].Receptions;
        allInfo[ind].projRushingATT = body[p].RushingAttempts;
        allInfo[ind].projRushingTDs = body[p].RushingTouchdowns;
        allInfo[ind].projRushingYards = body[p].RushingYards;
        allInfo[ind].projRushingYardsPerCarry = body[p].RushingYardsPerAttempt;
        allInfo[ind].projTD = body[p].Touchdowns;
        allInfo[ind].projYahooFP = body[p].FantasyPointsYahoo;
      }
    }
    console.log(allInfo);
    test();
  }
function projPoints(theList) {

    let playedGames2 = theList;
    //console.log(playedGames2)
  for (var p = 0; p < playedGames2.length; p++) {
    let pointsPerGameBigPlays = 0;
    if (playedGames2[p].projPassingTDs >= 1) {
      playedGames2[p].fPassPoints += (playedGames2[p].projPassingTDs) * 6;
    }
    if (playedGames2[p].projPassingYards >= 50) {
      playedGames2[p].fPassPoints += ((playedGames2[p].projPassingYards) / 50)
    }
    if (playedGames2[p].projRushingTDs >= 1) {
      playedGames2[p].fRushPoints += ((playedGames2[p].projRushingTDs) * 6);
    }
    if(playedGames2[p].projRushingYards >= 15){
      playedGames2[p].fRushPoints += (playedGames2[p].projRushingYards/15);
    }
    if (playedGames2[p].projReceivingYards >= 15) {
      playedGames2[p].fReceivingPoints += (playedGames2[p].projReceivingYards/15);
    }
    if(playedGames2[p].projReceivingTD >= 1){
      playedGames[p].fReceivingPoints += playedGames2[p].projReceivingTD * 6;
    }
    if(playedGames2[p].receivingLongTD20 >= 1){
      playedGames2[p].fReceivingPoints += (playedGames2[p].receivingLongTD20 + playedGames2[p].receivingLongTD30 / playedGames2[p].gamesPlayed);
      pointsPerGameBigPlays += (playedGames2[p].receivingLongTD20 + playedGames2[p].receivingLongTD30 / playedGames2[p].gamesPlayed);
    }
    if(playedGames2[p].receivingLongTD40 >= 1){
      playedGames2[p].fReceivingPoints += (playedGames2[p].receivingLongTD50 +  playedGames2[p].receivingLongTD40 / playedGames2[p].gamesPlayed) * 2;
      pointsPerGameBigPlays += (playedGames2[p].receivingLongTD50 +  playedGames2[p].receivingLongTD40 / playedGames2[p].gamesPlayed) * 2;
    }
    if(playedGames2[p].receivingLongTD60 >= 1){
      playedGames2[p].fReceivingPoints += (playedGames2[p].receivingLongTD60 + playedGames2[p].receivingLongTD70 / playedGames2[p].gamesPlayed) * 3;
      pointsPerGameBigPlays += (playedGames2[p].receivingLongTD60 + playedGames2[p].receivingLongTD70 / playedGames2[p].gamesPlayed) * 3;
    }
    if(playedGames2[p].receivingLongTD80 >= 1){
      playedGames2[p].fReceivingPoints += (playedGames2[p].receivingLongTD80 + playedGames2[p].receivingLongTD90 / playedGames2[p].gamesPlayed) * 4;
      pointsPerGameBigPlays += (playedGames2[p].receivingLongTD80 + playedGames2[p].receivingLongTD90 / playedGames2[p].gamesPlayed) * 4;
    }
    if(playedGames2[p].rushingLongTD20 >= 1){
      playedGames2[p].fRushPoints += (playedGames2[p].rushingLongTD20 + playedGames2[p].rushingLongTD30 / playedGames2[p].gamesPlayed);
      pointsPerGameBigPlays += (playedGames2[p].rushingLongTD20 + playedGames2[p].rushingLongTD30 / playedGames2[p].gamesPlayed);
    }
    if(playedGames2[p].rushingLongTD40 >= 1){
      playedGames2[p].fRushPoints += (playedGames2[p].rushingLongTD50 +  playedGames2[p].rushingLongTD40 / playedGames2[p].gamesPlayed) * 2;
      pointsPerGameBigPlays += (playedGames2[p].rushingLongTD50 +  playedGames2[p].rushingLongTD40 / playedGames2[p].gamesPlayed) * 2;
    }
    if(playedGames2[p].rushingLongTD60 >= 1){
      playedGames2[p].fRushPoints += (playedGames2[p].rushingLongTD60 + playedGames2[p].rushingLongTD70 / playedGames2[p].gamesPlayed) * 3;
      pointsPerGameBigPlays += (playedGames2[p].rushingLongTD60 + playedGames2[p].rushingLongTD70 / playedGames2[p].gamesPlayed) * 3;
    }
    if(playedGames2[p].rushingLongTD80 >= 1){
      playedGames2[p].fRushPoints += (playedGames2[p].rushingLongTD80 + playedGames2[p].rushingLongTD90 / playedGames2[p].gamesPlayed) * 4;
      pointsPerGameBigPlays += (playedGames2[p].rushingLongTD80 + playedGames2[p].rushingLongTD90 / playedGames2[p].gamesPlayed) * 4;
    }


    if(playedGames2[p].position == "QB"){
      playedGames2[p].fPassPoints += playedGames2[p].fReceivingPoints + playedGames2[p].fRushPoints;
    }
    if(playedGames2[p].position == "RB"){
      playedGames2[p].fRushPoints += playedGames2[p].fReceivingPoints + playedGames2[p].fPassPoints;
    }
    if(playedGames2[p].position == "WR" || playedGames2[p].position === "TE"){
      playedGames2[p].fReceivingPoints += playedGames2[p].fRushPoints + playedGames2[p].fPassPoints;
    }
     playedGames2[p].pointsOffBigPlays = pointsPerGameBigPlays;
    // console.log(playedGames2[p]);
    // console.log(pointsPerGameBigPlays);

  }
  return playedGames2;
}
function sortByPoints(playersList){
  let check = false;
  const hold = [];
  while(!check){
    check = true;
    for (var i = 0; i < playersList.length -1; i++) {
      let holdProjections = playersList[i].fPassPoints + playersList[i].fReceivingPoints + playersList[i].fRushPoints;
      let holdProjections2 = playersList[i + 1].fPassPoints + playersList[i + 1].fReceivingPoints + playersList[i + 1].fRushPoints;
      if(holdProjections > holdProjections2){
        hold.push(playersList[i]);
        hold.push(playersList[i + 1]);
        playersList[i] = hold[1];
        playersList[i+1] = hold[0];
        hold.pop();
        hold.pop();
        check = false;
      }
    }
  }
  playersList.reverse();
  return playersList;
}
  function smartSort(playersList){
    let count = 0;
    let check = false;
    const hold = [];
    while(!check){

      check = true;
      for (var i = 0; i < playersList.length -1; i++){
        let alg1 = 0;
        let alg2 = 0;
        let holdProjections = playersList[i].fPassPoints + playersList[i].fReceivingPoints + playersList[i].fRushPoints;
        let holdProjections2 = playersList[i + 1].fPassPoints + playersList[i + 1].fReceivingPoints + playersList[i + 1].fRushPoints;
        if(holdProjections > holdProjections2){
          alg1 += 2;
        }else if(holdProjections < holdProjections2){ alg2 += 2;}
        if(playersList[i].avgDraftPos < playersList[i +1].avgDraftPos){
          alg1++;
        }else if(playersList[i].avgDraftPos > playersList[i +1].avgDraftPos){ alg2++; }
        if(playersList[i].projAvgDraft < playersList[i+1].projAvgDraft){
          alg1++;
        } else if(playersList[i].projAvgDraft > playersList[i+1].projAvgDraft){ alg2++; }
        if(playersList[i].projFP > playersList[i+1].projFP){
          alg1++;
        }else if(playersList[i].projFP < playersList[i+1].projFP){ alg2++; }
        if(playersList[i].projDraftKingsFP > playersList[i+1].projDraftKingsFP){
          alg1++;
        }else  if(playersList[i].projDraftKingsFP < playersList[i+1].projDraftKingsFP){ alg2++; }
        if(playersList[i].projFanDuelFP > playersList[i+1].projFanDuelFP){
          alg1++;
        }else if(playersList[i].projFanDuelFP < playersList[i+1].projFanDuelFP){ alg2++; }
        if(playersList[i].projFDFP > playersList[i+1].projFDFP){
          alg1++;
        }else if(playersList[i].projFDFP < playersList[i+1].projFDFP){ alg2++; }
        if(playersList[i].projYahooFP > playersList[i+1].projYahooFP){
          alg1++;
        }else  if(playersList[i].projYahooFP < playersList[i+1].projYahooFP){ alg2++; }
        if(playersList[i].depthOrder < playersList[i+1].depthOrder){
          alg1++;
        }
        if(playersList[i].depthOrder > playersList[i+1].depthOrder){
          alg2++;
        }
        let injuryProb = playersList[i].gamesPlayed/(playersList[i].experience * 16);
        let injuryProb2 = playersList[i +1].gamesPlayed/(playersList[i+1].experience * 16);
        if(injuryProb > injuryProb2){
          alg1++;
        }else if(injuryProb < injuryProb2){
          alg2++;
        }

        if(alg1 > alg2){
          hold.push(playersList[i]);
          hold.push(playersList[i + 1]);
          playersList[i] = hold[1];
          playersList[i+1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
        }
      }
    }
    playersList.reverse();
    return playersList;

  }
  function sortPassTDPoints(){
    let count = 0;
    let check = false;
    const hold = [];
    while(!check){
      check = true;
      for (var i = 0; i < playedGames.length -1; i++){
        if(playedGames[i].fPassPoints > playedGames[i+1].fPassPoints){
          hold.push(playedGames[i]);
          hold.push(playedGames[i + 1]);
          playedGames[i] = hold[1];
          playedGames[i+1] = hold[0];
          hold.pop();
          hold.pop();
          check = false;
          count++;
        }
      }
    }
    playedGames.reverse();
    console.log(playedGames);
  }



    function test(tempArray){
      //console.log(tempName[tempID.indexOf("00-0029263")])

      //allInfo = tempArray;
      //console.log(allInfo);
      let nameHold = "w";
      for(var o = 0; o < tempArray.length; o++){
        $("#title").append(`{"playerName": "${tempArray[o].playerName}", "playerID": "${tempArray[o].playerID}", "attempts": ${tempArray[o].attempts}, "completions": ${tempArray[o].completions}, "totalYard": ${tempArray[o].totalYard}, "PassTouchDowns": ${tempArray[o].PassTouchDowns}, "rushingYards": ${tempArray[o].rushingYards}, "rushingAtt": ${tempArray[o].rushingAtt}, "rushingTD": ${tempArray[o].rushingTD}, "rushingLongTD10": ${tempArray[o].rushingLongTD10}, "rushingLongTD20": ${tempArray[o].rushingLongTD20}, "rushingLongTD30": ${tempArray[o].rushingLongTD30}, "rushingLongTD40": ${tempArray[o].rushingLongTD40},"rushingLongTD50": ${tempArray[o].rushingLongTD50},"rushingLongTD60": ${tempArray[o].rushingLongTD60},"rushingLongTD70": ${tempArray[o].rushingLongTD70},"rushingLongTD80": ${tempArray[o].rushingLongTD80},"rushingLongTD90": ${tempArray[o].rushingLongTD90}, "receptions": ${tempArray[o].receptions}, "receivingTD": ${tempArray[o].receivingTD}, "receivingYards": ${tempArray[o].receivingYards}, "receivingLongTD10": ${tempArray[o].receivingLongTD10}, "receivingLongTD20": ${tempArray[o].receivingLongTD20}, "receivingLongTD30": ${tempArray[o].receivingLongTD30},"receivingLongTD40": ${tempArray[o].receivingLongTD40}, "receivingLongTD50": ${tempArray[o].receivingLongTD50}, "receivingLongTD60": ${tempArray[o].receivingLongTD60}, "receivingLongTD70": ${tempArray[o].receivingLongTD70}, "receivingLongTD80": ${tempArray[o].receivingLongTD80}, "receivingLongTD90": ${tempArray[o].receivingLongTD90}, "kickRetTD": ${tempArray[o].kickRetTD}, "ExtraPoints": ${tempArray[o].ExtraPoints}, "FieldGoalsMade": ${tempArray[o].FieldGoalsMade}, "FieldGoalAtt": ${tempArray[o].FieldGoalAtt}, "FieldGoalYards": ${tempArray[o].FieldGoalYards}, "gamesPlayed": ${tempArray[o].gamesPlayed}, "fPassPoints": ${tempArray[o].fPassPoints}, "fRushPoints": ${tempArray[o].fRushPoints}, "fReceivingPoints": ${tempArray[o].fReceivingPoints}, "fKickPoints": ${0}, "position": "${tempArray[o].position}", "status": "${tempArray[o].status}", "experience": ${tempArray[o].experience}, "byeWeek": ${tempArray[o].byeWeek}, "avgDraftPos": ${tempArray[o].avgDraftPos}, "depthOrder": ${tempArray[o].depthOrder}, "upcomingOppRank": ${tempArray[o].upcomingOppRank}, "drafted": ${tempArray[o].drafted}, "sportsDataID": ${tempArray[o].sportsDataID}, "projGames": ${tempArray[o].projGames}, "projAvgDraft": ${tempArray[o].projAvgDraft}, "projExtraPoints": ${tempArray[o].projExtraPoints}, "projFP": ${tempArray[o].projFP}, "projDraftKingsFP": ${tempArray[o].projDraftKingsFP}, "projFanDuelFP": ${tempArray[o].projFanDuelFP}, "projFDFP": ${tempArray[o].projFDFP}, "projYahooFP": ${tempArray[o].projYahooFP}, "projPPRFP": ${tempArray[o].projPPRFP}, "projTD": ${tempArray[o].projTD}, "projGamesStarted": ${tempArray[o].projGamesStarted}, "projReceptions": ${tempArray[o].projReceptions}, "projRecepPercent": ${tempArray[o].projRecepPercent}, "projReceivingTD": ${tempArray[o].projReceivingTD}, "projRecepTargs": ${tempArray[o].projRecepTargs}, "projRushingATT": ${tempArray[o].projRushingATT}, "projRushingYards": ${tempArray[o].projRushingYards}, "projRushingYardsPerCarry": ${tempArray[o].projRushingYardsPerCarry}, "projReceivingYards": ${tempArray[o].projReceivingYards}, "projReceivingYardsPerRecep": ${tempArray[o].projReceivingYardsPerRecep}, "projRushingTDs": ${tempArray[o].projRushingTDs}, "projPassingYards": ${tempArray[o].projPassingYards}, "projPassingTDs": ${tempArray[o].projPassingTDs}, "projPassingATT": ${tempArray[o].projPassingATT}, "projPassingYardsPerATT": ${tempArray[o].projPassingYardsPerATT}, "projFGMade": ${tempArray[o].projFGMade}  }, `);
      }
    }






});


