describe("payments test", function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfor();
    
        expect(Object.keys(allPayments).lenght).toEqual(1)
    });

    it('should update payment on appendPaymentTable', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.lenght).toEqual(4);
        expect(curTdList[0].innerText).toEqual('$100');
    });

    it('should create a new payment', function () {
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});

