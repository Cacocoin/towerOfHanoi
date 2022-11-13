//Tower of Hanoi algorithm to find the minimum moves for completion based on number of disks in puzzle, reduced and as an arrow function.

towerHanoiArrow = (a) => a >= 0 ? ((2**(a-1)) + (2**(a-1))-1): 'enter a value greater than 0';
