function chessboard() {

    // Initialize our starting string but convert to array for reversal
    let myArray = [...'# # # # '];
    let finalString = '';

    // Create an 8-times for-loop
    for (let i = 0; i < 8; i++) {
        finalString += myArray.join('');

        // Add new line except on final line
        if (i != 7) finalString += '\n';

        // Reverse the array for next line
        myArray.reverse();
    }

    // Print out our final string
    return console.log(finalString);
}

// Call the above function
chessboard();