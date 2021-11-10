import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Messages from "../common/Messages";
import Icon from "react-native-vector-icons/Ionicons";
import GameBoard from "../components/GameBoard/GameBoard";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boardMatrix: [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      score: 0,
      gameWon: false,
      gameLost: false,

      gestureName: "none",
    };
    this.popRandom();
    this.popRandom();
  }

  reset = () => {
    this.setState(
      {
        boardMatrix: [
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        score: 0,
        gameWon: false,
        gameLost: false,
      },
      () => {
        this.popRandom();
        this.popRandom();
        const { boardMatrix } = this.state;
        this.setState({
          boardMatrix: boardMatrix,
        });
      }
    );
  };

  popRandom = () => {
    const { boardMatrix } = this.state;

    let row = 0;
    let col = 0;

    do {
      row = Math.floor(Math.random() * 4);
      col = Math.floor(Math.random() * 4);
    } while (boardMatrix[row][col] != 0);

    const tileValue = Math.random() < 0.5 ? 2 : 4;

    boardMatrix[row][col] = tileValue;

    /*this.setState({
      boardMatrix: boardMatrix,
    });*/

    this.checkGameover();
  };

  checkGameover = () => {
    const { boardMatrix } = this.state;

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (boardMatrix[i][j] == 0) {
          return;
        }

        if (i != 0 && boardMatrix[i][j] == boardMatrix[i - 1][j]) {
          return;
        }
        if (i != 3 && boardMatrix[i][j] == boardMatrix[i + 1][j]) return;
        if (j != 0 && boardMatrix[i][j] == boardMatrix[i][j - 1]) return;
        if (j != 3 && boardMatrix[i][j] == boardMatrix[i][j + 1]) return;
      }
    }
    this.setState({
      gameLost: true,
    });
  };

  onSwipe(gestureName) {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

    switch (gestureName) {
      case SWIPE_UP:
        this.upMove;
        break;
      case SWIPE_DOWN:
        this.downMove;
        break;
      case SWIPE_LEFT:
        this.leftMove;
        break;
      case SWIPE_RIGHT:
        this.rightMove;
        break;
    }
  }

  leftMove = () => {
    const { boardMatrix } = this.state;

    let moved = false;

    for (let i = 0; i < 4; i++) {
      let mergedTiles = [0, 0, 0, 0];

      for (let j = 1; j < 4; j++) {
        if (boardMatrix[i][j] == 0) continue;

        for (let k = j; k > 0; k--) {
          if (boardMatrix[i][k - 1] == 0) {
            boardMatrix[i][k - 1] = boardMatrix[i][k];
            boardMatrix[i][k] = 0;
            moved = true;
          } else if (
            boardMatrix[i][k - 1] == boardMatrix[i][k] &&
            mergedTiles[k - 1] == 0
          ) {
            // merge code
            boardMatrix[i][k - 1] = boardMatrix[i][k - 1] + boardMatrix[i][k];
            boardMatrix[i][k] = 0;
            mergedTiles[k - 1] = 1;
            this.setState({
              score: this.state.score + boardMatrix[i][k - 1],
            });
            if (boardMatrix[i][k - 1] == 2048)
              this.setState({
                gameWon: true,
              });

            moved = true;
            break;
          }
        }
      }
    }

    if (moved) this.popRandom();

    this.setState({
      boardMatrix: boardMatrix,
    });
  };

  rightMove = () => {
    const { boardMatrix } = this.state;

    let moved = false;

    for (let i = 0; i < 4; i++) {
      let mergedTiles = [0, 0, 0, 0];

      for (let j = 3; j >= 0; j--) {
        if (boardMatrix[i][j] == 0) continue;

        for (let k = j; k < 4; k++) {
          if (boardMatrix[i][k + 1] == 0) {
            boardMatrix[i][k + 1] = boardMatrix[i][k];
            boardMatrix[i][k] = 0;
            moved = true;
          } else if (
            boardMatrix[i][k + 1] == boardMatrix[i][k] &&
            mergedTiles[k + 1] == 0
          ) {
            // merge code
            boardMatrix[i][k + 1] = boardMatrix[i][k + 1] + boardMatrix[i][k];
            boardMatrix[i][k] = 0;
            mergedTiles[k + 1] = 1;
            this.setState({
              score: this.state.score + boardMatrix[i][k + 1],
            });
            if (boardMatrix[i][k + 1] == 2048)
              this.setState({
                gameWon: true,
              });

            moved = true;
            break;
          }
        }
      }
    }

    if (moved) this.popRandom();

    this.setState({
      boardMatrix: boardMatrix,
    });
  };

  upMove = () => {
    const { boardMatrix } = this.state;

    let moved = false;

    for (let i = 0; i < 4; i++) {
      let mergedTiles = [0, 0, 0, 0];

      for (let j = 1; j < 4; j++) {
        if (boardMatrix[j][i] == 0) continue;

        for (let k = j; k > 0; k--) {
          if (boardMatrix[k - 1][i] == 0) {
            boardMatrix[k - 1][i] = boardMatrix[k][i];
            boardMatrix[k][i] = 0;
            moved = true;
          } else if (
            boardMatrix[k - 1][i] == boardMatrix[k][i] &&
            mergedTiles[k - 1] == 0
          ) {
            // merge code
            boardMatrix[k - 1][i] = boardMatrix[k][i] + boardMatrix[k][i];
            boardMatrix[k][i] = 0;
            mergedTiles[k - 1] = 1;
            this.setState({
              score: this.state.score + boardMatrix[k - 1][i],
            });
            if (boardMatrix[k - 1][i] == 2048)
              this.setState({
                gameWon: true,
              });

            moved = true;
            break;
          }
        }
      }
    }

    if (moved) this.popRandom();

    this.setState({
      boardMatrix: boardMatrix,
    });
  };

  downMove = () => {
    const { boardMatrix } = this.state;

    let moved = false;

    for (let i = 0; i < 4; i++) {
      let mergedTiles = [0, 0, 0, 0];

      for (let j = 3; j >= 0; j--) {
        if (boardMatrix[j][i] == 0) continue;

        for (let k = j; k < 3; k++) {
          if (boardMatrix[k + 1][i] == 0) {
            boardMatrix[k + 1][i] = boardMatrix[k][i];
            boardMatrix[k][i] = 0;
            moved = true;
          } else if (
            boardMatrix[k + 1][i] == boardMatrix[k][i] &&
            mergedTiles[k + 1] == 0
          ) {
            // merge code
            boardMatrix[k + 1][i] = boardMatrix[k][i] + boardMatrix[k][i];
            boardMatrix[k][i] = 0;
            mergedTiles[k + 1] = 1;
            this.setState({
              score: this.state.score + boardMatrix[k + 1][i],
            });
            if (boardMatrix[k + 1][i] == 2048)
              this.setState({
                gameWon: true,
              });

            moved = true;
            break;
          }
        }
      }
    }

    if (moved) this.popRandom();

    this.setState({
      boardMatrix: boardMatrix,
    });
  };

  navigateToMenu = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { boardMatrix } = this.state;
    const config = {
      velocityThreshold: -1,
      directionalOffsetThreshold: 80,
    };
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.gameName}>2048</Text>
          </View>

          <View style={styles.lastScoreContainer}>
            <Text style={styles.lastScoreLabel}>Last Score:</Text>
            <Text style={styles.lastScore}>{this.state.score}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreLabel}>Score:</Text>
            <Text style={styles.score}>{this.state.score}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Icon
              name="ios-home"
              size={40}
              titel="Menu"
              color="#847262"
              style={{
                marginVertical: "5%",
                marginHorizontal: "5%",
              }}
              onPress={this.navigateToMenu}
            />
            <Icon
              name="ios-reload"
              size={40}
              titel="Reload"
              color="#847262"
              style={{
                marginVertical: "5%",
                marginHorizontal: "5%",
              }}
              onPress={this.reset}
            />
          </View>
        </View>

        <GestureRecognizer
          onSwipe={(direction) => this.onSwipe(direction)}
          onSwipeUp={this.upMove}
          onSwipeDown={this.downMove}
          onSwipeLeft={this.leftMove}
          onSwipeRight={this.rightMove}
          config={config}
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <GameBoard matrix={boardMatrix} />
          </View>
        </GestureRecognizer>
        <View style={{ margin: 10 }}>
          <Text style={styles.gameInfo}>{Messages.description}</Text>
        </View>

        {this.state.gameWon && (
          <TouchableOpacity onPress={this.reset} style={styles.overlayBtn}>
            <Text style={styles.gameoverHeading}>You Win!</Text>
            <Text style={styles.gameoverScore}>
              Your Score: {this.state.score}
            </Text>
            <Text style={styles.gameoverMessage}>
              Click anywhere to start a new game
            </Text>
          </TouchableOpacity>
        )}

        {this.state.gameLost && (
          <TouchableOpacity onPress={this.reset} style={styles.overlayBtn}>
            <Text style={styles.gameoverHeading}>Game Over</Text>
            <Text style={styles.gameoverScore}>
              Your Score: {this.state.score}
            </Text>
            <Text style={styles.gameoverMessage}>
              Click anywhere to start a new game
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
