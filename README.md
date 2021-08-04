A react app that can be used for typing test :)


THE ALGORITHM FOR THE TEST

1. Handle the underflow case - all characters should be shown as not-attempted
2. Handle the overflow case - early exit
3. Handle the backspace case
     - Mark the [index+1] element as notAttempted
       (irrespective of whether the index is less than zero)
     - But, don't forget to check for the overflow here
        (index + 1 -> out of bound, when index === length-1)
4. Update the status in test info
     1. Find out the last character in the inputValue and it's index
     2. Check if the character at same index in testInfo (state) matches
     3. Yes -> Correct
        No  -> Incorrect (Mistake++)
5. Irrespective of the case, characters, words and wpm can be update.