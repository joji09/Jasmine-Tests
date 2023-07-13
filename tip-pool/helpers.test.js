describe("utilities test" , function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });


it('should sum total bill amount of all payments', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
});


it('should sum top percent of a single tip on calculateTipPercent', function () {
    expect(calculateTipPercent(100, 23)).toEqual(23);
    expect(calculateTipPercent(111, 11)).toEqual(10);
});

it('should generate delete td and append to tr on appendDel', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
});

afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
});

});

