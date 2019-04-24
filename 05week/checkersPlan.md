
-place checkers on board:
  -initializeGrid()
  place pieces on every other square 
  nested for loops add indexes of loops
    (added indexes)%2=0 for red and %2=1 for black 
-moveChecker()
  -validInput()
    -checks if piece is there
    -checks if piece is the right color
  -validMove()
    -end position is empty
    -only moved 1 space diagnol unless jumping (than 2 and can only jump opposite color)
    -moved forward, depends on color 
      -switches when get to end of board (can go both directions)
-track player turn
  with variable in Checkers object


