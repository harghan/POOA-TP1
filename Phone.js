var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Phone = function (aNumber, aCategory, aType) {

        var number, category, type,
            init = function (aNumber, aCategory, aType) {
                category = aCategory;
                number = aNumber;
                type = aType;
            };

        this.number = function () {
            return number;
        };
        this.category = function () {
            return category;
        };
        this.type = function () {
            return type;
        };
        init(aNumber, aCategory, aType);
    };

    self.PhoneCategory = {
        PERSO: 0,
        PRO: 1
    };

    self.PhoneType = {
        FIXE: 0,
        MOBILE: 1
    };

    return self;

}(Contact || {}));