class ImageModel {
  constructor(imageUri) {
    this.imageUri = imageUri;
    this.id = ImageModel.generateUniqueId();
  }

  static generateUniqueId() {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}

export default ImageModel;
