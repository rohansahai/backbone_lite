(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotosListView = Tagger.PhotosListView = function (){
    this.$el = $("<div></div>");
    Tagger.Photo.on('add', this.render.bind(this));
    $('a').click(this.showDetail.bind(this))
  };

  _.extend(PhotosListView.prototype, {
    render: function(){
      var listPhotos = $("<ul id='photos'></ul>");
      Tagger.Photo.all.forEach(function(photo){
        listPhotos.append('<li> <a data-id='+ photo.id + ' href=#>' + photo.attributes.title + '</a></li>');
      });
      this.$el.html(listPhotos);
      return this;
    },
    showDetail: function(event){
      event.preventDefault();
      console.log(event);
      console.log('hello');
    }
  })
})(this)