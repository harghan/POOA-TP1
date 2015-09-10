var Contact = Contact || {};

Contact = ( function (self) {

    self.Phone = function (number,category,type) {

        var private_attr;
        var number;
        var category;
        var type;

        this.number = function () {
            return number;
        };
        this.category = function () {
            return category;
        };
        this.type = function () {
            return type;
        };

        this.set_attr = function (new_value) {
            private_attr = new_value;
        };

        var process = function () {
        };



        var init = function (number, category, type) {
            this.category = category;
            this.number = number;
            this.type = type;
        };

        init(category,number,type);
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

}(Contact || {}) );