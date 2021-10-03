Instructions

1. Check out the src/index.js file to see how the above red square is created.
   Go to the src/Dot.js file and analyse the code in the constructor of the Dot class.
   In src/index.js, create a blue square of size 50.

2. In src/Dot.js analyze the code present in the move() method, which allows you to move a square to the coordinates given in the parameters
   Try to move the blue square to the coordinates x: 300, y: 50 using the move() method.
   The blue square should be at the top right of the frame.

3. Complete the method setRadius. This function takes a number as a parameter and adjusts the border-radius of the square to "round the corners".
   When the radius parameter is below 0, the border-radius must be zero.
   When the radius parameter is above 50, the border-radius must be be 50%.
   Otherwise the border-radius takes the value of the parameter.

4. Set the edge rounding of the first square to 20.
   Change the rounding of the edges of the second square so that it becomes a dot.

5. Create a new green square of size 75 and move it to the coordinates x: 350, y: 250
   Ooooops, that last one is out of the box... But don't change anything in src/index.js!
   Instead, adapt the move() method to ensure that the square never leaves the frame, which is 400px wide and 300px high. high. If your code is correct, the green square is now "stuck" to the at the bottom right edge of the frame.

Bonus

1. In index.js create an event on the button so that it adds a dot.
2. Maintain a random position for each new point created.
