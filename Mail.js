var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Mail = function (aAddress, aCategory) {

        var address, category,
            init = function (aAddress, aCategory) {
                address = aAddress;
                category = aCategory;
            };

        this.address = function () {
            return address;
        };

        this.category = function () {
            return category;
        };
        init(aAddress, aCategory);
    };

    self.MailCategory = {
        PERSO: 0,
        PRO: 1
    };

    return self;

}(Contact || {}));