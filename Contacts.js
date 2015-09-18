/**
 * Created by Harghan on 11/09/2015.
 */
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Contacts = {
        listSize: 0,
        list: {},
        instance: function () {
            return Contact.Contacts;
        },
        clear: function () {
            Contact.Contacts.listSize = 0;
            Contact.Contacts.list = {};
        },
        size: function () {
            return Contact.Contacts.listSize;
        }
    };

    return self;

}(Contact || {}));