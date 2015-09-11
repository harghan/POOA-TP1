var Contact = Contact || {};

Contact = (function (self) {

    self.Mail = function (aAddress, aCategory) {

        var address, category;

        this.address = function () {
            return address;
        };

        this.category = function () {
            return category;
        };

        var process = function () {
        },
            init = function (aAddress, aCategory) {
                address = aAddress;
                category = aCategory;
            };

        init(aAddress, aCategory);
    };

    self.MailCategory = {
        PERSO: 0,
        PRO: 1
    };

    return self;

}(Contact || {}));