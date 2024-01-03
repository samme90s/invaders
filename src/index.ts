/**
 * @fileoverview The main entry point of the application.
 * @author Samuel Svensson
 */

import './index.css'

import { ClipSpace } from './data/dimensions/ClipSpace'
import { Game } from './Game'

const canvas = document.querySelector('canvas')
if (!canvas) {
      throw new Error('canvas not found')
}

const clipSpace = new ClipSpace(window.innerWidth, window.innerHeight)
canvas.width = clipSpace.width
canvas.height = clipSpace.height

const ctx = canvas.getContext('2d')
if (!ctx) {
      throw new Error('context not found')
}

new Game(clipSpace, ctx).run()
