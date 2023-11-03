export class Sprite {
      private img: HTMLImageElement = new Image()

      constructor(src: URL) {
            this.img.src = src.toString()
      }

      getImg(): HTMLImageElement {
            return this.img
      }
}
