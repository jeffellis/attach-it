/**
 * AttachmentController
 *
 * @description :: Server-side logic for managing Attachments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req, res) {
    Attachment.create(req.body).exec(function(err, created) {
      res.end(JSON.stringify(created));
    });
  }
};

