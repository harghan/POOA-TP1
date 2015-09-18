
var Contact = Contact || {};

Contact = (function (self) {
    "use strict";

    self.Builder = function () {
        this.createMinimalContact = function (gender, firstName, lastName) {
            return new Contact.Contact(gender, firstName, lastName);
        };
        this.createContactWithProfessionalMail = function (genre,
                                                          firstName,
                                                          lastName,
                                                          mail) {
            var contact = this.createMinimalContact(genre, firstName, lastName);
            contact.addMail(new Contact.Mail(mail, Contact.MailCategory.PRO));
            return contact;
        };

        this.createContactWithProfessionalMobile = function (genre,
                                                             firstName,
                                                             lastName,
                                                             number) {
            var contact = this.createMinimalContact(genre, firstName, lastName);
            contact.addPhone(new Contact.Phone(number,
                Contact.PhoneCategory.PRO, Contact.PhoneType.MOBILE));
            return contact;
        };
    };

    return self;

}(Contact || {}));