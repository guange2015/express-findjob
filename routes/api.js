/*
 * Serve JSON to our AngularJS client
 */

// For a real app, you'd make database requests here.
// For this example, "data" acts like an in-memory "database"
var data = {
  "posts": [
    {
      "id": 1,
      "title": "求清明周末兼职",
      "text": "赋闲在家，想找点事做，最好是室内、日结的工作 .",
      "address": "岳麓",
      "addtime": "2013-4-3 21:02",
      "sex": "男",
      "avatar": "images/avatar.png"
    },
    {
        "id": 2,
      "title": "求清明周末兼职",
      "text": "赋闲在家，想找点事做，最好是室内、日结的工作 .",
      "address": "岳麓",
      "addtime": "2013-4-3 21:02",
      "sex": "男"
    },
    {
        "id": 3,
      "title": "求清明周末兼职",
      "text": "赋闲在家，想找点事做，最好是室内、日结的工作 .",
      "address": "岳麓",
      "addtime": "2013-4-3 21:02",
      "sex": "男",
            "avatar": "images/avatar.png"

    },
    {
        "id": 4,
      "title": "Sed egestas",
      "text": "以前做过灾害预警设备技术员，目前做医疗设备技术维护。由于维护比较闲，一个礼拜只需一天或者两天去医院巡检，其他时间只有支配，愿求得一份合适的兼职 ",
      "address": "岳麓",
      "addtime": "2013-4-3 21:02",
      "sex": "女"
    }
  ]
};

// GET

exports.posts = function (req, res) {
  var posts = [], i, post, text;
  for (i = 0; i < Math.min(data.posts.length, 5); i++) {
    post = data.posts[i];
    posts.push({
      id: i,
      title: post.title,
      text: post.text
    });
  }
  res.json(data.posts);
};

exports.post = function (req, res) {
  var id = req.params.id;
  if (id >= 0 && id < data.posts.length) {
    res.json({
      post: data.posts[id]
    });
  } else {
    res.json(false);
  }
};

// POST

exports.editPost = function (req, res) {
  var id = req.body.id,
    title = req.body.title,
    text = req.body.text;

  if (id >= 0 && id < data.posts.length) {
    data.posts[id].title = title;
    data.posts[id].text = text;
    res.json(true);
  } else {
    res.json(false);
  }
};

exports.deletePost = function (req, res) {
  var id = req.body.id;

  if (id >= 0 && id < data.posts.length) {
    data.posts.splice(id, 1);
    res.json(true);
  } else {
    res.json(false);
  }
};

exports.addPost = function (req, res) {
  data.posts.push(req.body);
  res.json(req.body);
};