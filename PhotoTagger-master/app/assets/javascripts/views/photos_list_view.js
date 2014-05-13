(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotosListView = Tagger.PhotosListView = function (){
    this.$el = $("<div></div>");
    Tagger.Photo.on('add', this.render.bind(this));
  };

  _.extend(PhotosListView.prototype, {
    render: function(){
      var listPhotos = $("<ul id='photos'></ul>");
      Tagger.Photo.all.forEach(function(photo){
        listPhotos.append('<li>' + photo.attributes.title + '</li>');
      });
      this.$el.html(listPhotos);
      return this;
    }
  });
})(this)