/**
 * @fileoverview Defines a controller that handles the set keybindings for actions and their
 * respective states.
 * @author Samuel Svensson
 */

export class PlayerController {
      private actions: { [key: string]: boolean } = {
            w: false,
            a: false,
            s: false,
            d: false,
            ArrowUp: false,
            ArrowLeft: false,
            ArrowDown: false,
            ArrowRight: false
      }

      constructor() {
            document.addEventListener('keydown', event => this.keyDown(event))
            document.addEventListener('keyup', event => this.keyUp(event))
      }

      get up(): boolean {
            return this.actions['w']
      }

      get left(): boolean {
            return this.actions['a']
      }

      get down(): boolean {
            return this.actions['s']
      }

      get right(): boolean {
            return this.actions['d']
      }

      get shootUp(): boolean {
            return this.actions['ArrowUp']
      }

      get shootLeft(): boolean {
            return this.actions['ArrowLeft']
      }

      get shootDown(): boolean {
            return this.actions['ArrowDown']
      }

      get shootRight(): boolean {
            return this.actions['ArrowRight']
      }

      private keyDown(event: KeyboardEvent): void {
            if (Object.hasOwn(this.actions, event.key)) {
                  this.actions[event.key] = true
            }
      }

      private keyUp(event: KeyboardEvent): void {
            if (Object.hasOwn(this.actions, event.key)) {
                  this.actions[event.key] = false
            }
      }
}
