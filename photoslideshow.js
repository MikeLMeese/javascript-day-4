const photoSlideShow = {
    photoList: ['corgipic1', 'corgipic2', 'corgipic3', 'corgipic4'],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length -1) {
                this.currentPhotoIndex++;
                console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of slideshow');
        }
    },
    prevPhoto: function() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Beginning of slideshow');
        }
    },
    getCurrentPhoto() {
        console.log(this.photoList[this.currentPhotoIndex]);
    }
}
photoSlideShow.nextPhoto();
photoSlideShow.prevPhoto();
photoSlideShow.getCurrentPhoto();