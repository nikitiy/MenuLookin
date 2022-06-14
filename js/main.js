var sections = ['#food', '#bar', '#off-season'];

function change(item){
    sections.forEach(function(i) {
        if (i != item) {
            $(i).css('display', 'none');
        }
      });
    $(item).css('display', 'flex');
}
