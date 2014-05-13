(function(root){
  var Tagger = root.Tagger = (root.Tagger || {});

  var PhotoFormView = Tagger.PhotoFormView = function (){
    this.$el = $("<div></div>");
    this.template = JST['photo_form'];
    this.$el.submit('#photo-form', this.handlePhotoCreate.bind(this));
  };

  _.extend(PhotoFormView.prototype, {
    render: function(){
      var renderedTemplate = this.template();
      this.$el.html(renderedTemplate);
      return this;
    },

    handlePhotoCreate: function(event) {
      event.preventDefault();
      var $form = $(event.target);
      var photoData = $form.serializeJSON();
      var newPhoto = new Tagger.Photo(photoData['photo']);
      $form.find('input').val('');
      newPhoto.create(function(){ alert('photo created!') });
    },
  });


})(this)