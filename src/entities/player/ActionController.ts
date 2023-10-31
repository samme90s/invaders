/**
 * @fileoverview Defines a controller that handles the set keybindings for actions and their
 * respective states.
 * @author Samuel Svensson
 */

export class ActionController {
      private moveUp: boolean = false
      private moveLeft: boolean = false
      private moveDown: boolean = false
      private moveRight: boolean = false
      private doShoot: boolean = false

      constructor() {
            document.addEventListener('keydown', event => this.keyDown(event))
            document.addEventListener('keyup', event => this.keyUp(event))
      }

      get up(): boolean {
            return this.moveUp
      }

      get left(): boolean {
            return this.moveLeft
      }

      get down(): boolean {
            return this.moveDown
      }

      get right(): boolean {
            return this.moveRight
      }

      get shoot(): boolean {
            return this.doShoot
      }

      private keyDown(event: KeyboardEvent): void {
            if (event.key === 'w' || event.key === 'ArrowUp') {
                  this.moveUp = true
            }

            if (event.key === 'a' || event.key === 'ArrowLeft') {
                  this.moveLeft = true
            }

            if (event.key === 's' || event.key === 'ArrowDown') {
                  this.moveDown = true
            }

            if (event.key === 'd' || event.key === 'ArrowRight') {
                  this.moveRight = true
            }

            if (event.code === 'Space') {
                  this.doShoot = true
            }
      }

      private keyUp(event: KeyboardEvent): void {
            if (event.key === 'w' || event.key === 'ArrowUp') {
                  this.moveUp = false
            }

            if (event.key === 'a' || event.key === 'ArrowLeft') {
                  this.moveLeft = false
            }

            if (event.key === 's' || event.key === 'ArrowDown') {
                  this.moveDown = false
            }

            if (event.key === 'd' || event.key === 'ArrowRight') {
                  this.moveRight = false
            }

            if (event.code === 'Space') {
                  this.doShoot = false
            }
      }
}
