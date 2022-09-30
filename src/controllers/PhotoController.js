export default new class PhotoController {
  index(req, res) {
    res.json(req.file);
  }
}();
