let randomNumber = Math.floor(Math.random() * 5) + 1;

$(document).ready(function () {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&chart = mostPopular&maxResults=30&q=%EC%95%BD%EC%82%AC%EA%B0%80%20%EB%93%A4%EB%A0%A4%EC%A3%BC%EB%8A%94%20%EC%95%BD%20%EC%9D%B4%EC%95%BC%EA%B8%B0&type=video&key=AIzaSyDUA5p6nQCAaXFWIZFmmkMl5tbV3JnbNJE",
    // spare key: AIzaSyCc07mgT15uAIzaizLoF3cWcMGn83Lx2uw
    contentType: "application/json",

    success: function (data) {
      item = data.items[randomNumber];
      console.log(item);
      video_ID = item.id.videoId;
      $(".player").append(
        '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/' +
          video_ID +
          '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      );
    },
    complete: function (data) {},
    error: function (xhr, status, error) {
      console.log("유튜브 요청 에러: " + error);
    },
  });
});
