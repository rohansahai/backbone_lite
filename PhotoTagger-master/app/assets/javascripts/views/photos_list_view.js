(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotosListView = Tagger.PhotosListView = function (){
    this.$el = $("<div></div>");
    Tagger.Photo.on('add', this.render.bind(this));
    this.$el.on("click", "a", this.showDetail.bind(this));
    this.$el.on("click", "img", this.popTagSelectView.bind(this));
  };

  _.extend(PhotosListView.prototype, {
    render: function(){
      var listPhotos = $("<ul id='photos'></ul>");
      Tagger.Photo.all.forEach(function(photo){
        listPhotos.append('<li> <a data-id='+ photo.attributes.id + ' href=#>' + photo.attributes.title + '</a></li>');
      });
      this.$el.html(listPhotos);
      return this;
    },
    showDetail: function(event){
      // Use the data-id stored in the a tag to lookup the proper photo (want
      //to write a Photo::find method now?), and then pass it to showPhotoDetail.
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      var photo = Tagger.Photo.find(parseInt($currentTarget.attr("data-id")));
      Tagger.showPhotoDetail(photo);
    },
    popTagSelectView: function(event){
      console.log(event.offsetX, event.offsetY);
    }
  })
})(this)
