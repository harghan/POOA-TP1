var Mail = Mail || {};

Mail = ( function (self) {

    self.Mail= function (address,category) {

        var private_attr;
        var address;
        var category;

        this.address = function () {
            return address;
        };

        this.category = function () {
            return category;
        };


        this.set_attr = function (new_value) {
            private_attr = new_value;
        };

        var process = function () {
        };

        var init = function (category, mail) {
            this.category = category;
            this.address = address;
        }

        init(category,address);
    };

    self.MailCategory = {
        PERSO: 0,
        PRO: 1
    }


    return self;

}(Mail || {}) );