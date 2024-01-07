/**
 * @fileoverview Represents the experience data.
 * @author Samuel Svensson
 */

export class Experience {
      private readonly base: number
      private readonly exponent: number
      private level: number = 1
      private experience: number = 0
      private experienceToLevel: number

      constructor(base: number = 100, exponent: number = 1.1) {
            this.base = base
            this.exponent = exponent
            // Call this method last due it using members.
            this.experienceToLevel = this.calculateExperienceToLevel()
      }

      get(): number {
            return this.level
      }

      getRatio(): number {
            return this.experience / this.experienceToLevel
      }

      add(amount: number): void {
            this.experience += amount

            if (this.experience >= this.experienceToLevel) {
                  this.level++
                  this.experience = this.experience - this.experienceToLevel
                  this.calculateExperienceToLevel()
            }
      }

      private calculateExperienceToLevel(): number {
            return this.base * this.level ** this.exponent
      }
}
