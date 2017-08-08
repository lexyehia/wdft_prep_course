/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (let s = '#'; s.length <= 7; s += '#') {
    console.log(s);
}