let avatars = [];
let nextId = 1;

// Путь к изображениям 
const avatarImages = [
  "/avatars/avatar1.jpg",
  "/avatars/avatar2.jpg",
  "/avatars/avatar3.jpg",
  "/avatars/avatar4.jpg",
  "/avatars/avatar5.jpg",
  "/avatars/avatar6.jpg",
  "/avatars/avatar7.jpg",
  "/avatars/avatar8.jpg",
  "/avatars/avatar9.jpg",
  "/avatars/avatar10.jpg",
  "/avatars/avatar11.jpg",
];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Генерация случайного аватара
exports.getRandomAvatar = (req, res) => {
  const { size = 200 } = req.query;

  const avatar = {
    id: nextId++,
    image: rand(avatarImages),  //путь к картинке
    size: Number(size)
  };

  avatars.push(avatar);

  res.json(avatar);
};


exports.getAllAvatars = (req, res) => {
  res.json(avatars);
};

exports.getAvatarById = (req, res) => {
  const id = Number(req.params.id);
  const avatar = avatars.find(a => a.id === id);

  avatar ? res.json(avatar) : res.status(404).json({ error: "Не найден" });
};

exports.createAvatar = (req, res) => {
  const { image, size = 200 } = req.body;

  const avatar = {
    id: nextId++,
    image: image || rand(avatarImages),
    size: Number(size)
  };

  avatars.push(avatar);
  res.status(201).json(avatar);
};

exports.updateAvatar = (req, res) => {
  const id = Number(req.params.id);
  const avatar = avatars.find(a => a.id === id);

  if (!avatar) return res.status(404).json({ error: "Не найден" });

  Object.assign(avatar, req.body);

  res.json(avatar);
};

exports.deleteAvatar = (req, res) => {
  const id = Number(req.params.id);
  avatars = avatars.filter(a => a.id !== id);

  res.json({ success: true });
};
