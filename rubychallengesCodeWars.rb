# Write a function for doing an in-place ↴ shuffle of an array.
# The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

# Assume that you have a function get_random(floor, ceiling) for getting a random integer that is >=floor and <=ceiling.

def shuffle(arg)
    max = arg.length - 1
    
    i = 0
    
    while i <= max
        swapper_idx = rand(i..max)
        temp = arg[i]
        arg[i] = arg[swapper_idx]
        arg[swapper_idx] = temp
        i += 1
    end
   arg
end



# run your function through some test cases here
# remember: debugging is half the battle!
puts shuffle([1,2,3,4,5,6,100]).to_s


#note from me to me
# what you are doing is selecting a random new value for the current index from the idx to the end
# because the numbers previous to(left of) the current idx or pointer is already been randomly selected
# what was previously in that slot is moved into the available pool which is the array to the rigbht of the pointer

