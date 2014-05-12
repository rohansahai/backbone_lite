// This is a manifest file that'll be compiled into application.js,
// which will include all the files listed below.
//
// Any JavaScript/Coffee file within this directory,
// lib/assets/javascripts, vendor/assets/javascripts, or
// vendor/assets/javascripts of plugins, if any, can be referenced
// here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll
// appear at the bottom of the the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE
// PROCESSED, ANY BLANK LINE SHOULD GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.serializeJSON
//= require underscore
//
//= require_tree ./models
//= require_tree ../templates
//
//= require_tree .
(function(root){
  var Tagger = root.Tagger = (root.Tagger || {})
  var Photo = Tagger.Photo = function(attrs) {
    this.attributes = attrs;
  }

  _.extend(Photo.prototype, {
    get: function(attr_name){
      return this.attributes[attr_name];
    },
    set: function(attr_name, value){
      this.attributes[attr_name] = value;
    },
    create: function(callback){
      var that = this;
      if (!this.attributes.id){
        $.ajax({
          url: 'api/photos',
          method: 'POST',
          data: {
            photo: this.attributes
          },
          success: function(response){
            _.extend(that.attributes, response);
            callback(response)
          }
        });
      }
    },
    save: function(callback){
      if (this.attributes.id){
        $.ajax({
          url: 'api/photos/' + this.attributes.id,
          method: 'PATCH', //might need to change this?!?
          data: {
            photo: this.attributes
          },
          success: function(response){
            _.extend(this.attributes, response);
            callback(response);
          }
        });
      } else {
        this.create(callback);
      }
    }

  });
})(this)
