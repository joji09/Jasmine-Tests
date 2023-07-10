
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 12000,
    years: 8,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('157.70');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 20100,
    years: 6,
    rate: 4.6
  };
  expect(calculateMonthlyPayment(values)).toEqual('319.99');
});

/// etc
