import badge, { BadgeName, BadgeArgs, Options as ShieldsBadgeDataOptions } from 'shields-badge-data'
import { h } from 'snabbdom'
import { VNode } from 'snabbdom/vnode'

/**
 * The arguments to `shields-badge-data`.
 */
export type BadgeInput = [ BadgeName, BadgeArgs, ShieldsBadgeDataOptions]

export interface Options {
  /**
   * Whether the provided `img` is wrapped in an `a`.
   */
  a?: boolean
}

const defaultOptions: Options = {
  a: true
}

const makeA = (href: string, img: VNode): VNode => h('a', { attrs: { href } }, [img])

export default (badgeInput: BadgeInput, options?: Options): VNode => {
  options = { ...defaultOptions, ...options }

  const { title, image, link } = badge(badgeInput[0], badgeInput[1], badgeInput[2])

  const img = h('img', { attrs: { alt: title, src: image.href } })

  return options.a === true ? makeA(link.href, img) : img
}
