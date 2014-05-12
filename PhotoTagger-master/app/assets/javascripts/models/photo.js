(function(root){
  var Tagger = root.Tagger = (root.Tagger || {})
  var Photo = Tagger.Photo = function(attrs) {
    this.attributes = attrs;
  }

  _.extend(Photo, {
    all: [],
    fetchByUserId: function(userId, callback){
      $.ajax({
        method: 'GET',
        url: '/api/users/' + userId + "/photos",
        success: function(response){
          Photo.all = [];
          response.forEach(function(photo){
            var newPhoto = new Photo(photo);
            Photo.all.push(newPhoto)
            callback(newPhoto); //may want to push into an array
          });
        }
      });
    },
  });

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