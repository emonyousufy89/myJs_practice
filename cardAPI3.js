const axios = require("axios");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const expect = chai.expect;

async function cardapiTest() {
  let deckId;
  let player1Hand;
  let player2Hand;

  const baseUrl =
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=3";
  try {
    const response = await axios.get(baseUrl);
    expect(response.status).to.equal(200);
    console.log("first response", response);
  } catch (error) {
    console.log("error1");
  }
  try {
    const response2 = await axios.get(
      "https://deckofcardsapi.com/api/deck/hol7tmgx7yiu/draw/?count=2"
    );
    deckId = response2.data.deck_id;
    expect(response2.status).to.equal(200);
    console.log("second response", response2);
  } catch (error) {
    console.log("error2");
  }
  try {
    const response3 = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    expect(response3.status).to.equal(200);
    console.log("Third Response", response3);
  } catch (error) {
    console.log("error3");
  }

  //   const numCardsToDeal = 3;
  //   const players = ["player1", "player2"];

  //   for (const player of players) {
  //     const response4 = await axios.get(
  //       "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2"
  //     );
  //     expect(response4.status).to.equal(200);
  //     expect(response4.data.cards).to.have.lengthOf(numCardsToDeal);
  //     console.log(response4);

  //     if (player === "player1") {
  //       player1Hand = response.data.cards;
  //     } else if (player === "player2") {
  //       player2Hand = response.data.cards;
  //     }
  //   }
  //   const isBlackjackPlayer1 = isBlackjack(player1Hand);
  //   const isBlackjackPlayer2 = isBlackjack(player2Hand);

  //   if (isBlackjackPlayer1 || isBlackjackPlayer2) {
  //     if (isBlackjackPlayer1) {
  //     }
  //     if (isBlackjackPlayer2) {
  //     }
  //   }
}

// function isBlackjack(hand) {
//   if (hand.length === 2) {
//     const totalValue = hand.reduce((total, card) => {
//       if (card.value === "ACE") {
//         return total + 11;
//       } else if (["KING", "QUEEN", "JACK"].includes(card.value)) {
//         return total + 10;
//       } else {
//         return total + parseInt(card.value);
//       }
//     }, 0);

//     return totalValue === 21;
//   }
//   return false;
// }
cardapiTest();
