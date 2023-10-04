const axios = require("axios");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Deck of Cards API Tests", () => {
  let deckId;
  let player1Hand;
  let player2Hand;

  Given(
    "User navigae to the card page and confirms the site is up",
    async () => {
      const baseUrl = "https://deckofcardsapi.com";
      try {
        await axios.get(baseUrl);
        expect(response.status).to.equal(200);
      } catch (error) {
        return e;
      }
    }
  );

  Then("User get a new deck", async () => {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2"
    );
    deckId = response.data.deck_id;
    expect(response.status).to.equal(200);
  });
  Then("User shuffle the cards", async () => {
    try {
      await axios.get(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      expect(response.status).to.equal(200);
    } catch (error) {
      return e;
    }
  });

  Then("should deal three cards to each of two players", async () => {
    const numCardsToDeal = 3;
    const players = ["player1", "player2"];

    for (const player of players) {
      const response = await axios.get(
        "https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2"
      );
      expect(response.status).to.equal(200);
      expect(response.data.cards).to.have.lengthOf(numCardsToDeal);

      if (player === "player1") {
        player1Hand = response.data.cards;
      } else if (player === "player2") {
        player2Hand = response.data.cards;
      }
    }
  });

  Then("User should check whether either player has blackjack", () => {
    const isBlackjackPlayer1 = isBlackjack(player1Hand);
    const isBlackjackPlayer2 = isBlackjack(player2Hand);

    if (isBlackjackPlayer1 || isBlackjackPlayer2) {
      if (isBlackjackPlayer1) {
      }
      if (isBlackjackPlayer2) {
      }
    }
  });
});

function isBlackjack(hand) {
  if (hand.length === 2) {
    const totalValue = hand.reduce((total, card) => {
      if (card.value === "ACE") {
        return total + 11;
      } else if (["KING", "QUEEN", "JACK"].includes(card.value)) {
        return total + 10;
      } else {
        return total + parseInt(card.value);
      }
    }, 0);

    return totalValue === 21;
  }
  return false;
}
