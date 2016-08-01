
# given an arr of stock prices find the most possible profit from two day's trade(one buy one sell)
# was given a question like this in my mock interview and also saw one like it on interview cake.

def stock_prices(arr)
  min = arr[0]
  max = arr[0]
  big_gain = 0

  arr.each do |n|
    if n < min
      min = n
      max = n
    elsif n > max
      max = n
    end
    big_gain = max - min if max - min > big_gain
  end

  big_gain
end