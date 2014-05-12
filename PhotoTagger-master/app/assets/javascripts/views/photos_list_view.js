(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotosListView = Tagger.PhotosListView = function (){
    this.$el = $("<div></div>");
  };

  _.extend(PhotosListView.prototype, {
    render: function(){
      this.$el.html("<ul id='photos'></ul>");
      Tagger.Photo.all.forEach(function(photo){
        debugger
        $('#photos').append('<li>' + photo.attributes.title + '</li>');
      });
      return this;
    }
  });
})(this)